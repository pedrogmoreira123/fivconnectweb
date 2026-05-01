import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const plans = [
  {
    id: 'free',
    name: 'Gratuito',
    iconColor: '#2F9E6E',
    cardStyle: 'default' as const,
    topBadge: '7 DIAS GRÁTIS',
    description: '7 dias de avaliação gratuita. Após o período, upgrade obrigatório.',
    monthlyPrice: null as number | null,
    annualPrice: null as number | null,
    cta: 'Começar grátis',
    limits: ['3 usuários', '1 fila', '1 canal WhatsApp'],
    features: ['Dashboard', 'Atendimentos', 'Clientes', 'Conversas', 'Relatórios'],
  },
  {
    id: 'basic',
    name: 'Básico',
    iconColor: '#3B82F6',
    cardStyle: 'default' as const,
    description: 'Para pequenas equipes que estão começando.',
    monthlyPrice: 199 as number | null,
    annualPrice: 159 as number | null,
    cta: 'Testar 7 dias grátis',
    limits: ['15 usuários', '5 filas', '1 canal WhatsApp'],
    features: ['Dashboard', 'Atendimentos', 'Clientes', 'Conversas', 'Relatórios', 'ChatBot (Fluxo)'],
  },
  {
    id: 'pro',
    name: 'Pro',
    iconColor: '#fff',
    cardStyle: 'popular' as const,
    description: 'Para equipes em crescimento que precisam de mais controle.',
    monthlyPrice: 299 as number | null,
    annualPrice: 239 as number | null,
    cta: 'Testar 7 dias grátis',
    limits: ['25 usuários', '10 filas', '1 canal WhatsApp', 'Canais adicionais: especialista'],
    features: ['Dashboard', 'Atendimentos', 'Clientes', 'Conversas', 'Relatórios', 'ChatBot (Fluxo)', 'API Externa'],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    iconColor: '#E8923C',
    cardStyle: 'enterprise' as const,
    description: 'O plano Enterprise tem precificação e escopo personalizados. Entre em contato com nossa equipe para negociar funcionalidades, limites e suporte dedicado.',
    monthlyPrice: null as number | null,
    annualPrice: null as number | null,
    cta: 'Falar com Especialista',
    limits: ['Usuários e filas ilimitados', 'Agente de I.A personalizável', 'API Externa + Webhooks'],
    features: ['Integrações customizadas', 'Relatório de Agente I.A', 'SLA e suporte dedicado'],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="planos" className="py-24" style={{ background: 'var(--cream)' }}>
      <div className="max-w-[1200px] mx-auto px-7" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow mb-5 block">Planos e preços</span>
          <h2
            className="text-4xl sm:text-5xl mb-5"
            style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}
          >
            Planos para{' '}
            <span style={{ color: 'var(--coral)', fontStyle: 'italic', fontWeight: 500 }}>todos os tamanhos.</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-8" style={{ color: 'var(--ink-2)' }}>
            Comece grátis e escale conforme o negócio cresce. Cancele quando quiser, sem multa.
          </p>

          {/* Toggle */}
          <div
            className="inline-flex items-center p-1 rounded-xl border"
            style={{ background: 'var(--cream-2)', borderColor: 'var(--line)' }}
          >
            {[
              { label: 'Mensal', value: false },
              { label: 'Anual', value: true, badge: '-20%' },
            ].map(opt => (
              <button
                key={String(opt.value)}
                onClick={() => setAnnual(opt.value)}
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2"
                style={{
                  background: annual === opt.value ? 'var(--coral)' : 'transparent',
                  color: annual === opt.value ? '#fff' : 'var(--ink-2)',
                }}
              >
                {opt.label}
                {opt.badge && (
                  <span
                    className="text-[10px] px-1.5 py-0.5 rounded-full font-bold"
                    style={{
                      background: annual ? 'rgba(255,255,255,0.25)' : 'var(--green-soft)',
                      color: annual ? '#fff' : 'var(--green)',
                    }}
                  >
                    {opt.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, i) => {
            const price = annual ? plan.annualPrice : plan.monthlyPrice;
            const isPopular = plan.cardStyle === 'popular';
            const isEnterprise = plan.cardStyle === 'enterprise';

            const cardBg = isPopular
              ? 'linear-gradient(135deg, #FF7A59 0%, #E8923C 100%)'
              : isEnterprise
              ? 'var(--graphite)'
              : 'var(--cream-2)';

            const cardBorder = isPopular
              ? 'rgba(255,255,255,0.2)'
              : isEnterprise
              ? 'rgba(232,146,60,0.25)'
              : 'var(--line)';

            const textPrimary = isPopular || isEnterprise ? '#F5EFE4' : 'var(--ink)';
            const textSecondary = isPopular || isEnterprise ? 'rgba(245,239,228,0.55)' : 'var(--ink-3)';
            const textMuted = isPopular || isEnterprise ? 'rgba(245,239,228,0.35)' : 'var(--ink-3)';
            const dividerColor = isPopular || isEnterprise ? 'rgba(245,239,228,0.12)' : 'var(--line)';
            const checkColor = isPopular ? 'rgba(255,255,255,0.9)' : isEnterprise ? '#E8923C' : 'var(--green)';

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-7 border flex flex-col transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{
                  background: cardBg,
                  borderColor: cardBorder,
                  transitionDelay: `${i * 100}ms`,
                  transform: isPopular && isVisible ? 'scale(1.03)' : undefined,
                  boxShadow: isPopular ? '0 20px 60px rgba(255,122,89,0.3)' : isEnterprise ? '0 12px 32px rgba(26,24,22,0.15)' : undefined,
                }}
              >
                {/* Top badge */}
                {plan.topBadge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span
                      className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap"
                      style={{ background: 'var(--green)', color: '#fff' }}
                    >
                      ✦ {plan.topBadge}
                    </span>
                  </div>
                )}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold shadow-md whitespace-nowrap"
                      style={{ background: '#FBBF24', color: '#78350F' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      MAIS POPULAR
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span style={{ color: plan.iconColor }}>
                      {plan.id === 'free' && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                        </svg>
                      )}
                      {plan.id === 'basic' && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                      )}
                      {plan.id === 'pro' && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15 8.5 22 9.3 17 14 18 21 12 17.8 6 21 7 14 2 9.3 9 8.5 12 2" />
                        </svg>
                      )}
                      {plan.id === 'enterprise' && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                      )}
                    </span>
                    <h3
                      className="text-xl font-semibold"
                      style={{ fontFamily: 'Fraunces, Georgia, serif', color: textPrimary }}
                    >
                      {plan.name}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: textSecondary }}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  {isEnterprise ? (
                    <div>
                      <div className="text-xl font-bold" style={{ fontFamily: 'Fraunces, Georgia, serif', color: textPrimary }}>
                        Precificação personalizada
                      </div>
                      <p className="text-xs mt-1" style={{ color: textSecondary }}>Negocie escopo e suporte dedicado</p>
                    </div>
                  ) : price === null ? (
                    <div>
                      <div className="text-4xl font-bold" style={{ fontFamily: 'Fraunces, Georgia, serif', color: textPrimary }}>
                        Grátis
                      </div>
                      <p className="text-xs mt-1" style={{ color: textSecondary }}>por 7 dias · upgrade obrigatório</p>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm" style={{ color: textSecondary }}>R$</span>
                      <span className="text-4xl font-bold" style={{ fontFamily: 'Fraunces, Georgia, serif', color: textPrimary }}>
                        {price}
                      </span>
                      <span className="text-sm" style={{ color: textSecondary }}>/mês</span>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <a
                  href={isEnterprise ? 'https://wa.me/5511944745067' : 'https://app.fivconnect.net/cadastro'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all mb-7"
                  style={
                    isPopular
                      ? { background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.35)', backdropFilter: 'blur(8px)' }
                      : isEnterprise
                      ? { background: 'linear-gradient(135deg, #FF7A59 0%, #E8923C 100%)', color: '#fff' }
                      : plan.id === 'free'
                      ? { background: 'transparent', color: 'var(--ink)', border: '1px solid var(--line-2)' }
                      : { background: 'var(--coral)', color: '#fff' }
                  }
                >
                  {plan.cta}
                </a>

                {/* Divider */}
                <div className="border-t mb-5" style={{ borderColor: dividerColor }} />

                {/* Limits */}
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: textMuted }}>
                  Limites
                </p>
                <ul className="space-y-2 mb-5">
                  {plan.limits.map(limit => (
                    <li key={limit} className="flex items-start gap-2">
                      <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 24 24" fill="none"
                        stroke={checkColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-xs" style={{ color: textSecondary }}>{limit}</span>
                    </li>
                  ))}
                </ul>

                {/* Features */}
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: textMuted }}>
                  Funcionalidades
                </p>
                <ul className="space-y-2 flex-1">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-2">
                      <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 24 24" fill="none"
                        stroke={checkColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-xs" style={{ color: textSecondary }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm mt-10" style={{ color: 'var(--ink-3)' }}>
          Todos os planos incluem{' '}
          <strong style={{ color: 'var(--ink)' }}>criptografia AES-256</strong>,{' '}
          <strong style={{ color: 'var(--ink)' }}>LGPD</strong> e{' '}
          <strong style={{ color: 'var(--ink)' }}>uptime monitorado 24h</strong>.
        </p>
      </div>
    </section>
  );
}
