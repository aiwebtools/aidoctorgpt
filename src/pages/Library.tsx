import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import SearchBox from '@/components/SearchBox';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE_URL, TOOL_PAGES, TOPIC_PAGES, pagePath, type ContentPage } from '@/content/siteContent';

const CardList = ({ pages }: { pages: ContentPage[] }) => (
  <ul className="grid gap-4 sm:grid-cols-2">
    {pages.map((page) => (
      <li key={page.slug}>
        <Link
          to={pagePath(page)}
          className="block h-full rounded-2xl border border-white/15 bg-white/5 p-5 transition-colors hover:border-purple-400/50 hover:bg-white/10"
        >
          <span className="block text-lg font-bold text-white">{page.heading}</span>
          <span className="mt-2 block text-sm text-white/90">{page.summary}</span>
        </Link>
      </li>
    ))}
  </ul>
);

const Library = () => (
  <div className="min-h-screen bg-black text-white">
    <Seo
      title="Health Library & AI Tool Guides — Medicus Doctor GPT"
      description="Every Medicus AI health tool and health guide in one place: Doctor GPT, Dental GPT, PetCare GPT, Mental Wellness GPT, Apothecary GPT, symptom checking, lab results and home remedies."
      path="/library"
      keywords={['doctor gpt', 'health library', 'ai health tools', 'medical gpt', 'health gpt']}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Medicus Health Library',
          url: `${SITE_URL}/library`,
          description: 'AI health tools and health guides from Medicus, the personal AI Doctor GPT.',
        },
      ]}
    />
    <Header />

    <main className="container mx-auto max-w-4xl px-4 pb-24 pt-32 sm:px-6">
      <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Health Library & AI Tools</h1>
      <p className="mb-8 text-lg text-white/95">
        Every tool in the Personal Healthcare AI Tools Suite, plus plain-English guides to the questions people ask
        Medicus most. Search it all below.
      </p>

      <SearchBox />

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-bold text-white">AI Tools</h2>
        <CardList pages={TOOL_PAGES} />
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-bold text-white">Health Guides</h2>
        <CardList pages={TOPIC_PAGES} />
      </section>
    </main>

    <Footer />
  </div>
);

export default Library;
