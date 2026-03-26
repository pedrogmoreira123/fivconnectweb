import { useState } from 'react';
import { Check, Star, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const plans = [
  {
    id: 'basic',
    name: 'Básico',
    description: 'Ideal para pequenas empresas iniciando no atendimento digital',
    monthlyPrice: 79,
    annualPrice: 790,
    maxUsers: 5,
    maxQueues: 2,
    isPopular: false,
    cta: 'Começar Grátis',
    features: [
      'Até 5 usuários simultâneos',
      '2 filas de atendimento',
      'Gestão de tickets',
      'Histórico de conversas',
      'Relatórios básicos',
      'Chatbot básico',
      'Suporte por email',
    ],
  },
  {
    id: 'professional',
    name: 'Profissional',
    description: 'Para empresas em crescimento que precisam de mais recursos',
    monthlyPrice: 189,
    annualPrice: 1890,
    maxUsers: 25,
    maxQueues: 10,
    isPopular: true,
    cta: 'Assinar Agora',
    features: [
      'Até 25 usuários simultâneos',
      '10 filas de atendimento',
      'Agente IA (Eddie) — powered by Claude',
      'Relatórios avançados com exportação',
      'API completa',
      'Automações e chatbot inteligente',
      'Suporte via WhatsApp prioritário',
      'Dashboard de métricas em tempo real',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Solução completa para grandes empresas e equipes',
    monthlyPrice: 449,
    annualPrice: 4490,
    maxUsers: 100,
    maxQueues: 999,
    isPopular: false,
    cta: 'Falar com Vendas',
    features: [
      'Até 100 usuários simultâneos',
      'Filas ilimitadas',
      'IA avançada com customização',
      'Relatórios personalizados',
      'API premium com webhooks',
      'Automações avançadas',
      'Suporte 24/7 dedicado',
      'Integrações customizadas',
      'SLA garantido',
    ],
  },
];

function getDiscount(monthly: number, annual: number) {
  return Math.round(((monthly * 12 - annual) / (monthly * 12)) * 100);
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="planos" className="py-24 bg-gray-50 dark:bg-[hsl(240,11%,18%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">
            PLANOS E PREÇOS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Planos para todos os tamanhos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Comece grátis e escale conforme seu negócio cresce. Cancele quando quiser.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-white dark:bg-[hsl(240,11%,23%)] rounded-xl border border-gray-200 dark:border-white/10 shadow-sm">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                !annual
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                annual
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Anual
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${annual ? 'bg-blue-500 text-white' : 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400'}`}>
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => {
            const price = annual ? plan.annualPrice : plan.monthlyPrice;
            const period = annual ? '/ano' : '/mês';
            const discount = getDiscount(plan.monthlyPrice, plan.annualPrice);

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 transition-all duration-700 ${
                  plan.isPopular
                    ? 'bg-gradient-to-b from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white shadow-2xl shadow-blue-600/30 scale-105'
                    : 'bg-white dark:bg-[hsl(240,11%,23%)] border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Popular badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-400 text-amber-900 text-xs font-bold shadow-lg">
                      <Star size={12} fill="currentColor" />
                      MAIS POPULAR
                    </div>
                  </div>
                )}

                {/* Plan name */}
                <div className="mb-6">
                  <div className={`flex items-center gap-2 mb-2`}>
                    {plan.id === 'enterprise' && (
                      <Zap size={16} className="text-amber-500" />
                    )}
                    <h3 className={`text-xl font-bold ${plan.isPopular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                      {plan.name}
                    </h3>
                  </div>
                  <p className={`text-sm leading-relaxed ${plan.isPopular ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-sm font-medium ${plan.isPopular ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>R$</span>
                    <span className={`text-4xl font-black ${plan.isPopular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                      {price.toLocaleString('pt-BR')}
                    </span>
                    <span className={`text-sm ${plan.isPopular ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>{period}</span>
                  </div>
                  {annual && (
                    <p className={`text-xs mt-1 font-medium ${plan.isPopular ? 'text-blue-200' : 'text-green-600 dark:text-green-400'}`}>
                      Economia de {discount}% ao ano
                    </p>
                  )}
                </div>

                {/* CTA */}
                <a
                  href={plan.id === 'enterprise' ? 'mailto:vendas@fivconnect.net' : 'https://app.fivconnect.net/register'}
                  className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all mb-8 ${
                    plan.isPopular
                      ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-md'
                      : 'bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-400 shadow-sm'
                  }`}
                >
                  {plan.cta}
                </a>

                {/* Divider */}
                <div className={`border-t mb-6 ${plan.isPopular ? 'border-blue-500' : 'border-gray-100 dark:border-white/10'}`} />

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.isPopular ? 'bg-blue-500' : 'bg-blue-100 dark:bg-blue-900/40'
                      }`}>
                        <Check size={10} className={plan.isPopular ? 'text-white' : 'text-blue-600 dark:text-blue-400'} strokeWidth={3} />
                      </div>
                      <span className={`text-sm ${plan.isPopular ? 'text-blue-50' : 'text-gray-700 dark:text-gray-300'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
          Todos os planos incluem 14 dias grátis. Sem cartão de crédito.{' '}
          <a href="mailto:suporte@fivconnect.net" className="text-blue-600 dark:text-blue-400 hover:underline">
            Dúvidas? Fale conosco.
          </a>
        </p>
      </div>
    </section>
  );
}
