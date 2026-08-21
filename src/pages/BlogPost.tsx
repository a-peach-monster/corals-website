import { Link, Navigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import { formatPostDate, getPostBySlug, resolvePublicPath } from '@/lib/blog';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <main className="bg-white">
      <div className="pb-8 pt-32 sm:pt-40">
        <Container className="max-w-3xl px-5 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-dark transition-colors hover:text-primary-light"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
            חזרה לבלוג
          </Link>
        </Container>
      </div>

      <Container className="max-w-3xl px-5 pb-24 pt-10 sm:px-6 lg:px-8">
        {post.coverImage && (
          <img
            src={resolvePublicPath(post.coverImage)}
            alt=""
            className="mb-8 aspect-[16/9] w-full rounded-xl3 object-cover shadow-card"
          />
        )}

        {post.date && (
          <p className="mb-2 text-sm font-semibold text-primary-dark">{formatPostDate(post.date)}</p>
        )}
        <h1 className="mb-8 text-3xl font-extrabold text-ink sm:text-4xl">{post.title}</h1>

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
                <img src={typeof src === 'string' ? resolvePublicPath(src) : src} alt={alt ?? ''} />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </Container>
    </main>
  );
}
