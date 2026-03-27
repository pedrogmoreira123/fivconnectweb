import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Play,
  MessageCircle,
  CheckCircle,
  Clock,
  LayoutDashboard,
  Inbox,
  TicketCheck,
  Bot,
  BarChart3,
  Settings,
  Users,
  Bell,
} from 'lucide-react';
const stats = [
  { value: '+500', label: 'Empresas Atendidas' },
  { value: '98%', label: 'Satisfação dos Clientes' },
  { value: '3x', label: 'Mais Produtividade' },
];

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: false },
  { icon: Inbox, label: 'Conversas', active: true },
  { icon: TicketCheck, label: 'Tickets', active: false },
  { icon: Bot, label: 'Agentes IA', active: false },
  { icon: BarChart3, label: 'Relatórios', active: false },
  { icon: Settings, label: 'Configurações', active: false },
];

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 blur-3xl rounded-3xl" />

      {/* Window */}
      <div className="relative bg-white dark:bg-[hsl(240,11%,23%)] rounded-2xl shadow-2xl border border-gray-200/80 dark:border-white/10 overflow-hidden">

        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-[hsl(240,11%,18%)] border-b border-gray-200 dark:border-white/10">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white dark:bg-white/10 rounded px-3 py-0.5 text-[10px] text-gray-400 font-mono">
              app.fivconnect.net
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <Bell size={12} className="text-gray-400" />
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-[8px] font-bold">A</div>
          </div>
        </div>

        <div className="flex h-[300px] sm:h-[340px]">
          {/* Sidebar */}
          <div className="w-44 bg-gray-50 dark:bg-[hsl(240,11%,20%)] border-r border-gray-200 dark:border-white/10 p-2 hidden sm:flex flex-col gap-0.5">
            {/* Logo area */}
            <div className="px-2 py-2 mb-1">
              <div className="text-xs font-bold text-gray-900 dark:text-white">FivConnect</div>
            </div>
            {sidebarItems.map(({ icon: Icon, label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                  active
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200/60 dark:hover:bg-white/5'
                }`}
              >
                <Icon size={13} />
                {label}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 dark:border-white/10">
              <div className="flex items-center gap-2">
                <Inbox size={14} className="text-orange-500 dark:text-orange-400" />
                <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">Conversas</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 rounded-full font-semibold">24</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users size={12} className="text-gray-400" />
                <span className="text-[10px] text-gray-500 dark:text-gray-400">3 online</span>
              </div>
            </div>

            {/* KPI strip */}
            <div className="grid grid-cols-3 gap-2 px-3 py-2.5 border-b border-gray-100 dark:border-white/10">
              {[
                { label: 'Abertas', value: '24', color: 'text-orange-500 dark:text-orange-400', icon: MessageCircle },
                { label: 'Resolvidas', value: '187', color: 'text-green-600 dark:text-green-400', icon: CheckCircle },
                { label: 'Espera', value: '4m', color: 'text-amber-500 dark:text-amber-400', icon: Clock },
              ].map(({ label, value, color, icon: Icon }) => (
                <div key={label} className="bg-gray-50 dark:bg-white/5 rounded-lg p-2 text-center">
                  <Icon size={12} className={`mx-auto mb-0.5 ${color}`} />
                  <div className={`text-base font-bold ${color}`}>{value}</div>
                  <div className="text-[9px] text-gray-500 dark:text-gray-400">{label}</div>
                </div>
              ))}
            </div>

            {/* Conversation list */}
            <div className="flex-1 overflow-hidden px-2 py-1.5 space-y-1">
              {[
                { name: 'Maria Oliveira', msg: 'Preciso de ajuda com meu pedido...', time: '2m', status: 'online', unread: 2 },
                { name: 'João Silva', msg: 'Quando chega minha entrega?', time: '5m', status: 'away', unread: 0 },
                { name: 'Ana Costa', msg: 'Obrigada pelo atendimento!', time: '12m', status: 'online', unread: 0 },
                { name: 'Carlos Mendes', msg: 'Quero cancelar meu plano', time: '18m', status: 'offline', unread: 1 },
              ].map(conv => (
                <div key={conv.name} className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer">
                  <div className="relative flex-shrink-0">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-[10px] font-bold">
                      {conv.name[0]}
                    </div>
                    <div className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border border-white dark:border-[hsl(240,11%,23%)] ${
                      conv.status === 'online' ? 'bg-green-400' : conv.status === 'away' ? 'bg-yellow-400' : 'bg-gray-300'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-semibold text-gray-900 dark:text-gray-100 truncate">{conv.name}</div>
                    <div className="text-[9px] text-gray-500 dark:text-gray-400 truncate">{conv.msg}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <div className="text-[9px] text-gray-400">{conv.time}</div>
                    {conv.unread > 0 && (
                      <div className="w-4 h-4 rounded-full bg-orange-500 text-white text-[8px] font-bold flex items-center justify-center">{conv.unread}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Agent IA strip */}
            <div className="mx-2 mb-2 flex items-center gap-2 px-2.5 py-1.5 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
              <Bot size={13} className="text-purple-600 dark:text-purple-400 flex-shrink-0" />
              <span className="text-[9px] text-purple-700 dark:text-purple-300 font-medium">Agente IA ativo — respondendo automaticamente</span>
              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification */}
      <div className="absolute -top-4 -right-4 bg-white dark:bg-[hsl(240,11%,25%)] rounded-xl shadow-xl border border-gray-200 dark:border-white/10 px-3 py-2 flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center flex-shrink-0">
          <MessageCircle size={12} className="text-green-600 dark:text-green-400" />
        </div>
        <div>
          <div className="text-[10px] font-semibold text-gray-900 dark:text-gray-100">Nova mensagem!</div>
          <div className="text-[9px] text-gray-500 dark:text-gray-400">João Silva</div>
        </div>
      </div>

      {/* Floating agent badge */}
      <div className="absolute -bottom-4 -left-4 bg-white dark:bg-[hsl(240,11%,25%)] rounded-xl shadow-xl border border-gray-200 dark:border-white/10 px-3 py-2 flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center flex-shrink-0">
          <Bot size={12} className="text-purple-600 dark:text-purple-400" />
        </div>
        <div>
          <div className="text-[10px] font-semibold text-gray-900 dark:text-gray-100">Agente respondeu</div>
          <div className="text-[9px] text-gray-500 dark:text-gray-400">em 3 segundos · automático</div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-orange-50/50 via-white to-white dark:from-[hsl(240,11%,18%)] dark:via-[hsl(240,11%,20%)] dark:to-[hsl(240,11%,20%)]">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-400/10 dark:bg-orange-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-amber-400/10 dark:bg-amber-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 text-xs font-semibold mb-6 border border-orange-200 dark:border-orange-700">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Plataforma de Atendimento Inteligente
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Atendimento via{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-400 dark:from-orange-400 dark:to-amber-300">
                WhatsApp
              </span>{' '}
              que sua empresa merecia
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-xl">
              Conecte-se em segundos, gerencie tickets, crie agentes de IA e fluxos de chatbot personalizados.
              Tudo em um só lugar, sem complicação.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <a
                href="https://app.fivconnect.net/cadastro"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-orange-500 dark:bg-orange-500 text-white font-semibold text-base hover:bg-orange-600 dark:hover:bg-orange-400 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5"
              >
                Começar Gratuitamente
                <ArrowRight size={18} />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-gray-200 dark:border-white/20 text-gray-700 dark:text-gray-200 font-semibold text-base hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
              >
                <Play size={16} className="text-orange-500 dark:text-orange-400" />
                Ver Demonstração
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-8">
              {stats.map(stat => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Mobile app badge */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs text-gray-500 dark:text-gray-400">Aplicativo mobile disponível:</span>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 dark:bg-white/10 text-white dark:text-gray-200 text-xs font-medium border border-gray-700 dark:border-white/10 hover:bg-gray-800 dark:hover:bg-white/20 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true"><path d="M3.18 23.76c.3.17.64.19.96.08l13.05-7.4-2.83-2.83-11.18 10.15zm-1.7-20.1C1.2 4 1 4.5 1 5.14v13.72c0 .64.2 1.14.49 1.48l.08.07 7.69-7.69v-.18L1.56 3.59l-.08.07zm17.84 8.87l-2.21-1.26-3.16 3.16 3.16 3.16 2.24-1.27c.64-.36.64-1.56-.03-1.79zm-17.04 9.1l11.04-10.02-2.83-2.83L2.28 19.63l1 1.01v-.01z"/></svg>
                Google Play
              </a>
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
