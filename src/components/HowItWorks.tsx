import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382a7.7 7.7 0 00-1.9-1.338c-.232-.116-.45-.19-.64-.126-.19.063-.75.854-.96 1.085-.21.232-.407.26-.738.084-.33-.174-1.394-.5-2.653-1.594-.98-.85-1.64-1.9-1.834-2.22-.193-.32-.02-.5.145-.662.148-.146.33-.38.495-.571.165-.19.22-.33.33-.55.11-.22.055-.412-.028-.576-.083-.165-.743-1.79-1.017-2.45-.268-.644-.54-.557-.743-.557-.193 0-.413-.028-.633-.028s-.578.083-.881.413c-.303.33-1.155 1.127-1.155 2.745 0 1.617 1.183 3.18 1.348 3.4.165.22 2.33 3.552 5.635 4.98.787.34 1.4.542 1.878.694.79.25 1.507.215 2.075.13.633-.094 1.947-.795 2.22-1.562.276-.767.276-1.425.193-1.561-.083-.137-.303-.22-.633-.385z" />
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.88.516 3.639 1.414 5.157L2 22l4.843-1.414A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fillOpacity=".3" />
      </svg>
    ),
    title: 'Conecte seu WhatsApp',
    description: 'Processo de 5 minutos. Sem instalar nada, sem código. Seu número fica ativo e já recebe mensagens em tempo real.',
    mini: (
      <div className="flex items-center gap-2 text-[11px]">
        <span className="w-2 h-2 rounded-full" style={{ background: 'var(--green)' }} />
        <span className="font-semibold" style={{ color: 'var(--green)' }}>Conectado</span>
        <span style={{ color: 'var(--ink-3)' }}>· +55 11 94xxx-0213</span>
      </div>
    ),
  },
  {
    number: '02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Configure equipe e filas',
    description: 'Distribua atendimentos por departamento. Cada pessoa vê só o que é dela — sem confusão, sem mensagem perdida.',
    mini: (
      <div className="flex gap-1.5">
        {[
          { label: 'Vendas', bg: 'var(--coral)' },
          { label: 'Suporte', bg: 'var(--green)' },
          { label: 'Financeiro', bg: 'var(--graphite)' },
        ].map(q => (
          <span
            key={q.label}
            className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
            style={{ background: q.bg }}
          >
            {q.label}
          </span>
        ))}
      </div>
    ),
  },
  {
    number: '03',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" />
      </svg>
    ),
    title: 'IA atende enquanto você dorme',
    description: 'O agente inteligente responde fora do horário, escala para humano quando precisa, e passa tudo anotado pro dia seguinte.',
    mini: (
      <div className="flex items-center gap-2 text-[10px]">
        <span className="font-bold font-mono" style={{ color: 'var(--amber-c)', fontFamily: '"JetBrains Mono", monospace' }}>IA</span>
        <span style={{ color: 'var(--ink-2)' }}>"Bom dia! O horário da Dra. é às 14h. Confirmo para você?"</span>
      </div>
    ),
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="como-funciona" className="py-28 sm:py-32" style={{ background: 'var(--cream-2)' }}>
      <div className="max-w-[1200px] mx-auto px-7" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow mb-5 block">Como funciona</span>
          <h2
            className="text-4xl sm:text-5xl mb-5"
            style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}
          >
            Do zero ao atendimento inteligente{' '}
            <span style={{ color: 'var(--coral)', fontStyle: 'italic', fontWeight: 500 }}>em 3 passos.</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--ink-2)' }}>
            Configure tudo no seu ritmo. Sem código, sem consultoria, sem ligação de vendas.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative rounded-2xl p-7 border transition-all duration-700 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: 'var(--cream)',
                borderColor: 'var(--line)',
                transitionDelay: `${i * 100}ms`,
                boxShadow: '0 2px 12px rgba(26,24,22,0.04)',
              }}
            >
              {/* Number */}
              <div
                className="text-5xl font-bold mb-4 leading-none"
                style={{
                  fontFamily: 'Fraunces, Georgia, serif',
                  color: 'var(--ink)',
                  opacity: 0.08,
                }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-white"
                style={{ background: 'var(--coral)' }}
              >
                {step.icon}
              </div>

              <h3
                className="text-lg font-semibold mb-2"
                style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'var(--ink)' }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--ink-2)' }}>
                {step.description}
              </p>

              {/* Mini demo */}
              <div
                className="rounded-xl px-3 py-2.5 border"
                style={{ background: 'var(--cream-2)', borderColor: 'var(--line)' }}
              >
                {step.mini}
              </div>

              {/* Step connector */}
              {i < steps.length - 1 && (
                <div
                  className="absolute top-11 -right-4 w-8 hidden sm:flex items-center justify-center z-10"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--coral)" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '350ms' }}>
          <a
            href="https://app.fivconnect.net/cadastro"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-base transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
            style={{ background: 'var(--coral)', boxShadow: '0 8px 24px rgba(255,122,89,0.25)' }}
          >
            Testar grátis por 7 dias
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <p className="mt-3 text-sm" style={{ color: 'var(--ink-3)' }}>Sem cartão de crédito. Cancele quando quiser.</p>
        </div>
      </div>
    </section>
  );
}
