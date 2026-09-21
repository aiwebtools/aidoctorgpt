# Real search on Medicus + Google indexing

Right now the whole site is one page with no real content for Google to index and no search. Two things fix that together: a set of real pages worth indexing, and a working search box that searches them.

## 1. A library of real pages

Every AI tool and every common health topic gets its own page with its own title, description and written content. Search engines index pages, not buttons — five buttons on one homepage give Google almost nothing for "Doctor GPT".

Tool pages (one each, with the existing launch buttons and version labels kept intact):
- Medicus — the AI Doctor GPT
- Dental GPT
- PetCare / Veterinarian GPT
- Mental Wellness GPT
- Apothecary GPT

Health topic pages (each answering what people actually type into Google, each linking into Medicus):
- What is Doctor GPT?
- Free AI symptom checker
- AI medical advice online
- Can AI replace a doctor?
- How to read your lab results
- Home remedies and at-home medication basics

Each page carries the medical disclaimer and the existing look and feel.

## 2. A real search engine on the site

- A search box in the header and on the homepage.
- A `/search` results page with its own web address per query, so results can be linked and shared.
- Searches the full text of every page above — title, summary and body — with typo tolerance, ranked results, highlighted matching text and "no results" suggestions.
- Runs instantly in the browser from a search index built at build time; no waiting, no backend cost.

## 3. Making Google actually see it

- Every page gets its own title, description, own address tag and social tags (per-page head support added).
- Sitemap rebuilt automatically at every build listing all tool and topic pages.
- `robots.txt` kept open, sitemap declared.
- Site-wide structured data telling Google the site has a search box (this is what enables a search box under the listing in Google results).
- Article and breadcrumb structured data on topic pages.

## Honest limitation

This app renders in the browser. Google runs JavaScript and will index these pages fine, but Facebook/LinkedIn link previews only read the raw page and will keep showing the homepage preview for every page. Full server rendering would fix that — the app can get it by upgrading to Lovable's latest template ([what the upgrade gives you](https://lovable.dev/blog/building-apps-using-tanstack-start)); say the word and I'll do it.

## Technical notes

- `react-helmet-async` for per-route head; remove the static canonical from `index.html`, keep sitewide `og:*` as fallback.
- Content stored as typed records in `src/content/` (tools + topics), so one source feeds routes, search index and sitemap.
- Search: `minisearch` (small, fuzzy, field-boosted) over the content records, built on first load of `/search`.
- Routes: `/tools/:slug`, `/learn/:slug`, `/search`. Existing `/` and `/doctor-gpt` unchanged.
- `scripts/generate-sitemap.ts` wired to `predev`/`prebuild`, reading the same content records; no `lastmod` invented.
- Add `WebSite` + `SearchAction` JSON-LD in `index.html`; `Article` + `BreadcrumbList` per topic page.
- Google Search Console: after you publish, I connect it and submit the sitemap.
