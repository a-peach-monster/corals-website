import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

interface LegalLayoutProps {
  title: string;
  updated?: string;
  children: ReactNode;
}

export default function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  return (
    <main className="bg-white pb-20 pt-32 sm:pt-40">
      <Container className="max-w-3xl px-5 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-dark transition-colors hover:text-primary-light"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
          חזרה לעמוד הבית
        </Link>

        <h1 className="mb-2 text-3xl font-extrabold text-ink sm:text-4xl">{title}</h1>
        {updated && (
          <p className="mb-10 text-sm text-ink-muted">עדכון אחרון: {updated}</p>
        )}

        <div className="prose-legal flex flex-col gap-5 text-base leading-relaxed text-ink-muted [&_h2]:mt-6 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_li]:mr-5 [&_li]:list-disc [&_strong]:text-ink">
          {children}
        </div>
      </Container>
    </main>
  );
}
