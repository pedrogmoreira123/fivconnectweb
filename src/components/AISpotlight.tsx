import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  { num: '01', title: 'Memória do agente', desc: 'Lembra do cliente, do que já foi conversado, do contexto da relação.' },
  { num: '02', title: 'Base de conhecimento', desc: 'Treine com seus produtos, políticas, FAQ. A I.A responde com a sua voz.' },
  { num: '03', title: 'Regras de contexto', desc: 'Quando responder, quando transferir, qual fila escolher. Você define.' },
  { num: '04', title: 'Puxa informações do cliente', desc: 'Conecta com sua API e enriquece a conversa em tempo real.' },
  { num: '05', title: 'Resumo de atendimento', desc: 'Quando o humano assume, recebe um briefing claro do que rolou.' },
];

export default function AISpotlight() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24" style={{ background: 'var(--cream)' }}>
      <div className="max-w-[1200px] mx-auto px-7" ref={ref}>
        <div
          className={`rounded-2xl p-8 sm:p-12 overflow-hidden relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ background: 'var(--graphite)' }}
        >
          {/* Decorative orb */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'var(--amber-c)', opacity: 0.1, transform: 'translate(30%, -40%)' }}
          />

          <div className="relative grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: content */}
            <div>
              <span
                className="text-[11px] font-bold uppercase tracking-widest mb-5 block"
                style={{ color: 'rgba(245,239,228,0.4)', letterSpacing: '0.12em' }}
              >
                Agente de I.A
              </span>
              <h2
                className="text-3xl sm:text-4xl mb-8"
                style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: '#F5EFE4', lineHeight: 1.1 }}
              >
                O primeiro atendimento{' '}
                <span style={{ color: 'var(--amber-c)', fontStyle: 'italic', fontWeight: 500 }}>resolvido</span>, o segundo{' '}
                <span style={{ color: 'var(--amber-c)', fontStyle: 'italic', fontWeight: 500 }}>com contexto</span>.
              </h2>

              <ul className="flex flex-col gap-0">
                {features.map((f, i) => (
                  <li
                    key={f.num}
                    className={`flex items-start gap-4 py-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{
                      borderBottom: i < features.length - 1 ? '1px solid rgba(245,239,228,0.08)' : 'none',
                      transitionDelay: `${200 + i * 80}ms`,
                    }}
                  >
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-[11px] font-bold"
                      style={{ background: 'rgba(232,146,60,0.15)', color: 'var(--amber-c)', fontFamily: '"JetBrains Mono", monospace' }}
                    >
                      {f.num}
                    </span>
                    <div>
                      <span className="text-sm font-semibold block mb-0.5" style={{ color: '#F5EFE4' }}>{f.title}</span>
                      <span className="text-sm" style={{ color: 'rgba(245,239,228,0.55)' }}>{f.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Protocol mockup */}
            <div
              className="rounded-xl p-6 flex flex-col gap-4"
              style={{ background: 'rgba(245,239,228,0.04)', border: '1px solid rgba(245,239,228,0.08)' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4" style={{ borderBottom: '1px solid rgba(245,239,228,0.08)' }}>
                <span className="text-[11px] font-mono" style={{ color: 'rgba(245,239,228,0.5)', letterSpacing: '0.06em' }}>
                  PROT · 2026-04812
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-semibold" style={{ color: 'var(--amber-c)' }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--amber-c)', boxShadow: '0 0 0 3px rgba(232,146,60,0.2)' }} />
                  Transferido para humano
                </span>
              </div>

              {/* AI Summary */}
              <div
                className="rounded-lg p-4 flex flex-col gap-2"
                style={{ background: 'rgba(232,146,60,0.08)', border: '1px solid rgba(232,146,60,0.2)' }}
              >
                <span
                  className="text-[10px] font-bold uppercase"
                  style={{ color: 'var(--amber-c)', letterSpacing: '0.1em' }}
                >
                  Resumo gerado pelo Agente I.A
                </span>
                <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(245,239,228,0.85)' }}>
                  <strong style={{ color: '#F5EFE4' }}>Ana Beatriz</strong> entrou em contato perguntando sobre entrega para{' '}
                  <strong style={{ color: '#F5EFE4' }}>Curitiba (CEP 80250-000)</strong>. Confirmei cobertura, frete de{' '}
                  <strong style={{ color: '#F5EFE4' }}>R$ 14,90</strong> e prazo de 2–3 dias úteis. Cliente{' '}
                  <strong style={{ color: '#F5EFE4' }}>aceitou prosseguir</strong> e quer finalizar o pedido.
                </p>
              </div>

              {/* Metadata */}
              <div className="grid grid-cols-3 gap-4 pt-3" style={{ borderTop: '1px solid rgba(245,239,228,0.08)' }}>
                {[
                  { label: 'Duração', value: '2m 14s' },
                  { label: 'Mensagens', value: '8' },
                  { label: 'Próx. fila', value: 'Comercial' },
                ].map(m => (
                  <div key={m.label}>
                    <span className="text-[10px] uppercase block mb-1" style={{ color: 'rgba(245,239,228,0.4)', letterSpacing: '0.08em', fontFamily: '"JetBrains Mono", monospace' }}>
                      {m.label}
                    </span>
                    <span className="text-lg font-semibold" style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#F5EFE4' }}>
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                className="w-full py-3 rounded-xl text-sm font-semibold text-white text-center mt-2 transition-all hover:opacity-90"
                style={{ background: 'var(--coral)' }}
              >
                Puxar atendimento →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
