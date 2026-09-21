import MiniSearch from 'minisearch';
import { ALL_PAGES, pageBodyText, pagePath, type ContentPage } from '@/content/siteContent';

export interface SearchDoc {
  id: string;
  title: string;
  heading: string;
  summary: string;
  keywords: string;
  body: string;
}

export interface SearchResultItem {
  page: ContentPage;
  path: string;
  snippet: string;
  score: number;
}

const docs: SearchDoc[] = ALL_PAGES.map((page) => ({
  id: pagePath(page),
  title: page.title,
  heading: page.heading,
  summary: page.summary,
  keywords: page.keywords.join(' '),
  body: pageBodyText(page),
}));

let index: MiniSearch<SearchDoc> | null = null;

const getIndex = () => {
  if (!index) {
    index = new MiniSearch<SearchDoc>({
      fields: ['title', 'heading', 'keywords', 'summary', 'body'],
      storeFields: ['id'],
      searchOptions: {
        boost: { title: 5, heading: 4, keywords: 4, summary: 2 },
        fuzzy: 0.2,
        prefix: true,
      },
    });
    index.addAll(docs);
  }
  return index;
};

const byPath = new Map(ALL_PAGES.map((page) => [pagePath(page), page]));

/** Pull a snippet of body text around the first matching term. */
const makeSnippet = (page: ContentPage, query: string) => {
  const text = `${page.intro} ${pageBodyText(page)}`.replace(/\s+/g, ' ').trim();
  const terms = query.toLowerCase().split(/\s+/).filter((term) => term.length > 2);
  const lower = text.toLowerCase();
  const hit = terms.map((term) => lower.indexOf(term)).filter((i) => i >= 0).sort((a, b) => a - b)[0];
  if (hit === undefined) return page.summary;
  const start = Math.max(0, hit - 90);
  const end = Math.min(text.length, hit + 190);
  return `${start > 0 ? '…' : ''}${text.slice(start, end).trim()}${end < text.length ? '…' : ''}`;
};

export const searchSite = (query: string): SearchResultItem[] => {
  const trimmed = query.trim();
  if (!trimmed) return [];
  const results = getIndex().search(trimmed);
  return results
    .map((result) => {
      const page = byPath.get(String(result.id));
      if (!page) return null;
      return {
        page,
        path: pagePath(page),
        snippet: makeSnippet(page, trimmed),
        score: result.score,
      } satisfies SearchResultItem;
    })
    .filter((item): item is SearchResultItem => item !== null);
};

export const suggestQueries = (query: string): string[] => {
  const trimmed = query.trim();
  if (!trimmed) return [];
  return getIndex()
    .autoSuggest(trimmed, { fuzzy: 0.2, prefix: true })
    .slice(0, 5)
    .map((suggestion) => suggestion.suggestion);
};

export const POPULAR_SEARCHES = [
  'doctor gpt',
  'symptom checker',
  'lab results',
  'toothache',
  'home remedies',
  'anxiety',
];
