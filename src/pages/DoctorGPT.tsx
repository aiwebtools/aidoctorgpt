import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, type UIMessage, type FileUIPart } from 'ai';
import { ArrowLeft, Stethoscope, Trash2, AlertTriangle, Paperclip, Mic, MicOff, Volume2, VolumeX, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDoctorVoice, unlockAudio } from '@/hooks/useDoctorVoice';
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import {
  Message,
  MessageContent,
  MessageResponse,
} from '@/components/ai-elements/message';
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputTools,
  PromptInputSubmit,
  PromptInputActionMenu,
  PromptInputActionMenuTrigger,
  PromptInputActionMenuContent,
  PromptInputActionAddAttachments,
  usePromptInputAttachments,
  type PromptInputMessage,
} from '@/components/ai-elements/prompt-input';
import { Shimmer } from '@/components/ai-elements/shimmer';
import { toast } from 'sonner';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { openWithGeneralSound, openWithMedicusSound } from '@/components/layout/headerUtils';
import { IN_SITE_TOOLS, type InSiteToolId } from '@/content/inSiteTools';


const isCommunityCreditError = (message: string) =>
  /\b(402|403)\b|credit|billing|payment|required|spending limit|usage limit|ai disabled|insufficient/i.test(
    message
  );


const UploadButton = () => {
  const attachments = usePromptInputAttachments();
  return (
    <Button type="button" variant="ghost" size="icon-sm" aria-label="Upload photos or documents" title="Upload photos or documents (PDF)" onClick={() => attachments.openFileDialog()}>
      <Paperclip />
    </Button>
  );
};

const AttachmentList = () => {
  const attachments = usePromptInputAttachments();
  if (!attachments.files.length) return null;
  return (
    <div className="flex w-full flex-wrap gap-2 px-3 pt-3">
      {attachments.files.map((file) => (
        <span key={file.id} className="inline-flex max-w-[12rem] items-center gap-2 rounded-md border border-border bg-secondary px-2 py-1 text-xs text-foreground">
          {file.mediaType?.startsWith('image/') ? (
            <img src={file.url} alt="" className="h-8 w-8 rounded object-cover" />
          ) : (
            <Paperclip className="h-3.5 w-3.5 shrink-0" />
          )}
          <span className="truncate">{file.filename ?? 'file'}</span>
          <button type="button" aria-label={`Remove ${file.filename ?? 'file'}`} onClick={() => attachments.remove(file.id)} className="shrink-0 font-bold">×</button>
        </span>
      ))}
    </div>
  );
};

const loadStoredMessages = (STORAGE_KEY: string): UIMessage[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? (parsed as UIMessage[]) : [];
  } catch {
    return [];
  }
};

const fileToDataUrl = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });

const DoctorGPT = ({ embedded = false, toolId = 'doctor' }: { embedded?: boolean; toolId?: InSiteToolId }) => {
  const tool = IN_SITE_TOOLS[toolId];
  const STORAGE_KEY = toolId === 'doctor' ? 'doctor-gpt-conversation-v1' : `${toolId}-gpt-conversation-v1`;
  const openExternal = () => (tool.medicusSound ? openWithMedicusSound(tool.externalUrl) : openWithGeneralSound(tool.externalUrl));
  const initialMessages = useMemo(() => loadStoredMessages(STORAGE_KEY), [STORAGE_KEY]);
  const [communityCreditsUnavailable, setCommunityCreditsUnavailable] = useState(false);
  const lastSpokenId = useRef(initialMessages.filter((message) => message.role === 'assistant').at(-1)?.id);

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/doctor-gpt`,
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: { tool: toolId },
      }),
    [toolId]
  );

  const { messages, sendMessage, status, stop, setMessages } = useChat({
    id: `${toolId}-gpt`,
    messages: initialMessages,
    transport,
    onError: (error) => {
      const message = error.message || 'Doctor GPT could not respond. Please try again.';
      if (isCommunityCreditError(message)) {
        setCommunityCreditsUnavailable(true);
        toast.error(`Community AI credits are unavailable. ${tool.externalLabel} is ready to use.`);
        return;
      }
      toast.error(message);
    },
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      try {
        const slim = messages.map((m) => ({
          ...m,
          parts: m.parts.filter((p) => p.type === 'text'),
        }));
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(slim));
      } catch {
        /* storage unavailable */
      }
    }
  }, [messages, STORAGE_KEY]);

  const focusInput = useCallback(() => {
    requestAnimationFrame(() => {
      const el = document.querySelector<HTMLTextAreaElement>(
        'form textarea'
      );
      el?.focus();
    });
  }, []);

  useEffect(() => {
    if (!embedded) focusInput();
  }, [focusInput, embedded]);

  useEffect(() => {
    if (status === 'ready' && !embedded) focusInput();
  }, [status, focusInput, embedded]);

  const isBusy = status === 'submitted' || status === 'streaming';
  const sendRef = useRef<(text: string) => void>(() => {});
  const voice = useDoctorVoice((text) => {
    if (!isBusy) void sendRef.current(text);
    else toast.error('Please wait for the current reply before speaking again.');
  }, toolId);

  useEffect(() => {
    if (status !== 'ready') return;
    const latest = messages.filter((message) => message.role === 'assistant').at(-1);
    if (!latest || latest.id === lastSpokenId.current) return;
    lastSpokenId.current = latest.id;
    if (voice.voiceEnabled) {
      const text = latest.parts.filter((part) => part.type === 'text').map((part) => part.text).join(' ');
      if (text) voice.speak(text);
    }
  }, [status, messages, voice.voiceEnabled, voice.speak]);

  const send = useCallback(
    async (text: string, files: FileUIPart[] = []) => {
      setCommunityCreditsUnavailable(false);
      voice.stopSpeaking();
      if (voice.voiceEnabled) unlockAudio();
      const attachments: FileUIPart[] = [];
      for (const file of files) {
        if (file.url.startsWith('data:')) {
          attachments.push(file);
          continue;
        }
        try {
          const blob = await fetch(file.url).then((r) => r.blob());
          const dataUrl = await fileToDataUrl(
            new File([blob], file.filename ?? 'upload', { type: file.mediaType })
          );
          attachments.push({ ...file, url: dataUrl });
        } catch {
          toast.error(`Could not attach ${file.filename ?? 'image'}`);
        }
      }
      await sendMessage({ text, files: attachments });
      focusInput();
    },
    [sendMessage, focusInput, voice.stopSpeaking, voice.voiceEnabled]
  );
  sendRef.current = (text) => { void send(text); };

  const handleSubmit = useCallback(
    (message: PromptInputMessage) => {
      const text = message.text?.trim() ?? '';
      if (!text && message.files.length === 0) return;
      if (isBusy) return;
      void send(text || 'Please analyze the attached file(s) and tell me what you see.', message.files);
    },
    [isBusy, send]
  );

  const clearConversation = useCallback(() => {
    voice.stopListening();
    voice.stopSpeaking();
    lastSpokenId.current = undefined;
    setMessages([]);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    focusInput();
  }, [setMessages, focusInput, voice.stopListening, voice.stopSpeaking, STORAGE_KEY]);

  return (
    <div className={embedded ? 'flex h-[min(720px,80dvh)] min-h-[430px] flex-col overflow-hidden rounded-lg border border-border bg-background text-foreground shadow-xl' : 'flex min-h-dvh flex-col bg-background text-foreground'}>
      <header className="border-b border-border bg-secondary/60">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-3">
          {!embedded ? <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </Link> : <span className="text-xs font-semibold text-accent">INSITE version</span>}
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <Stethoscope className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="font-bold text-foreground text-sm sm:text-base">{tool.name}</span>
          </div>
          <div className="flex items-center gap-1">
          <Button type="button" variant="ghost" size="sm" onClick={openExternal} className="hidden sm:inline-flex text-xs">
            {tool.externalLabel}
          </Button>
          <Button
            type="button"
            onClick={clearConversation}
            variant="ghost"
            size="icon"
            title="New consultation"
            aria-label="New consultation"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          </div>
        </div>
      </header>

      <div className="border-b border-destructive/30 bg-destructive/10">
        <div className="container mx-auto px-4 py-2 flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 text-destructive-foreground mt-0.5 shrink-0" />
          <p className="text-xs text-foreground">
            Educational information only — not a substitute for a licensed clinician.
            <strong> In an emergency, call local emergency services immediately.</strong>
          </p>
        </div>
      </div>

      <main className="flex-1 min-h-0 container mx-auto px-3 sm:px-4 py-3 flex flex-col max-w-3xl w-full">
        <Conversation className="flex-1 min-h-0">
          <ConversationContent className="space-y-4">
            {messages.length === 0 ? (
              <div className="py-10 text-center">
                <span className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                  <Stethoscope className="h-7 w-7 text-white" />
                </span>
                <h1 className="text-2xl font-bold text-white mb-2">
                  {tool.greeting}
                </h1>
                <p className="text-white/80 max-w-lg mx-auto mb-6">
                  {tool.intro}
                </p>
                <div className="grid gap-2 sm:grid-cols-2 max-w-xl mx-auto">
                  {tool.suggestions.map((suggestion) => (
                    <Button
                      key={suggestion}
                      type="button"
                      onClick={() => void send(suggestion)}
                      variant="outline"
                      className="h-auto min-h-12 whitespace-normal justify-start text-left px-4 py-3"
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <Message key={message.id} from={message.role}>
                  <MessageContent>
                    {message.parts.map((part, index) => {
                      if (part.type === 'text') {
                        return (
                          <MessageResponse key={index}>{part.text}</MessageResponse>
                        );
                      }
                      if (part.type === 'tool-generate_image') {
                        const output = (part as { state?: string; output?: { image?: string; prompt?: string }; errorText?: string });
                        if (output.state === 'output-available' && output.output?.image) {
                          return (
                            <a key={index} href={output.output.image} download="medicus-image.png" className="block">
                              <img
                                src={output.output.image}
                                alt={output.output.prompt ?? 'Generated image'}
                                className="w-full max-w-md rounded-lg border border-border"
                              />
                            </a>
                          );
                        }
                        if (output.state === 'output-error') {
                          return <p key={index} className="text-sm text-destructive-foreground">The image could not be created: {output.errorText}</p>;
                        }
                        return <Shimmer key={index}>Creating image...</Shimmer>;
                      }
                      if (part.type === 'file' && part.mediaType?.startsWith('image/')) {
                        return (
                          <img
                            key={index}
                            src={part.url}
                            alt={part.filename ?? 'Uploaded image'}
                            className="max-h-64 rounded-lg border border-white/10"
                          />
                        );
                      }
                      if (part.type === 'file') {
                        return (
                          <span
                            key={index}
                            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-xs text-white"
                          >
                            <Paperclip className="h-3.5 w-3.5" />
                            {part.filename ?? 'Attached file'}
                          </span>
                        );
                      }
                      return null;
                    })}
                  </MessageContent>
                </Message>
              ))
            )}
            {status === 'submitted' && (
              <Message from="assistant">
                <MessageContent>
                  <Shimmer>{`${tool.name} is thinking...`}</Shimmer>
                </MessageContent>
              </Message>
            )}
            {communityCreditsUnavailable && (
              <div className="rounded-lg border border-amber-400/40 bg-amber-950/40 p-5 text-center">
                <AlertTriangle className="mx-auto mb-2 h-6 w-6 text-amber-300" />
                <h2 className="mb-2 text-lg font-bold text-white">Community credits have run out for today</h2>
                <p className="mb-4 text-sm text-white">
                  Sorry, the in-site version is temporarily unavailable. Please continue with the original version.
                </p>
                <AnimatedButton
                  variant="primary"
                  size="lg"
                  onClick={openExternal}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none"
                >
                  Open {tool.externalLabel}
                </AnimatedButton>
              </div>
            )}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>

        <div className="pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shrink-0">
          <PromptInput
            onSubmit={handleSubmit}
            accept="image/*,application/pdf"
            multiple
            maxFiles={6}
            maxFileSize={20 * 1024 * 1024}
            onError={(err) => toast.error(err.message)}
          >
            <AttachmentList />
            <PromptInputTextarea placeholder={tool.placeholder} />
            <PromptInputFooter>
              <PromptInputTools>
                <PromptInputActionMenu>
                  <PromptInputActionMenuTrigger />
                  <PromptInputActionMenuContent>
                    <PromptInputActionAddAttachments label="Add photos or documents (PDF)" />
                  </PromptInputActionMenuContent>
                </PromptInputActionMenu>
                <UploadButton />
                <Button type="button" variant={voice.isListening ? 'default' : 'ghost'} size="icon-sm" aria-label={voice.isListening ? 'Stop microphone' : 'Ask by voice'} title={voice.isListening ? 'Stop microphone' : 'Ask by voice'} onClick={voice.isListening ? voice.stopListening : voice.startListening}>
                  {voice.isListening ? <MicOff /> : <Mic />}
                </Button>
                <Button type="button" variant={voice.voiceEnabled ? 'secondary' : 'ghost'} size="icon-sm" aria-label={voice.voiceEnabled ? 'Turn off spoken replies' : 'Turn on spoken replies'} title={voice.voiceEnabled ? 'Turn off spoken replies' : 'Turn on spoken replies'} onClick={voice.toggleVoice}>
                  {voice.voiceEnabled ? <Volume2 /> : <VolumeX />}
                </Button>
                {voice.isSpeaking && <Button type="button" variant="ghost" size="icon-sm" aria-label="Stop speaking" title="Stop speaking" onClick={voice.stopSpeaking}><Square /></Button>}
              </PromptInputTools>
              <PromptInputSubmit status={status} onStop={stop} />
            </PromptInputFooter>
          </PromptInput>
        </div>
      </main>
    </div>
  );
};

export default DoctorGPT;
