import { Helmet } from 'react-helmet-async';

export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * Build a schema.org FAQPage JSON-LD object from a list of FAQs.
 * Keep this as the single source of truth so on-page content and
 * structured data stay in sync.
 */
export const buildFaqJsonLd = (faqs: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer,
    },
  })),
});

type FaqJsonLdProps = {
  faqs: FaqItem[];
};

/**
 * Drop-in Helmet block that emits FAQPage JSON-LD.
 * Pass the exact same `faqs` array you render on the page.
 */
const FaqJsonLd = ({ faqs }: FaqJsonLdProps) => {
  if (!faqs?.length) return null;
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(buildFaqJsonLd(faqs))}
      </script>
    </Helmet>
  );
};

export default FaqJsonLd;
