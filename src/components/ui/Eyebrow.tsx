import type { ReactNode } from 'react';

interface EyebrowProps {
  children: ReactNode;
  /** 'amber' para fundos escuros (graphite). */
  variant?: 'coral' | 'amber';
  className?: string;
}

/** Rótulo curto acima do título da seção (traço + uppercase). */
export default function Eyebrow({ children, variant = 'coral', className = '' }: EyebrowProps) {
  return (
    <span
      className={`eyebrow ${className}`}
      style={variant === 'amber' ? { color: 'var(--amber-c)' } : undefined}
    >
      {children}
    </span>
  );
}
