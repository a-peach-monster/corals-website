import { Link } from 'react-router-dom';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import SEO from '@/components/SEO';
import { siteConfig } from '@/config/site';
import { formatPostDate, getAllPosts, resolvePublicPath } from '@/lib/blog';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="bg-white pb-20 pt-32 sm:pt-40">
      <SEO
        path="/blog"
        title={`מאמרים וטיפים | הבלוג של ${siteConfig.name}`}
        description="מאמרים וטיפים פרקטיים להורים ואנשי חינוך על התפתחות רגשית-חברתית בגיל הרך: תפקודים ניהוליים, חוסן רגשי, ויסות עצמי ועוד."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: `הבלוג של ${siteConfig.name}`,
          url: `${siteConfig.url}/blog`,
          blogPost: posts.map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            url: `${siteConfig.url}/blog/${post.slug}`,
            datePublished: post.date || undefined,
            description: post.excerpt,
          })),
        }}
      />
      <Container className="flex flex-col gap-12 px-5 sm:px-6 lg:px-8">
        <SectionHeading level="h1" align="right" eyebrow="בלוג" title="מאמרים וטיפים" />

        {posts.length === 0 ? (
          <p className="text-ink-muted">בקרוב יעלו כאן פוסטים ראשונים.</p>
        ) : (
          <div className="flex flex-col gap-8">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delayMs={index * 60}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col sm:flex-row overflow-hidden rounded-xl3 bg-white shadow-card transition-shadow duration-300 hover:shadow-glow sm:h-64"
                >
                  <div className="aspect-[16/10] sm:aspect-auto w-full sm:w-2/5 md:w-1/3 sm:h-full overflow-hidden shrink-0">
                    <img
                      src={resolvePublicPath(post.coverImage)}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center gap-3 p-6 sm:p-8 text-right">
                    {post.date && (
                      <span className="text-xs font-semibold text-primary-dark">
                        {formatPostDate(post.date)}
                      </span>
                    )}
                    <h3 className="font-heading text-xl font-bold text-ink">{post.title}</h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-ink-muted">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </main>
  );
}
