import type { ReactNode } from 'react';

type SectionTone = 'cream' | 'cream-2' | 'graphite' | 'surface';

const toneBackground: Record<SectionTone, string> = {
  cream: 'var(--cream)',
  'cream-2': 'var(--cream-2)',
  graphite: 'var(--graphite)',
  surface: 'var(--surface)',
};

interface SectionProps {
  children: ReactNode;
  id?: string;
  tone?: SectionTone;
  /** Reduz o ritmo vertical (py-20/24 em vez de py-28/32). */
  compact?: boolean;
  className?: string;
}

/** Bloco de seção com o ritmo vertical padrão do site. */
export default function Section({ children, id, tone = 'cream', compact = false, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`${compact ? 'py-20 sm:py-24' : 'py-28 sm:py-32'} ${className}`}
      style={{ background: toneBackground[tone] }}
    >
      {children}
    </section>
  );
}
