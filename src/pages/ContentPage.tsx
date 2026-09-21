import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Seo from '@/components/Seo';
import SearchBox from '@/components/SearchBox';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  ALL_PAGES,
  SITE_URL,
  findPage,
  pagePath,
  type ContentPage as ContentPageData,
  type LaunchLink,
} from '@/content/siteContent';
import { openWithGeneralSound, openWithMedicusSound, playGeneralSound } from '@/components/layout/headerUtils';

const LaunchButton = ({ link }: { link: LaunchLink }) => {
  const isInternal = link.href.startsWith('/');
  const classes =
    'inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105';

  if (isInternal) {
    return (
      <Link to={link.href} onClick={() => playGeneralSound()} className={classes}>
        {link.label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={() => (link.medicusSound ? openWithMedicusSound(link.href) : openWithGeneralSound(link.href))}
      className={classes}
    >
      {link.label}
      <ExternalLink className="h-4 w-4" />
    </button>
  );
};

const ContentPageView = ({ page }: { page: ContentPageData }) => {
  const path = pagePath(page);
  const related = ALL_PAGES.filter((other) => other.slug !== page.slug).slice(0, 4);

  const jsonLd: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': page.type === 'tool' ? 'SoftwareApplication' : 'Article',
      name: page.heading,
      headline: page.heading,
      description: page.summary,
      url: `${SITE_URL}${path}`,
      ...(page.type === 'tool'
        ? { applicationCategory: 'HealthApplication', operatingSystem: 'Web Browser' }
        : { author: { '@type': 'Organization', name: 'AI Web Tools LLC' } }),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        {
          '@type': 'ListItem',
          position: 2,
          name: page.type === 'tool' ? 'AI Tools' : 'Health Library',
          item: `${SITE_URL}/library`,
        },
        { '@type': 'ListItem', position: 3, name: page.heading, item: `${SITE_URL}${path}` },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Seo title={page.title} description={page.summary} path={path} keywords={page.keywords} jsonLd={jsonLd} />
      <Header />

      <main className="container mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="px-2">/</span>
          <Link to="/library" className="hover:underline">
            {page.type === 'tool' ? 'AI Tools' : 'Health Library'}
          </Link>
        </nav>

        <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl">{page.heading}</h1>
        <p className="mb-8 text-lg text-white/95">{page.intro}</p>

        <div className="mb-10 flex flex-wrap gap-3">
          {page.links.map((link) => (
            <LaunchButton key={link.label} link={link} />
          ))}
        </div>

        <article className="space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-3 text-2xl font-bold text-white">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mb-3 text-white/95">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-3 space-y-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-white/95">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>

        <p className="mt-12 rounded-2xl border border-amber-400/40 bg-amber-950/30 p-5 text-sm text-white">
          <strong>Medical disclaimer:</strong> everything on this page and across these AI tools is for informational,
          educational and exploratory purposes only. It is not medical advice and does not replace a qualified health
          professional. In an emergency, contact your local emergency services immediately.
        </p>

        <section className="mt-14">
          <h2 className="mb-4 text-xl font-bold text-white">Search the health library</h2>
          <SearchBox />
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-xl font-bold text-white">Keep reading</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {related.map((other) => (
              <li key={other.slug}>
                <Link
                  to={pagePath(other)}
                  className="block h-full rounded-xl border border-white/15 bg-white/5 p-4 transition-colors hover:border-purple-400/50 hover:bg-white/10"
                >
                  <span className="block font-semibold text-white">{other.heading}</span>
                  <span className="mt-1 block text-sm text-white/85">{other.summary.slice(0, 100)}…</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <Link to="/" className="mt-12 inline-flex items-center gap-2 text-sm text-white hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
      </main>

      <Footer />
    </div>
  );
};

export const ToolPage = () => {
  const { slug } = useParams();
  const page = slug ? findPage('tool', slug) : undefined;
  if (!page) return <Navigate to="/404" replace />;
  return <ContentPageView page={page} />;
};

export const LearnPage = () => {
  const { slug } = useParams();
  const page = slug ? findPage('topic', slug) : undefined;
  if (!page) return <Navigate to="/404" replace />;
  return <ContentPageView page={page} />;
};

export default ContentPageView;
