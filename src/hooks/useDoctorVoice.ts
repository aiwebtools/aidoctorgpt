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

export function useDoctorVoice(onTranscript: (text: string) => void) {
  const [isListening, setIsListening] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [supported, setSupported] = useState({ microphone: false, playback: false });
  const recognitionRef = useRef<Recognition | null>(null);
  const utterancesRef = useRef<SpeechSynthesisUtterance[]>([]);
  const transcriptRef = useRef(onTranscript);
  transcriptRef.current = onTranscript;

  useEffect(() => {
    const browser = window as VoiceWindow;
    setSupported({
      microphone: Boolean(browser.SpeechRecognition || browser.webkitSpeechRecognition),
      playback: 'speechSynthesis' in window,
    });
    return () => {
      recognitionRef.current?.abort();
      window.speechSynthesis?.cancel();
    };
  }, []);

  const stopSpeaking = useCallback(() => {
    window.speechSynthesis?.cancel();
    utterancesRef.current = [];
    setIsSpeaking(false);
  }, []);

  const speak = useCallback((text: string) => {
    if (!('speechSynthesis' in window)) {
      toast.error('Spoken replies are not available in this browser. You can still read the response.');
      return;
    }
    stopSpeaking();
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
  }, [stopSpeaking]);

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
    else if (!supported.playback) {
      toast.error('Spoken replies are not available in this browser.');
      return;
    }
    setVoiceEnabled((enabled) => !enabled);
  }, [voiceEnabled, supported.playback, stopSpeaking]);

  return { isListening, voiceEnabled, isSpeaking, supported, speak, stopSpeaking, stopListening, startListening, toggleVoice };
}