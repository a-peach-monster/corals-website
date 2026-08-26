import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-heading font-semibold ' +
  'transition-all duration-300 ease-out focus-visible:outline-none active:scale-[0.97]';

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-l from-accent-gold to-accent-terracotta text-white shadow-soft ' +
    'hover:shadow-glow hover:-translate-y-0.5',
  secondary:
    'bg-primary-dark text-white shadow-soft hover:bg-primary-dark/90 hover:-translate-y-0.5',
  ghost:
    'bg-white/70 text-primary-dark border-2 border-primary-dark/15 backdrop-blur ' +
    'hover:border-primary-dark/40 hover:bg-white',
};

const sizes: Record<Size, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...anchorProps
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <a className={classes} {...anchorProps}>
      {children}
    </a>
  );
}
