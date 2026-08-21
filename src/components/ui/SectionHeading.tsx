import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'right';
  children?: ReactNode;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  children,
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-right items-end';

  return (
    <Reveal className={`flex flex-col gap-4 ${alignment} max-w-3xl ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-light/15 px-4 py-1.5 text-sm font-semibold text-primary-dark">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-lg leading-relaxed text-ink-muted">{description}</p>
      )}
      {children}
    </Reveal>
  );
}
