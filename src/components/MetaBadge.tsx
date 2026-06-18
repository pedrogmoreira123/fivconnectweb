/* ── Selo "API Oficial da Meta" ─────────────────────────────────────────
   Logo Meta (marca infinito, gradiente oficial azul) + texto.
   Usado na Hero, perto dos CTAs, para sinalizar que a integração com o
   WhatsApp é feita pela API oficial da Meta — e não por conexão não-oficial
   via QR Code (sujeita a banimento). É um diferencial de confiança. */

type MetaBadgeProps = {
  /** Estilo: 'solid' (cartão com borda) ou 'inline' (sem cartão). */
  variant?: 'solid' | 'inline';
  className?: string;
};

function MetaLogo({ size = 18 }: { size?: number }) {
  // Marca "infinito" da Meta. gradiente oficial azul (#0064E0 → #0082FB).
  return (
    <svg
      width={size}
      height={(size * 16) / 26}
      viewBox="0 0 26 16"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <defs>
        <linearGradient id="meta-grad" x1="0" y1="0" x2="26" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0082FB" />
          <stop offset="1" stopColor="#0064E0" />
        </linearGradient>
      </defs>
      <path
        d="M2.6 10.5c0 .92.2 1.62.47 2.05.35.55.86.79 1.39.79.68 0 1.3-.17 2.5-1.82.96-1.33 2.09-3.2 2.85-4.37l1.29-1.98c.9-1.38 1.94-2.92 3.13-3.96C15.2.34 16.25 0 17.31 0c1.78 0 3.47 1.03 4.77 2.96C23.5 5.08 24.1 7.74 24.1 10.5c0 1.64-.32 2.84-.88 3.79-.53.91-1.57 1.82-3.32 1.82v-2.62c1.5 0 1.87-1.38 1.87-2.95 0-2.24-.52-4.72-1.67-6.5-.82-1.26-1.88-2.03-3.04-2.03-1.26 0-2.27.95-3.41 2.64-.6.9-1.23 2-1.93 3.23l-.76 1.35c-1.54 2.73-1.93 3.35-2.7 4.38C6.92 15.31 5.78 16 4.45 16c-1.8 0-2.94-.78-3.64-1.95C.24 13.09 0 11.92 0 10.59l2.6-.09Z"
        fill="url(#meta-grad)"
      />
      <path
        d="M2.05 3.15C3.25 1.3 4.99 0 6.98 0c1.15 0 2.3.34 3.49 1.32 1.31 1.07 2.7 2.84 4.44 5.75l.62 1.04c1.5 2.51 2.36 3.8 2.86 4.41.64.78 1.09.99 1.67.99.7 0 1.31-.39 1.65-.96l2.21 1.68C23.74 15.31 22.6 16 21.16 16c-1.06 0-2-.23-3.04-1.21-.8-.75-1.73-2.09-2.45-3.29l-2.13-3.57c-1.07-1.79-2.05-3.12-2.62-3.73-.61-.66-1.4-1.45-2.65-1.45-1.02 0-1.88.71-2.6 1.8L2.05 3.15Z"
        fill="url(#meta-grad)"
        opacity="0.85"
      />
    </svg>
  );
}

export default function MetaBadge({ variant = 'solid', className = '' }: MetaBadgeProps) {
  if (variant === 'inline') {
    return (
      <span className={`inline-flex items-center gap-2 text-sm font-medium ${className}`} style={{ color: 'var(--ink-2)' }}>
        <MetaLogo size={16} />
        <span>
          <span className="font-semibold" style={{ color: 'var(--ink)' }}>WhatsApp Business Platform</span>
          <span style={{ color: 'var(--ink-3)' }}> · API Oficial</span>
        </span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full border px-3.5 py-2 ${className}`}
      style={{ background: 'var(--surface)', borderColor: 'var(--line-2)' }}
    >
      <MetaLogo size={18} />
      <span className="flex flex-col leading-none">
        <span className="text-[12.5px] font-semibold" style={{ color: 'var(--ink)' }}>
          WhatsApp Business Platform
        </span>
        <span className="text-[10.5px] font-medium mt-0.5" style={{ color: 'var(--ink-3)', letterSpacing: '0.02em' }}>
          Integração via <span style={{ color: '#0082FB' }}>API Oficial da Meta</span>
        </span>
      </span>
    </span>
  );
}
