import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Features() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="funcionalidades" className="py-24" style={{ background: 'var(--cream)' }}>
      <div className="max-w-[1200px] mx-auto px-7" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow mb-5 block">Funcionalidades</span>
          <h2
            className="text-4xl sm:text-5xl mb-5"
            style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}
          >
            Tudo que você precisa,{' '}
            <span style={{ color: 'var(--amber-c)', fontStyle: 'italic', fontWeight: 500 }}>nada que você não precisa.</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--ink-2)' }}>
            Ferramentas pensadas para PMEs que querem crescer sem perder qualidade no atendimento.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* IA — large dark cell */}
          <div
            className={`lg:col-span-2 rounded-2xl p-8 border transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ background: 'var(--graphite)', borderColor: 'rgba(255,255,255,0.08)', transitionDelay: '0ms' }}
          >
            <span className="eyebrow mb-4 block" style={{ color: 'rgba(245,239,228,0.4)' }}>Destaque · IA</span>
            <h3
              className="text-2xl sm:text-3xl mb-3"
              style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: '#F5EFE4' }}
            >
              Uma IA treinada no seu negócio, não um chatbot genérico.
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(245,239,228,0.55)' }}>
              Ela aprende seu catálogo, seus horários, suas respostas favoritas. Responde em 3 segundos e entrega a conversa pro humano com o resumo pronto.
            </p>

            {/* IA demo */}
            <div
              className="grid grid-cols-2 gap-3 rounded-xl p-4"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              {/* Cliente */}
              <div>
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(245,239,228,0.4)' }} />
                  <span className="text-[10px] font-semibold" style={{ color: 'rgba(245,239,228,0.4)' }}>Cliente</span>
                </div>
                <div
                  className="rounded-xl px-3 py-2 text-[12px] mb-2"
                  style={{ background: 'rgba(255,255,255,0.08)', color: '#F5EFE4' }}
                >
                  "Oi, vocês entregam em Guarulhos?"
                </div>
                <div
                  className="rounded-xl px-3 py-2 text-[12px]"
                  style={{ background: 'rgba(255,255,255,0.08)', color: '#F5EFE4' }}
                >
                  "E pago em quantas vezes?"
                </div>
              </div>
              {/* IA */}
              <div>
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--coral)', boxShadow: '0 0 0 3px rgba(255,122,89,0.25)' }} />
                  <span className="text-[10px] font-semibold" style={{ color: 'var(--coral)' }}>Fi.V · IA</span>
                </div>
                <div
                  className="rounded-xl px-3 py-2 text-[12px] mb-2"
                  style={{ background: 'rgba(255,122,89,0.15)', color: '#F5EFE4', border: '1px solid rgba(255,122,89,0.2)' }}
                >
                  "Sim! Guarulhos, 48h, frete R$ 18."
                </div>
                <div
                  className="rounded-xl px-3 py-2 text-[12px]"
                  style={{ background: 'rgba(255,122,89,0.15)', color: '#F5EFE4', border: '1px solid rgba(255,122,89,0.2)' }}
                >
                  "Em até 3x sem juros no PIX."
                </div>
              </div>
            </div>
          </div>

          {/* Filas */}
          <div
            className={`rounded-2xl p-7 border transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ background: 'var(--cream-2)', borderColor: 'var(--line)', transitionDelay: '60ms' }}
          >
            <span className="eyebrow mb-4 block">Filas</span>
            <h3
              className="text-xl mb-2"
              style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}
            >
              Ninguém esperando sem resposta.
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--ink-2)' }}>
              Cada conversa vira um ticket com prioridade e responsável.
            </p>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Vendas', count: 7, color: 'var(--coral)' },
                { label: 'Suporte', count: 3, color: 'var(--green)' },
                { label: 'Financeiro', count: 1, color: 'var(--amber-c)' },
              ].map(q => (
                <div
                  key={q.label}
                  className="flex items-center justify-between rounded-xl px-3 py-2"
                  style={{ background: 'var(--cream-3)' }}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: q.color }} />
                    <span className="text-sm font-medium" style={{ color: 'var(--ink)' }}>{q.label}</span>
                  </div>
                  <span className="text-sm font-bold" style={{ color: q.color }}>{q.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard */}
          <div
            className={`rounded-2xl p-7 border transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ background: 'var(--cream-2)', borderColor: 'var(--line)', transitionDelay: '120ms' }}
          >
            <span className="eyebrow mb-4 block">Dashboard</span>
            <h3
              className="text-xl mb-2"
              style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}
            >
              Métricas em tempo real.
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--ink-2)' }}>
              Saiba quem atendeu mais, mais rápido e melhor.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { l: 'Abertas', v: '11' },
                { l: 'Online', v: '10' },
                { l: 'T. médio', v: '1m43s' },
                { l: 'Hoje', v: '77' },
              ].map(m => (
                <div
                  key={m.l}
                  className="rounded-xl px-3 py-2.5 text-center"
                  style={{ background: 'var(--cream-3)' }}
                >
                  <div className="text-[10px] mb-1" style={{ color: 'var(--ink-3)' }}>{m.l}</div>
                  <div
                    className="text-lg font-bold"
                    style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'var(--ink)' }}
                  >
                    {m.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp */}
          <div
            className={`rounded-2xl p-7 border transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ background: 'var(--cream-2)', borderColor: 'var(--line)', transitionDelay: '180ms' }}
          >
            <span className="eyebrow mb-4 block" style={{ color: '#075E54' }}>WhatsApp</span>
            <h3
              className="text-xl mb-2"
              style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}
            >
              Conexão em 5 minutos.
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--ink-2)' }}>
              QR Code e pronto — nenhum plugin, nenhum código.
            </p>
            <div className="flex flex-col gap-1.5">
              {[
                { name: 'Ana Mendes', msg: 'Quando vocês abrem amanhã?' },
                { name: 'Carlos Lima', msg: 'Ainda dá tempo pro almoço?' },
              ].map(c => (
                <div
                  key={c.name}
                  className="rounded-xl px-3 py-2 text-[11px]"
                  style={{ background: 'var(--cream-3)' }}
                >
                  <span className="font-semibold" style={{ color: 'var(--ink)' }}>{c.name}: </span>
                  <span style={{ color: 'var(--ink-2)' }}>{c.msg}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Automação */}
          <div
            className={`rounded-2xl p-7 border transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ background: 'var(--cream-2)', borderColor: 'var(--line)', transitionDelay: '240ms' }}
          >
            <span className="eyebrow mb-4 block">Automação</span>
            <h3
              className="text-xl mb-2"
              style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}
            >
              Fluxos visuais, sem código.
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--ink-2)' }}>
              Monte chatbots com menus, perguntas e encaminhamentos.
            </p>
            <div className="flex items-center gap-2">
              {['Início', 'Menu', 'Fila'].map((node, i) => (
                <div key={node} className="flex items-center gap-2">
                  <div
                    className="px-3 py-1.5 rounded-xl text-[11px] font-semibold"
                    style={{
                      background: i === 1 ? 'var(--coral)' : 'var(--cream-3)',
                      color: i === 1 ? '#fff' : 'var(--ink)',
                    }}
                  >
                    {node}
                  </div>
                  {i < 2 && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Equipe */}
          <div
            className={`rounded-2xl p-7 border transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ background: 'var(--cream-2)', borderColor: 'var(--line)', transitionDelay: '300ms' }}
          >
            <span className="eyebrow mb-4 block">Equipe</span>
            <h3
              className="text-xl mb-2"
              style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}
            >
              Vários atendentes, um número só.
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--ink-2)' }}>
              Filas por departamento e transferência de tickets.
            </p>
            <div className="flex items-center -space-x-2">
              {['A', 'M', 'R', 'L'].map((l, i) => (
                <div
                  key={l}
                  className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-sm font-bold text-white"
                  style={{
                    background: ['#FF7A59', '#2F9E6E', '#6C5CE7', '#E8923C'][i],
                    borderColor: 'var(--cream-2)',
                  }}
                >
                  {l}
                </div>
              ))}
              <div
                className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                style={{ background: 'var(--cream-3)', borderColor: 'var(--cream-2)', color: 'var(--ink-3)' }}
              >
                +7
              </div>
            </div>
          </div>

          {/* Relatórios */}
          <div
            className={`rounded-2xl p-7 border transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ background: 'var(--cream-2)', borderColor: 'var(--line)', transitionDelay: '360ms' }}
          >
            <span className="eyebrow mb-4 block">Relatórios</span>
            <h3
              className="text-xl mb-2"
              style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}
            >
              Exporte em PDF e Excel.
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--ink-2)' }}>
              Performance por agente, fila e período.
            </p>
            <svg viewBox="0 0 200 68" preserveAspectRatio="none" className="w-full h-12">
              <defs>
                <linearGradient id="chartGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="var(--coral)" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="var(--coral)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,50 Q30,45 50,38 T100,28 T150,18 L200,8 L200,68 L0,68 Z" fill="url(#chartGrad)" />
              <path d="M0,50 Q30,45 50,38 T100,28 T150,18 L200,8" fill="none" stroke="var(--coral)" strokeWidth="2" />
              <circle cx="200" cy="8" r="3" fill="var(--coral)" />
            </svg>
          </div>

          {/* Segurança */}
          <div
            className={`rounded-2xl p-7 border transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ background: 'var(--cream-2)', borderColor: 'var(--line)', transitionDelay: '420ms' }}
          >
            <span className="eyebrow mb-4 block">Segurança</span>
            <h3
              className="text-xl mb-2"
              style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}
            >
              Criptografia AES-256.
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--ink-2)' }}>
              Conversas protegidas com padrão bancário.
            </p>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold border"
              style={{ background: 'var(--green-soft)', borderColor: 'rgba(47,158,110,0.25)', color: 'var(--green)' }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              AES-256 · uptime 99.9% · LGPD
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
