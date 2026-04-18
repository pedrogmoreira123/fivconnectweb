import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const plans = [
  {
    id: 'free',
    name: 'Gratuito',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
    description: 'Experimente o Fi.V sem compromisso, no seu ritmo.',
    monthlyPrice: null,
    annualPrice: null,
    cta: 'Começar grátis',
    ctaStyle: 'ghost',
    features: [
      '1 canal de WhatsApp',
      'Até 10 conversas ativas',
      'Gestão de tickets',
      'Dashboard básico',
    ],
  },
  {
    id: 'professional',
    name: 'Profissional',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    description: 'Para empresas que querem atendimento automatizado e IA.',
    monthlyPrice: 149,
    annualPrice: 119,
    cta: 'Testar 7 dias grátis',
    ctaStyle: 'primary',
    isPopular: true,
    features: [
      'Até 10 usuários simultâneos',
      '1 fila de atendimento',
      'Fluxos de chatbot ilimitados',
      'Agente de IA (1.000 respostas/mês)',
      'Relatórios completos',
    ],
  },
  {
    id: 'advanced',
    name: 'Avançado',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15 8.5 22 9.3 17 14 18 21 12 17.8 6 21 7 14 2 9.3 9 8.5 12 2" />
      </svg>
    ),
    description: 'Para equipes maiores que precisam de IA e recursos avançados.',
    monthlyPrice: 289,
    annualPrice: 231,
    cta: 'Testar 7 dias grátis',
    ctaStyle: 'dark',
    features: [
      'Até 25 usuários simultâneos',
      '3 filas de atendimento',
      'Tudo do plano Profissional',
      'IA ilimitada + treinamento próprio',
      'Gerente de sucesso dedicado',
    ],
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
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => {
            const price = annual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 border flex flex-col transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{
                  background: plan.isPopular ? 'var(--graphite)' : 'var(--cream-2)',
                  borderColor: plan.isPopular ? 'rgba(255,122,89,0.3)' : 'var(--line)',
                  transitionDelay: `${i * 100}ms`,
                  transform: plan.isPopular && isVisible ? 'scale(1.025)' : undefined,
                }}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span
                      className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap"
                      style={{ background: 'var(--amber-c)', color: '#fff' }}
                    >
                      ★ Mais popular
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span style={{ color: plan.isPopular ? 'rgba(245,239,228,0.6)' : 'var(--ink-3)' }}>
                      {plan.icon}
                    </span>
                    <h3
                      className="text-xl font-semibold"
                      style={{ fontFamily: 'Fraunces, Georgia, serif', color: plan.isPopular ? '#F5EFE4' : 'var(--ink)' }}
                    >
                      {plan.name}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: plan.isPopular ? 'rgba(245,239,228,0.5)' : 'var(--ink-3)' }}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  {price === null ? (
                    <div
                      className="text-4xl font-bold"
                      style={{ fontFamily: 'Fraunces, Georgia, serif', color: plan.isPopular ? '#F5EFE4' : 'var(--ink)' }}
                    >
                      Grátis
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm" style={{ color: plan.isPopular ? 'rgba(245,239,228,0.4)' : 'var(--ink-3)' }}>R$</span>
                      <span
                        className="text-4xl font-bold"
                        style={{ fontFamily: 'Fraunces, Georgia, serif', color: plan.isPopular ? '#F5EFE4' : 'var(--ink)' }}
                      >
                        {price}
                      </span>
                      <span className="text-sm" style={{ color: plan.isPopular ? 'rgba(245,239,228,0.4)' : 'var(--ink-3)' }}>/mês</span>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <a
                  href="https://app.fivconnect.net/cadastro"
                  className="block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all mb-7"
                  style={
                    plan.ctaStyle === 'primary'
                      ? { background: 'var(--coral)', color: '#fff' }
                      : plan.ctaStyle === 'ghost'
                      ? { background: 'transparent', color: 'var(--ink)', border: '1px solid var(--line-2)' }
                      : { background: '#F5EFE4', color: 'var(--graphite)' }
                  }
                >
                  {plan.cta}
                </a>

                {/* Divider */}
                <div
                  className="border-t mb-6"
                  style={{ borderColor: plan.isPopular ? 'rgba(245,239,228,0.1)' : 'var(--line)' }}
                />

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="flex-shrink-0 mt-0.5"
                        width="15" height="15" viewBox="0 0 24 24" fill="none"
                        stroke={plan.isPopular ? 'var(--coral)' : 'var(--green)'}
                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-sm" style={{ color: plan.isPopular ? 'rgba(245,239,228,0.65)' : 'var(--ink-2)' }}>
                        {feature}
                      </span>
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
