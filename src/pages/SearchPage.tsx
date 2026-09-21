import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, SearchX } from 'lucide-react';
import Seo from '@/components/Seo';
import SearchBox from '@/components/SearchBox';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { POPULAR_SEARCHES, searchSite, suggestQueries } from '@/lib/searchIndex';

const SearchPage = () => {
  const [params] = useSearchParams();
  const query = params.get('q') ?? '';

  const results = useMemo(() => searchSite(query), [query]);
  const suggestions = useMemo(() => (results.length === 0 ? suggestQueries(query) : []), [query, results.length]);

  const title = query
    ? `Search results for “${query}” — Medicus AI Doctor GPT`
    : 'Search — Medicus AI Doctor GPT';

  return (
    <div className="min-h-screen bg-black text-white">
      <Seo
        title={title}
        description={
          query
            ? `Results for “${query}” across the Medicus health library and AI tool guides.`
            : 'Search the Medicus health library — AI tools, symptoms, lab results, remedies and medical guidance.'
        }
        path={query ? `/search?q=${encodeURIComponent(query)}` : '/search'}
        noindex
      />
      <Header />

      <main className="container mx-auto max-w-4xl px-4 pb-24 pt-32 sm:px-6">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm text-white hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Search Medicus</h1>
        <SearchBox initialQuery={query} autoFocus showSuggestions={false} />

        <div className="mt-10">
          {query && (
            <p className="mb-6 text-sm text-white">
              {results.length} {results.length === 1 ? 'result' : 'results'} for{' '}
              <span className="font-semibold">“{query}”</span>
            </p>
          )}

          {results.length > 0 && (
            <ul className="space-y-4">
              {results.map((result) => (
                <li
                  key={result.path}
                  className="rounded-2xl border border-white/15 bg-white/5 p-5 transition-colors hover:border-purple-400/50 hover:bg-white/10"
                >
                  <Link to={result.path} className="block">
                    <span className="mb-1 block text-xs uppercase tracking-wide text-purple-200">
                      {result.page.type === 'tool' ? 'AI Tool' : 'Health Guide'}
                    </span>
                    <span className="block text-lg font-bold text-white">{result.page.heading}</span>
                    <span className="mt-2 block text-sm text-white/90">{result.snippet}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {query && results.length === 0 && (
            <div className="rounded-2xl border border-white/15 bg-white/5 p-8 text-center">
              <SearchX className="mx-auto mb-3 h-8 w-8 text-white/70" />
              <h2 className="mb-2 text-xl font-bold text-white">No matches for “{query}”</h2>
              <p className="mb-5 text-sm text-white/90">
                Try a different wording, or ask the AI doctor directly — it answers anything the library does not cover.
              </p>
              {suggestions.length > 0 && (
                <p className="mb-5 text-sm text-white">
                  Did you mean:{' '}
                  {suggestions.map((suggestion, i) => (
                    <span key={suggestion}>
                      {i > 0 && ', '}
                      <Link className="underline" to={`/search?q=${encodeURIComponent(suggestion)}`}>
                        {suggestion}
                      </Link>
                    </span>
                  ))}
                </p>
              )}
              <Link
                to="/doctor-gpt"
                className="inline-block rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 font-semibold text-white"
              >
                Ask Doctor GPT (INSITE version)
              </Link>
            </div>
          )}

          {!query && (
            <div>
              <h2 className="mb-3 text-lg font-semibold text-white">Popular searches</h2>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCHES.map((term) => (
                  <Link
                    key={term}
                    to={`/search?q=${encodeURIComponent(term)}`}
                    className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/15"
                  >
                    {term}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchPage;
