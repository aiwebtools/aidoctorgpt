import { useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

type RecognitionResult = { isFinal: boolean; 0: { transcript: string } };
type RecognitionEvent = { resultIndex: number; results: ArrayLike<RecognitionResult> };
type Recognition = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: RecognitionEvent) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
};
type VoiceWindow = Window & {
  SpeechRecognition?: new () => Recognition;
  webkitSpeechRecognition?: new () => Recognition;
};

const cleanForSpeech = (text: string) => text
  .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
  .replace(/[`*_#>]/g, '')
  .replace(/https?:\/\/\S+/g, 'link')
  .trim();

const VOICE_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/doctor-voice`;
let sharedContext: AudioContext | null = null;

// Must be called from a tap/click so phones allow audio playback later.
export const unlockAudio = () => {
  try {
    if (!sharedContext || sharedContext.state === 'closed') {
      const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      sharedContext = new Ctx({ sampleRate: 24000 });
    }
    if (sharedContext.state === 'suspended') void sharedContext.resume();
    // Play a silent buffer to fully unlock iOS.
    const buffer = sharedContext.createBuffer(1, 1, 24000);
    const source = sharedContext.createBufferSource();
    source.buffer = buffer;
    source.connect(sharedContext.destination);
    source.start();
  } catch {
    /* audio unavailable */
  }
  return sharedContext;
};

async function streamAiVoice(text: string, tool: string, signal: AbortSignal, onStart: () => void) {
  const context = sharedContext ?? unlockAudio();
  if (!context) throw new Error('Audio unavailable');
  if (context.state === 'suspended') await context.resume();
  const response = await fetch(VOICE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify({ text, tool }),
    signal,
  });
  if (!response.ok || !response.body) throw new Error(`Voice failed (${response.status})`);
  const sources = new Set<AudioBufferSourceNode>();
  signal.addEventListener('abort', () => sources.forEach((s) => { try { s.stop(); } catch { /* */ } }), { once: true });
  let playhead = 0;
  let pending = new Uint8Array(0);
  let completed = false;
  let started = false;
  let lastEnded: Promise<void> = Promise.resolve();
  const handle = (data: string) => {
    const payload = JSON.parse(data) as { type?: string; audio?: string; error?: unknown };
    if (payload.type === 'error' || payload.error) throw new Error('Voice failed');
    if (payload.type === 'speech.audio.done') { completed = true; return; }
    if (payload.type !== 'speech.audio.delta' || !payload.audio) return;
    const incoming = Uint8Array.from(atob(payload.audio), (c) => c.charCodeAt(0));
    const bytes = new Uint8Array(pending.length + incoming.length);
    bytes.set(pending); bytes.set(incoming, pending.length);
    const usable = bytes.length - (bytes.length % 2);
    const view = new DataView(bytes.buffer);
    const samples = new Float32Array(usable / 2);
    for (let i = 0; i < samples.length; i++) samples[i] = view.getInt16(i * 2, true) / 32768;
    pending = bytes.slice(usable);
    if (!samples.length) return;
    const buffer = context.createBuffer(1, samples.length, 24000);
    buffer.copyToChannel(samples, 0);
    const source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    sources.add(source);
    lastEnded = new Promise((resolve) => { source.onended = () => { sources.delete(source); resolve(); }; });
    playhead = Math.max(playhead, context.currentTime + 0.05);
    source.start(playhead);
    playhead += buffer.duration;
    if (!started) { started = true; onStart(); }
  };
  const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
  let buf = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buf += value;
    const events = buf.split(/\r?\n\r?\n/);
    buf = events.pop() ?? '';
    for (const raw of events) {
      const data = raw.split(/\r?\n/).filter((l) => l.startsWith('data:')).map((l) => l.slice(5).trim()).join('');
      if (data && data !== '[DONE]') handle(data);
    }
  }
  if (!completed || !started) throw new Error('Incomplete voice stream');
  await lastEnded;
}

export function useDoctorVoice(onTranscript: (text: string) => void, tool = 'doctor') {
  const [isListening, setIsListening] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [supported, setSupported] = useState({ microphone: false, playback: false });
  const recognitionRef = useRef<Recognition | null>(null);
  const utterancesRef = useRef<SpeechSynthesisUtterance[]>([]);
  const abortRef = useRef<AbortController | null>(null);
  const transcriptRef = useRef(onTranscript);
  transcriptRef.current = onTranscript;

  useEffect(() => {
    const browser = window as VoiceWindow;
    setSupported({
      microphone: Boolean(browser.SpeechRecognition || browser.webkitSpeechRecognition),
      playback: 'speechSynthesis' in window,
    });
    return () => {
      abortRef.current?.abort();
      recognitionRef.current?.abort();
      window.speechSynthesis?.cancel();
    };
  }, []);

  const stopSpeaking = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    window.speechSynthesis?.cancel();
    utterancesRef.current = [];
    setIsSpeaking(false);
  }, []);

  const speakWithBrowser = useCallback((text: string) => {
    if (!('speechSynthesis' in window)) {
      toast.error('Spoken replies are not available in this browser. You can still read the response.');
      return;
    }
    window.speechSynthesis.cancel();
    const clean = cleanForSpeech(text);
    const chunks = clean.match(/.{1,180}(?:[.!?]\s|$)|.{1,180}/g) ?? [];
    if (!chunks.length) return;
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find((v) => v.lang.startsWith('en') && v.localService) ?? voices.find((v) => v.lang.startsWith('en'));
    utterancesRef.current = chunks.map((chunk, index) => {
      const utterance = new SpeechSynthesisUtterance(chunk);
      utterance.lang = 'en-US';
      utterance.rate = 0.95;
      if (voice) utterance.voice = voice;
      utterance.onend = () => {
        if (index === chunks.length - 1) setIsSpeaking(false);
      };
      utterance.onerror = () => setIsSpeaking(false);
      return utterance;
    });
    setIsSpeaking(true);
    utterancesRef.current.forEach((utterance) => window.speechSynthesis.speak(utterance));
  }, []);

  const speak = useCallback((text: string) => {
    stopSpeaking();
    const clean = cleanForSpeech(text);
    if (!clean) return;
    const controller = new AbortController();
    abortRef.current = controller;
    setIsSpeaking(true);
    streamAiVoice(clean, tool, controller.signal, () => {})
      .then(() => {
        if (abortRef.current === controller) setIsSpeaking(false);
      })
      .catch(() => {
        if (controller.signal.aborted) return;
        // Fall back to the device voice if the AI voice is unavailable.
        speakWithBrowser(clean);
      });
  }, [stopSpeaking, speakWithBrowser, tool]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  const startListening = useCallback(() => {
    const browser = window as VoiceWindow;
    const RecognitionClass = browser.SpeechRecognition ?? browser.webkitSpeechRecognition;
    if (!RecognitionClass) {
      toast.error('This browser does not support voice input. Please type your question instead.');
      return;
    }
    stopSpeaking();
    unlockAudio();
    const recognition = new RecognitionClass();
    recognitionRef.current = recognition;
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onresult = (event) => {
      let text = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) text += event.results[i][0].transcript;
      }
      if (text.trim()) transcriptRef.current(text.trim());
    };
    recognition.onerror = (event) => {
      setIsListening(false);
      if (event.error !== 'no-speech' && event.error !== 'aborted') {
        toast.error(event.error === 'not-allowed' ? 'Allow microphone access to ask by voice.' : 'Voice input stopped. Please try again or type your question.');
      }
    };
    recognition.onend = () => {
      setIsListening(false);
      if (recognitionRef.current === recognition) recognitionRef.current = null;
    };
    try {
      recognition.start();
      setIsListening(true);
      setVoiceEnabled(true);
    } catch {
      setIsListening(false);
      toast.error('The microphone could not start. Please type your question instead.');
    }
  }, [stopSpeaking]);

  const toggleVoice = useCallback(() => {
    if (voiceEnabled) stopSpeaking();
    else unlockAudio();
    setVoiceEnabled((enabled) => !enabled);
  }, [voiceEnabled, stopSpeaking]);

  return { isListening, voiceEnabled, isSpeaking, supported, speak, stopSpeaking, stopListening, startListening, toggleVoice };
}