import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '@/types/content';
import Reveal from './Reveal';

interface AccordionProps {
  items: FaqItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const panelId = `${baseId}-panel-${item.id}`;
        const buttonId = `${baseId}-button-${item.id}`;

        return (
          <Reveal
            key={item.id}
            delayMs={index * 60}
            className="overflow-hidden rounded-2xl border border-border bg-white shadow-card"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right font-heading text-lg font-semibold text-ink transition-colors hover:bg-surface-sky/50"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-primary-dark transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 leading-relaxed text-ink-muted">{item.answer}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
