# Project rules

## Blog posts

Posts live in `src/content/blog/<english-slug>.md` (the filename becomes the URL `/blog/<slug>`). Start from `src/content/blog-post-template.md`. Images go in `public/blog/<slug>/` and are referenced by relative path, e.g. `blog/<slug>/cover.png`.

### Frontmatter
- `title`, `date` (YYYY-MM-DD), `excerpt`, `coverImage` are required.
- `excerpt` doubles as the meta description: write ~120-160 characters, Hebrew, descriptive.
- `thumbnail` is optional: a smaller (~640px wide) copy of the cover used in the blog list. Falls back to the cover.

### Author
- Every post shows the same byline, defined once in `siteConfig.blogAuthor` (`src/config/site.ts`): name + title, with a divider line below. Never set the author per post.

### Images
- **Cover:** every cover is the same size - full width of the text column at 16:9. Upload 16:9 images (e.g. 1672x941) so nothing is cropped. Do not set per-post sizes.
- **Images inside the article:** always stretch to the full width of the text column. Add with `![descriptive Hebrew alt text](blog/<slug>/image.png)`. Look at the image and write alt text that matches what it actually shows.
- Keep images reasonably small in file size (covers ~2MB are too heavy; prefer compressed WebP/JPG).

### Layout
- Post header and body share one narrow column (`max-w-[690px]`, `px-5 sm:px-8`). Keep text from reaching the page edges.

### SEO (handled automatically - don't remove)
- Structured data (BlogPosting + BreadcrumbList), canonical URL, Open Graph/Twitter tags, `og:image:alt`, cover alt = post title, lazy-loaded inline images, "more posts" links at the bottom, prerendered HTML per post, `sitemap.xml` and `rss.xml` generated in `scripts/prerender.mjs`.
- Use one H1 (the title, rendered by the page); use `##`/`###` inside the post body.

## Local build
- Verify with `npm run build` (type-check + build + prerender) before committing blog changes.
