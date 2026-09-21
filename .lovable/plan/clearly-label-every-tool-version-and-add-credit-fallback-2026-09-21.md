# Clearly label every tool version and add credit fallback

## What will change
- Keep every existing healthcare tool destination and audit each button across desktop, mobile, homepage, and footer.
- Label the built-in Doctor GPT as **(INSITE version)**.
- Label every ChatGPT-hosted custom GPT as **(CHATGPT version)**.
- Label other hosted tools by their actual destination type, such as **(EXTERNAL WEB APP)**; no Gemini label will be added unless a Gemini URL exists.
- Add both Doctor GPT choices wherever appropriate so visitors can distinguish the built-in experience from the original Medicus ChatGPT tool.
- When the built-in Doctor GPT cannot respond because community AI credits are exhausted or access is paused, show a clear notice and a one-click **Medicus (CHATGPT version)** fallback instead of a generic failure.

## Technical details
- Centralize the original external tool URLs and reuse them for labels and fallback behavior, reducing the chance of links drifting or disappearing.
- Preserve safe new-tab behavior and the assigned click sounds for external destinations.
- Detect credit and workspace-limit responses from the Doctor GPT request, preserve the safe service message, stop loading, and reveal the fallback panel.
- Verify the desktop menu, mobile menu, footer, homepage actions, and Doctor GPT error state.
