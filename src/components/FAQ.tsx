import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
  {
    question: 'Preciso instalar algum aplicativo ou plugin?',
    answer: 'Não. O Fi.V Connect roda 100% no navegador e como PWA no celular. Você só precisa do seu número de WhatsApp e cinco minutos — sem plugins, sem código, sem consultoria.',
  },
  {
    question: 'A IA pode responder errado pros meus clientes?',
    answer: 'A IA só responde o que você ensina. Você cadastra seu catálogo, horários e respostas padrão — e quando ela não tem certeza, escala automaticamente pra um humano. Nada sai no automático sem você aprovar.',
  },
  {
    question: 'Funciona com WhatsApp normal ou precisa ser Business?',
    answer: 'Funciona com ambos. Recomendamos usar o WhatsApp Business (gratuito) para ter perfil comercial, catálogo e mensagens automáticas nativas.',
  },
  {
    question: 'Meus dados e os dos meus clientes ficam seguros?',
    answer: 'Sim. Toda comunicação usa criptografia AES-256 (padrão bancário) e nossa infraestrutura é 100% brasileira, dentro da LGPD. Você tem controle total sobre quem da sua equipe vê o quê.',
  },
  {
    question: 'E se eu não gostar? Posso cancelar?',
    answer: 'Cancela quando quiser, sem multa, sem pergunta, sem burocracia. Os 7 primeiros dias são totalmente gratuitos — e não pedimos cartão pra começar.',
  },
  {
    question: 'Minha equipe precisa de treinamento pra usar?',
    answer: 'Não. A tela foi desenhada pra parecer WhatsApp do lado direito e inbox de e-mail do lado esquerdo — qualquer atendente entende em menos de 10 minutos. Temos vídeos curtos de 1-2 min pra cada função.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b"
      style={{ borderColor: 'var(--line)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left transition-colors"
        aria-expanded={open}
      >
        <span className="text-base font-semibold" style={{ color: 'var(--ink)' }}>{question}</span>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
          style={{
            background: open ? 'var(--coral)' : 'var(--cream-3)',
            color: open ? '#fff' : 'var(--ink-3)',
          }}
        >
          <svg
            width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"
            style={{ transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-base leading-relaxed" style={{ color: 'var(--ink-2)' }}>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-24" style={{ background: 'var(--cream-2)' }}>
      <div className="max-w-[760px] mx-auto px-7" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow mb-5 block">Perguntas frequentes</span>
          <h2
            className="text-4xl sm:text-5xl mb-5"
            style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}
          >
            Tudo que você quis perguntar{' '}
            <span style={{ color: 'var(--coral)', fontStyle: 'italic', fontWeight: 500 }}>antes de assinar.</span>
          </h2>
        </div>

        {/* FAQ list */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div style={{ borderTop: '1px solid var(--line)' }}>
            {faqs.map(faq => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <p className="mt-8 text-sm text-center" style={{ color: 'var(--ink-3)' }}>
            Ainda com dúvidas?{' '}
            <a
              href="mailto:suporte@fivconnect.net"
              className="font-semibold transition-colors hover:underline"
              style={{ color: 'var(--coral)' }}
            >
              Fale conosco
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
