import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/config/site';
import ogImageDefault from '@/assets/images/hero/hero-illustration.jpg';

interface SEOProps {
  /** Route path starting with "/" (e.g. "/blog/my-post"), used to build the canonical + og:url. */
  path: string;
  title: string;
  description: string;
  /** "website" for standalone pages, "article" for blog posts. */
  type?: 'website' | 'article';
  image?: string;
  /** Alt text for the social-share image. */
  imageAlt?: string;
  /** ISO date the article was published (blog posts only). */
  publishedTime?: string;
  /** One or more JSON-LD structured data objects to embed for this page. */
  jsonLd?: object | object[];
}

export default function SEO({
  path,
  title,
  description,
  type = 'website',
  image,
  imageAlt,
  publishedTime,
  jsonLd,
}: SEOProps) {
  const url = `${siteConfig.url}${path === '/' ? '' : path}`;
  const resolvedImage = image ?? ogImageDefault;
  const absoluteImage = /^https?:\/\//.test(resolvedImage)
    ? resolvedImage
    : `${siteConfig.url}${resolvedImage}`;
  const jsonLdList = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:locale" content={siteConfig.locale.replace('-', '_')} />
      <meta property="og:site_name" content={siteConfig.name} />
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {publishedTime && <meta property="article:modified_time" content={publishedTime} />}
      {type === 'article' && <meta property="article:author" content={siteConfig.creator} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
      {imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}

      {jsonLdList.map((entry, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  );
}
