import { useScrollAnimation } from '../hooks/useScrollAnimation';

const devices = ['iOS', 'Android', 'Windows', 'macOS', 'Web'];

const personas = [
  {
    tag: 'E-commerce',
    title: 'Loja com 2k atendimentos/mês.',
    desc: 'Antes: 3 celulares, equipe se perdendo. Hoje: 1 número, 4 filas, I.A absorvendo 60% da dúvida pré-venda.',
    metric: '−68%',
    metricLabel: 'tempo médio de espera',
    metricColor: 'var(--coral)',
  },
  {
    tag: 'Escritório',
    title: 'Contabilidade com 14 clientes ativos.',
    desc: 'Cada cliente sabe pra quem falar. Filas por área, protocolos por demanda, histórico salvo. Equipe parou de "perder" cobrança.',
    metric: '100%',
    metricLabel: 'demandas com protocolo',
    metricColor: 'var(--green)',
  },
  {
    tag: 'Serviços',
    title: 'Prestador com plantão 24h.',
    desc: 'Fora do horário comercial, I.A faz o primeiro filtro, agenda, ou aciona plantão. Time dorme, plataforma trabalha.',
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
        <div className="grid sm:grid-cols-3 gap-6">
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
                Caso {String(i + 1).padStart(2, '0')} · {p.tag}
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
