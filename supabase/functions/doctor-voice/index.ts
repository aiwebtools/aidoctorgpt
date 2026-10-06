const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Doctor GPT: deep, low, British voice (modeled on the "Edward" sample).
// Other tools: positive, inspiring, clear voice (modeled on the "Dallin" sample).
const VOICES: Record<string, { voice: string; style: string }> = {
  doctor: {
    voice: "Charon",
    style: "Read this in a deep, low, smooth British (London) male voice — calm, confident, warm and reassuring, like a trusted private physician",
  },
  default: {
    voice: "Iapetus",
    style: "Read this in a positive, inspiring and clear male voice — friendly, upbeat and easy to understand",
  },
};

const MAX_CHARS = 2400;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Voice is not configured." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const body = await req.json().catch(() => null);
    const text = typeof body?.text === "string" ? body.text.trim() : "";
    const tool = typeof body?.tool === "string" ? body.tool : "doctor";
    if (!text) {
      return new Response(JSON.stringify({ error: "Text is required." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const clipped = text.length > MAX_CHARS ? `${text.slice(0, MAX_CHARS).replace(/\s+\S*$/, "")}…` : text;
    const { voice, style } = VOICES[tool] ?? VOICES.default;

    const upstream = await fetch("https://ai.gateway.lovable.dev/v1/audio/speech", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-3.1-flash-tts-preview",
        contents: [{ role: "user", parts: [{ text: `${style}:\n\n${clipped}` }] }],
        generationConfig: {
          responseModalities: ["AUDIO"],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voice } } },
        },
        stream_format: "sse",
      }),
    });

    return new Response(upstream.body, {
      status: upstream.status,
      headers: {
        ...corsHeaders,
        "Content-Type": upstream.headers.get("Content-Type") ?? "text/event-stream",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("doctor-voice error", error);
    return new Response(JSON.stringify({ error: (error as Error)?.message ?? "Unexpected error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
