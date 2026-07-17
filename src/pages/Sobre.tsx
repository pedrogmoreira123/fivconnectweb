import { MessageSquare, ShieldCheck, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Eyebrow from '../components/ui/Eyebrow';
import SectionTitle, { Accent } from '../components/ui/SectionTitle';
import Link from '../components/ui/Link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/*
 * RASCUNHO editável — os textos de história/princípios são propostas
 * para revisão do time. Dados institucionais confirmados pelo negócio.
 */

const PRINCIPLES = [
  {
    icon: <MessageSquare size={18} />,
    title: 'Atendimento é relação, não fila',
    desc: 'Tecnologia serve para a conversa fluir melhor — nunca para colocar um robô entre a empresa e o cliente quando um humano faz falta.',
  },
  {
    icon: <Sparkles size={18} />,
    title: 'I.A com propósito',
    desc: 'A inteligência artificial responde o que foi ensinada, escala para humanos quando precisa e sempre deixa claro o que fez.',
  },
  {
    icon: <ShieldCheck size={18} />,
    title: 'Segurança sem asterisco',
    desc: 'Criptografia forte, auditoria e conformidade com a LGPD em todos os planos — não como recurso premium.',
  },
  {
    icon: <HeartHandshake size={18} />,
    title: 'Feito para PMEs de verdade',
    desc: 'Preço honesto, configuração em minutos e suporte direto. Estrutura de empresa grande, sem exigir time de TI.',
  },
];

function Historia() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Section compact>
      <Container innerRef={ref} className="max-w-[820px]">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Eyebrow className="mb-4">Nossa história</Eyebrow>
          <SectionTitle className="!text-3xl sm:!text-4xl mb-6">
            Do problema real ao <Accent>produto.</Accent>
          </SectionTitle>
          <div className="flex flex-col gap-4 text-[16px] leading-relaxed" style={{ color: 'var(--ink-2)' }}>
            <p>
              A Fi.V Connect nasceu em 2026, em São Bernardo do Campo, de uma observação simples:
              pequenas e médias empresas brasileiras vivem no WhatsApp — mas atendem como se ainda
              fosse um celular só, passando de mão em mão.
            </p>
            <p>
              Conversas se perdem, clientes esperam, ninguém sabe quem respondeu o quê. A estrutura
              que resolveria isso sempre existiu nas grandes empresas: filas, protocolos, métricas,
              automação. O que não existia era uma forma de uma PME ter tudo isso sem projeto de
              implantação, sem consultoria e sem time de TI.
            </p>
            <p>
              É isso que construímos: uma plataforma onde a equipe inteira atende em um único número,
              a inteligência artificial cuida do repetitivo e o gestor enxerga a operação em tempo
              real — do primeiro "oi" ao relatório do fim do mês.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Principios() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Section tone="cream-2" compact>
      <Container innerRef={ref}>
        <div className={`mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Eyebrow className="mb-4">Princípios</Eyebrow>
          <SectionTitle className="!text-3xl sm:!text-4xl">
            No que a gente <Accent>acredita.</Accent>
          </SectionTitle>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {PRINCIPLES.map(p => (
            <div key={p.title} className="rounded-2xl p-6 border" style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}>
              <span className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'var(--coral-soft)', color: 'var(--coral)' }} aria-hidden="true">
                {p.icon}
              </span>
              <h3 className="text-[16px] font-bold mb-2" style={{ color: 'var(--ink)' }}>{p.title}</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: 'var(--ink-2)' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Fundador() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Section compact>
      <Container innerRef={ref} className="max-w-[820px]">
        <div
          className={`rounded-2xl p-8 sm:p-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ background: 'var(--graphite)' }}
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-7">
            <img
              src="/foto-fundador.jpg"
              alt="Pedro Gabriel — Fundador do Fi.V Connect"
              width={96}
              height={96}
              loading="lazy"
              className="w-24 h-24 rounded-full object-cover object-top flex-shrink-0"
              style={{ border: '2px solid rgba(255,122,89,0.4)' }}
            />
            <div className="flex-1 text-center sm:text-left">
              <p className="text-lg leading-relaxed mb-5 italic" style={{ color: 'rgba(245,239,228,0.85)', fontFamily: 'Fraunces, Georgia, serif' }}>
                "Construí o Fi.V Connect porque vi de perto como pequenas empresas perdem clientes
                todo dia por falta de organização no WhatsApp. Quero que você tenha a mesma estrutura
                de uma empresa grande, sem precisar de time de TI."
              </p>
              <div className="text-sm font-semibold" style={{ color: '#F5EFE4' }}>Pedro Gabriel</div>
              <div className="text-xs font-medium mt-0.5" style={{ color: 'var(--amber-c)' }}>Fundador, Fi.V Connect</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function DadosInstitucionais() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Section tone="cream-2" compact>
      <Container innerRef={ref} className="max-w-[820px]">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Eyebrow className="mb-4">Dados institucionais</Eyebrow>
          <div className="rounded-2xl border p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6" style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}>
            {[
              { label: 'Razão social', value: 'F I. V CONNECT LTDA' },
              { label: 'CNPJ', value: '66.624.400/0001-86' },
              { label: 'Endereço', value: 'Rua Gaspar de Souza, 153 — São Bernardo do Campo/SP' },
            ].map(d => (
              <div key={d.label}>
                <div className="text-[10.5px] font-bold uppercase mb-1.5" style={{ color: 'var(--ink-3)', letterSpacing: '0.08em' }}>{d.label}</div>
                <div className="text-[14.5px] font-medium" style={{ color: 'var(--ink)', fontFamily: d.label === 'CNPJ' ? '"JetBrains Mono", monospace' : undefined }}>
                  {d.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-[15px] mb-5" style={{ color: 'var(--ink-2)' }}>
              Quer conversar com a gente? Estamos a uma mensagem de distância.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-base transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: 'var(--coral)', boxShadow: '0 8px 24px rgba(255,122,89,0.3)' }}
            >
              Falar com a equipe
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default function Sobre() {
  return (
    <main>
      <Section className="!pt-40 !pb-4">
        <Container className="text-center">
          <Eyebrow className="mb-5 justify-center">Sobre</Eyebrow>
          <SectionTitle as="h1" className="mb-6">
            Quem está por trás da <Accent>Fi.V Connect.</Accent>
          </SectionTitle>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
            Uma empresa brasileira com uma missão direta: dar a PMEs a mesma estrutura de
            atendimento das grandes — no canal onde o Brasil conversa.
          </p>
        </Container>
      </Section>

      <Historia />
      <Principios />
      <Fundador />
      <DadosInstitucionais />
    </main>
  );
}
