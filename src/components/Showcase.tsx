import { useScrollAnimation } from '../hooks/useScrollAnimation';

const convList = [
  { av: 'JS', name: 'João Silva', msg: 'Confirmo ✅ pode fechar o pedido', tag: 'IA respondeu', tagColor: '#E8923C', time: '14:03', unread: 2, active: true, bg: 'linear-gradient(135deg,#FFD37A,#FF7A59)' },
  { av: 'ME', name: 'Maria Eduarda', msg: 'Oi, queria saber sobre o pacote mensal…', tag: 'nova', tagColor: '#2F9E6E', time: '14:02', bg: 'linear-gradient(135deg,#B7D7A0,#2F9E6E)' },
  { av: 'CL', name: 'Carlos Lima', msg: 'Aguardando o boleto', tag: 'Financeiro', time: '13:58', bg: 'linear-gradient(135deg,#C9BBF2,#6C5CE7)' },
  { av: 'RP', name: 'Renato Paes', msg: 'Ótimo, marca pra sexta então 🙏', tag: 'Vendas', time: '13:42', bg: 'linear-gradient(135deg,#FFB8B0,#E85D4E)' },
];

const chatMessages = [
  { side: 'in', text: 'Olá! Vocês ainda têm o kit Gráfica Sol?' },
  { side: 'out', text: 'Oi João! Temos sim 🙂 300g, 400g e 450g. Quer que eu mande o orçamento?', ai: true },
  { side: 'in', text: 'Manda o de 400g pra 500 unidades' },
  { side: 'out', text: 'Fechado. R$ 890 com entrega em 3 dias úteis. Confirmo?', ai: true },
  { side: 'in', text: 'Confirmo ✅' },
  { side: 'out', text: 'Perfeito! Estou passando pra Ana da Vendas finalizar 🙌' },
];

export default function Showcase() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="showcase" className="py-24" style={{ background: 'var(--cream-2)' }}>
      <div className="max-w-[1200px] mx-auto px-7" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow mb-5 block">Ver por dentro</span>
          <h2
            className="text-4xl sm:text-5xl mb-5"
            style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}
          >
            Um painel, todos os números,{' '}
            <span style={{ color: 'var(--coral)', fontStyle: 'italic', fontWeight: 500 }}>zero bagunça.</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--ink-2)' }}>
            A tela onde sua equipe passa o dia. Desenhada para ser usada sem treinamento.
          </p>
        </div>

        {/* App mockup */}
        <div
          className={`rounded-2xl overflow-hidden shadow-2xl border transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ borderColor: 'var(--line-2)', transitionDelay: '100ms' }}
        >
          {/* Chrome bar */}
          <div
            className="flex items-center gap-3 px-4 py-3 border-b"
            style={{ background: 'var(--graphite-2)', borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <div className="flex gap-1.5">
              {['#FF5F56', '#FFBD2E', '#27C93F'].map(c => (
                <span key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
              ))}
            </div>
            <div
              className="flex-1 max-w-xs mx-auto text-center text-xs px-3 py-1 rounded-lg"
              style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(245,239,228,0.5)' }}
            >
              app.fivconnect.net · Conversas
            </div>
          </div>

          {/* App body */}
          <div className="flex" style={{ minHeight: '480px', background: 'var(--graphite)' }}>
            {/* Sidebar */}
            <div
              className="w-48 flex-shrink-0 flex flex-col border-r hidden lg:flex"
              style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'var(--graphite-2)' }}
            >
              <div className="p-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: '18px', color: '#F5EFE4' }}>
                  Fi<span style={{ color: 'var(--coral)' }}>.</span>V
                </span>
              </div>

              <nav className="p-3 flex-1">
                <p className="text-[9px] font-semibold uppercase tracking-widest mb-2 px-2" style={{ color: 'rgba(245,239,228,0.3)' }}>Menu</p>
                {[
                  { label: 'Dashboard', icon: '⊞' },
                  { label: 'Conversas', icon: '💬', active: true, badge: '11' },
                  { label: 'Contatos', icon: '👤' },
                  { label: 'Relatórios', icon: '📊' },
                ].map(item => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 px-2 py-1.5 rounded-lg mb-0.5 text-xs"
                    style={{
                      background: item.active ? 'rgba(255,122,89,0.2)' : 'transparent',
                      color: item.active ? 'var(--coral)' : 'rgba(245,239,228,0.5)',
                    }}
                  >
                    <span>{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: 'var(--coral)', color: '#fff' }}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))}

                <p className="text-[9px] font-semibold uppercase tracking-widest mb-2 px-2 mt-4" style={{ color: 'rgba(245,239,228,0.3)' }}>Filas</p>
                {[
                  { label: 'Vendas', count: '7', color: 'var(--coral)' },
                  { label: 'Suporte', count: '3', color: 'var(--green)' },
                  { label: 'Financeiro', count: '1', color: 'var(--amber-c)' },
                ].map(q => (
                  <div key={q.label} className="flex items-center gap-2 px-2 py-1.5 text-xs" style={{ color: 'rgba(245,239,228,0.5)' }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: q.color }} />
                    <span>{q.label}</span>
                    <span className="ml-auto text-[10px]" style={{ color: 'rgba(245,239,228,0.3)' }}>{q.count}</span>
                  </div>
                ))}
              </nav>

              <div className="p-3 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-1.5 text-[10px]" style={{ color: 'rgba(245,239,228,0.4)' }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--green)', boxShadow: '0 0 0 2px rgba(47,158,110,0.3)' }} />
                  WhatsApp conectado
                </div>
              </div>
            </div>

            {/* Conversation list */}
            <div
              className="w-56 flex-shrink-0 flex flex-col border-r hidden md:flex"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}
            >
              <div className="p-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <div className="px-2.5 py-1.5 rounded-lg text-xs" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(245,239,228,0.4)' }}>
                  🔍 &nbsp;Buscar conversa…
                </div>
              </div>
              <div className="flex gap-1 p-2 border-b text-[10px] font-semibold" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <span className="px-2 py-1 rounded" style={{ background: 'rgba(255,122,89,0.2)', color: 'var(--coral)' }}>Aguardando 4</span>
                <span className="px-2 py-1 rounded" style={{ color: 'rgba(245,239,228,0.4)' }}>Em at. 7</span>
              </div>
              <div className="flex-1 overflow-hidden">
                {convList.map(c => (
                  <div
                    key={c.av}
                    className="flex items-start gap-2.5 p-3 border-b cursor-pointer transition-all duration-200"
                    style={{
                      borderColor: 'rgba(255,255,255,0.04)',
                      background: c.active ? 'rgba(255,122,89,0.12)' : 'transparent',
                      borderLeft: c.active ? '3px solid var(--coral)' : '3px solid transparent',
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0"
                      style={{ background: c.bg }}
                    >
                      {c.av}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold truncate" style={{ color: '#F5EFE4' }}>{c.name}</span>
                        <span className="text-[9px] ml-1 flex-shrink-0" style={{ color: 'rgba(245,239,228,0.4)' }}>{c.time}</span>
                      </div>
                      <div className="text-[10px] truncate mb-1" style={{ color: 'rgba(245,239,228,0.5)' }}>{c.msg}</div>
                      <div className="flex items-center gap-1">
                        <span
                          className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full"
                          style={{ background: c.tagColor + '28', color: c.tagColor }}
                        >
                          {c.tag}
                        </span>
                        {c.unread && (
                          <span className="ml-auto text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center" style={{ background: 'var(--coral)', color: '#fff' }}>
                            {c.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat area */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Chat header */}
              <div
                className="flex items-center gap-3 px-4 py-3 border-b flex-shrink-0 sticky top-0 z-10"
                style={{
                  borderColor: 'rgba(255,255,255,0.06)',
                  background: 'rgba(26,24,22,0.95)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#FFD37A,#FF7A59)' }}
                >
                  JS
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold" style={{ color: '#F5EFE4' }}>João Silva</div>
                  <div className="text-[10px] flex items-center gap-1" style={{ color: 'rgba(245,239,228,0.4)' }}>
                    <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--green)' }} />
                    +55 11 94xxx-0213 · Vendas
                  </div>
                </div>
                {/* Options button */}
                <div className="opacity-40 hover:opacity-70 transition-opacity cursor-pointer flex gap-0.5 px-1">
                  {[0,1,2].map(d => (
                    <span key={d} className="w-1 h-1 rounded-full" style={{ background: 'rgba(245,239,228,0.6)' }} />
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 flex flex-col gap-2 p-4 overflow-hidden">
                <div className="text-[10px] text-center mb-1" style={{ color: 'rgba(245,239,228,0.3)' }}>Hoje · 14:02</div>
                {chatMessages.map((m, i) => (
                  <div
                    key={i}
                    className={`flex ${m.side === 'out' ? 'justify-end' : 'justify-start'}`}
                    style={{ animation: isVisible ? `bubbleIn 0.3s ease-out ${0.2 + i * 0.09}s both` : 'none', opacity: isVisible ? undefined : 0 }}
                  >
                    <div
                      className="max-w-[70%] px-3 py-2 text-xs leading-relaxed"
                      style={{
                        background: m.side === 'out' ? 'var(--coral)' : 'rgba(255,255,255,0.08)',
                        color: m.side === 'out' ? '#fff' : '#F5EFE4',
                        borderRadius: '16px',
                        ...(m.side === 'out' ? { borderTopRightRadius: '4px' } : { borderTopLeftRadius: '4px' }),
                      }}
                    >
                      {m.ai && (
                        <div className="text-[9px] font-bold mb-1 flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.8)', letterSpacing: '0.06em' }}>
                          <span>🤖</span>
                          <span>IA · respondeu em 3s</span>
                        </div>
                      )}
                      {m.text}
                      {m.side === 'out' && (
                        <div className="flex items-center justify-end gap-0.5 mt-0.5">
                          <svg width="14" height="8" viewBox="0 0 16 8" fill="none">
                            <path d="M1 5L4.5 8L10.5 1" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.5 5L9 8L15 1" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                <div
                  className="flex justify-start"
                  style={{ animation: isVisible ? 'bubbleIn 0.3s ease-out 1.0s both' : 'none', opacity: isVisible ? undefined : 0 }}
                >
                  <div
                    className="px-3 py-2.5 flex gap-1.5 items-center"
                    style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '16px', borderTopLeftRadius: '4px' }}
                  >
                    {[0, 0.2, 0.4].map((d, i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          background: 'rgba(245,239,228,0.5)',
                          animation: `typing 1.2s ${d}s ease-in-out infinite`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Input */}
              <div
                className="flex items-center gap-2 px-3 py-2.5 border-t flex-shrink-0"
                style={{
                  borderColor: 'rgba(255,255,255,0.06)',
                  background: 'rgba(26,24,22,0.95)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                {/* Emoji */}
                <button className="flex-shrink-0 opacity-40 hover:opacity-70 transition-opacity">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(245,239,228,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3"/>
                    <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3"/>
                  </svg>
                </button>
                {/* Attach */}
                <button className="flex-shrink-0 opacity-40 hover:opacity-70 transition-opacity">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(245,239,228,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/>
                  </svg>
                </button>
                <div
                  className="flex-1 rounded-xl px-3 py-1.5 text-xs"
                  style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(245,239,228,0.3)' }}
                >
                  Digite sua mensagem…
                </div>
                {/* Mic */}
                <button className="flex-shrink-0 opacity-40 hover:opacity-70 transition-opacity">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(245,239,228,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                    <line x1="12" y1="19" x2="12" y2="23"/>
                    <line x1="8" y1="23" x2="16" y2="23"/>
                  </svg>
                </button>
                <div
                  className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 transition-all hover:opacity-90"
                  style={{ background: 'var(--coral)' }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" fill="white" stroke="none" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right panel */}
            <div
              className="w-48 flex-shrink-0 border-l p-4 hidden xl:flex flex-col gap-5"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ background: 'linear-gradient(135deg,#FFD37A,#FF7A59)' }}
                >
                  JS
                </div>
                <div>
                  <div className="text-xs font-semibold" style={{ color: '#F5EFE4' }}>João Silva</div>
                  <div className="text-[9px]" style={{ color: 'rgba(245,239,228,0.4)' }}>desde mar/2025</div>
                </div>
              </div>

              <div
                className="rounded-xl p-3 text-[10px] leading-relaxed"
                style={{ background: 'rgba(232,146,60,0.12)', border: '1px solid rgba(232,146,60,0.25)' }}
              >
                <div className="font-bold mb-1.5" style={{ color: '#E8923C' }}>✨ Resumo da IA</div>
                <span style={{ color: 'rgba(245,239,228,0.7)' }}>
                  Quer 500 un. kit 400g. Fechou R$ 890, 3 dias úteis. Pronto pra emissão.
                </span>
              </div>

              <div>
                <div className="text-[9px] font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(245,239,228,0.3)' }}>Informações</div>
                {[
                  { k: 'Fila', v: 'Vendas' },
                  { k: 'Atendente', v: 'Ana Paula' },
                  { k: 'Ticket', v: '#2841' },
                ].map(r => (
                  <div key={r.k} className="flex justify-between text-[10px] mb-1">
                    <span style={{ color: 'rgba(245,239,228,0.4)' }}>{r.k}</span>
                    <span style={{ color: '#F5EFE4' }}>{r.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
