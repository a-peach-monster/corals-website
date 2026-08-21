import type { BlogPost } from '@/types/content';
import { parseFrontmatter } from './frontmatter';

/** Prefixes a public-folder-relative path (e.g. "blog/my-post/cover.jpg") with the deployed base path. */
export function resolvePublicPath(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}

const rawPosts = import.meta.glob('/src/content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const posts: BlogPost[] = Object.entries(rawPosts)
  .map(([path, raw]) => {
    const slug = path.split('/').pop()!.replace(/\.md$/, '');
    const { data, content } = parseFrontmatter(raw);

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? '',
      excerpt: data.excerpt ?? '',
      coverImage: data.coverImage ?? '',
      content,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

/** Formats a frontmatter date ("YYYY-MM-DD") for display as "DD.MM.YYYY". */
export function formatPostDate(date: string): string {
  const match = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return date;
  const [, year, month, day] = match;
  return `${day}.${month}.${year}`;
}
