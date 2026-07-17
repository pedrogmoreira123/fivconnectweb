import type { ReactNode, ReactElement, ComponentType, CSSProperties } from 'react';
import {
  Inbox, History, Users, Repeat, Clock, FileText, Activity, Flame, ArrowRight,
  GitBranch, Webhook, Mail, Timer,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Link from './ui/Link';

/* ── Paleta dos gráficos (espelha o produto real) ───────────────────────── */
const CHART = {
  purple: '#7C5CFC',
  red: '#EF4444',
  blue: '#3B82F6',
  green: 'var(--green)',
  amber: 'var(--amber-c)',
  gray: 'var(--ink-3)',
};

/* ── Janela de produto — tema CLARO, fiel à UI real (barra do navegador) ── */
function MockupWindow({ section, children }: { section: string; children: ReactNode }) {
  return (
    <div
      className="rounded-2xl overflow-hidden border shadow-2xl"
      style={{ borderColor: 'var(--line-2)', background: 'var(--surface)' }}
    >
      {/* Barra do navegador */}
      <div
        className="flex items-center gap-3 px-4 py-2.5 border-b"
        style={{ background: 'var(--cream-2)', borderColor: 'var(--line)' }}
      >
        <div className="flex gap-1.5 flex-shrink-0">
          {['#FF5F56', '#FFBD2E', '#27C93F'].map(c => (
            <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <div
          className="flex-1 mx-auto max-w-[280px] text-center text-[11px] px-3 py-1 rounded-md truncate"
          style={{
            background: 'var(--muted)',
            color: 'var(--ink-3)',
            fontFamily: '"JetBrains Mono", monospace',
          }}
        >
          app.fivconnect.net · {section}
        </div>
        <div className="w-[52px] flex-shrink-0 hidden sm:block" />
      </div>
      <div className="p-3.5 sm:p-4" style={{ background: 'var(--cream-2)' }}>{children}</div>
    </div>
  );
}

/* ── Donut SVG (Distribuição por status) ────────────────────────────────── */
function Donut({
  segments, centerTop, centerSub, size = 92,
}: {
  segments: { value: number; color: string }[];
  centerTop: string;
  centerSub: string;
  size?: number;
}) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  // Pré-calcula dash e offset acumulado (sem mutação durante o render).
  const arcs = segments.reduce<{ dash: number; offset: number; color: string }[]>((acc, seg) => {
    const dash = (seg.value / total) * 100;
    const offset = acc.length ? acc[acc.length - 1].offset + acc[acc.length - 1].dash : 0;
    acc.push({ dash, offset, color: seg.color });
    return acc;
  }, []);
  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 36 36" width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="18" cy="18" r="15.915" fill="none" stroke="var(--muted)" strokeWidth="3.6" />
        {arcs.map((arc, i) => (
          <circle
            key={i}
            cx="18" cy="18" r="15.915"
            fill="none"
            stroke={arc.color}
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeDasharray={`${arc.dash} ${100 - arc.dash}`}
            strokeDashoffset={-arc.offset}
          />
        ))}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[17px] font-bold leading-none" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'var(--ink)' }}>{centerTop}</span>
        <span className="text-[8px] mt-0.5" style={{ color: 'var(--ink-3)' }}>{centerSub}</span>
      </div>
    </div>
  );
}

/* ── 1 · Conversas — caixa de entrada real (lista + chat com Agente I.A) ─── */
const inboxConvs = [
  { av: 'AM', name: 'Alana Mendes', sub: 'Gráfica Sol', msg: 'Orçamento de cartões…', tag: 'Suporte Técnico', tagColor: CHART.red, unread: 2, active: true, bg: 'linear-gradient(135deg,#FFD37A,#FF7A59)' },
  { av: 'SC', name: 'Sabor & Cia', sub: 'Padaria', msg: 'Confirmar pedido…', tag: 'Comercial', tagColor: CHART.green, bg: 'linear-gradient(135deg,#B7D7A0,#2F9E6E)' },
  { av: 'CL', name: 'Carlos Lima', sub: 'Mercado Lima', msg: 'Aguardando o boleto', tag: 'Financeiro', tagColor: CHART.blue, bg: 'linear-gradient(135deg,#C9BBF2,#6C5CE7)' },
];
const inboxBubbles = [
  { side: 'in', text: 'Olá Alana! Entendi sua solicitação sobre o orçamento de cartões.', ai: true },
  { side: 'out', text: 'Oi! Pode ser 400g, gramatura mais grossa.' },
  { side: 'in', text: 'Para 400g o prazo de entrega é de 3 dias úteis. Confirmo?', ai: true },
];

function ConversasMockup() {
  return (
    <div className="flex gap-3" style={{ minHeight: '296px' }}>
      {/* Lista de conversas */}
      <div
        className="w-[42%] sm:w-[40%] flex-shrink-0 flex flex-col rounded-xl border overflow-hidden"
        style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}
      >
        {/* Abas */}
        <div className="flex text-[9.5px] font-semibold border-b" style={{ borderColor: 'var(--line)' }}>
          {[['Conversas', true], ['Espera', false], ['Contatos', false]].map(([t, active]) => (
            <span
              key={t as string}
              className="flex-1 text-center py-2 uppercase tracking-wide"
              style={active
                ? { color: 'var(--coral)', borderBottom: '2px solid var(--coral)' }
                : { color: 'var(--ink-3)' }}
            >
              {t as string}
            </span>
          ))}
        </div>
        {/* Busca */}
        <div className="px-2 pt-2">
          <div className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-[10px]" style={{ background: 'var(--muted)', color: 'var(--ink-3)' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /></svg>
            Pesquisar por nome ou telefone
          </div>
        </div>
        <div className="flex flex-col p-1.5 gap-0.5">
          {inboxConvs.map(c => (
            <div
              key={c.av}
              className="flex items-start gap-2 p-2 rounded-lg"
              style={{
                background: c.active ? 'rgba(255,122,89,0.10)' : 'transparent',
                borderLeft: c.active ? '2px solid var(--coral)' : '2px solid transparent',
              }}
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0" style={{ background: c.bg }}>
                {c.av}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[11px] font-semibold truncate" style={{ color: 'var(--ink)' }}>{c.name}</span>
                  {c.unread && (
                    <span className="text-[8px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--coral)', color: '#fff' }}>{c.unread}</span>
                  )}
                </div>
                <div className="text-[9.5px] truncate" style={{ color: 'var(--ink-3)' }}>{c.sub} · {c.msg}</div>
                <span className="inline-block mt-1 text-[8px] font-semibold px-1.5 py-0.5 rounded-full" style={{ background: c.tagColor + '22', color: c.tagColor }}>
                  {c.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat */}
      <div className="flex-1 min-w-0 flex flex-col rounded-xl border" style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}>
        <div className="flex items-center gap-2 px-2.5 py-2 border-b" style={{ borderColor: 'var(--line)' }}>
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0" style={{ background: 'linear-gradient(135deg,#FFD37A,#FF7A59)' }}>GS</div>
          <div className="min-w-0 flex-1">
            <div className="text-[11px] font-semibold truncate" style={{ color: 'var(--ink)' }}>Gráfica Sol · Atendimento</div>
            <div className="text-[9px] flex items-center gap-1" style={{ color: 'var(--ink-3)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--green)' }} /> +55 11 9xxxx-xxxx
            </div>
          </div>
          <span className="text-[8.5px] font-semibold px-2 py-1 rounded-md flex-shrink-0" style={{ background: 'rgba(239,68,68,0.12)', color: CHART.red }}>
            Finalizar
          </span>
        </div>
        <div
          className="flex-1 flex flex-col justify-end gap-1.5 px-2.5 py-2.5"
          style={{ backgroundImage: 'radial-gradient(var(--muted) 1px, transparent 0)', backgroundSize: '14px 14px' }}
        >
          {inboxBubbles.map((b, i) => (
            <div key={i} className={`flex ${b.side === 'out' ? 'justify-end' : 'justify-start'}`}>
              <div
                className="max-w-[86%] px-2.5 py-1.5 text-[10.5px] leading-snug"
                style={{
                  background: b.ai ? 'var(--green-soft)' : 'var(--muted)',
                  color: 'var(--ink)',
                  border: b.ai ? '1px solid rgba(47,158,110,0.25)' : '1px solid var(--line)',
                  borderRadius: '12px',
                  ...(b.side === 'out' ? { borderTopRightRadius: '3px' } : { borderTopLeftRadius: '3px' }),
                }}
              >
                {b.ai && (
                  <span className="flex items-center gap-1 text-[8px] font-bold mb-0.5" style={{ color: 'var(--green)', letterSpacing: '0.04em' }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.6 4.8L18 8l-4.4 1.2L12 14l-1.6-4.8L6 8z" /></svg>
                    AGENTE I.A
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

/* ── 2 · Filas — Visão Geral (cards ao vivo) + Demanda por filas ─────────── */
const liveCards = [
  { label: 'Em Espera', value: '2', color: CHART.amber, badge: 'Live' },
  { label: 'Em Atendimento', value: '11', color: CHART.blue, badge: 'Live' },
  { label: 'Finalizadas', value: '117', color: CHART.green },
];
const queues = [
  { label: 'Agente I.A', count: 117, pct: 100, color: CHART.purple },
  { label: 'Agente Técnico', count: 92, pct: 80, color: CHART.red },
  { label: 'Comercial', count: 44, pct: 38, color: CHART.green },
  { label: 'Financeiro', count: 28, pct: 24, color: CHART.blue },
  { label: 'Sem Fila', count: 12, pct: 11, color: CHART.gray },
];

function FilasMockup() {
  return (
    <div className="flex flex-col gap-3" style={{ minHeight: '296px' }}>
      {/* Cards ao vivo */}
      <div className="grid grid-cols-3 gap-2">
        {liveCards.map(c => (
          <div key={c.label} className="rounded-xl border px-2.5 py-2.5" style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[8.5px]" style={{ color: 'var(--ink-3)' }}>{c.label}</span>
              {c.badge && <span className="text-[7px] font-bold px-1 py-0.5 rounded" style={{ background: c.color + '22', color: c.color }}>{c.badge}</span>}
            </div>
            <div className="text-[20px] font-bold leading-none" style={{ fontFamily: 'Fraunces, Georgia, serif', color: c.color }}>{c.value}</div>
          </div>
        ))}
      </div>

      {/* Demanda por filas */}
      <div className="rounded-xl border p-3 flex-1" style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}>
        <div className="flex items-baseline justify-between mb-3">
          <span className="text-[11px] font-semibold" style={{ color: 'var(--ink)' }}>Demanda por filas</span>
          <span className="text-[8.5px]" style={{ color: 'var(--ink-3)', fontFamily: '"JetBrains Mono", monospace' }}>últimos 7 dias</span>
        </div>
        <div className="flex flex-col gap-2">
          {queues.map(q => (
            <div key={q.label} className="flex items-center gap-2.5">
              <span className="w-[72px] flex-shrink-0 text-[9.5px] font-medium flex items-center gap-1.5 truncate" style={{ color: 'var(--ink-2)' }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: q.color }} />
                {q.label}
              </span>
              <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'var(--muted)' }}>
                <div className="h-full rounded-full" style={{ width: `${q.pct}%`, background: q.color }} />
              </div>
              <span className="w-5 text-right text-[10px] font-bold" style={{ color: q.color, fontFamily: '"JetBrains Mono", monospace' }}>{q.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── 3 · Agente de I.A — atendimento + resumo gerado + puxar ────────────── */
function AgenteMockup() {
  return (
    <div className="flex flex-col gap-3" style={{ minHeight: '296px' }}>
      <div className="flex items-center justify-between rounded-xl border px-3 py-2" style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}>
        <span className="text-[10px]" style={{ color: 'var(--ink-3)', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.04em' }}>PROT · 2026-04812</span>
        <span className="flex items-center gap-1.5 text-[10px] font-semibold" style={{ color: CHART.amber }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: CHART.amber, boxShadow: '0 0 0 3px rgba(232,146,60,0.18)' }} />
          Transferido para humano
        </span>
      </div>

      {/* Mini chat: agente I.A */}
      <div className="rounded-xl border p-2.5 flex flex-col gap-1.5" style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}>
        <div className="flex justify-start">
          <div className="max-w-[88%] px-2.5 py-1.5 text-[10px] leading-snug" style={{ background: 'var(--green-soft)', border: '1px solid rgba(47,158,110,0.25)', borderRadius: '12px', borderTopLeftRadius: '3px', color: 'var(--ink)' }}>
            <span className="flex items-center gap-1 text-[8px] font-bold mb-0.5" style={{ color: 'var(--green)' }}>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.6 4.8L18 8l-4.4 1.2L12 14l-1.6-4.8L6 8z" /></svg>
              AGENTE I.A · 3s
            </span>
            Confirmo cobertura para Curitiba, frete de R$ 14,90 e prazo de 2–3 dias úteis 🙂
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[80%] px-2.5 py-1.5 text-[10px] leading-snug" style={{ background: 'var(--muted)', border: '1px solid var(--line)', borderRadius: '12px', borderTopRightRadius: '3px', color: 'var(--ink)' }}>
            Perfeito, quero finalizar o pedido!
          </div>
        </div>
      </div>

      {/* Resumo gerado pela I.A */}
      <div className="rounded-xl p-3 flex flex-col gap-1.5" style={{ background: 'rgba(232,146,60,0.08)', border: '1px solid rgba(232,146,60,0.25)' }}>
        <span className="text-[9px] font-bold uppercase" style={{ color: CHART.amber, letterSpacing: '0.08em' }}>Resumo gerado pelo Agente I.A</span>
        <p className="text-[11px] leading-relaxed" style={{ color: 'var(--ink-2)' }}>
          <strong style={{ color: 'var(--ink)' }}>Ana Beatriz</strong> quer entrega para <strong style={{ color: 'var(--ink)' }}>Curitiba</strong>. Frete e prazo confirmados, cliente <strong style={{ color: 'var(--ink)' }}>aceitou prosseguir</strong>.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'Duração', value: '2m 14s' },
          { label: 'Mensagens', value: '8' },
          { label: 'Próx. fila', value: 'Comercial' },
        ].map(m => (
          <div key={m.label} className="rounded-lg border px-2 py-1.5" style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}>
            <span className="text-[8px] uppercase block" style={{ color: 'var(--ink-3)', letterSpacing: '0.05em' }}>{m.label}</span>
            <span className="text-[12px] font-semibold" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'var(--ink)' }}>{m.value}</span>
          </div>
        ))}
      </div>

      <div className="w-full py-2 rounded-xl text-[12px] font-semibold text-white text-center" style={{ background: 'var(--coral)' }}>
        Puxar atendimento →
      </div>
    </div>
  );
}

/* ── 4 · Métricas — Visão Geral (KPIs + tendência + distribuição) ───────── */
const kpis = [
  { l: 'Total de Conversas', v: '219' },
  { l: 'Taxa de Finalização', v: '53%' },
  { l: 'Primeira Resposta', v: '25m58s' },
  { l: 'Tempo de Resolução', v: '4h57m' },
];

function MetricasMockup() {
  return (
    <div className="flex flex-col gap-3" style={{ minHeight: '296px' }}>
      {/* KPIs */}
      <div className="grid grid-cols-4 gap-2">
        {kpis.map(k => (
          <div key={k.l} className="rounded-xl border px-2 py-2.5 text-center" style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}>
            <div className="text-[15px] font-bold leading-none mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'var(--ink)' }}>{k.v}</div>
            <div className="text-[8px] leading-tight" style={{ color: 'var(--ink-3)' }}>{k.l}</div>
          </div>
        ))}
      </div>

      {/* Tendência + distribuição */}
      <div className="grid grid-cols-2 gap-2 flex-1">
        {/* Tendência (linha) */}
        <div className="rounded-xl border p-3 flex flex-col" style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}>
          <span className="text-[10px] font-semibold mb-2" style={{ color: 'var(--ink)' }}>Tendência de conversas</span>
          <svg viewBox="0 0 100 48" preserveAspectRatio="none" className="flex-1 w-full">
            <defs>
              <linearGradient id="trend-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor={CHART.blue} stopOpacity="0.25" />
                <stop offset="1" stopColor={CHART.blue} stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points="0,40 16,39 33,38 50,36 66,30 83,16 100,4 100,48 0,48" fill="url(#trend-fill)" />
            <polyline points="0,40 16,39 33,38 50,36 66,30 83,16 100,4" fill="none" stroke={CHART.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="0,44 16,43 33,43 50,42 66,40 83,33 100,26" fill="none" stroke={CHART.green} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
          </svg>
          <div className="flex gap-3 mt-1.5 text-[8px]" style={{ color: 'var(--ink-3)' }}>
            <span className="flex items-center gap-1"><span className="w-2 h-[2px]" style={{ background: CHART.blue }} />Total</span>
            <span className="flex items-center gap-1"><span className="w-2 h-[2px]" style={{ background: CHART.green }} />Finalizadas</span>
          </div>
        </div>

        {/* Distribuição (donut) */}
        <div className="rounded-xl border p-3 flex flex-col items-center justify-center gap-2" style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}>
          <span className="text-[10px] font-semibold self-start" style={{ color: 'var(--ink)' }}>Distribuição por status</span>
          <Donut
            segments={[
              { value: 117, color: CHART.green },
              { value: 11, color: CHART.blue },
              { value: 2, color: CHART.amber },
            ]}
            centerTop="130"
            centerSub="conversas"
          />
          <div className="flex flex-col gap-0.5 self-start text-[8px]" style={{ color: 'var(--ink-3)' }}>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full" style={{ background: CHART.green }} />Finalizadas 117</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full" style={{ background: CHART.blue }} />Em atend. 11</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full" style={{ background: CHART.amber }} />Aguardando 2</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 5 · Chatbot — Flow Builder (canvas com nós conectados) ─────────────── */
function FlowNode({ x, y, w, color, label, sub }: { x: number; y: number; w: number; color: string; label: string; sub?: string }) {
  return (
    <div
      className="absolute rounded-lg border px-2 py-1.5 shadow-sm"
      style={{ left: `${x}%`, top: y, width: w, background: 'var(--surface)', borderColor: 'var(--line-2)' }}
    >
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
        <span className="text-[9px] font-bold truncate" style={{ color: 'var(--ink)' }}>{label}</span>
      </div>
      {sub && <div className="text-[8px] mt-0.5 leading-tight truncate" style={{ color: 'var(--ink-3)' }}>{sub}</div>}
    </div>
  );
}

function FlowMockup() {
  return (
    <div className="flex flex-col gap-3" style={{ minHeight: '296px' }}>
      {/* Barra do editor */}
      <div className="flex items-center justify-between rounded-xl border px-3 py-2" style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}>
        <span className="text-[10px] font-semibold flex items-center gap-1.5" style={{ color: 'var(--ink)' }}>
          <GitBranch size={11} style={{ color: 'var(--coral)' }} />
          Fluxo · Triagem de atendimento
        </span>
        <span className="text-[8.5px] font-bold px-2 py-0.5 rounded-full" style={{ background: 'var(--green-soft)', color: 'var(--green)' }}>ATIVO</span>
      </div>

      {/* Canvas */}
      <div
        className="relative flex-1 rounded-xl border overflow-hidden"
        style={{
          background: 'var(--surface)',
          borderColor: 'var(--line)',
          backgroundImage: 'radial-gradient(var(--muted) 1px, transparent 0)',
          backgroundSize: '14px 14px',
          minHeight: 230,
        }}
      >
        {/* Conexões */}
        <svg className="absolute inset-0 w-full h-full">
          <line x1="22%" y1="40" x2="30%" y2="66" stroke="var(--line-2)" strokeWidth="1.5" />
          <line x1="62%" y1="66" x2="66%" y2="32" stroke="var(--line-2)" strokeWidth="1.5" />
          <line x1="62%" y1="74" x2="66%" y2="110" stroke="var(--line-2)" strokeWidth="1.5" />
          <line x1="62%" y1="80" x2="66%" y2="188" stroke="var(--line-2)" strokeWidth="1.5" />
        </svg>
        <FlowNode x={4} y={22} w={108} color={CHART.green} label="Início" sub="Nova conversa" />
        <FlowNode x={30} y={50} w={128} color={CHART.blue} label="Menu de opções" sub="1 Comercial · 2 Suporte · 3 Boleto" />
        <FlowNode x={66} y={14} w={112} color={CHART.purple} label="Fila Comercial" sub="Transferir conversa" />
        <FlowNode x={66} y={94} w={112} color={CHART.amber} label="Agente de I.A" sub="Suporte 24/7" />
        <FlowNode x={66} y={174} w={112} color={CHART.red} label="Webhook" sub="Buscar 2ª via no ERP" />
      </div>

      {/* Paleta de nós */}
      <div className="flex gap-1.5 flex-wrap">
        {['Mensagem', 'Pergunta', 'Condição', 'Transferir', 'I.A', 'Webhook'].map(n => (
          <span key={n} className="text-[8.5px] font-semibold px-2 py-1 rounded-md border" style={{ color: 'var(--ink-2)', borderColor: 'var(--line-2)', background: 'var(--surface)' }}>
            + {n}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── 6 · Chamados — protocolo, prioridade e timeline por e-mail ─────────── */
function ChamadosMockup() {
  return (
    <div className="flex flex-col gap-3" style={{ minHeight: '296px' }}>
      {/* Cabeçalho do chamado */}
      <div className="rounded-xl border p-3" style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}>
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-[10px]" style={{ color: 'var(--ink-3)', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.04em' }}>
            CHAMADO · #2026-0187
          </span>
          <span className="text-[8.5px] font-bold px-2 py-0.5 rounded-full" style={{ background: 'rgba(239,68,68,0.12)', color: CHART.red }}>
            PRIORIDADE ALTA
          </span>
        </div>
        <div className="text-[12px] font-semibold mb-1" style={{ color: 'var(--ink)' }}>
          Erro na emissão de relatório mensal
        </div>
        <div className="flex items-center gap-3 text-[8.5px]" style={{ color: 'var(--ink-3)' }}>
          <span className="flex items-center gap-1"><Users size={9} /> Resp.: Marina</span>
          <span className="flex items-center gap-1"><Timer size={9} /> Prazo: hoje, 18h</span>
          <span className="flex items-center gap-1" style={{ color: CHART.amber }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: CHART.amber }} /> Em andamento
          </span>
        </div>
      </div>

      {/* Timeline */}
      <div className="rounded-xl border p-3 flex-1 flex flex-col gap-0" style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}>
        <span className="text-[9px] font-bold uppercase mb-2.5" style={{ color: 'var(--ink-3)', letterSpacing: '0.08em' }}>Linha do tempo</span>
        {[
          { color: CHART.blue, title: 'Chamado aberto a partir da conversa', meta: '09:12 · WhatsApp', last: false },
          { color: CHART.amber, title: 'Nota interna: verificar exportação XLSX', meta: '09:40 · Marina', last: false },
          { color: CHART.green, title: 'Resposta enviada ao cliente', meta: '10:05 · por e-mail', mail: true, last: false },
          { color: CHART.purple, title: 'Cliente respondeu por e-mail', meta: '11:32 · entrou direto na timeline', mail: true, last: true },
        ].map(ev => (
          <div key={ev.title} className="flex gap-2.5">
            <div className="flex flex-col items-center">
              <span className="w-2 h-2 rounded-full flex-shrink-0 mt-1" style={{ background: ev.color }} />
              {!ev.last && <span className="w-px flex-1 my-0.5" style={{ background: 'var(--line-2)' }} />}
            </div>
            <div className={ev.last ? 'pb-0' : 'pb-3'}>
              <div className="text-[10.5px] font-medium flex items-center gap-1.5" style={{ color: 'var(--ink)' }}>
                {ev.title}
                {ev.mail && <Mail size={10} style={{ color: 'var(--ink-3)' }} />}
              </div>
              <div className="text-[8.5px]" style={{ color: 'var(--ink-3)' }}>{ev.meta}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="py-2 rounded-xl text-[11px] font-semibold text-center border" style={{ color: 'var(--ink)', borderColor: 'var(--line-2)', background: 'var(--surface)' }}>
          Nota interna
        </div>
        <div className="py-2 rounded-xl text-[11px] font-semibold text-white text-center" style={{ background: 'var(--coral)' }}>
          Responder por e-mail
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
  href: string;
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
    link: 'Ver conversas em detalhe',
    href: '/funcionalidades#conversas',
    mockup: ConversasMockup,
  },
  {
    eyebrow: 'Filas & Tickets',
    titlePre: 'Cada cliente na fila certa, ',
    titleAccent: 'com responsável.',
    desc: 'Distribua os atendimentos por área. Cada conversa vira um ticket com prioridade, dono e protocolo — e a visão geral mostra a demanda de cada fila em tempo real.',
    bullets: [
      { icon: Users, text: 'Filas por departamento: Comercial, Suporte, Financeiro.' },
      { icon: Repeat, text: 'Transferência de tickets em um clique, sem perder o histórico.' },
    ],
    link: 'Ver filas em detalhe',
    href: '/funcionalidades#filas',
    mockup: FilasMockup,
  },
  {
    eyebrow: 'Chatbot · Flow Builder',
    titlePre: 'Fluxos de atendimento ',
    titleAccent: 'sem escrever código.',
    desc: 'Desenhe o roteiro do atendimento em um editor visual: menus, condições, transferências e integrações. O robô resolve o repetitivo — e sabe a hora de chamar um humano.',
    bullets: [
      { icon: GitBranch, text: 'Editor visual de fluxos: arraste nós, conecte caminhos, publique.' },
      { icon: Webhook, text: 'Webhooks e nós de I.A dentro do fluxo — triagem inteligente de verdade.' },
    ],
    link: 'Ver o chatbot em detalhe',
    href: '/funcionalidades#chatbot',
    mockup: FlowMockup,
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
    link: 'Ver a I.A em detalhe',
    href: '/funcionalidades#ia',
    mockup: AgenteMockup,
  },
  {
    eyebrow: 'Chamados',
    titlePre: 'Demandas com ',
    titleAccent: 'protocolo, prazo e dono.',
    desc: 'Quando a conversa vira uma demanda, ela vira um chamado: protocolo, prioridade, responsável e prazo. O cliente acompanha por e-mail — e a resposta dele entra direto na linha do tempo.',
    bullets: [
      { icon: Mail, text: 'E-mail bidirecional: respostas do cliente entram na timeline do chamado.' },
      { icon: Timer, text: 'Prioridade, responsável e prazo — nada se perde no meio do caminho.' },
    ],
    link: 'Ver chamados em detalhe',
    href: '/funcionalidades#chamados',
    mockup: ChamadosMockup,
  },
  {
    eyebrow: 'Métricas & Relatórios',
    titlePre: 'Dados pra decidir, ',
    titleAccent: 'não pra colecionar.',
    desc: 'Acompanhe volume, tempo de resposta e desempenho por atendente em tempo real. A visão geral reúne KPIs, tendência e distribuição para você escalar a equipe com dado, não no achismo.',
    bullets: [
      { icon: Activity, text: 'KPIs ao vivo: conversas, tempo de resposta e taxa de finalização.' },
      { icon: Flame, text: 'Tendências e relatórios exportáveis em PDF e Excel.' },
    ],
    link: 'Ver relatórios em detalhe',
    href: '/funcionalidades#relatorios',
    mockup: MetricasMockup,
  },
];

const sectionName: Record<string, string> = {
  Conversas: 'Conversas',
  'Filas & Tickets': 'Visão Geral',
  'Chatbot · Flow Builder': 'Chatbot',
  'Agente de I.A': 'Atendimento',
  Chamados: 'Chamados',
  'Métricas & Relatórios': 'Dashboard',
};

function FeatureRow({ row, index }: { row: Row; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  const reverse = index % 2 === 1;
  const Mockup = row.mockup;

  return (
    <div
      ref={ref}
      id={row.id}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-28"
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

        <Link
          href={row.href}
          className="group inline-flex items-center gap-1.5 text-[15px] font-semibold transition-colors"
          style={{ color: 'var(--coral)' }}
        >
          <span className="border-b border-transparent group-hover:border-current transition-colors">{row.link}</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
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
          <span className="eyebrow mb-5 block">Módulos</span>
          <h2
            className="text-4xl sm:text-5xl mb-5"
            style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}
          >
            Tudo que você precisa,{' '}
            <span style={{ color: 'var(--amber-c)', fontStyle: 'italic', fontWeight: 500 }}>nada que você não precisa.</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--ink-2)' }}>
            Seis módulos, uma plataforma. Conversas, filas, chatbot, I.A, chamados e métricas — pensados
            para PMEs crescerem sem perder a qualidade no atendimento. Cada um detalhado na página de{' '}
            <Link href="/funcionalidades" className="font-semibold hover:underline" style={{ color: 'var(--coral)' }}>funcionalidades</Link>.
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
