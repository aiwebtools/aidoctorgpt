import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, type UIMessage, type FileUIPart } from 'ai';
import { ArrowLeft, Stethoscope, Trash2, AlertTriangle } from 'lucide-react';
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
  type PromptInputMessage,
} from '@/components/ai-elements/prompt-input';
import { Shimmer } from '@/components/ai-elements/shimmer';
import { toast } from 'sonner';

const STORAGE_KEY = 'doctor-gpt-conversation-v1';

const SUGGESTIONS = [
  "I've had a sore throat and fever for 3 days",
  'What can I do for a persistent tension headache?',
  'Natural and pharmaceutical options for acid reflux',
  'Can you look at this rash? (attach a photo)',
];

const loadStoredMessages = (): UIMessage[] => {
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

const DoctorGPT = () => {
  const initialMessages = useMemo(loadStoredMessages, []);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/doctor-gpt`,
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
      }),
    []
  );

  const { messages, sendMessage, status, stop, setMessages } = useChat({
    id: 'doctor-gpt',
    messages: initialMessages,
    transport,
    onError: (error) => {
      toast.error(error.message || 'Doctor GPT could not respond. Please try again.');
    },
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      /* storage full or unavailable */
    }
  }, [messages]);

  const focusInput = useCallback(() => {
    requestAnimationFrame(() => textareaRef.current?.focus());
  }, []);

  useEffect(() => {
    focusInput();
  }, [focusInput]);

  useEffect(() => {
    if (status === 'ready') focusInput();
  }, [status, focusInput]);

  const isBusy = status === 'submitted' || status === 'streaming';

  const send = useCallback(
    async (text: string, files: FileUIPart[] = []) => {
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
    [sendMessage, focusInput]
  );

  const handleSubmit = useCallback(
    (message: PromptInputMessage) => {
      const text = message.text?.trim() ?? '';
      if (!text && message.files.length === 0) return;
      if (isBusy) return;
      void send(text || 'Please review the attached image.', message.files);
    },
    [isBusy, send]
  );

  const clearConversation = useCallback(() => {
    setMessages([]);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    focusInput();
  }, [setMessages, focusInput]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </Link>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
              <Stethoscope className="h-4 w-4 text-white" />
            </span>
            <span className="font-bold tracking-tight text-white">DOCTOR GPT</span>
          </div>
          <button
            type="button"
            onClick={clearConversation}
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
          >
            <Trash2 className="h-4 w-4" />
            <span className="hidden sm:inline">New consultation</span>
          </button>
        </div>
      </header>

      <div className="border-b border-red-500/30 bg-red-950/30">
        <div className="container mx-auto px-4 py-2 flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
          <p className="text-xs text-white/90">
            Educational information only — not a substitute for a licensed clinician.
            <strong className="text-red-300"> In an emergency, call 911 immediately.</strong>
          </p>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-4 flex flex-col max-w-3xl w-full">
        <Conversation className="flex-1">
          <ConversationContent className="space-y-4">
            {messages.length === 0 ? (
              <div className="py-10 text-center">
                <span className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                  <Stethoscope className="h-7 w-7 text-white" />
                </span>
                <h1 className="text-2xl font-bold text-white mb-2">
                  I am DOCTOR GPT. How can I assist you today?
                </h1>
                <p className="text-white/80 max-w-lg mx-auto mb-6">
                  Describe your symptoms — include your age, sex, height, weight, and any
                  pre-existing conditions. You can also attach a photo of an injury or rash.
                </p>
                <div className="grid gap-2 sm:grid-cols-2 max-w-xl mx-auto">
                  {SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => void send(suggestion)}
                      className="rounded-xl border border-purple-500/30 bg-black/30 px-4 py-3 text-left text-sm text-white hover:border-purple-500/60 hover:bg-black/50 transition-colors"
                    >
                      {suggestion}
                    </button>
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
                      return null;
                    })}
                  </MessageContent>
                </Message>
              ))
            )}
            {status === 'submitted' && (
              <Message from="assistant">
                <MessageContent>
                  <Shimmer>Doctor GPT is reviewing your case...</Shimmer>
                </MessageContent>
              </Message>
            )}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>

        <div className="pt-3 pb-6">
          <PromptInput
            onSubmit={handleSubmit}
            accept="image/*"
            multiple
            maxFiles={4}
            maxFileSize={10 * 1024 * 1024}
            onError={(err) => toast.error(err.message)}
          >
            <PromptInputAttachments>
              {(attachment) => <PromptInputAttachment data={attachment} />}
            </PromptInputAttachments>
            <PromptInputTextarea
              ref={textareaRef}
              placeholder="Describe your symptoms, age, sex, and medical history..."
            />
            <PromptInputFooter>
              <PromptInputTools>
                <PromptInputActionMenu>
                  <PromptInputActionMenuTrigger />
                  <PromptInputActionMenuContent>
                    <PromptInputActionAddAttachments label="Add a photo" />
                  </PromptInputActionMenuContent>
                </PromptInputActionMenu>
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
