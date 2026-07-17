import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { trackContatoConversion } from '../gtag';

interface FormState {
  nome: string;
  telefone: string;
  empresa: string;
  email: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ nome: '', telefone: '', empresa: '', email: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === 'telefone' ? formatPhone(value) : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('https://app.fivconnect.net/api/public/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.message || 'Erro ao enviar mensagem.');
        setStatus('error');
        return;
      }

      trackContatoConversion();
      setStatus('success');
    } catch {
      setErrorMsg('Falha na conexão. Verifique sua internet e tente novamente.');
      setStatus('error');
    }
  }

  const inputBase: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1.5px solid var(--line-2)',
    background: 'var(--surface)',
    color: 'var(--ink)',
    fontSize: '15px',
    fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)', color: 'var(--ink)' }}>
      {/* Main */}
      <main className="max-w-[1100px] mx-auto px-7 pt-32 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <p
              className="text-sm font-semibold mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full"
              style={{ background: 'var(--coral-soft)', color: 'var(--coral)' }}
            >
              Fale com a gente
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight"
              style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, lineHeight: 1.05 }}
            >
              Vamos conversar<br />
              <span style={{ color: 'var(--coral)' }}>sobre o seu negócio?</span>
            </h1>
            <p className="text-lg mb-10" style={{ color: 'var(--ink-2)', lineHeight: 1.7 }}>
              Preencha o formulário e nossa equipe entrará em contato em até 1 dia útil para entender como o Fi.V Connect pode transformar o atendimento da sua empresa.
            </p>

            <div className="space-y-5">
              {[
                { icon: '⚡', title: 'Resposta rápida', desc: 'Retornamos em até 1 dia útil' },
                { icon: '🎯', title: 'Demo personalizada', desc: 'Apresentação adaptada ao seu contexto' },
                { icon: '💬', title: 'Sem compromisso', desc: '7 dias grátis, sem cartão de crédito' },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>{item.title}</p>
                    <p className="text-sm" style={{ color: 'var(--ink-3)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            <div
              className="rounded-3xl p-8 sm:p-10"
              style={{ background: 'var(--graphite)', boxShadow: '0 24px 64px rgba(0,0,0,0.18)' }}
            >
              {/* Orbs */}
              <div
                className="absolute w-64 h-64 rounded-full blur-3xl pointer-events-none"
                style={{ background: 'var(--coral)', opacity: 0.08, top: '-40px', right: '-40px', position: 'relative', display: 'none' }}
              />

              {status === 'success' ? (
                <div className="text-center py-8">
                  <CheckCircle size={56} className="mx-auto mb-5" style={{ color: 'var(--coral)' }} />
                  <h2
                    className="text-2xl mb-3"
                    style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: '#F5EFE4' }}
                  >
                    Mensagem enviada!
                  </h2>
                  <p style={{ color: 'rgba(245,239,228,0.6)', lineHeight: 1.7 }}>
                    Recebemos seu contato e retornaremos em breve.<br />Fique de olho no seu email.
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setForm({ nome: '', telefone: '', empresa: '', email: '' }); }}
                    className="mt-8 text-sm font-medium transition-colors"
                    style={{ color: 'var(--coral)' }}
                  >
                    Enviar outro contato
                  </button>
                </div>
              ) : (
                <>
                  <h2
                    className="text-2xl mb-2"
                    style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: '#F5EFE4' }}
                  >
                    Entre em contato
                  </h2>
                  <p className="text-sm mb-8" style={{ color: 'rgba(245,239,228,0.5)' }}>
                    Todos os campos são obrigatórios.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Nome */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(245,239,228,0.5)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        Nome completo
                      </label>
                      <input
                        name="nome"
                        type="text"
                        autoComplete="name"
                        placeholder="João da Silva"
                        value={form.nome}
                        onChange={handleChange}
                        required
                        style={{ ...inputBase, background: 'rgba(245,239,228,0.06)', border: '1.5px solid rgba(245,239,228,0.12)', color: '#F5EFE4' }}
                        onFocus={e => (e.target.style.borderColor = 'var(--coral)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(245,239,228,0.12)')}
                      />
                    </div>

                    {/* Telefone */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(245,239,228,0.5)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        Telefone / WhatsApp
                      </label>
                      <input
                        name="telefone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="(11) 9 0000-0000"
                        value={form.telefone}
                        onChange={handleChange}
                        required
                        style={{ ...inputBase, background: 'rgba(245,239,228,0.06)', border: '1.5px solid rgba(245,239,228,0.12)', color: '#F5EFE4' }}
                        onFocus={e => (e.target.style.borderColor = 'var(--coral)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(245,239,228,0.12)')}
                      />
                    </div>

                    {/* Empresa */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(245,239,228,0.5)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        Empresa
                      </label>
                      <input
                        name="empresa"
                        type="text"
                        autoComplete="organization"
                        placeholder="Nome da empresa"
                        value={form.empresa}
                        onChange={handleChange}
                        required
                        style={{ ...inputBase, background: 'rgba(245,239,228,0.06)', border: '1.5px solid rgba(245,239,228,0.12)', color: '#F5EFE4' }}
                        onFocus={e => (e.target.style.borderColor = 'var(--coral)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(245,239,228,0.12)')}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(245,239,228,0.5)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        Email corporativo
                      </label>
                      <input
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="joao@empresa.com.br"
                        value={form.email}
                        onChange={handleChange}
                        required
                        style={{ ...inputBase, background: 'rgba(245,239,228,0.06)', border: '1.5px solid rgba(245,239,228,0.12)', color: '#F5EFE4' }}
                        onFocus={e => (e.target.style.borderColor = 'var(--coral)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(245,239,228,0.12)')}
                      />
                    </div>

                    {status === 'error' && (
                      <div
                        className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm"
                        style={{ background: 'rgba(239,68,68,0.12)', color: '#FCA5A5' }}
                      >
                        <AlertCircle size={16} />
                        {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-base transition-all"
                      style={{
                        background: status === 'loading' ? 'rgba(255,122,89,0.6)' : 'var(--coral)',
                        color: '#fff',
                        cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                        boxShadow: '0 8px 24px rgba(255,122,89,0.3)',
                        marginTop: '8px',
                      }}
                    >
                      {status === 'loading' ? (
                        <>
                          <span
                            className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                            style={{ animation: 'spin 0.7s linear infinite' }}
                          />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Enviar mensagem
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input::placeholder { color: rgba(245,239,228,0.25); }
      `}</style>
    </div>
  );
}
