import { useScrollAnimation } from '../hooks/useScrollAnimation';

const numbers = [
  { v: '3', u: 's', l: 'tempo médio de resposta da IA — cliente não espera.' },
  { v: '68', u: '%', l: 'das conversas resolvidas sem intervenção humana.' },
  { v: '5', u: 'min', l: 'do cadastro ao primeiro atendimento rodando.' },
  { v: '0', u: '', l: 'mensagens perdidas — tudo vira ticket na fila.' },
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
