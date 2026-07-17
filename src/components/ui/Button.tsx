import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  /** Tamanho compacto para headers/cards. */
  size?: 'md' | 'sm';
}

const base = 'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all';

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'text-white hover:opacity-90 hover:-translate-y-0.5 shadow-lg',
  secondary: 'border hover:opacity-80',
  ghost: 'hover:opacity-70',
};

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: { background: 'var(--coral)', boxShadow: '0 8px 24px rgba(255,122,89,0.3)' },
  secondary: { borderColor: 'var(--line-2)', color: 'var(--ink)' },
  ghost: { color: 'var(--ink-2)' },
};

/**
 * CTA padrão do site (âncora estilizada — todos os CTAs navegam).
 * primary: coral com sombra · secondary: contorno · ghost: texto.
 */
export default function Button({ children, variant = 'primary', size = 'md', className = '', style, ...rest }: ButtonProps) {
  const sizing = size === 'sm' ? 'px-4 py-2 text-sm' : 'px-6 py-3.5 text-base';
  return (
    <a
      className={`${base} ${sizing} ${variantClasses[variant]} ${className}`}
      style={{ ...variantStyles[variant], ...style }}
      {...rest}
    >
      {children}
    </a>
  );
}
