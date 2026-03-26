import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MessageCircle, TicketCheck, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Receba mensagens',
    description:
      'Seu número de WhatsApp é conectado ao FivConnect. Todas as mensagens chegam em tempo real, organizadas por cliente.',
    color: 'from-green-400 to-emerald-500',
    lightBg: 'bg-green-50 dark:bg-green-950/20',
    lightBorder: 'border-green-200 dark:border-green-800',
    textColor: 'text-green-700 dark:text-green-400',
  },
  {
    icon: TicketCheck,
    number: '02',
    title: 'Gerencie com tickets',
    description:
      'Cada conversa vira um ticket com status, prioridade e fila. Sua equipe sabe exatamente o que fazer e quando.',
    color: 'from-blue-400 to-blue-600',
    lightBg: 'bg-blue-50 dark:bg-blue-950/20',
    lightBorder: 'border-blue-200 dark:border-blue-800',
    textColor: 'text-blue-700 dark:text-blue-400',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Responda com IA',
    description:
      'Eddie, nosso agente de IA powered by Claude, responde automaticamente, escala para humanos quando necessário e aprende com o tempo.',
    color: 'from-purple-400 to-violet-600',
    lightBg: 'bg-purple-50 dark:bg-purple-950/20',
    lightBorder: 'border-purple-200 dark:border-purple-800',
    textColor: 'text-purple-700 dark:text-purple-400',
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="como-funciona" className="py-24 bg-gray-50 dark:bg-[hsl(240,11%,18%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">
            COMO FUNCIONA
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simples do início ao fim
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Em três etapas, seu atendimento fica organizado, rápido e inteligente.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600 z-0 -translate-x-4" />
                )}

                <div className={`relative z-10 p-8 rounded-2xl border ${step.lightBg} ${step.lightBorder} h-full`}>
                  {/* Number */}
                  <div className={`text-5xl font-black mb-4 ${step.textColor} opacity-20`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon size={22} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
