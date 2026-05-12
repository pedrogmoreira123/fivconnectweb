import { useScrollAnimation } from '../hooks/useScrollAnimation';

const heatmapData = [
  [0, 0, 0, 0, 1, 3, 4, 4, 4, 3, 2, 1],
  [0, 0, 0, 1, 2, 3, 4, 4, 4, 3, 2, 1],
  [0, 0, 0, 1, 2, 4, 4, 4, 4, 3, 2, 1],
  [0, 0, 0, 1, 2, 3, 4, 4, 4, 3, 2, 1],
  [0, 0, 0, 1, 2, 3, 4, 3, 3, 2, 1, 1],
  [0, 0, 0, 0, 1, 2, 2, 2, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
];

const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
const hours = ['00', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'];

const heatColors = [
  'var(--cream-3)',
  'rgba(255,122,89,0.2)',
  'rgba(255,122,89,0.4)',
  'rgba(255,122,89,0.65)',
  'rgba(255,122,89,0.9)',
];

const reportFeatures = [
  { num: '01', title: 'Busca por protocolo', desc: 'Achar qualquer atendimento em segundos, por número, contato ou atendente.' },
  { num: '02', title: 'Heatmap de picos', desc: 'Saiba quando o time apanha e quando sobra mão — escala com dado.' },
  { num: '03', title: 'Relatório de I.A', desc: 'Quantas conversas a I.A resolveu sozinha, quantas transferiu, com que motivo.' },
  { num: '04', title: 'Filtros combinados', desc: 'Atendente + fila + horário + status — recorte como precisar.' },
];

export default function Reports() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24" style={{ background: 'var(--cream)' }}>
      <div className="max-w-[1200px] mx-auto px-7" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Heatmap */}
          <div
            className={`rounded-2xl p-6 sm:p-8 border transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ background: 'var(--cream-2)', borderColor: 'var(--line)' }}
          >
            <div className="flex items-baseline justify-between mb-5">
              <h4
                className="text-xl"
                style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}
              >
                Heatmap de atendimentos
              </h4>
              <span className="text-[11px]" style={{ color: 'var(--ink-3)', fontFamily: '"JetBrains Mono", monospace' }}>
                últimos 30 dias
              </span>
            </div>

            {/* Grid */}
            <div className="overflow-x-auto">
              <div style={{ display: 'grid', gridTemplateColumns: '36px repeat(12, 1fr)', gap: '3px', minWidth: '360px' }}>
                {/* Header row */}
                <div />
                {hours.map(h => (
                  <div
                    key={h}
                    className="text-center text-[9px]"
                    style={{ color: 'var(--ink-3)', fontFamily: '"JetBrains Mono", monospace' }}
                  >
                    {h}
                  </div>
                ))}

                {/* Data rows */}
                {heatmapData.map((row, ri) => (
                  <>
                    <div
                      key={`day-${ri}`}
                      className="flex items-center justify-end pr-1 text-[10px] uppercase"
                      style={{ color: 'var(--ink-3)', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.06em' }}
                    >
                      {days[ri]}
                    </div>
                    {row.map((val, ci) => (
                      <div
                        key={`${ri}-${ci}`}
                        className="rounded-sm"
                        style={{ aspectRatio: '1', background: heatColors[val] }}
                      />
                    ))}
                  </>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-2 mt-4 text-[11px]" style={{ color: 'var(--ink-3)' }}>
              <span>menos</span>
              <div className="flex gap-1">
                {heatColors.map((c, i) => (
                  <span key={i} className="w-3.5 h-3.5 rounded-sm" style={{ background: c }} />
                ))}
              </div>
              <span>mais</span>
            </div>
          </div>

          {/* Right: Features */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '150ms' }}>
            <span className="eyebrow mb-5 block">Relatórios</span>
            <h2
              className="text-3xl sm:text-4xl mb-8"
              style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}
            >
              Dados pra decidir,{' '}
              <span style={{ color: 'var(--coral)', fontStyle: 'italic', fontWeight: 500 }}>não pra colecionar.</span>
            </h2>

            <ul className="flex flex-col">
              {reportFeatures.map((f, i) => (
                <li
                  key={f.num}
                  className={`flex items-start gap-4 py-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{
                    borderTop: '1px solid var(--line)',
                    transitionDelay: `${250 + i * 80}ms`,
                  }}
                >
                  <span
                    className="text-[13px] font-bold flex-shrink-0 mt-0.5"
                    style={{ color: 'var(--coral)', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.06em' }}
                  >
                    {f.num}
                  </span>
                  <div>
                    <span className="text-[15px] font-semibold block mb-1" style={{ color: 'var(--ink)' }}>{f.title}</span>
                    <span className="text-sm" style={{ color: 'var(--ink-2)' }}>{f.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
