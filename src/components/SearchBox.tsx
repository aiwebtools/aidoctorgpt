import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { searchSite } from '@/lib/searchIndex';
import { playGeneralSound } from '@/components/layout/headerUtils';

interface SearchBoxProps {
  initialQuery?: string;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
  /** Show the live dropdown of matches while typing. */
  showSuggestions?: boolean;
}

const SearchBox = ({
  initialQuery = '',
  placeholder = 'Search Medicus — symptoms, tools, remedies…',
  className = '',
  autoFocus = false,
  showSuggestions = true,
}: SearchBoxProps) => {
  const [query, setQuery] = useState(initialQuery);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => setQuery(initialQuery), [initialQuery]);

  useEffect(() => {
    const onClickAway = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClickAway);
    return () => document.removeEventListener('mousedown', onClickAway);
  }, []);

  const matches = useMemo(() => (query.trim().length > 1 ? searchSite(query).slice(0, 6) : []), [query]);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!query.trim()) return;
    playGeneralSound();
    setOpen(false);
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  const goTo = (path: string) => {
    playGeneralSound();
    setOpen(false);
    navigate(path);
  };

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <form onSubmit={submit} role="search" aria-label="Search this site">
        <label htmlFor="site-search" className="sr-only">
          Search Medicus
        </label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/70" />
          <input
            id="site-search"
            type="search"
            name="q"
            value={query}
            autoFocus={autoFocus}
            onChange={(event) => {
              setQuery(event.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            placeholder={placeholder}
            className="w-full rounded-full border border-white/20 bg-black/60 py-3 pl-12 pr-24 text-base text-white placeholder:text-white/60 outline-none backdrop-blur-md transition-colors focus:border-purple-400/70"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-[5.5rem] top-1/2 -translate-y-1/2 rounded-full p-1 text-white/70 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            type="submit"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Search
          </button>
        </div>
      </form>

      {showSuggestions && open && matches.length > 0 && (
        <ul className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border border-white/20 bg-black/95 shadow-2xl backdrop-blur-xl">
          {matches.map((match) => (
            <li key={match.path}>
              <button
                type="button"
                onClick={() => goTo(match.path)}
                className="block w-full border-b border-white/10 px-4 py-3 text-left transition-colors last:border-b-0 hover:bg-white/10"
              >
                <span className="block text-sm font-semibold text-white">{match.page.heading}</span>
                <span className="mt-0.5 block text-xs text-white/80">{match.page.summary.slice(0, 110)}…</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
