import { ArrowRight, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-white dark:bg-[hsl(240,11%,20%)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>
        <div
          className={`relative rounded-3xl overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 dark:from-blue-500 dark:via-blue-600 dark:to-blue-700" />

          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

          {/* Content */}
          <div className="relative px-8 py-16 sm:px-16 sm:py-20">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 mb-6">
              <MessageCircle size={28} className="text-white" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Comece a atender melhor{' '}
              <span className="text-blue-200">ainda hoje</span>
            </h2>

            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              Junte-se a centenas de empresas que já transformaram o atendimento com FivConnect.
              14 dias grátis, sem cartão de crédito.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.fivconnect.net/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-600 font-bold text-base hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Começar Gratuitamente
                <ArrowRight size={18} />
              </a>
              <a
                href="mailto:vendas@fivconnect.net"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-bold text-base hover:bg-white/10 transition-all"
              >
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
