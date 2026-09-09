// Post-build step: renders every static route to real HTML (via the SSR
// bundle in dist-ssr) and writes it as dist/<route>/index.html, so that a
// direct browser visit or Google's crawler gets full markup without running
// React. Also emits dist/sitemap.xml from the same route list.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(rootDir, 'dist');

const template = await readFile(join(distDir, 'index.html'), 'utf-8');

// Strip the placeholder head tags baked into index.html (title, description,
// og:*) - each route injects its own via SEO/react-helmet-async instead.
const strippedTemplate = template
  .replace(/\s*<title>.*?<\/title>/s, '')
  .replace(/\s*<meta\s+name="description"[^>]*>/g, '')
  .replace(/\s*<meta\s+property="og:[^>]*>/g, '');

const ssrEntryUrl = pathToFileURL(join(rootDir, 'dist-ssr', 'entry-server.js')).href;
const { render, getStaticRoutes, getAllPosts, siteConfig } = await import(ssrEntryUrl);

function outputPathFor(route) {
  if (route === '/') return join(distDir, 'index.html');
  return join(distDir, route.replace(/^\//, ''), 'index.html');
}

const routes = getStaticRoutes();

for (const route of routes) {
  const { appHtml, headHtml } = render(route);
  const html = strippedTemplate
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace('</head>', `${headHtml}\n  </head>`);

  const outPath = outputPathFor(route);
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, html, 'utf-8');
  console.log(`prerendered ${route} -> ${outPath.slice(rootDir.length + 1)}`);
}

// sitemap.xml
const posts = getAllPosts();
const today = new Date().toISOString().slice(0, 10);
const lastModFor = (route) => {
  const post = posts.find((p) => route === `/blog/${p.slug}`);
  return (post && post.date) || today;
};

const urlEntries = routes
  .map((route) => {
    const loc = `${siteConfig.url}${route === '/' ? '/' : route}`;
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastModFor(route)}</lastmod>\n  </url>`;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

await writeFile(join(distDir, 'sitemap.xml'), sitemap, 'utf-8');
console.log(`wrote sitemap.xml with ${routes.length} URLs`);
