import type { ReactNode } from 'react';

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
}

/** Card de funcionalidade: ícone em pastilha coral-soft + título + descrição curta. */
export default function FeatureCard({ icon, title, children, className = '' }: FeatureCardProps) {
  return (
    <div
      className={`rounded-2xl p-6 border transition-colors ${className}`}
      style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}
    >
      {icon && (
        <span
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
          style={{ background: 'var(--coral-soft)', color: 'var(--coral)' }}
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
      <h4 className="text-[15px] font-bold mb-1.5" style={{ color: 'var(--ink)' }}>{title}</h4>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-2)' }}>{children}</p>
    </div>
  );
}
