import type { ReactNode, ReactElement, ComponentType, CSSProperties } from 'react';
import {
  Inbox, History, Users, Repeat, Clock, FileText, Activity, Flame, ArrowRight,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/* ── Janela de produto (tema escuro quente, com barra de título) ───────── */
function MockupWindow({ section, children }: { section: string; children: ReactNode }) {
  return (
    <div
      className="rounded-2xl overflow-hidden border shadow-2xl"
      style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'var(--graphite)' }}
    >
      {/* Barra de título */}
      <div
        className="flex items-center gap-3 px-4 py-2.5 border-b"
        style={{ background: 'var(--graphite-2)', borderColor: 'rgba(255,255,255,0.07)' }}
      >
        <div className="flex gap-1.5 flex-shrink-0">
          {['#FF5F56', '#FFBD2E', '#27C93F'].map(c => (
            <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <div
          className="flex-1 mx-auto max-w-[280px] text-center text-[11px] px-3 py-1 rounded-md truncate"
          style={{
            background: 'rgba(255,255,255,0.06)',
            color: 'rgba(245,239,228,0.5)',
            fontFamily: '"JetBrains Mono", monospace',
          }}
        >
          app.fivconnect.net · {section}
        </div>
        {/* espaçador p/ equilibrar os 3 dots */}
        <div className="w-[52px] flex-shrink-0 hidden sm:block" />
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

/* ── 1 · Conversas — inbox (rail + lista + chat com bolha "IA respondeu") ─ */
const inboxConvs = [
  { av: 'JS', name: 'João Silva', msg: 'Confirmo ✅ pode fechar', tag: 'IA respondeu', tagColor: '#E8923C', unread: 2, active: true, bg: 'linear-gradient(135deg,#FFD37A,#FF7A59)' },
  { av: 'ME', name: 'Maria Eduarda', msg: 'Sobre o pacote mensal…', tag: 'nova', tagColor: '#2F9E6E', bg: 'linear-gradient(135deg,#B7D7A0,#2F9E6E)' },
  { av: 'CL', name: 'Carlos Lima', msg: 'Aguardando o boleto', tag: 'Financeiro', tagColor: '#5B8DEF', bg: 'linear-gradient(135deg,#C9BBF2,#6C5CE7)' },
];
const inboxBubbles = [
  { side: 'in', text: 'Vocês ainda têm o kit Gráfica Sol?' },
  { side: 'out', text: 'Temos sim 🙂 Quer o orçamento de 400g?', ai: true },
  { side: 'in', text: 'Manda pra 500 unidades' },
];

function ConversasMockup() {
  return (
    <div className="flex gap-3" style={{ minHeight: '296px' }}>
      {/* Rail */}
      <div
        className="hidden sm:flex w-10 flex-shrink-0 flex-col items-center gap-3 rounded-lg py-3"
        style={{ background: 'rgba(255,255,255,0.03)' }}
      >
        <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: '15px', color: '#F5EFE4' }}>
          Fi<span style={{ color: 'var(--coral)' }}>.</span>
        </span>
        {['rgba(255,122,89,0.9)', 'rgba(245,239,228,0.35)', 'rgba(245,239,228,0.35)'].map((c, i) => (
          <span key={i} className="w-5 h-5 rounded-md" style={{ background: i === 0 ? 'rgba(255,122,89,0.2)' : 'rgba(255,255,255,0.05)', border: `1.5px solid ${c}` }} />
        ))}
      </div>

      {/* Lista de conversas */}
      <div className="w-[44%] sm:w-[42%] flex-shrink-0 flex flex-col gap-1.5">
        <div className="flex gap-1 text-[10px] font-semibold mb-0.5">
          <span className="px-2 py-1 rounded" style={{ background: 'rgba(255,122,89,0.2)', color: 'var(--coral)' }}>Aguardando 4</span>
          <span className="px-2 py-1 rounded" style={{ color: 'rgba(245,239,228,0.4)' }}>Em at. 7</span>
        </div>
        {inboxConvs.map(c => (
          <div
            key={c.av}
            className="flex items-start gap-2 p-2 rounded-lg"
            style={{
              background: c.active ? 'rgba(255,122,89,0.12)' : 'transparent',
              borderLeft: c.active ? '2px solid var(--coral)' : '2px solid transparent',
            }}
          >
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0" style={{ background: c.bg }}>
              {c.av}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[11px] font-semibold truncate" style={{ color: '#F5EFE4' }}>{c.name}</span>
                {c.unread && (
                  <span className="text-[8px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--coral)', color: '#fff' }}>{c.unread}</span>
                )}
              </div>
              <div className="text-[10px] truncate" style={{ color: 'rgba(245,239,228,0.5)' }}>{c.msg}</div>
              <span className="inline-block mt-1 text-[8px] font-semibold px-1.5 py-0.5 rounded-full" style={{ background: c.tagColor + '28', color: c.tagColor }}>
                {c.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Chat */}
      <div className="flex-1 min-w-0 flex flex-col rounded-lg p-2.5" style={{ background: 'rgba(255,255,255,0.03)' }}>
        <div className="flex items-center gap-2 pb-2 mb-2 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-bold" style={{ background: 'linear-gradient(135deg,#FFD37A,#FF7A59)' }}>JS</div>
          <div className="min-w-0">
            <div className="text-[11px] font-semibold truncate" style={{ color: '#F5EFE4' }}>João Silva</div>
            <div className="text-[9px] flex items-center gap-1" style={{ color: 'rgba(245,239,228,0.4)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--green)' }} /> Vendas
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          {inboxBubbles.map((b, i) => (
            <div key={i} className={`flex ${b.side === 'out' ? 'justify-end' : 'justify-start'}`}>
              <div
                className="max-w-[88%] px-2.5 py-1.5 text-[10.5px] leading-snug"
                style={{
                  background: b.side === 'out' ? 'var(--coral)' : 'rgba(255,255,255,0.08)',
                  color: b.side === 'out' ? '#fff' : '#F5EFE4',
                  borderRadius: '12px',
                  ...(b.side === 'out' ? { borderTopRightRadius: '3px' } : { borderTopLeftRadius: '3px' }),
                }}
              >
                {b.ai && (
                  <span className="block text-[8px] font-bold mb-0.5" style={{ color: 'rgba(255,255,255,0.85)', letterSpacing: '0.06em' }}>
                    IA · respondeu em 3s
                  </span>
                )}
                {b.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── 2 · Filas & Tickets — barras de volume por área + tickets ──────────── */
const queues = [
  { label: 'Vendas', count: 7, pct: 100, color: 'var(--coral)' },
  { label: 'Suporte', count: 3, pct: 45, color: 'var(--green)' },
  { label: 'Financeiro', count: 1, pct: 18, color: 'var(--amber-c)' },
];
const tickets = [
  { proto: '#2841', name: 'Renato Paes', queue: 'Vendas', prio: 'Alta', prioColor: 'var(--coral)', av: 'AP', avBg: 'linear-gradient(135deg,#FFB8B0,#E85D4E)' },
  { proto: '#2840', name: 'Bruna Castro', queue: 'Suporte', prio: 'Média', prioColor: 'var(--amber-c)', av: 'LM', avBg: 'linear-gradient(135deg,#B7D7A0,#2F9E6E)' },
];

function FilasMockup() {
  return (
    <div className="flex flex-col gap-4" style={{ minHeight: '296px' }}>
      <div className="flex items-center justify-between">
        <span className="text-[12px] font-semibold" style={{ color: '#F5EFE4' }}>Tickets por fila</span>
        <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(255,122,89,0.18)', color: 'var(--coral)', fontFamily: '"JetBrains Mono", monospace' }}>11 abertos</span>
      </div>

      {/* Barras de volume */}
      <div className="flex flex-col gap-2.5">
        {queues.map(q => (
          <div key={q.label} className="flex items-center gap-3">
            <span className="w-20 flex-shrink-0 text-[11px] font-medium flex items-center gap-1.5" style={{ color: 'rgba(245,239,228,0.75)' }}>
              <span className="w-2 h-2 rounded-full" style={{ background: q.color }} />
              {q.label}
            </span>
            <div className="flex-1 h-2.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <div className="h-full rounded-full" style={{ width: `${q.pct}%`, background: q.color }} />
            </div>
            <span className="w-5 text-right text-[11px] font-bold" style={{ color: q.color, fontFamily: '"JetBrains Mono", monospace' }}>{q.count}</span>
          </div>
        ))}
      </div>

      {/* Tickets */}
      <div className="flex flex-col gap-2 pt-1">
        {tickets.map(t => (
          <div
            key={t.proto}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0" style={{ background: t.avBg }}>{t.av}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-semibold truncate" style={{ color: '#F5EFE4' }}>{t.name}</span>
                <span className="text-[9px]" style={{ color: 'rgba(245,239,228,0.4)', fontFamily: '"JetBrains Mono", monospace' }}>{t.proto}</span>
              </div>
              <span className="text-[10px]" style={{ color: 'rgba(245,239,228,0.5)' }}>Fila {t.queue}</span>
            </div>
            <span className="text-[9px] font-bold px-2 py-1 rounded-full flex-shrink-0" style={{ background: t.prioColor + '22', color: t.prioColor }}>{t.prio}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 3 · Agente de I.A — resumo gerado + stats + puxar atendimento ──────── */
function AgenteMockup() {
  return (
    <div className="flex flex-col gap-3" style={{ minHeight: '296px' }}>
      <div className="flex items-center justify-between pb-3" style={{ borderBottom: '1px solid rgba(245,239,228,0.08)' }}>
        <span className="text-[11px]" style={{ color: 'rgba(245,239,228,0.5)', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.04em' }}>PROT · 2026-04812</span>
        <span className="flex items-center gap-1.5 text-[11px] font-semibold" style={{ color: 'var(--amber-c)' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--amber-c)', boxShadow: '0 0 0 3px rgba(232,146,60,0.2)' }} />
          Transferido para humano
        </span>
      </div>

      <div className="rounded-lg p-4 flex flex-col gap-2" style={{ background: 'rgba(232,146,60,0.08)', border: '1px solid rgba(232,146,60,0.2)' }}>
        <span className="text-[10px] font-bold uppercase" style={{ color: 'var(--amber-c)', letterSpacing: '0.1em' }}>Resumo gerado pelo Agente I.A</span>
        <p className="text-[12.5px] leading-relaxed" style={{ color: 'rgba(245,239,228,0.85)' }}>
          <strong style={{ color: '#F5EFE4' }}>Ana Beatriz</strong> perguntou sobre entrega para{' '}
          <strong style={{ color: '#F5EFE4' }}>Curitiba</strong>. Confirmei cobertura, frete de{' '}
          <strong style={{ color: '#F5EFE4' }}>R$ 14,90</strong> e prazo de 2–3 dias úteis. Cliente{' '}
          <strong style={{ color: '#F5EFE4' }}>aceitou prosseguir</strong> e quer finalizar o pedido.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 pt-2" style={{ borderTop: '1px solid rgba(245,239,228,0.08)' }}>
        {[
          { label: 'Duração', value: '2m 14s' },
          { label: 'Mensagens', value: '8' },
          { label: 'Próx. fila', value: 'Comercial' },
        ].map(m => (
          <div key={m.label}>
            <span className="text-[9px] uppercase block mb-1" style={{ color: 'rgba(245,239,228,0.4)', letterSpacing: '0.06em', fontFamily: '"JetBrains Mono", monospace' }}>{m.label}</span>
            <span className="text-[15px] font-semibold" style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#F5EFE4' }}>{m.value}</span>
          </div>
        ))}
      </div>

      <div className="w-full py-2.5 rounded-xl text-[13px] font-semibold text-white text-center mt-1" style={{ background: 'var(--coral)' }}>
        Puxar atendimento →
      </div>
    </div>
  );
}

/* ── 4 · Métricas & Relatórios — KPIs + heatmap de picos ────────────────── */
const kpis = [
  { l: 'Conversas hoje', v: '77' },
  { l: 'Tempo médio', v: '1m43s' },
  { l: 'Resolvidas IA', v: '68%' },
  { l: 'CSAT', v: '4.8' },
];
const heatmap = [
  [0, 0, 1, 2, 3, 4, 4, 3, 2, 1],
  [0, 1, 2, 3, 4, 4, 4, 3, 2, 1],
  [0, 1, 2, 4, 4, 4, 4, 3, 2, 1],
  [0, 1, 2, 3, 4, 4, 3, 3, 2, 1],
  [0, 0, 1, 2, 3, 3, 3, 2, 1, 1],
  [0, 0, 0, 1, 1, 2, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
];
const heatDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
const heatColors = ['rgba(255,255,255,0.06)', 'rgba(255,122,89,0.25)', 'rgba(255,122,89,0.45)', 'rgba(255,122,89,0.7)', 'rgba(255,122,89,0.95)'];

function MetricasMockup() {
  return (
    <div className="flex flex-col gap-4" style={{ minHeight: '296px' }}>
      {/* KPIs */}
      <div className="grid grid-cols-4 gap-2">
        {kpis.map(k => (
          <div key={k.l} className="rounded-lg px-2 py-2.5 text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-[16px] font-bold leading-none mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#F5EFE4' }}>{k.v}</div>
            <div className="text-[8.5px] leading-tight" style={{ color: 'rgba(245,239,228,0.45)' }}>{k.l}</div>
          </div>
        ))}
      </div>

      {/* Heatmap */}
      <div className="rounded-lg p-3 flex-1" style={{ background: 'rgba(255,255,255,0.03)' }}>
        <div className="flex items-baseline justify-between mb-2.5">
          <span className="text-[11px] font-semibold" style={{ color: '#F5EFE4' }}>Picos de atendimento</span>
          <span className="text-[9px]" style={{ color: 'rgba(245,239,228,0.4)', fontFamily: '"JetBrains Mono", monospace' }}>últimos 30 dias</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '26px repeat(10, 1fr)', gap: '3px' }}>
          {heatmap.map((row, ri) => (
            <div key={ri} style={{ display: 'contents' }}>
              <span className="flex items-center justify-end pr-1 text-[8px] uppercase" style={{ color: 'rgba(245,239,228,0.4)', fontFamily: '"JetBrains Mono", monospace' }}>
                {heatDays[ri]}
              </span>
              {row.map((val, ci) => (
                <span key={ci} className="rounded-sm" style={{ aspectRatio: '1', background: heatColors[val] }} />
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1.5 mt-2.5 text-[9px]" style={{ color: 'rgba(245,239,228,0.4)' }}>
          <span>menos</span>
          <div className="flex gap-0.5">
            {heatColors.map((c, i) => <span key={i} className="w-2.5 h-2.5 rounded-sm" style={{ background: c }} />)}
          </div>
          <span>mais</span>
        </div>
      </div>
    </div>
  );
}

/* ── Conteúdo das 4 linhas ──────────────────────────────────────────────── */
type Bullet = { icon: ComponentType<{ size?: number; style?: CSSProperties }>; text: string };
type Row = {
  id?: string;
  eyebrow: string;
  titlePre: string;
  titleAccent: string;
  titlePost?: string;
  desc: string;
  bullets: [Bullet, Bullet];
  link: string;
  mockup: () => ReactElement;
};

const rows: Row[] = [
  {
    id: 'ver-plataforma',
    eyebrow: 'Conversas',
    titlePre: 'Toda conversa num só lugar, ',
    titleAccent: 'nada se perde.',
    desc: 'Um único número de WhatsApp para a equipe inteira. Cada mensagem vira um atendimento com responsável, histórico e contexto — e a IA já cuida do primeiro contato.',
    bullets: [
      { icon: Inbox, text: 'Caixa de entrada compartilhada: vários atendentes, um número só.' },
      { icon: History, text: 'Histórico e contexto do cliente sempre à mão, sem trocar de aba.' },
    ],
    link: 'Ver a caixa de entrada',
    mockup: ConversasMockup,
  },
  {
    eyebrow: 'Filas & Tickets',
    titlePre: 'Cada cliente na fila certa, ',
    titleAccent: 'com responsável.',
    desc: 'Distribua os atendimentos por área. Cada conversa vira um ticket com prioridade, dono e protocolo — ninguém fica esperando sem resposta.',
    bullets: [
      { icon: Users, text: 'Filas por departamento: Vendas, Suporte, Financeiro.' },
      { icon: Repeat, text: 'Transferência de tickets em um clique, sem perder o histórico.' },
    ],
    link: 'Conhecer as filas',
    mockup: FilasMockup,
  },
  {
    eyebrow: 'Agente de I.A',
    titlePre: 'A IA atende primeiro, ',
    titleAccent: 'e entrega o resumo.',
    desc: 'Treinada no seu negócio, responde em segundos 24/7. Quando precisa de um humano, transfere a conversa com um resumo pronto do que já aconteceu.',
    bullets: [
      { icon: Clock, text: 'Responde fora do horário e escala pro humano quando precisa.' },
      { icon: FileText, text: 'Resumo automático do atendimento — o time assume sem reler tudo.' },
    ],
    link: 'Ver o agente em ação',
    mockup: AgenteMockup,
  },
  {
    eyebrow: 'Métricas & Relatórios',
    titlePre: 'Dados pra decidir, ',
    titleAccent: 'não pra colecionar.',
    desc: 'Acompanhe volume, tempo de resposta e desempenho por atendente em tempo real. O heatmap mostra seus picos para você escalar a equipe com dado, não no achismo.',
    bullets: [
      { icon: Activity, text: 'KPIs ao vivo: conversas, tempo médio e resolvidas pela IA.' },
      { icon: Flame, text: 'Heatmap de picos e relatórios exportáveis em PDF e Excel.' },
    ],
    link: 'Ver os relatórios',
    mockup: MetricasMockup,
  },
];

const sectionName: Record<string, string> = {
  Conversas: 'Conversas',
  'Filas & Tickets': 'Filas',
  'Agente de I.A': 'Atendimentos',
  'Métricas & Relatórios': 'Relatórios',
};

function FeatureRow({ row, index }: { row: Row; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  const reverse = index % 2 === 1;
  const Mockup = row.mockup;

  return (
    <div
      ref={ref}
      id={row.id}
      className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-28"
    >
      {/* Texto */}
      <div
        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'} ${reverse ? 'lg:order-2' : ''}`}
      >
        <span className="eyebrow mb-4 block">{row.eyebrow}</span>
        <h3
          className="text-3xl sm:text-[2.4rem] mb-4"
          style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.08 }}
        >
          {row.titlePre}
          <span style={{ color: 'var(--coral)', fontStyle: 'italic', fontWeight: 500 }}>{row.titleAccent}</span>
          {row.titlePost}
        </h3>
        <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6 max-w-[48ch]" style={{ color: 'var(--ink-2)' }}>
          {row.desc}
        </p>

        <ul className="flex flex-col gap-3.5 mb-7">
          {row.bullets.map((b, i) => {
            const Icon = b.icon;
            return (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(255,122,89,0.12)' }}
                >
                  <Icon size={15} style={{ color: 'var(--coral)' }} />
                </span>
                <span className="text-[15px] leading-snug" style={{ color: 'var(--ink-2)' }}>{b.text}</span>
              </li>
            );
          })}
        </ul>

        <a
          href="https://app.fivconnect.net/cadastro"
          className="group inline-flex items-center gap-1.5 text-[15px] font-semibold transition-colors"
          style={{ color: 'var(--coral)' }}
        >
          <span className="border-b border-transparent group-hover:border-current transition-colors">{row.link}</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>

      {/* Mockup */}
      <div
        className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'} ${reverse ? 'lg:order-1' : ''}`}
      >
        <MockupWindow section={sectionName[row.eyebrow] ?? row.eyebrow}>
          <Mockup />
        </MockupWindow>
      </div>
    </div>
  );
}

export default function Features() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="funcionalidades" className="py-28 sm:py-32" style={{ background: 'var(--cream)' }}>
      <div className="max-w-[1200px] mx-auto px-7">
        {/* Cabeçalho */}
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-20 sm:mb-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}
        >
          <span className="eyebrow mb-5 block">Funcionalidades</span>
          <h2
            className="text-4xl sm:text-5xl mb-5"
            style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}
          >
            Tudo que você precisa,{' '}
            <span style={{ color: 'var(--amber-c)', fontStyle: 'italic', fontWeight: 500 }}>nada que você não precisa.</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--ink-2)' }}>
            Quatro frentes, uma plataforma. Conversas, filas, IA e métricas — pensadas para PMEs crescerem sem perder a qualidade no atendimento.
          </p>
        </div>

        {/* Linhas alternadas */}
        <div className="flex flex-col gap-24 sm:gap-32">
          {rows.map((row, i) => (
            <FeatureRow key={row.eyebrow} row={row} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
