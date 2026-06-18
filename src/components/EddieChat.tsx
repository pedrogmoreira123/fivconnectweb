import { useState, useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import { Send, X, Bot, User, ChevronDown } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

/* ----------------------------------------------------------------
   Renderizador de markdown leve (sem dependências externas).
   Suporta: **negrito**, *itálico* / _itálico_, `código`,
   [texto](url), links crus, listas (- / * / 1.) e quebras de linha.
------------------------------------------------------------------- */

// Formatação inline dentro de uma linha de texto.
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  // Ordem importa: negrito antes de itálico para não conflitar com **.
  const pattern =
    /(\*\*([^*]+)\*\*)|(__([^_]+)__)|(\*([^*]+)\*)|(_([^_]+)_)|(`([^`]+)`)|(\[([^\]]+)\]\(([^)]+)\))|((?:https?:\/\/)[^\s)]+)/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const key = `${keyPrefix}-${i++}`;

    if (match[2] !== undefined) {
      nodes.push(<strong key={key} style={{ fontWeight: 700 }}>{match[2]}</strong>);
    } else if (match[4] !== undefined) {
      nodes.push(<strong key={key} style={{ fontWeight: 700 }}>{match[4]}</strong>);
    } else if (match[6] !== undefined) {
      nodes.push(<em key={key}>{match[6]}</em>);
    } else if (match[8] !== undefined) {
      nodes.push(<em key={key}>{match[8]}</em>);
    } else if (match[10] !== undefined) {
      nodes.push(
        <code
          key={key}
          style={{
            background: 'rgba(255,255,255,0.12)',
            borderRadius: '4px',
            padding: '1px 5px',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            fontSize: '0.85em',
          }}
        >
          {match[10]}
        </code>
      );
    } else if (match[12] !== undefined) {
      nodes.push(
        <a
          key={key}
          href={match[13]}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--coral)', textDecoration: 'underline', wordBreak: 'break-word' }}
        >
          {match[12]}
        </a>
      );
    } else if (match[14] !== undefined) {
      nodes.push(
        <a
          key={key}
          href={match[14]}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--coral)', textDecoration: 'underline', wordBreak: 'break-word' }}
        >
          {match[14]}
        </a>
      );
    }
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

// Quebra o texto em blocos (parágrafos + listas) e aplica formatação inline.
function renderMarkdown(content: string): ReactNode {
  const lines = content.split('\n');
  const blocks: ReactNode[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;
  let key = 0;

  const flushList = () => {
    if (!list) return;
    const items = list.items;
    blocks.push(
      list.ordered ? (
        <ol key={`b-${key++}`} style={{ margin: '4px 0', paddingLeft: '1.25em', listStyle: 'decimal' }}>
          {items.map((it, idx) => (
            <li key={idx} style={{ margin: '2px 0' }}>{renderInline(it, `li-${key}-${idx}`)}</li>
          ))}
        </ol>
      ) : (
        <ul key={`b-${key++}`} style={{ margin: '4px 0', paddingLeft: '1.25em', listStyle: 'disc' }}>
          {items.map((it, idx) => (
            <li key={idx} style={{ margin: '2px 0' }}>{renderInline(it, `li-${key}-${idx}`)}</li>
          ))}
        </ul>
      )
    );
    list = null;
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    const ulMatch = /^\s*[-*]\s+(.*)$/.exec(line);
    const olMatch = /^\s*\d+\.\s+(.*)$/.exec(line);

    if (ulMatch) {
      if (!list || list.ordered) { flushList(); list = { ordered: false, items: [] }; }
      list.items.push(ulMatch[1]);
    } else if (olMatch) {
      if (!list || !list.ordered) { flushList(); list = { ordered: true, items: [] }; }
      list.items.push(olMatch[1]);
    } else if (line.trim() === '') {
      flushList();
    } else {
      flushList();
      blocks.push(
        <p key={`b-${key++}`} style={{ margin: '4px 0' }}>{renderInline(line, `p-${key}`)}</p>
      );
    }
  }
  flushList();

  return <>{blocks}</>;
}

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content: 'Olá! Sou o Eddie 👋 Posso te ajudar com dúvidas sobre o Fi.V Connect, planos, funcionalidades ou qualquer coisa que precisar. Como posso te ajudar?',
};

export default function EddieChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mostra a bolha de chamada após 4s
  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 4000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (open) {
      setShowBubble(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: 'user', content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('https://app.fivconnect.net/api/public/eddie-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply || 'Não consegui processar. Tente novamente.' }]);
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Estou com problemas técnicos agora. Entre em contato: contato@fivconnect.net ou WhatsApp +55 (11) 9 4474-5067',
      }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Balão flutuante de chamada */}
      {showBubble && !open && (
        <div
          className="fixed bottom-24 right-6 z-50 max-w-[220px] rounded-2xl rounded-br-sm px-4 py-3 text-sm font-medium shadow-xl cursor-pointer"
          style={{ background: 'var(--graphite)', color: '#F5EFE4', animation: 'slideUp 0.4s ease' }}
          onClick={() => setOpen(true)}
        >
          <button
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center"
            style={{ background: 'var(--ink-3)' }}
            onClick={e => { e.stopPropagation(); setShowBubble(false); }}
          >
            <X size={10} color="#fff" />
          </button>
          Oi! Tem alguma dúvida? Pode me perguntar 😊
        </div>
      )}

      {/* Botão flutuante */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          background: open ? 'var(--graphite)' : 'var(--coral)',
          color: '#fff',
          boxShadow: '0 8px 32px rgba(255,122,89,0.4)',
        }}
        aria-label={open ? 'Fechar chat' : 'Abrir chat com Eddie'}
      >
        {open
          ? <ChevronDown size={22} />
          : (
            <span style={{ fontSize: '24px', lineHeight: 1 }}>🤖</span>
          )
        }
      </button>

      {/* Janela do chat */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 flex flex-col rounded-2xl overflow-hidden shadow-2xl"
          style={{
            width: 'min(380px, calc(100vw - 24px))',
            height: 'min(520px, calc(100vh - 120px))',
            background: 'var(--cream)',
            border: '1px solid var(--line-2)',
            animation: 'popIn 0.25s cubic-bezier(0.34,1.56,0.64,1)',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
            style={{ background: 'var(--graphite)' }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'var(--coral)' }}
            >
              <Bot size={18} color="#fff" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold" style={{ color: '#F5EFE4' }}>Eddie</p>
              <p className="text-xs flex items-center gap-1" style={{ color: 'rgba(245,239,228,0.5)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Assistente Fi.V Connect
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
              style={{ color: 'rgba(245,239,228,0.5)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F5EFE4')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,239,228,0.5)')}
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ scrollbarWidth: 'thin' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ background: 'var(--coral-soft)' }}
                  >
                    <Bot size={14} style={{ color: 'var(--coral)' }} />
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'whitespace-pre-wrap' : ''}`}
                  style={msg.role === 'user'
                    ? { background: 'var(--coral)', color: '#fff', borderBottomRightRadius: '4px' }
                    : { background: 'var(--graphite)', color: '#F5EFE4', border: '1px solid var(--graphite-3)', borderBottomLeftRadius: '4px' }
                  }
                >
                  {msg.role === 'user' ? msg.content : renderMarkdown(msg.content)}
                </div>
                {msg.role === 'user' && (
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ background: 'var(--cream-3)' }}
                  >
                    <User size={14} style={{ color: 'var(--ink-2)' }} />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-2 justify-start">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ background: 'var(--coral-soft)' }}
                >
                  <Bot size={14} style={{ color: 'var(--coral)' }} />
                </div>
                <div
                  className="px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1"
                  style={{ background: 'var(--cream-2)', border: '1px solid var(--line)' }}
                >
                  {[0, 1, 2].map(i => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: 'var(--ink-3)',
                        display: 'inline-block',
                        animation: `bounce 1s ease-in-out ${i * 0.15}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            className="px-3 py-3 flex-shrink-0 flex items-center gap-2"
            style={{ borderTop: '1px solid var(--line)', background: 'var(--cream)' }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()}
              placeholder="Digite sua dúvida..."
              disabled={loading}
              className="flex-1 text-sm rounded-xl px-4 py-2.5 outline-none transition-colors"
              style={{
                background: 'var(--cream-2)',
                border: '1.5px solid var(--line-2)',
                color: 'var(--ink)',
                fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif',
              }}
              onFocus={e => (e.target.style.borderColor = 'var(--coral)')}
              onBlur={e => (e.target.style.borderColor = 'var(--line-2)')}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all active:scale-95"
              style={{
                background: input.trim() && !loading ? 'var(--coral)' : 'var(--cream-3)',
                color: input.trim() && !loading ? '#fff' : 'var(--ink-3)',
              }}
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.85) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-4px); }
        }
      `}</style>
    </>
  );
}
