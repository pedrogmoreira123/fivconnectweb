import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MessageCircle, TicketCheck, GitBranch, Bot } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Conecte seu WhatsApp',
    description:
      'Em minutos seu número está conectado ao FivConnect. Processo simples, rápido e estável. Todas as mensagens chegam em tempo real, organizadas por cliente.',
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
      'Cada conversa vira um ticket com status, prioridade e fila. Sua equipe sabe exatamente o que fazer e quando. Nada se perde.',
    color: 'from-blue-400 to-blue-600',
    lightBg: 'bg-blue-50 dark:bg-blue-950/20',
    lightBorder: 'border-blue-200 dark:border-blue-800',
    textColor: 'text-blue-700 dark:text-blue-400',
  },
  {
    icon: GitBranch,
    number: '03',
    title: 'Crie fluxos de chatbot',
    description:
      'Monte fluxos visuais de atendimento automatizado: menus, perguntas, respostas automáticas e encaminhamento para filas. Você decide cada etapa.',
    color: 'from-yellow-400 to-amber-500',
    lightBg: 'bg-yellow-50 dark:bg-yellow-950/20',
    lightBorder: 'border-yellow-200 dark:border-yellow-800',
    textColor: 'text-yellow-700 dark:text-yellow-400',
  },
  {
    icon: Bot,
    number: '04',
    title: 'Treine seu Agente de IA',
    description:
      'Crie agentes de IA personalizados para sua empresa. Defina a personalidade, o conhecimento e o comportamento. O agente responde, escala para humanos e aprende.',
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
            Do zero ao atendimento inteligente em 4 passos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Configure tudo no seu ritmo. Sem código, sem complicação.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600 z-0 -translate-x-4" />
                )}

                <div className={`relative z-10 p-7 rounded-2xl border ${step.lightBg} ${step.lightBorder} h-full`}>
                  {/* Number */}
                  <div className={`text-4xl font-black mb-3 ${step.textColor} opacity-20`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon size={20} className="text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
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
