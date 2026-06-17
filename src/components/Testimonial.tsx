import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Testimonial() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28 sm:py-32" style={{ background: 'var(--cream)' }}>
      <div className="max-w-[1200px] mx-auto px-7" ref={ref}>
        <div
          className={`grid lg:grid-cols-2 gap-10 items-center p-10 sm:p-14 rounded-3xl border transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ background: 'var(--cream-2)', borderColor: 'var(--line)' }}
        >
          {/* Quote */}
          <div>
            <svg
              className="mb-6 opacity-30"
              width="40" height="30" viewBox="0 0 40 30" fill="var(--coral)"
            >
              <path d="M0 30V18C0 9 5 3 15 0l3 4C12 6 9 10 9 15h8v15H0zm22 0V18C22 9 27 3 37 0l3 4c-6 2-9 6-9 11h8v15H22z" />
            </svg>
            <blockquote
              className="text-xl sm:text-2xl leading-relaxed mb-8"
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontWeight: 500,
                color: 'var(--ink)',
                letterSpacing: '-0.01em',
              }}
            >
              "Antes eu atendia no celular e perdia cliente de madrugada. Agora a{' '}
              <span style={{ color: 'var(--coral)', fontStyle: 'italic' }}>IA fecha pedido sozinha</span>
              {' '}e eu só olho o resumo de manhã. Parece mágica."
            </blockquote>

            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #FF7A59, #E8923C)' }}
              >
                RM
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>Ricardo Mendes</div>
                <div className="text-xs" style={{ color: 'var(--ink-3)' }}>Dono · Gráfica Sol · São Paulo, SP</div>
              </div>
            </div>
          </div>

          {/* Metric box */}
          <div
            className="rounded-2xl p-8 text-center"
            style={{ background: 'var(--graphite)' }}
          >
            <div className="text-xs font-semibold tracking-wider uppercase mb-4" style={{ color: 'rgba(245,239,228,0.4)' }}>
              Pedidos fechados fora do expediente
            </div>
            <div
              className="leading-none mb-3"
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontWeight: 700,
                fontSize: '72px',
                color: '#F5EFE4',
              }}
            >
              +43
              <span style={{ fontSize: '32px', color: 'var(--coral)', fontWeight: 500 }}>/mês</span>
            </div>
            <div className="text-sm leading-relaxed" style={{ color: 'rgba(245,239,228,0.5)' }}>
              desde que o agente de IA foi ligado em março. Nenhum cliente ficou sem resposta.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
