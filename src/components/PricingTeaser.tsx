import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Link from './ui/Link';
import { trackContatoConversion } from '../gtag';

const plans = [
  {
    name: 'Gratuito',
    price: 'R$0',
    period: '7 dias de avaliação',
    line: 'O essencial para conhecer a plataforma: conversas, filas e relatórios.',
    highlight: false,
  },
  {
    name: 'Básico',
    price: 'R$199',
    period: '/mês',
    line: 'Para equipes começando: chatbot visual e API oficial da Meta.',
    highlight: false,
  },
  {
    name: 'Pro',
    price: 'R$299',
    period: '/mês',
    line: 'Para operações em crescimento: agente de I.A, chamados e API externa.',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    period: '',
    line: 'Sem limites, com integrações personalizadas para a sua operação.',
    highlight: false,
  },
];

export default function PricingTeaser() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="planos" className="py-28 sm:py-32" style={{ background: 'var(--cream)' }}>
      <div className="max-w-[1200px] mx-auto px-7" ref={ref}>
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow mb-5 block">Planos</span>
          <h2
            className="text-4xl sm:text-5xl mb-5"
            style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}
          >
            Um plano para cada fase{' '}
            <span style={{ color: 'var(--coral)', fontStyle: 'italic', fontWeight: 500 }}>da sua operação.</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
            Comece grátis por 7 dias, sem cartão de crédito. Evolua quando a operação pedir.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`rounded-2xl p-6 border flex flex-col transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: p.highlight ? 'var(--graphite)' : 'var(--surface)',
                borderColor: p.highlight ? 'transparent' : 'var(--line)',
                transitionDelay: `${100 + i * 80}ms`,
                boxShadow: p.highlight ? '0 20px 60px rgba(255,122,89,0.25)' : undefined,
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[13px] font-bold uppercase tracking-wider" style={{ color: p.highlight ? 'var(--amber-c)' : 'var(--ink-3)', letterSpacing: '0.08em' }}>
                  {p.name}
                </span>
                {p.highlight && (
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: 'var(--coral)' }}>
                    MAIS POPULAR
                  </span>
                )}
              </div>
              <div className="mb-3">
                <span className="text-3xl font-bold" style={{ fontFamily: 'Fraunces, Georgia, serif', color: p.highlight ? '#F5EFE4' : 'var(--ink)' }}>
                  {p.price}
                </span>
                {p.period && (
                  <span className="text-sm ml-1" style={{ color: p.highlight ? 'rgba(245,239,228,0.6)' : 'var(--ink-3)' }}>{p.period}</span>
                )}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: p.highlight ? 'rgba(245,239,228,0.75)' : 'var(--ink-2)' }}>
                {p.line}
              </p>
            </div>
          ))}
        </div>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://app.fivconnect.net/cadastro"
            onClick={trackContatoConversion}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-base transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: 'var(--coral)', boxShadow: '0 8px 24px rgba(255,122,89,0.3)' }}
          >
            Testar grátis por 7 dias
            <ArrowRight size={17} />
          </a>
          <Link
            href="/planos"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base border transition-all hover:opacity-80"
            style={{ borderColor: 'var(--line-2)', color: 'var(--ink)' }}
          >
            Comparar planos em detalhe
          </Link>
        </div>
      </div>
    </section>
  );
}
