import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import App from './App';
import { getAllPosts } from './lib/blog';

export { siteConfig } from './config/site';
export { getAllPosts } from './lib/blog';

/** Every route that should get a prerendered, crawlable static HTML file. */
export function getStaticRoutes(): string[] {
  return [
    '/',
    '/blog',
    '/terms',
    '/privacy',
    '/accessibility',
    ...getAllPosts().map((post) => `/blog/${post.slug}`),
  ];
}

export function render(url: string): { appHtml: string; headHtml: string } {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const appHtml = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>,
  );

  const { helmet } = helmetContext;
  const headHtml = helmet
    ? [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ].join('\n')
    : '';

  return { appHtml, headHtml };
}
