import { Helmet } from 'react-helmet-async';

export type BreadcrumbItem = {
  name: string;
  /** Path relative to site root, e.g. "/project/ecommerce" */
  path: string;
};

const SITE_URL = 'https://medamine-portfolio.lovable.app';

const toAbsolute = (path: string) => {
  if (!path) return SITE_URL + '/';
  if (/^https?:\/\//i.test(path)) return path;
  return SITE_URL + (path.startsWith('/') ? path : `/${path}`);
};

/**
 * Build a schema.org BreadcrumbList JSON-LD object.
 * Order the items from root ("Home") down to the current page.
 */
export const buildBreadcrumbJsonLd = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: toAbsolute(item.path),
  })),
});

type BreadcrumbJsonLdProps = {
  items: BreadcrumbItem[];
};

/**
 * Drop-in Helmet block that emits BreadcrumbList JSON-LD.
 * Pass the same trail you'd render in a visible breadcrumb UI.
 */
const BreadcrumbJsonLd = ({ items }: BreadcrumbJsonLdProps) => {
  if (!items?.length) return null;
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(buildBreadcrumbJsonLd(items))}
      </script>
    </Helmet>
  );
};

export default BreadcrumbJsonLd;
