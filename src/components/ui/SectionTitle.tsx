import type { ReactNode } from 'react';

interface AccentProps {
  children: ReactNode;
  /** 'amber' para fundos escuros (graphite). */
  variant?: 'coral' | 'amber';
}

/** Palavra em itálico Fraunces colorida dentro do título — assinatura visual do site. */
export function Accent({ children, variant = 'coral' }: AccentProps) {
  return <span className={variant === 'amber' ? 'display-accent-amber' : 'display-accent'}>{children}</span>;
}

interface SectionTitleProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  /** Cor do texto; 'light' para fundos escuros. */
  tone?: 'ink' | 'light';
  className?: string;
}

/** Título de seção em Fraunces 600, tamanho padrão text-4xl sm:text-5xl. */
export default function SectionTitle({ children, as: Tag = 'h2', tone = 'ink', className = '' }: SectionTitleProps) {
  return (
    <Tag
      className={`display-heading text-4xl sm:text-5xl ${className}`}
      style={{ color: tone === 'light' ? '#F5EFE4' : 'var(--ink)' }}
    >
      {children}
    </Tag>
  );
}
