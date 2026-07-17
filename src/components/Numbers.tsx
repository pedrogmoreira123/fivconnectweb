import { useScrollAnimation } from '../hooks/useScrollAnimation';

const numbers = [
  { v: '1', u: ' número', l: 'de WhatsApp para a equipe inteira, com filas e responsáveis.' },
  { v: '24', u: '/7', l: 'de atendimento com o agente de I.A — inclusive fora do expediente.' },
  { v: '5', u: 'min', l: 'do cadastro ao primeiro atendimento rodando.' },
  { v: '0', u: '', l: 'mensagens perdidas — tudo vira atendimento com histórico.' },
];

export default function Numbers() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className="py-24 sm:py-28"
      style={{ background: 'var(--graphite)' }}
    >
      <div className="max-w-[1200px] mx-auto px-7" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {numbers.map((n, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="text-5xl sm:text-6xl font-bold leading-none mb-3"
                style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#F5EFE4' }}
              >
                {n.v}
                <span className="text-3xl sm:text-4xl" style={{ color: 'var(--coral)' }}>{n.u}</span>
              </div>
              <div className="text-sm leading-relaxed" style={{ color: 'rgba(245,239,228,0.5)' }}>
                {n.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
