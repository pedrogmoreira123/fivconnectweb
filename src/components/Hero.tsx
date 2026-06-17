import { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { trackContatoConversion } from '../gtag';

const bubbles = [
  { side: 'in',  text: 'Olá! Vocês ainda têm o kit Gráfica Sol?', time: '14:02', delay: 0.1 },
  { side: 'out', text: 'Oi João! Temos sim 🙂 300g, 400g e 450g. Quer que eu mande o orçamento?', time: '14:02', delay: 0.9, ai: true },
  { side: 'in',  text: 'Manda o de 400g pra 500 unidades', time: '14:03', delay: 1.7 },
  { side: 'out', text: 'Fechado. R$ 890 com entrega em 3 dias úteis. Confirmo?', time: '14:03', delay: 2.5, ai: true },
  { side: 'in',  text: 'Confirmo ✅', time: '14:03', delay: 3.3 },
];

const heroStats = [
  { n: '3', unit: 's', label: 'tempo médio da IA\npara responder' },
  { n: '24', unit: '/7', label: 'atendimento\nmesmo fora do expediente' },
  { n: '1', unit: ' nº', label: 'toda a equipe no\nmesmo WhatsApp' },
];

function PhoneMockup() {
  const [step, setStep] = useState(0);

  // Roda uma única vez: revela os balões um a um e para no último.
  useEffect(() => {
    if (step >= bubbles.length) return;
    const t = setTimeout(() => setStep(s => s + 1), step === 0 ? 500 : 1100);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <div className="relative w-full max-w-[300px] mx-auto">
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-[3rem] blur-3xl opacity-25"
        style={{ background: 'radial-gradient(ellipse, #FF7A59 0%, #E8923C 60%, transparent 100%)' }}
      />

      {/* Phone frame */}
      <div
        className="relative rounded-[2.8rem] shadow-2xl overflow-hidden border-[7px]"
        style={{ borderColor: 'var(--graphite)', background: 'var(--cream-2)' }}
      >
        {/* Notch */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-24 h-[18px] rounded-b-2xl"
          style={{ background: 'var(--graphite)' }}
        />

        {/* Status bar */}
        <div
          className="flex items-center justify-between px-5 pt-2 pb-1 text-[10px] font-semibold"
          style={{ background: 'var(--cream-2)', color: 'var(--ink)' }}
        >
          <span style={{ fontFamily: '"JetBrains Mono", monospace' }}>14:03</span>
          <div className="flex items-center gap-1.5" style={{ color: 'var(--ink)' }}>
            <svg width="15" height="10" viewBox="0 0 18 12" fill="currentColor">
              <rect x="0" y="8" width="3" height="4" rx="1" />
              <rect x="5" y="5" width="3" height="7" rx="1" />
              <rect x="10" y="2" width="3" height="10" rx="1" />
              <rect x="15" y="0" width="3" height="12" rx="1" opacity="0.4" />
            </svg>
            <svg width="13" height="10" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <path d="M1 4.5a10 10 0 0114 0" />
              <path d="M3.5 7a6.5 6.5 0 019 0" />
              <circle cx="8" cy="10" r="0.6" fill="currentColor" stroke="none" />
            </svg>
            <svg width="20" height="11" viewBox="0 0 26 12" fill="none">
              <rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke="currentColor" opacity="0.6" />
              <rect x="2" y="2" width="15" height="8" rx="1.5" fill="currentColor" />
              <rect x="24" y="3.5" width="2" height="5" rx="1" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
        </div>

        {/* App header */}
        <div
          className="flex items-center gap-2.5 px-3 py-2.5 border-b"
          style={{ background: 'var(--cream-2)', borderColor: 'var(--line)' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0"
            style={{ background: 'linear-gradient(135deg,#FFD37A,#FF7A59)' }}
          >
            JS
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-semibold leading-tight" style={{ color: 'var(--ink)' }}>João Silva</div>
            <div className="text-[10px] flex items-center gap-1 leading-tight mt-0.5" style={{ color: 'var(--ink-3)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--green)' }} />
              online · Vendas
            </div>
          </div>
          <span
            className="text-[9px] font-bold px-2 py-1 rounded-full flex-shrink-0"
            style={{ background: 'rgba(255,122,89,0.18)', color: 'var(--coral)', fontFamily: '"JetBrains Mono", monospace' }}
          >
            #2841
          </span>
          <div className="flex flex-col gap-[3px] px-1">
            {[0, 1, 2].map(d => (
              <span key={d} className="w-[3px] h-[3px] rounded-full" style={{ background: 'var(--ink-3)' }} />
            ))}
          </div>
        </div>

        {/* Chat area — altura fixa: as mensagens ancoram embaixo e o excesso é cortado no topo */}
        <div
          className="flex flex-col justify-end gap-2 px-3 py-3 h-[332px] overflow-hidden"
          style={{
            background: 'var(--surface)',
            color: 'var(--ink)',
            backgroundImage: 'radial-gradient(var(--muted) 1px, transparent 0)',
            backgroundSize: '15px 15px',
          }}
        >
          <div className="self-center text-[9px] px-2 py-0.5 rounded-full mb-1 flex-shrink-0" style={{ background: 'var(--muted)', color: 'var(--ink-3)' }}>
            Hoje · 14:02
          </div>
          {bubbles.slice(0, step).map((b, i) => (
            <div
              key={i}
              className={`flex flex-shrink-0 ${b.side === 'out' ? 'justify-end' : 'justify-start'}`}
              style={{ animation: 'bubbleIn 0.35s ease-out both' }}
            >
              <div
                className="max-w-[82%] px-3 py-2 text-[12.5px] leading-snug shadow-sm relative"
                style={{
                  background: b.side === 'out' ? 'var(--coral)' : 'var(--muted)',
                  color: b.side === 'out' ? '#fff' : 'var(--ink)',
                  border: b.side === 'out' ? 'none' : '1px solid var(--line)',
                  borderRadius: '15px',
                  ...(b.side === 'out' ? { borderTopRightRadius: '4px' } : { borderTopLeftRadius: '4px' }),
                }}
              >
                {b.ai && (
                  <span
                    className="flex items-center gap-1 text-[9px] font-bold mb-1"
                    style={{ color: 'rgba(255,255,255,0.9)', letterSpacing: '0.06em' }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l1.6 4.8L18 8l-4.4 1.2L12 14l-1.6-4.8L6 8z" />
                    </svg>
                    IA · respondeu em 3s
                  </span>
                )}
                {b.text}
                <span className="text-[9px] ml-2 float-right mt-1 flex items-center gap-0.5" style={{ opacity: b.side === 'out' ? 0.85 : 0.5 }}>
                  {b.time}
                  {b.side === 'out' && (
                    <svg width="14" height="8" viewBox="0 0 16 8" fill="none" className="inline ml-0.5">
                      <path d="M1 5L4.5 8L10.5 1" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.5 5L9 8L15 1" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </span>
              </div>
            </div>
          ))}

          {/* Indicador de digitação — só enquanto faltam balões (some no fim) */}
          {step > 0 && step < bubbles.length && bubbles[step]?.side === 'out' && (
            <div className="flex justify-end flex-shrink-0" style={{ animation: 'bubbleIn 0.35s ease-out both' }}>
              <div
                className="px-3 py-2.5 shadow-sm flex gap-1.5 items-center"
                style={{ background: 'var(--coral)', borderRadius: '15px', borderTopRightRadius: '4px' }}
              >
                {[0, 0.2, 0.4].map((d, i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: 'rgba(255,255,255,0.85)',
                      animation: `typing 1.2s ${d}s ease-in-out infinite`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input bar */}
        <div
          className="flex items-center gap-2 px-3 py-2.5 border-t"
          style={{ background: 'var(--cream-2)', borderColor: 'var(--line)' }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" />
            <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" />
          </svg>
          <div
            className="flex-1 rounded-full px-3 py-2 text-[11px]"
            style={{ background: 'var(--muted)', color: 'var(--ink-3)' }}
          >
            Digite sua mensagem…
          </div>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: 'var(--coral)' }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" fill="white" stroke="none" />
            </svg>
          </div>
        </div>
      </div>

      {/* Notification float — "cai" do topo uma vez, e fica acima do notch (z-30) */}
      <div
        className="absolute -top-8 right-0 z-30 flex items-center gap-2.5 rounded-xl px-3 py-2.5 shadow-xl border"
        style={{
          background: 'var(--cream)',
          borderColor: 'var(--line)',
          minWidth: '178px',
          animation: 'notifDrop 0.6s cubic-bezier(0.2,0.8,0.2,1) 0.7s both',
        }}
      >
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(47,158,110,0.14)' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <div>
          <div className="text-[11px] font-semibold leading-tight" style={{ color: 'var(--ink)' }}>Nova mensagem</div>
          <div className="text-[10px] leading-tight mt-0.5" style={{ color: 'var(--ink-3)' }}>Maria Eduarda · há 2s</div>
        </div>
      </div>

      {/* Dashboard float */}
      <div
        className="absolute -bottom-3 -left-8 rounded-xl px-3 py-2.5 shadow-xl border"
        style={{ background: 'var(--cream)', borderColor: 'var(--line)', minWidth: '185px' }}
      >
        <div className="text-[10px] font-bold mb-1.5" style={{ color: 'var(--ink)' }}>Ao vivo · Dashboard</div>
        {[
          { l: 'Conversas abertas', n: '11' },
          { l: 'Respondidas pela IA', n: '68%', up: true },
          { l: 'Tempo médio', n: '1m 43s' },
        ].map(row => (
          <div key={row.l} className="flex items-center justify-between text-[10px] mb-0.5">
            <span style={{ color: 'var(--ink-3)' }}>{row.l}</span>
            <span className="font-bold ml-2" style={{ color: row.up ? 'var(--green)' : 'var(--ink)' }}>{row.n}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: 'var(--cream)' }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-24 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: '#FF7A59', opacity: 0.12 }}
        />
        <div
          className="absolute bottom-16 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: '#E8923C', opacity: 0.1 }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-7 pb-20 lg:pb-28 pt-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: Copy */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="eyebrow mb-5 block">Acesso antecipado · Sem cartão de crédito</span>

            <h1
              className="text-[2.8rem] sm:text-5xl lg:text-[3.4rem] mb-6"
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                lineHeight: 1.03,
                color: 'var(--ink)',
              }}
            >
              Do caos{' '}
              <span style={{ color: 'var(--coral)', fontStyle: 'italic', fontWeight: 500 }}>
                ao controle.
              </span>
              <br />
              Um número, toda uma equipe.
            </h1>

            <p className="text-[17px] leading-relaxed mb-8 max-w-[50ch]" style={{ color: 'var(--ink-2)' }}>
              Fi.V Connect é a plataforma que PMEs usam para atender mais rápido no WhatsApp, organizar filas e deixar a IA responder enquanto vocês dormem.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-9">
              <a
                href="https://app.fivconnect.net/cadastro"
                onClick={trackContatoConversion}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-base transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
                style={{ background: 'var(--coral)', boxShadow: '0 8px 24px rgba(255,122,89,0.3)' }}
              >
                Testar grátis por 7 dias
                <ArrowRight size={17} />
              </a>
              <a
                href="#ver-plataforma"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base transition-all border hover:opacity-80"
                style={{ borderColor: 'var(--line-2)', color: 'var(--ink)' }}
              >
                <Play size={14} fill="currentColor" style={{ color: 'var(--coral)' }} />
                Ver demonstração
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-4 mb-10">
              {['Configure em 5 minutos', 'Sem instalar nada', 'Cancele quando quiser'].map(t => (
                <span key={t} className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: 'var(--ink-2)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--coral)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>

            {/* Hero stats */}
            <div
              className="flex gap-8 pt-7 border-t"
              style={{ borderColor: 'var(--line)' }}
            >
              {heroStats.map(s => (
                <div key={s.n}>
                  <div
                    className="text-3xl font-bold leading-none mb-1"
                    style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'var(--ink)' }}
                  >
                    {s.n}
                    <span className="text-xl" style={{ color: 'var(--coral)' }}>{s.unit}</span>
                  </div>
                  <div className="text-[11px] leading-snug" style={{ color: 'var(--ink-3)', whiteSpace: 'pre-line' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className={`flex justify-center lg:justify-end transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <PhoneMockup />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bubbleIn {
          from { opacity: 0; transform: translateY(8px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes typing {
          0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
          30% { opacity: 1; transform: translateY(-2px); }
        }
        @keyframes notifDrop {
          0%   { opacity: 0; transform: translateY(-26px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="notifDrop"] { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}
