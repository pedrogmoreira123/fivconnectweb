import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
  {
    question: 'Como funciona a conexão com o WhatsApp?',
    answer:
      'A conexão é simples, rápida e estável. Você escaneia um QR Code e seu número já está integrado ao painel em minutos. Sem processos burocráticos de aprovação. Basta conectar e começar a atender.',
  },
  {
    question: 'Posso criar fluxos de chatbot personalizados?',
    answer:
      'Sim! O FivConnect tem um editor de fluxos de chatbot completo. Você cria menus interativos, perguntas, respostas condicionais, coleta de dados e encaminha para filas ou atendentes. Tudo sem código.',
  },
  {
    question: 'Como funciona o Agente de IA?',
    answer:
      'Você cria e treina seu próprio agente de IA. Define a personalidade, o tom de voz, a base de conhecimento da sua empresa e as regras de comportamento. O agente atende seus clientes no seu estilo, e escala para um humano quando necessário.',
  },
  {
    question: 'O que é o Eddie?',
    answer:
      'Eddie é o assistente de ajuda interno da plataforma FivConnect. Ele está disponível na Central de Ajuda para tirar dúvidas sobre como usar o sistema, configurar recursos e resolver problemas técnicos. É diferente dos agentes de IA que você cria para atender seus clientes.',
  },
  {
    question: 'Preciso instalar algum aplicativo?',
    answer:
      'Não. O FivConnect é 100% baseado na web. Acesse pelo navegador de qualquer computador, tablet ou celular. Sem instalação, sem complicação.',
  },
  {
    question: 'Como funciona o período de teste gratuito?',
    answer:
      'Todos os planos têm 14 dias de teste grátis, sem necessidade de cartão de crédito. Você experimenta todos os recursos do plano escolhido e só paga se quiser continuar.',
  },
  {
    question: 'Quantos números de WhatsApp posso conectar?',
    answer:
      'Você pode conectar múltiplos números ao mesmo painel. Cada número funciona como um canal separado com suas próprias filas, chatbots e atendentes.',
  },
  {
    question: 'Posso cancelar quando quiser?',
    answer:
      'Sim, sem fidelidade. Você cancela a qualquer momento direto pelo painel, sem precisar falar com ninguém. O acesso continua até o fim do período pago.',
  },
  {
    question: 'Os dados são seguros?',
    answer:
      'Seus dados ficam em servidores seguros com criptografia em trânsito e em repouso. Seguimos as melhores práticas de segurança e estamos em conformidade com a LGPD.',
  },
  {
    question: 'Tem suporte técnico?',
    answer:
      'Sim! Plano Básico: suporte por email. Plano Profissional: suporte prioritário via WhatsApp. Plano Enterprise: suporte dedicado 24/7 com SLA garantido.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white dark:bg-[hsl(240,11%,23%)] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-gray-900 dark:text-white">{question}</span>
        <ChevronDown
          size={16}
          className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 bg-white dark:bg-[hsl(240,11%,23%)]">
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-24 bg-gray-50 dark:bg-[hsl(240,11%,18%)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 text-xs font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Ainda tem dúvidas?{' '}
            <a href="mailto:suporte@fivconnect.net" className="text-orange-500 dark:text-orange-400 hover:underline">
              Fale conosco
            </a>
          </p>
        </div>

        {/* FAQ List */}
        <div
          className={`space-y-3 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {faqs.map(faq => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
