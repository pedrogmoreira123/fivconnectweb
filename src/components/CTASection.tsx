import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { trackContatoConversion } from '../gtag';

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24" style={{ background: 'var(--cream)' }}>
      <div className="max-w-[900px] mx-auto px-7 text-center" ref={ref}>
        <div
          className={`relative rounded-3xl overflow-hidden px-10 py-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ background: 'var(--graphite)' }}
        >
          {/* Orbs */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'var(--coral)', opacity: 0.15, transform: 'translate(30%, -40%)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'var(--amber-c)', opacity: 0.1, transform: 'translate(-30%, 40%)' }}
          />

          <div className="relative">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl mb-6"
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontWeight: 600,
                color: '#F5EFE4',
                lineHeight: 1.05,
              }}
            >
              Pronto pra dar à sua equipe um{' '}
              <span style={{ color: 'var(--amber-c)', fontStyle: 'italic', fontWeight: 500 }}>WhatsApp de verdade</span>?
            </h2>

            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'rgba(245,239,228,0.6)' }}>
              Demonstração gratuita, sem compromisso. Em 30 minutos a gente mostra a plataforma rodando — com os dados e o caso de uso do seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contato"
                onClick={trackContatoConversion}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-xl"
                style={{ background: 'var(--coral)', color: '#fff', boxShadow: '0 12px 32px rgba(255,122,89,0.35)' }}
              >
                Agendar demonstração
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://wa.me/5511944745067"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all border"
                style={{
                  borderColor: 'rgba(245,239,228,0.2)',
                  color: 'rgba(245,239,228,0.8)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,239,228,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
              >
                Falar no WhatsApp
              </a>
            </div>

            {/* Meta row */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10 text-[13px]" style={{ color: 'rgba(245,239,228,0.45)' }}>
              <span>Implantação em até 7 dias úteis</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>Treinamento incluso · equipe toda</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>Suporte direto com o time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
