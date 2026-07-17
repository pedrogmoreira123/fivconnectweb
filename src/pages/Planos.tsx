import type { ReactNode } from 'react';
import { Check, Minus, ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Eyebrow from '../components/ui/Eyebrow';
import SectionTitle, { Accent } from '../components/ui/SectionTitle';
import CTASection from '../components/CTASection';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { trackContatoConversion } from '../gtag';

/* Valores conforme o cadastro do produto (app.fivconnect.net/cadastro),
   com os módulos por plano definidos pelo negócio:
   Meta Oficial a partir do Básico · Agente de I.A e Chamados a partir do Pro. */

interface Plan {
  slug: string;
  name: string;
  badge?: string;
  description: string;
  price: string;
  period?: string;
  limits: string[];
  features: string[];
  cta: string;
  href: string;
  highlight?: boolean;
}

const PLANS: Plan[] = [
  {
    slug: 'gratis',
    name: 'Gratuito',
    badge: '7 dias grátis',
    description: 'Avaliação completa por 7 dias, sem cartão de crédito.',
    price: 'R$0',
    period: '7 dias',
    limits: ['3 usuários', '1 fila', '1 canal WhatsApp'],
    features: ['Dashboard', 'Atendimentos', 'Clientes', 'Conversas', 'Relatórios'],
    cta: 'Começar grátis',
    href: 'https://app.fivconnect.net/cadastro',
  },
  {
    slug: 'basico',
    name: 'Básico',
    description: 'Para pequenas equipes que estão começando.',
    price: 'R$199',
    period: '/mês',
    limits: ['15 usuários', '5 filas', '1 canal WhatsApp'],
    features: ['Tudo do Gratuito', 'ChatBot (fluxos visuais)', 'API Oficial da Meta'],
    cta: 'Testar 7 dias grátis',
    href: 'https://app.fivconnect.net/cadastro',
  },
  {
    slug: 'pro',
    name: 'Pro',
    badge: 'Mais popular',
    description: 'Para equipes em crescimento que precisam de mais controle.',
    price: 'R$299',
    period: '/mês',
    limits: ['25 usuários', '10 filas', '1 canal WhatsApp'],
    features: ['Tudo do Básico', 'Agente de I.A', 'Chamados (tickets por e-mail)', 'API Externa & Webhooks'],
    cta: 'Testar 7 dias grátis',
    href: 'https://app.fivconnect.net/cadastro',
    highlight: true,
  },
  {
    slug: 'enterprise',
    name: 'Enterprise',
    description: 'Para operações maiores, com necessidades personalizadas.',
    price: 'Sob consulta',
    limits: ['Usuários ilimitados', 'Filas ilimitadas', 'Canais adicionais: especialista'],
    features: ['Tudo do Pro', 'Relatório de Agente I.A', 'Integrações customizadas', 'I.A personalizável'],
    cta: 'Falar com especialista',
    href: 'https://wa.me/5511944745067',
  },
];

/* Tabela comparativa */
type Cell = boolean | string;
interface TableRow {
  label: string;
  values: [Cell, Cell, Cell, Cell]; // Gratuito · Básico · Pro · Enterprise
}
interface TableGroup {
  group: string;
  rows: TableRow[];
}

const TABLE: TableGroup[] = [
  {
    group: 'Limites',
    rows: [
      { label: 'Usuários', values: ['3', '15', '25', 'Ilimitados'] },
      { label: 'Filas de atendimento', values: ['1', '5', '10', 'Ilimitadas'] },
      { label: 'Canais de WhatsApp', values: ['1', '1', '1', '1 + adicionais'] },
    ],
  },
  {
    group: 'Atendimento',
    rows: [
      { label: 'Conversas em tempo real (inbox da equipe)', values: [true, true, true, true] },
      { label: 'Atendimentos com protocolo e histórico', values: [true, true, true, true] },
      { label: 'Cadastro de clientes e empresas (CRM)', values: [true, true, true, true] },
      { label: 'Dashboard e relatórios', values: [true, true, true, true] },
      { label: 'Respostas rápidas, etiquetas e transferências', values: [true, true, true, true] },
    ],
  },
  {
    group: 'Automação e I.A',
    rows: [
      { label: 'ChatBot — editor visual de fluxos', values: [false, true, true, true] },
      { label: 'Agente de I.A (atendimento autônomo 24/7)', values: [false, false, true, true] },
      { label: 'Base de conhecimento da I.A', values: [false, false, true, true] },
      { label: 'Relatório de custo do Agente I.A', values: [false, false, false, true] },
    ],
  },
  {
    group: 'Módulos e integrações',
    rows: [
      { label: 'API Oficial da Meta (templates, janela 24h)', values: [false, true, true, true] },
      { label: 'Chamados — tickets com e-mail bidirecional', values: [false, false, true, true] },
      { label: 'API Externa & Webhooks', values: [false, false, true, true] },
      { label: 'Integrações customizadas', values: [false, false, false, true] },
    ],
  },
  {
    group: 'Segurança',
    rows: [
      { label: 'Criptografia AES-256 e conformidade LGPD', values: [true, true, true, true] },
      { label: 'Permissões por papel e auditoria', values: [true, true, true, true] },
    ],
  },
];

const BILLING_FAQ = [
  {
    q: 'Quais formas de pagamento vocês aceitam?',
    a: 'Cartão de crédito ou boleto bancário, com cobrança mensal. A gestão da assinatura e as faturas ficam disponíveis dentro da própria plataforma, no módulo Financeiro.',
  },
  {
    q: 'Preciso de cartão para testar?',
    a: 'Não. Os 7 dias de avaliação são gratuitos e não pedimos nenhum dado de pagamento no cadastro.',
  },
  {
    q: 'O que acontece quando os 7 dias terminam?',
    a: 'Sua conta fica bloqueada até você escolher um plano pago — mas nenhum dado é perdido. Basta assinar e tudo volta exatamente como estava.',
  },
  {
    q: 'Posso mudar de plano depois?',
    a: 'Sim, o upgrade pode ser feito a qualquer momento pela própria plataforma. No downgrade, a mudança vale a partir do ciclo seguinte.',
  },
  {
    q: 'Como funciona o cancelamento?',
    a: 'Cancele quando quiser, sem multa. O acesso permanece até o fim do período já pago. Na primeira contratação, você tem 30 dias para pedir reembolso integral.',
  },
  {
    q: 'Preciso de mais de um canal de WhatsApp. E agora?',
    a: 'Canais adicionais são contratados com nosso time — fale com um especialista pelo WhatsApp e montamos a configuração ideal para a sua operação.',
  },
];

function PlanCard({ plan, delay, visible }: { plan: Plan; delay: number; visible: boolean }) {
  const dark = plan.highlight;
  const text = (c: string) => (dark ? { light: '#F5EFE4', dim: 'rgba(245,239,228,0.65)' }[c] : { light: 'var(--ink)', dim: 'var(--ink-2)' }[c]);

  return (
    <div
      className={`relative rounded-2xl p-6 border flex flex-col transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{
        background: dark ? 'var(--graphite)' : 'var(--surface)',
        borderColor: dark ? 'transparent' : 'var(--line)',
        boxShadow: dark ? '0 20px 60px rgba(255,122,89,0.25)' : undefined,
        transitionDelay: `${delay}ms`,
      }}
    >
      {plan.badge && (
        <span
          className="absolute -top-2.5 left-6 text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide text-white"
          style={{ background: dark ? 'var(--coral)' : 'var(--green)' }}
        >
          {plan.badge}
        </span>
      )}

      <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif', color: text('light') }}>{plan.name}</h3>
      <p className="text-[12.5px] leading-snug mb-4" style={{ color: text('dim') }}>{plan.description}</p>

      <div className="mb-5">
        <span className="text-[32px] font-bold leading-none" style={{ fontFamily: 'Fraunces, Georgia, serif', color: text('light') }}>{plan.price}</span>
        {plan.period && <span className="text-sm ml-1" style={{ color: text('dim') }}>{plan.period}</span>}
      </div>

      <div className="text-[10px] font-bold uppercase mb-2" style={{ color: dark ? 'var(--amber-c)' : 'var(--ink-3)', letterSpacing: '0.08em' }}>Limites</div>
      <ul className="flex flex-col gap-1.5 mb-4">
        {plan.limits.map(l => (
          <li key={l} className="flex items-center gap-2 text-[13px]" style={{ color: text('dim') }}>
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: dark ? 'var(--amber-c)' : 'var(--coral)' }} />
            {l}
          </li>
        ))}
      </ul>

      <div className="text-[10px] font-bold uppercase mb-2" style={{ color: dark ? 'var(--amber-c)' : 'var(--ink-3)', letterSpacing: '0.08em' }}>Inclui</div>
      <ul className="flex flex-col gap-1.5 mb-6 flex-1">
        {plan.features.map(f => (
          <li key={f} className="flex items-start gap-2 text-[13px]" style={{ color: text('dim') }}>
            <Check size={13} className="flex-shrink-0 mt-0.5" style={{ color: dark ? 'var(--amber-c)' : 'var(--green)' }} />
            {f}
          </li>
        ))}
      </ul>

      <a
        href={plan.href}
        onClick={plan.href.includes('cadastro') ? trackContatoConversion : undefined}
        className="inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90 hover:-translate-y-px"
        style={dark
          ? { background: 'var(--coral)', color: '#fff', boxShadow: '0 8px 24px rgba(255,122,89,0.35)' }
          : { border: '1px solid var(--line-2)', color: 'var(--ink)' }}
      >
        {plan.cta}
        <ArrowRight size={15} />
      </a>
    </div>
  );
}

function CellValue({ value }: { value: Cell }) {
  if (value === true) return <Check size={16} className="mx-auto" style={{ color: 'var(--green)' }} aria-label="Incluído" />;
  if (value === false) return <Minus size={14} className="mx-auto" style={{ color: 'var(--ink-3)', opacity: 0.5 }} aria-label="Não incluído" />;
  return <span className="text-[13px] font-semibold" style={{ color: 'var(--ink)' }}>{value}</span>;
}

function ComparisonTable() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Section tone="cream-2" compact>
      <Container innerRef={ref}>
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Eyebrow className="mb-4 justify-center">Comparativo</Eyebrow>
          <SectionTitle className="!text-3xl sm:!text-4xl mb-4">
            Cada recurso, <Accent>lado a lado.</Accent>
          </SectionTitle>
        </div>

        <div className={`rounded-2xl border overflow-x-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}>
          <table className="w-full min-w-[720px] border-collapse">
            <thead>
              <tr>
                <th className="text-left text-[13px] font-bold px-5 py-4 sticky left-0" style={{ color: 'var(--ink)', background: 'var(--surface)' }}>Recurso</th>
                {PLANS.map(p => (
                  <th key={p.slug} className="text-center text-[13px] font-bold px-4 py-4 whitespace-nowrap" style={{ color: p.highlight ? 'var(--coral-700)' : 'var(--ink)' }}>
                    {p.name}
                    <div className="text-[11px] font-medium mt-0.5" style={{ color: 'var(--ink-3)' }}>{p.price}{p.period ?? ''}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE.map(group => (
                <GroupRows key={group.group} group={group} />
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[12px] mt-4 text-center" style={{ color: 'var(--ink-3)' }}>
          Todos os planos incluem criptografia AES-256, conformidade com a LGPD e acesso via navegador em qualquer dispositivo (PWA).
        </p>
      </Container>
    </Section>
  );
}

function GroupRows({ group }: { group: TableGroup }): ReactNode {
  return (
    <>
      <tr>
        <td colSpan={5} className="px-5 pt-5 pb-2 text-[10.5px] font-bold uppercase" style={{ color: 'var(--coral-700)', letterSpacing: '0.1em', background: 'var(--cream-2)' }}>
          {group.group}
        </td>
      </tr>
      {group.rows.map(row => (
        <tr key={row.label} className="border-t" style={{ borderColor: 'var(--line)' }}>
          <td className="px-5 py-3 text-[13.5px] sticky left-0" style={{ color: 'var(--ink-2)', background: 'var(--surface)' }}>{row.label}</td>
          {row.values.map((v, i) => (
            <td key={i} className="px-4 py-3 text-center">
              <CellValue value={v} />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

function BillingFAQ() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Section compact>
      <Container innerRef={ref} className="max-w-[760px]">
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Eyebrow className="mb-4 justify-center">Cobrança</Eyebrow>
          <SectionTitle className="!text-3xl sm:!text-4xl">
            Dúvidas sobre <Accent>pagamento.</Accent>
          </SectionTitle>
        </div>
        <div className={`flex flex-col transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {BILLING_FAQ.map(item => (
            <details key={item.q} className="group border-b py-4" style={{ borderColor: 'var(--line)' }}>
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-[15.5px] font-semibold" style={{ color: 'var(--ink)' }}>
                {item.q}
                <span className="text-xl leading-none transition-transform group-open:rotate-45" style={{ color: 'var(--coral)' }} aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-[14.5px] leading-relaxed" style={{ color: 'var(--ink-2)' }}>{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default function Planos() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <main>
      <Section className="!pt-40 !pb-20">
        <Container innerRef={ref}>
          <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Eyebrow className="mb-5 justify-center">Planos</Eyebrow>
            <SectionTitle as="h1" className="mb-6">
              Um plano para cada fase <Accent>da sua operação.</Accent>
            </SectionTitle>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
              Comece grátis por 7 dias, sem cartão de crédito. Todos os planos pagos incluem
              suporte e evoluem junto com a sua equipe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-3">
            {PLANS.map((p, i) => (
              <PlanCard key={p.slug} plan={p} delay={100 + i * 80} visible={isVisible} />
            ))}
          </div>
        </Container>
      </Section>

      <ComparisonTable />
      <BillingFAQ />
      <CTASection />
    </main>
  );
}
