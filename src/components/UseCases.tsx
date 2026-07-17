import { useScrollAnimation } from '../hooks/useScrollAnimation';

const devices = ['iOS', 'Android', 'Windows', 'macOS', 'Web'];

const personas = [
  {
    tag: 'E-commerce',
    title: 'Pré-venda que não espera.',
    desc: 'Dúvida de produto, frete e prazo chegando em volume? O chatbot faz a triagem, a I.A responde na hora e a equipe fecha as vendas nas filas certas.',
    metric: '1 nº',
    metricLabel: 'para toda a operação',
    metricColor: 'var(--coral)',
  },
  {
    tag: 'Escritório',
    title: 'Demandas sob controle.',
    desc: 'Cada cliente sabe com quem falar: filas por área, chamado com protocolo e prazo para cada demanda, histórico completo salvo. Nada se perde.',
    metric: '100%',
    metricLabel: 'das demandas com protocolo',
    metricColor: 'var(--green)',
  },
  {
    tag: 'Serviços',
    title: 'Plantão sem madrugada.',
    desc: 'Fora do horário comercial, a I.A faz o primeiro filtro, orienta ou aciona o plantão. O time dorme, a plataforma trabalha.',
    metric: '24/7',
    metricLabel: 'primeiro contato garantido',
    metricColor: 'var(--amber-c)',
  },
];

export default function UseCases() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28 sm:py-32" style={{ background: 'var(--cream-2)' }}>
      <div className="max-w-[1200px] mx-auto px-7" ref={ref}>
        {/* PWA Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow mb-5 block">Acesso</span>
          <h2
            className="text-4xl sm:text-5xl mb-5"
            style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}
          >
            Funciona em qualquer dispositivo.{' '}
            <span style={{ color: 'var(--coral)', fontStyle: 'italic', fontWeight: 500 }}>Sem instalar nada.</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: 'var(--ink-2)' }}>
            Fi.V Connect é PWA — Progressive Web App. Abre no navegador, "Adicionar à tela inicial" e pronto. Mesma experiência no celular, no tablet, no notebook.
          </p>

          {/* Device chips */}
          <div className="flex flex-wrap justify-center gap-3">
            {devices.map(d => (
              <span
                key={d}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border"
                style={{ background: 'var(--cream)', borderColor: 'var(--line)', color: 'var(--ink-2)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--coral)' }} />
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* Persona cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((p, i) => (
            <div
              key={p.tag}
              className={`rounded-2xl p-7 border flex flex-col transition-all duration-700 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: 'var(--cream)',
                borderColor: 'var(--line)',
                transitionDelay: `${200 + i * 100}ms`,
              }}
            >
              <span
                className="text-[11px] font-bold uppercase tracking-widest mb-4"
                style={{ color: 'var(--coral)', letterSpacing: '0.1em' }}
              >
                Cenário {String(i + 1).padStart(2, '0')} · {p.tag}
              </span>
              <h3
                className="text-xl mb-3"
                style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}
              >
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--ink-2)' }}>
                {p.desc}
              </p>

              {/* Metric */}
              <div className="pt-4 flex items-baseline justify-between" style={{ borderTop: '1px solid var(--line)' }}>
                <span
                  className="text-3xl font-bold"
                  style={{ fontFamily: 'Fraunces, Georgia, serif', color: p.metricColor }}
                >
                  {p.metric}
                </span>
                <span className="text-[12px] text-right max-w-[55%] leading-snug" style={{ color: 'var(--ink-3)' }}>
                  {p.metricLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
