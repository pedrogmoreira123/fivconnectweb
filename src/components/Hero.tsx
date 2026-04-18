import { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

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

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(s => (s >= bubbles.length ? 0 : s + 1));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-25"
        style={{ background: 'radial-gradient(ellipse, #FF7A59 0%, #E8923C 60%, transparent 100%)' }}
      />

      {/* Phone frame */}
      <div
        className="relative rounded-[2.5rem] shadow-2xl overflow-hidden border-4"
        style={{ borderColor: '#1A1816', background: '#F5EFE4' }}
      >
        {/* WA Header */}
        <div
          className="flex items-center gap-3 px-4 py-3"
          style={{ background: '#075E54' }}
        >
          <svg
            className="text-white opacity-70"
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="white" strokeWidth="2.4" strokeLinecap="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ background: '#128C7E' }}
          >
            JS
          </div>
          <div>
            <div className="text-white text-sm font-semibold leading-none">João Silva</div>
            <div className="text-[#acefeb] text-[10px] leading-none mt-0.5">online · via Fi.V</div>
          </div>
        </div>

        {/* WA Body */}
        <div
          className="flex flex-col gap-2 px-3 py-3 min-h-[300px]"
          style={{ background: '#E7F5DF url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%2300000006\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")' }}
        >
          {bubbles.slice(0, step).map((b, i) => (
            <div
              key={i}
              className={`flex ${b.side === 'out' ? 'justify-end' : 'justify-start'}`}
              style={{ animation: 'bubbleIn 0.35s ease-out both' }}
            >
              <div
                className="max-w-[85%] rounded-xl px-3 py-2 text-[13px] leading-snug shadow-sm relative"
                style={{
                  background: b.side === 'out' ? '#DCF8C6' : '#fff',
                  color: '#1A1816',
                }}
              >
                {b.ai && (
                  <span
                    className="inline-block text-[9px] font-bold mr-1 px-1 py-0.5 rounded"
                    style={{ background: '#E8923C', color: '#fff', letterSpacing: '0.06em' }}
                  >
                    IA
                  </span>
                )}
                {b.text}
                <span className="text-[9px] ml-2 opacity-50 float-right mt-1">{b.time}</span>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {step === bubbles.length && (
            <div className="flex justify-end" style={{ animation: 'bubbleIn 0.35s ease-out both' }}>
              <div
                className="rounded-xl px-3 py-2.5 shadow-sm flex gap-1 items-center"
                style={{ background: '#DCF8C6' }}
              >
                {[0, 0.2, 0.4].map((d, i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: '#075E54',
                      animation: `typing 1.2s ${d}s ease-in-out infinite`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Notification float */}
      <div
        className="absolute -top-3 -right-6 flex items-center gap-2 rounded-xl px-3 py-2 shadow-xl border"
        style={{ background: 'var(--cream)', borderColor: 'var(--line)', minWidth: '170px' }}
      >
        <div
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: 'var(--green)', boxShadow: '0 0 0 3px rgba(47,158,110,0.25)' }}
        />
        <div>
          <div className="text-[11px] font-semibold" style={{ color: 'var(--ink)' }}>Nova mensagem</div>
          <div className="text-[10px]" style={{ color: 'var(--ink-3)' }}>Maria Eduarda · há 2s</div>
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

      {/* Agente tag */}
      <div
        className="absolute top-1/2 -right-4 flex items-center gap-2 rounded-xl px-2.5 py-2 shadow-lg border"
        style={{ background: 'var(--green-soft)', borderColor: 'rgba(47,158,110,0.25)', transform: 'translateY(-50%)' }}
      >
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: 'var(--green)' }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <div>
          <div className="text-[11px] font-semibold" style={{ color: 'var(--green)' }}>Agente respondeu</div>
          <div className="text-[10px]" style={{ color: 'var(--ink-3)' }}>em 3s · automático</div>
        </div>
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-base transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
                style={{ background: 'var(--coral)', boxShadow: '0 8px 24px rgba(255,122,89,0.3)' }}
              >
                Testar grátis por 7 dias
                <ArrowRight size={17} />
              </a>
              <a
                href="#showcase"
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
      `}</style>
    </section>
  );
}
