// Helpers for calling the Lovable AI Gateway with run-id propagation.

const RUN_ID_HEADER = "X-Lovable-AIG-Run-ID";

export function getLovableAiGatewayRunId(req: Request): string | undefined {
  return req.headers.get(RUN_ID_HEADER) ?? undefined;
}

export function createLovableAiGatewayRunIdFetch(initialRunId?: string) {
  let runId = initialRunId;

  const wrapped: typeof fetch = async (input, init) => {
    const headers = new Headers(init?.headers);
    if (runId) headers.set(RUN_ID_HEADER, runId);
    const response = await fetch(input, { ...init, headers });
    const returned = response.headers.get(RUN_ID_HEADER);
    if (returned) runId = returned;
    return response;
  };

  return {
    fetch: wrapped,
    get runId() {
      return runId;
    },
  };
}

export function getLovableAiGatewayResponseHeaders(
  _unused?: unknown,
  extra: Record<string, string> = {},
): Record<string, string> {
  return { ...extra };
}

export function withLovableAiGatewayRunIdHeader(
  response: Response,
  runIdFetch: { runId?: string },
  extraHeaders: Record<string, string> = {},
): Response {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(extraHeaders)) {
    headers.set(key, value);
  }
  if (runIdFetch.runId) headers.set(RUN_ID_HEADER, runIdFetch.runId);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
