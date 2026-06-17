import { Shield, Clock, Lock, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function TrustSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28 sm:py-32" style={{ background: 'var(--cream-2)' }}>
      <div className="max-w-[1200px] mx-auto px-7" ref={ref}>

        {/* Headline */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow mb-5 block">Por que confiar no Fi.V Connect?</span>
          <h2
            className="text-4xl sm:text-5xl mb-5"
            style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}
          >
            Produto novo.{' '}
            <span style={{ color: 'var(--coral)', fontStyle: 'italic', fontWeight: 500 }}>Risco zero.</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--ink-2)' }}>
            O Fi.V Connect está em acesso antecipado. Por isso oferecemos{' '}
            <strong style={{ color: 'var(--ink)' }}>7 dias completamente grátis</strong>, sem cartão de crédito, sem contrato.
            Você experimenta com a sua equipe. Se não ver valor, não cobra nada.
          </p>
        </div>

        {/* Credential cards */}
        <div
          className={`grid md:grid-cols-2 gap-5 mb-14 max-w-2xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '100ms' }}
        >
          {[
            {
              icon: Shield,
              title: 'Criptografia AES-256',
              description: 'Todas as conversas e dados com criptografia de nível bancário.',
            },
            {
              icon: Clock,
              title: 'Monitoramento 24h',
              description: 'Uptime monitorado continuamente. Você atende, a gente cuida da infra.',
            },
          ].map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-7 rounded-2xl border hover:-translate-y-1 transition-all duration-300"
              style={{ background: 'var(--cream)', borderColor: 'var(--line)' }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(255,122,89,0.12)' }}
              >
                <Icon size={20} style={{ color: 'var(--coral)' }} />
              </div>
              <h3
                className="text-lg font-semibold mb-1.5"
                style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'var(--ink)' }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-2)' }}>{description}</p>
            </div>
          ))}
        </div>

        {/* Founder card */}
        <div
          className={`mb-14 rounded-2xl border p-8 sm:p-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ background: 'var(--cream)', borderColor: 'var(--line)', transitionDelay: '200ms' }}
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-7">
            <div className="flex-shrink-0">
              <img
                src="/foto-fundador.jpg"
                alt="Pedro Gabriel — Fundador do Fi.V Connect"
                className="w-20 h-20 rounded-full object-cover object-top"
                style={{ border: '2px solid rgba(255,122,89,0.3)' }}
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p
                className="text-base leading-relaxed mb-5 italic"
                style={{ color: 'var(--ink-2)', fontFamily: 'Fraunces, Georgia, serif' }}
              >
                "Construí o Fi.V Connect porque vi de perto como pequenas empresas perdem clientes todo dia por falta de organização no WhatsApp. Quero que você tenha a mesma estrutura de uma empresa grande, sem precisar de time de TI."
              </p>
              <div className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>Pedro Gabriel</div>
              <div className="text-xs font-medium mt-0.5" style={{ color: 'var(--coral)' }}>Fundador, Fi.V Connect</div>
            </div>
          </div>
        </div>

        {/* Guarantee banner */}
        <div
          className={`rounded-2xl border overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ background: 'var(--cream)', borderColor: 'var(--line)', transitionDelay: '300ms' }}
        >
          <div className="relative px-8 py-14 text-center overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(255,122,89,0.08) 0%, transparent 60%)' }}
            />
            <div className="relative">
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
                style={{ background: 'rgba(255,122,89,0.1)', border: '1px solid rgba(255,122,89,0.2)' }}
              >
                <Lock size={26} style={{ color: 'var(--coral)' }} />
              </div>
              <h2
                className="text-4xl sm:text-5xl mb-4"
                style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}
              >
                Garantia de{' '}
                <span style={{ color: 'var(--coral)', fontStyle: 'italic', fontWeight: 500 }}>7 dias</span>
              </h2>
              <p className="text-lg max-w-lg mx-auto mb-8 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                Teste com sua equipe. Se não funcionar para o seu negócio, cancele sem custo.{' '}
                <strong style={{ color: 'var(--ink)' }}>Sem multa, sem pergunta, sem burocracia.</strong>
              </p>
              <a
                href="https://app.fivconnect.net/cadastro"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
                style={{ background: 'var(--coral)', boxShadow: '0 8px 24px rgba(255,122,89,0.25)' }}
              >
                Testar grátis por 7 dias
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
