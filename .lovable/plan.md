# Google indexing and social sharing fix

## Changes
- Use the real published Lovable URL consistently for canonical, social, structured-data, sitemap, and robots references because `aidoctorgpt.com` is not currently reachable.
- Create a fresh 1200×630 Medicus social image under a new filename and point Facebook/X metadata to that exact public image URL.
- Keep the existing title and keyword-focused description, while correcting crawler-facing URLs.
- Publish the corrected version, then verify the public page and image responses.

## Google Search Console
- The project has no Google Search Console connection, so indexing status cannot currently be read or submitted from Lovable.
- After publishing, connect Google Search Console and submit `https://aidoctorgpt.lovable.app/sitemap.xml`; Google decides ranking and indexing timing.
