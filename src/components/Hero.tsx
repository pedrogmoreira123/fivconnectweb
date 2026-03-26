import { useEffect, useState } from 'react';
import { ArrowRight, Play, MessageCircle, CheckCircle, Clock } from 'lucide-react';

const stats = [
  { value: '+500', label: 'Empresas Atendidas' },
  { value: '98%', label: 'Satisfação dos Clientes' },
  { value: '3x', label: 'Mais Produtividade' },
];

// Mock dashboard preview component
function DashboardMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl rounded-3xl" />

      {/* Main dashboard card */}
      <div className="relative bg-white dark:bg-[hsl(240,11%,23%)] rounded-2xl shadow-2xl border border-gray-200/80 dark:border-white/10 overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-[hsl(240,11%,18%)] border-b border-gray-200 dark:border-white/10">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <span className="ml-2 text-xs text-gray-400 font-mono">app.fivconnect.net</span>
        </div>

        <div className="flex h-72 sm:h-80">
          {/* Sidebar */}
          <div className="w-48 sm:w-56 bg-gray-50 dark:bg-[hsl(240,11%,21%)] border-r border-gray-200 dark:border-white/10 p-3 hidden sm:block">
            <div className="space-y-1">
              {['Dashboard', 'Conversas', 'Tickets', 'IA (Eddie)', 'Relatórios'].map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium ${
                    i === 1
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-white' : 'bg-gray-300 dark:bg-gray-600'}`} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-4 overflow-hidden">
            {/* KPI row */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { label: 'Abertas', value: '24', color: 'text-blue-600 dark:text-blue-400', icon: MessageCircle },
                { label: 'Resolvidas', value: '187', color: 'text-green-600 dark:text-green-400', icon: CheckCircle },
                { label: 'Espera', value: '4m', color: 'text-orange-600 dark:text-orange-400', icon: Clock },
              ].map(({ label, value, color, icon: Icon }) => (
                <div key={label} className="bg-gray-50 dark:bg-white/5 rounded-lg p-2 text-center">
                  <Icon size={14} className={`mx-auto mb-1 ${color}`} />
                  <div className={`text-lg font-bold ${color}`}>{value}</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400">{label}</div>
                </div>
              ))}
            </div>

            {/* Conversation list */}
            <div className="space-y-2">
              {[
                { name: 'Maria Oliveira', msg: 'Preciso de ajuda com...', time: '2m', status: 'online' },
                { name: 'João Silva', msg: 'Quando meu pedido ch...', time: '5m', status: 'away' },
                { name: 'Ana Costa', msg: 'Obrigada pelo suporte!', time: '12m', status: 'online' },
              ].map(conv => (
                <div key={conv.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer">
                  <div className="relative flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                      {conv.name[0]}
                    </div>
                    <div className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-[hsl(240,11%,23%)] ${conv.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-gray-900 dark:text-gray-100 truncate">{conv.name}</div>
                    <div className="text-[10px] text-gray-500 dark:text-gray-400 truncate">{conv.msg}</div>
                  </div>
                  <div className="text-[10px] text-gray-400 flex-shrink-0">{conv.time}</div>
                </div>
              ))}
            </div>

            {/* AI badge */}
            <div className="mt-3 flex items-center gap-2 px-3 py-2 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                <span className="text-[8px] text-white font-bold">AI</span>
              </div>
              <span className="text-[10px] text-purple-700 dark:text-purple-300 font-medium">Eddie IA está ativo — respondendo automaticamente</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification */}
      <div className="absolute -top-4 -right-4 bg-white dark:bg-[hsl(240,11%,25%)] rounded-xl shadow-lg border border-gray-200 dark:border-white/10 px-3 py-2 flex items-center gap-2 animate-bounce">
        <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
          <MessageCircle size={12} className="text-green-600 dark:text-green-400" />
        </div>
        <div>
          <div className="text-[10px] font-semibold text-gray-900 dark:text-gray-100">Nova mensagem!</div>
          <div className="text-[9px] text-gray-500 dark:text-gray-400">WhatsApp — João Silva</div>
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
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white dark:from-[hsl(240,11%,18%)] dark:via-[hsl(240,11%,20%)] dark:to-[hsl(240,11%,20%)]">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-400/10 dark:bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-6 border border-blue-200 dark:border-blue-700">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Powered by Claude AI
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Atendimento via{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">
                WhatsApp
              </span>{' '}
              que sua empresa merecia
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-xl">
              Centralize conversas, gerencie tickets e automatize respostas com IA.
              Tudo em um só lugar, sem complicação.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <a
                href="https://app.fivconnect.net/register"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 dark:bg-blue-500 text-white font-semibold text-base hover:bg-blue-700 dark:hover:bg-blue-400 transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                Começar Gratuitamente
                <ArrowRight size={18} />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-gray-200 dark:border-white/20 text-gray-700 dark:text-gray-200 font-semibold text-base hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
              >
                <Play size={16} className="text-blue-600 dark:text-blue-400" />
                Ver Demonstração
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map(stat => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
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
