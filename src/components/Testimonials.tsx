import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Star } from 'lucide-react';

const EMPRESAS_ATENDIDAS = 20;

const testimonials = [
  {
    name: 'Ana Lima',
    company: 'Pet Shop Focinhos',
    role: 'Proprietária',
    text: 'Antes a gente perdia agendamento todo dia por não responder a tempo. Com o FivConnect, o chatbot confirma, cancela e agenda sozinho — mesmo de madrugada. Triplicou nossa capacidade sem contratar ninguém.',
    initials: 'AL',
    color: 'bg-amber-500',
    stars: 5,
  },
  {
    name: 'Ricardo Souza',
    company: 'Clínica Estética Renov',
    role: 'Gerente Comercial',
    text: 'O relatório de atendimento me mostrou que 40% das mensagens ficavam sem resposta nas primeiras 2 horas. Depois que ativamos o agente de IA, esse número zerou. Cliente satisfeito desde o primeiro contato.',
    initials: 'RS',
    color: 'bg-orange-500',
    stars: 5,
  },
  {
    name: 'Carla Mendes',
    company: 'Multimarcas Rio Store',
    role: 'Diretora de Operações',
    text: 'Nossa equipe de 2 pessoas agora gerencia 3 números de WhatsApp sem se perder. As filas por departamento resolveram um problema que a gente achava que precisava de muito mais gente pra resolver.',
    initials: 'CM',
    color: 'bg-rose-500',
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-cream-50 dark:bg-[hsl(25,8%,13%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 text-xs font-semibold tracking-wider mb-4">
            PROVA SOCIAL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 leading-tight tracking-tight">
            Quem usa, recomenda
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            PMEs de diferentes segmentos já transformaram o atendimento com o FivConnect.
          </p>
        </div>

        {/* Company count stat */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border border-orange-100 dark:border-orange-900/40 rounded-2xl p-8 text-center">
            <div className="text-6xl font-black text-orange-500 dark:text-orange-400 mb-2">
              {EMPRESAS_ATENDIDAS}+
            </div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              empresas já atendidas
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              PMEs de todo o Brasil usando FivConnect para crescer sem perder clientes no WhatsApp
            </p>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[hsl(25,8%,17%)] transition-all duration-700 hover:shadow-md hover:-translate-y-1 flex flex-col ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(i + 2) * 100}ms` }}
            >
              <StarRating count={t.stars} />

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1 mb-6 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                {/* Avatar with initials */}
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">{t.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo row — placeholders */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <p className="text-center text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest font-semibold mb-6">
            Empresas que confiam no FivConnect
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* TODO: substituir pelos logos reais dos clientes parceiros */}
            {['Parceiro 1', 'Parceiro 2', 'Parceiro 3', 'Parceiro 4', 'Parceiro 5'].map((label) => (
              <div
                key={label}
                className="h-10 w-32 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center"
              >
                <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
