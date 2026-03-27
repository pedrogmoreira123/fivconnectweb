import { Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Ana Rodrigues',
    role: 'Gerente de Atendimento',
    company: 'Loja da Ana',
    avatar: 'AR',
    avatarColor: 'from-pink-400 to-rose-500',
    rating: 5,
    text: 'O FivConnect transformou nosso atendimento. Antes perdíamos mensagens, hoje respondemos tudo em minutos. O agente de IA é incrível!',
  },
  {
    name: 'Carlos Mendes',
    role: 'Fundador',
    company: 'TechSolutions',
    avatar: 'CM',
    avatarColor: 'from-orange-400 to-orange-600',
    rating: 5,
    text: 'Economizamos 30% do tempo da equipe com as automações. O painel é intuitivo e os relatórios nos ajudam a tomar decisões melhores.',
  },
  {
    name: 'Fernanda Lima',
    role: 'Diretora Comercial',
    company: 'Bella Moda',
    avatar: 'FL',
    avatarColor: 'from-purple-400 to-violet-600',
    rating: 5,
    text: 'Nossa taxa de conversão aumentou depois que começamos a usar o Eddie para responder perguntas frequentes. Vale cada centavo!',
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-white dark:bg-[hsl(240,11%,20%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 text-xs font-semibold mb-4">
            DEPOIMENTOS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Quem usa, recomenda
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Empresas de todos os segmentos já transformaram seu atendimento com FivConnect.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[hsl(240,11%,23%)] transition-all duration-700 hover:shadow-md hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">{t.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
