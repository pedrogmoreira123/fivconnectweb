import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  MessageCircle,
  TicketCheck,
  Sparkles,
  BarChart3,
  Users,
  Paperclip,
  Zap,
  Shield,
} from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: 'WhatsApp Integrado',
    description:
      'Conecte seu número oficial do WhatsApp Business e receba todas as mensagens direto no painel, sem precisar abrir o celular.',
    color: 'from-green-400 to-emerald-500',
    badge: 'WhatsApp API',
  },
  {
    icon: TicketCheck,
    title: 'Gestão de Tickets',
    description:
      'Cada conversa vira um ticket com status (aberto, em andamento, resolvido), prioridade e fila de atendimento.',
    color: 'from-blue-400 to-blue-600',
    badge: 'Produtividade',
  },
  {
    icon: Sparkles,
    title: 'Agente IA — Eddie',
    description:
      'Powered by Claude AI, Eddie responde automaticamente, entende contexto, escala para atendentes humanos e aprende com cada interação.',
    color: 'from-purple-400 to-violet-600',
    badge: 'Claude AI',
    highlight: true,
  },
  {
    icon: BarChart3,
    title: 'Relatórios e Métricas',
    description:
      'Dashboard em tempo real com tickets abertos, tempo médio de espera, volume por fila, atendimentos por agente e muito mais.',
    color: 'from-orange-400 to-amber-500',
    badge: 'Analytics',
  },
  {
    icon: Users,
    title: 'Multi-Atendente',
    description:
      'Vários atendentes simultâneos, filas de atendimento, transferência de tickets e controle de acesso por perfil.',
    color: 'from-cyan-400 to-sky-500',
    badge: 'Equipes',
  },
  {
    icon: Paperclip,
    title: 'Suporte a Mídia',
    description:
      'Envie e receba imagens, áudios, documentos e vídeos diretamente no painel. Tudo organizado na conversa.',
    color: 'from-pink-400 to-rose-500',
    badge: 'Mídia',
  },
  {
    icon: Zap,
    title: 'Automações e Chatbot',
    description:
      'Crie fluxos de chatbot visuais com respostas automáticas, menus interativos e encaminhamento inteligente.',
    color: 'from-yellow-400 to-amber-500',
    badge: 'Automação',
  },
  {
    icon: Shield,
    title: 'Segurança e Controle',
    description:
      'Permissões por perfil, logs de atividade, histórico completo de conversas e dados seguros em nuvem.',
    color: 'from-slate-400 to-slate-600',
    badge: 'Segurança',
  },
];

export default function Features() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="funcionalidades" className="py-24 bg-white dark:bg-[hsl(240,11%,20%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">
            FUNCIONALIDADES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ferramentas pensadas para PMEs que querem crescer sem perder a qualidade no atendimento.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative p-6 rounded-2xl border transition-all duration-700 hover:-translate-y-1 hover:shadow-lg ${
                  feature.highlight
                    ? 'border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/20 ring-1 ring-purple-300 dark:ring-purple-700'
                    : 'border-gray-200 dark:border-white/10 bg-white dark:bg-[hsl(240,11%,23%)] hover:border-blue-200 dark:hover:border-blue-800'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {feature.highlight && (
                  <div className="absolute -top-3 left-4">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-600 text-white text-[10px] font-bold">
                      <Sparkles size={10} />
                      IA
                    </span>
                  </div>
                )}

                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-md`}>
                  <Icon size={18} className="text-white" />
                </div>

                <div className="mb-2">
                  <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
