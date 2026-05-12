import { X, Check } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const beforeItems = [
  'Vários celulares e vários números — ninguém sabe quem respondeu o quê.',
  'Cliente fica horas na espera, atendente abre 5 abas pra achar histórico.',
  'Fora do horário comercial, a conversa simplesmente morre.',
  'Nenhuma visibilidade de pico, fila, ou desempenho real do time.',
];

const afterItems = [
  'WhatsApp único, com filas por área e atendentes organizados.',
  'Histórico, protocolos e contexto disponíveis em um clique.',
  'Agente de I.A responde 24/7 e entrega resumo da conversa pro humano.',
  'Relatórios, heatmap e busca avançada — gestão de verdade.',
];

export default function BeforeAfter() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24" style={{ background: 'var(--cream)' }}>
      <div className="max-w-[1200px] mx-auto px-7" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow mb-5 block">O problema</span>
          <h2
            className="text-4xl sm:text-5xl mb-5"
            style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}
          >
            Central WhatsApp única para sua{' '}
            <span style={{ color: 'var(--coral)', fontStyle: 'italic', fontWeight: 500 }}>equipe inteira.</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
            Um único número de WhatsApp. Todos os atendentes operando juntos, divididos por filas, com histórico unificado, automação por fluxos e um Agente de I.A que conversa de verdade.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Before card */}
          <div
            className={`rounded-2xl p-8 border transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ background: 'var(--cream-2)', borderColor: 'var(--line)', transitionDelay: '100ms' }}
          >
            <span
              className="text-xs font-bold uppercase tracking-widest mb-5 block"
              style={{ color: 'var(--ink-3)', letterSpacing: '0.12em' }}
            >
              Antes da Fi.V Connect
            </span>
            <h3
              className="text-2xl mb-6"
              style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}
            >
              O atendimento que cansa todo mundo.
            </h3>
            <ul className="flex flex-col gap-4">
              {beforeItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(232,93,77,0.12)' }}
                  >
                    <X size={13} style={{ color: '#E85D4E' }} />
                  </span>
                  <span className="text-[15px] leading-relaxed" style={{ color: 'var(--ink-2)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After card */}
          <div
            className={`rounded-2xl p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ background: 'var(--graphite)', transitionDelay: '200ms' }}
          >
            <span
              className="text-xs font-bold uppercase tracking-widest mb-5 block"
              style={{ color: 'var(--amber-c)', letterSpacing: '0.12em' }}
            >
              Com a Fi.V Connect
            </span>
            <h3
              className="text-2xl mb-6"
              style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: '#F5EFE4' }}
            >
              Um número. Toda a equipe. Mais I.A.
            </h3>
            <ul className="flex flex-col gap-4">
              {afterItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(232,146,60,0.2)' }}
                  >
                    <Check size={13} style={{ color: 'var(--amber-c)' }} />
                  </span>
                  <span className="text-[15px] leading-relaxed" style={{ color: 'rgba(245,239,228,0.7)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
