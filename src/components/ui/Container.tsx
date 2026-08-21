import type { ElementType, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export default function Container({ children, className = '', as: Tag = 'div' }: ContainerProps) {
  return <Tag className={`container mx-auto max-w-7xl ${className}`}>{children}</Tag>;
}
