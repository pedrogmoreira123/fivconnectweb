import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  MessageCircle,
  TicketCheck,
  Bot,
  BarChart3,
  Users,
  Paperclip,
  GitBranch,
  Shield,
  Sparkles,
  HelpCircle,
  Smartphone,
  CheckCircle,
} from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: 'Conexão WhatsApp Rápida',
    description:
      'Conecte seu número de WhatsApp em minutos. Processo simples, rápido e estável — sem burocracia, sem longos processos de aprovação.',
    color: 'from-green-400 to-emerald-500',
    badge: 'WhatsApp',
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
    icon: GitBranch,
    title: 'Fluxos de Chatbot',
    description:
      'Crie fluxos visuais de atendimento automatizado: menus interativos, respostas condicionais, coleta de dados e encaminhamento inteligente. Você define as regras.',
    color: 'from-yellow-400 to-amber-500',
    badge: 'Automação',
    highlight: true,
  },
  {
    icon: Bot,
    title: 'Agentes de IA Personalizados',
    description:
      'Crie e treine agentes de IA para atender seus clientes no seu estilo. Defina a personalidade, base de conhecimento e comportamento — o agente trabalha do seu jeito.',
    color: 'from-purple-400 to-violet-600',
    badge: 'IA',
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
    icon: HelpCircle,
    title: 'Central de Ajuda com Eddie',
    description:
      'Eddie é o assistente de ajuda interno da plataforma. Tire dúvidas sobre o sistema, recursos e configurações diretamente pelo chat de suporte.',
    color: 'from-teal-400 to-teal-600',
    badge: 'Suporte',
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

        {/* Mobile App highlight — full width */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-600 to-blue-500 dark:from-blue-500 dark:via-blue-600 dark:to-blue-700 p-8 sm:p-10">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl translate-y-1/2 pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-8">
              {/* Icon + text */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold mb-4">
                  <Smartphone size={13} />
                  APLICATIVO MOBILE — GOOGLE PLAY
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                  Atenda seus clientes da{' '}
                  <span className="text-blue-200">palma da sua mão</span>
                </h3>
                <p className="text-blue-100 text-base leading-relaxed mb-6 max-w-xl">
                  Leve o FivConnect para onde for. Com o app mobile você tem controle total do seu atendimento a qualquer hora, em qualquer lugar — sem precisar abrir o computador.
                </p>

                <ul className="grid sm:grid-cols-2 gap-2 mb-8">
                  {[
                    'Responda conversas em tempo real',
                    'Visualize o dashboard de métricas',
                    'Acompanhe atendimentos abertos',
                    'Gerencie tickets por prioridade',
                    'Receba notificações instantâneas',
                    'Transfira e resolva tickets na hora',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle size={15} className="text-blue-200 flex-shrink-0" />
                      <span className="text-sm text-blue-50">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-blue-600 font-bold text-sm hover:bg-blue-50 transition-colors shadow-lg"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                    <path d="M3.18 23.76c.3.17.64.19.96.08l13.05-7.4-2.83-2.83-11.18 10.15zm-1.7-20.1C1.2 4 1 4.5 1 5.14v13.72c0 .64.2 1.14.49 1.48l.08.07 7.69-7.69v-.18L1.56 3.59l-.08.07zm17.84 8.87l-2.21-1.26-3.16 3.16 3.16 3.16 2.24-1.27c.64-.36.64-1.56-.03-1.79zm-17.04 9.1l11.04-10.02-2.83-2.83L2.28 19.63l1 1.01v-.01z"/>
                  </svg>
                  Baixar no Google Play
                </a>
              </div>

              {/* Phone mockup */}
              <div className="flex-shrink-0 hidden sm:flex items-center justify-center">
                <div className="relative">
                  {/* Phone frame */}
                  <div className="w-48 h-80 rounded-[2.5rem] bg-gray-900 border-4 border-gray-700 shadow-2xl overflow-hidden flex flex-col">
                    {/* Status bar */}
                    <div className="flex items-center justify-between px-5 pt-3 pb-1">
                      <span className="text-[9px] text-white font-semibold">9:41</span>
                      <div className="w-16 h-4 bg-gray-800 rounded-full" />
                      <div className="flex gap-1">
                        <div className="w-3 h-2 bg-white/60 rounded-sm" />
                        <div className="w-1.5 h-2 bg-white/40 rounded-sm" />
                      </div>
                    </div>
                    {/* App content */}
                    <div className="flex-1 bg-white dark:bg-[hsl(240,11%,23%)] mx-1 mb-1 rounded-[1.8rem] overflow-hidden">
                      {/* App header */}
                      <div className="bg-blue-600 px-4 py-3">
                        <div className="text-[10px] text-blue-200 font-medium">FivConnect</div>
                        <div className="text-xs text-white font-bold">Conversas</div>
                      </div>
                      {/* KPI mini */}
                      <div className="grid grid-cols-3 gap-1 p-2">
                        {[
                          { label: 'Abertas', value: '8', color: 'text-blue-600' },
                          { label: 'Resolvidas', value: '42', color: 'text-green-600' },
                          { label: 'Espera', value: '3m', color: 'text-orange-500' },
                        ].map(k => (
                          <div key={k.label} className="bg-gray-50 rounded-lg p-1.5 text-center">
                            <div className={`text-sm font-bold ${k.color}`}>{k.value}</div>
                            <div className="text-[7px] text-gray-400">{k.label}</div>
                          </div>
                        ))}
                      </div>
                      {/* Conversation rows */}
                      <div className="px-2 space-y-1">
                        {[
                          { name: 'Maria O.', msg: 'Preciso de ajuda...', unread: true },
                          { name: 'João S.', msg: 'Obrigado!', unread: false },
                          { name: 'Ana C.', msg: 'Quando chega?', unread: true },
                          { name: 'Carlos M.', msg: 'Ok, entendi.', unread: false },
                        ].map(c => (
                          <div key={c.name} className="flex items-center gap-2 py-1.5 border-b border-gray-100 last:border-0">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-[8px] font-bold flex-shrink-0">
                              {c.name[0]}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[9px] font-semibold text-gray-800 truncate">{c.name}</div>
                              <div className="text-[8px] text-gray-400 truncate">{c.msg}</div>
                            </div>
                            {c.unread && (
                              <div className="w-3 h-3 rounded-full bg-blue-600 flex-shrink-0" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Glow under phone */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-blue-400/30 blur-xl rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      DESTAQUE
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
