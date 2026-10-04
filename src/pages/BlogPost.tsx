import { Link, Navigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SEO from '@/components/SEO';
import { siteConfig } from '@/config/site';
import { formatPostDate, getAllPosts, getPostBySlug, resolvePublicPath } from '@/lib/blog';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);
  const postUrl = `${siteConfig.url}/blog/${post.slug}`;
  const wordCount = post.content.split(/\s+/).filter(Boolean).length;

  return (
    <main className="bg-white">
      <SEO
        path={`/blog/${post.slug}`}
        title={`${post.title} | ${siteConfig.name}`}
        description={post.excerpt || post.title}
        type="article"
        image={post.coverImage ? resolvePublicPath(post.coverImage) : undefined}
        imageAlt={post.title}
        publishedTime={post.date || undefined}
        jsonLd={[{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date || undefined,
          dateModified: post.date || undefined,
          inLanguage: 'he',
          wordCount,
          image: post.coverImage ? [`${siteConfig.url}${resolvePublicPath(post.coverImage)}`] : undefined,
          author: {
            '@type': 'Person',
            name: siteConfig.creator,
            jobTitle: siteConfig.blogAuthor.title,
            url: siteConfig.url,
          },
          publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.url,
            logo: { '@type': 'ImageObject', url: `${siteConfig.url}/favicon.png` },
          },
          mainEntityOfPage: postUrl,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: siteConfig.name, item: siteConfig.url },
            { '@type': 'ListItem', position: 2, name: 'בלוג', item: `${siteConfig.url}/blog` },
            { '@type': 'ListItem', position: 3, name: post.title, item: postUrl },
          ],
        }]}
      />
      <div className="pb-8 pt-32 sm:pt-40">
        <Container className="max-w-[690px] px-5 sm:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-dark transition-colors hover:text-primary-light"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
            חזרה לבלוג
          </Link>
        </Container>
      </div>

      <Container className="max-w-[690px] px-5 pb-24 pt-10 sm:px-8">
        {post.coverImage && (
          <img
            src={resolvePublicPath(post.coverImage)}
            alt={post.title}
            fetchPriority="high"
            className="mb-8 aspect-[16/9] w-full rounded-xl3 object-cover shadow-card"
          />
        )}

        {post.date && (
          <p className="mb-2 text-sm font-semibold text-primary-dark">{formatPostDate(post.date)}</p>
        )}
        <h1 className="mb-6 text-3xl font-extrabold text-ink sm:text-4xl">{post.title}</h1>
        <div className="mb-8 flex flex-col gap-0.5 border-b border-primary-light/40 pb-6">
          <span className="text-base font-bold text-ink">{siteConfig.blogAuthor.name}</span>
          <span className="text-sm text-ink-muted">{siteConfig.blogAuthor.title}</span>
        </div>

        <div
          className="flex flex-col gap-5 text-base leading-relaxed text-ink-muted
          [&_h2]:mt-6 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink
          [&_h3]:mt-4 [&_h3]:font-heading [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-ink
          [&_a]:font-semibold [&_a]:text-primary-dark [&_a]:underline [&_a]:underline-offset-2
          [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5 [&_li]:mr-5 [&_li]:list-disc
          [&_ol]:flex [&_ol]:flex-col [&_ol]:gap-1.5 [&_ol_li]:mr-5 [&_ol_li]:list-decimal
          [&_strong]:font-bold [&_strong]:text-ink
          [&_img]:my-2 [&_img]:w-full [&_img]:rounded-xl2 [&_img]:shadow-card
          [&_blockquote]:border-r-4 [&_blockquote]:border-primary-light [&_blockquote]:pr-4 [&_blockquote]:italic"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              img: ({ src, alt }) => (
                <img
                  src={typeof src === 'string' ? resolvePublicPath(src) : src}
                  alt={alt ?? ''}
                  loading="lazy"
                  decoding="async"
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {relatedPosts.length > 0 && (
          <nav aria-label="מאמרים נוספים" className="mt-16 border-t border-primary-light/40 pt-8">
            <h2 className="mb-4 font-heading text-xl font-bold text-ink">עוד מאמרים בבלוג</h2>
            <ul className="flex flex-col gap-3">
              {relatedPosts.map((related) => (
                <li key={related.slug}>
                  <Link
                    to={`/blog/${related.slug}`}
                    className="font-semibold text-primary-dark underline underline-offset-2 hover:text-primary-light"
                  >
                    {related.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Container>
    </main>
  );
}
