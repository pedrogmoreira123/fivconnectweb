import { useState, useEffect } from 'react';
import { X, Cookie, ChevronDown, ChevronUp } from 'lucide-react';
import { navigate } from '../hooks/useRoute';

const STORAGE_KEY = 'fivconnect-cookie-consent';

type ConsentState = {
  essential: true;
  analytics: boolean;
  functional: boolean;
};

function loadConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveConsent(consent: ConsentState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [functional, setFunctional] = useState(true);

  useEffect(() => {
    const existing = loadConsent();
    if (!existing) {
      // Pequeno delay para não sobrepor o carregamento inicial da página
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  if (!visible) return null;

  const acceptAll = () => {
    saveConsent({ essential: true, analytics: true, functional: true });
    setVisible(false);
  };

  const rejectOptional = () => {
    saveConsent({ essential: true, analytics: false, functional: false });
    setVisible(false);
  };

  const saveCustom = () => {
    saveConsent({ essential: true, analytics, functional });
    setVisible(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9990] p-4 sm:p-6">
      <div className="max-w-3xl mx-auto bg-surface rounded-2xl shadow-2xl border border-line overflow-hidden">
        {/* Main row */}
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-coral-soft flex items-center justify-center">
              <Cookie size={18} className="text-coral" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-ink mb-1">
                Utilizamos cookies
              </p>
              <p className="text-xs text-ink-2 leading-relaxed">
                Usamos cookies essenciais para o funcionamento do site e opcionais para melhorar
                sua experiência e analisar o tráfego. Veja nossa{' '}
                <button
                  onClick={() => { setVisible(false); navigate('/politica-de-privacidade#cookies'); }}
                  className="text-coral hover:underline font-medium"
                >
                  Política de Privacidade
                </button>
                .
              </p>
            </div>

            <button
              onClick={rejectOptional}
              aria-label="Fechar e rejeitar opcionais"
              className="flex-shrink-0 p-1 rounded-lg text-ink-3 hover:text-ink hover:bg-cream-2 transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Actions */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              onClick={acceptAll}
              className="px-4 py-2 rounded-lg bg-coral text-white text-xs font-semibold hover:bg-coral-600 transition-colors shadow-sm"
            >
              Aceitar todos
            </button>
            <button
              onClick={rejectOptional}
              className="px-4 py-2 rounded-lg border border-line-2 text-ink text-xs font-semibold hover:bg-cream-2 transition-colors"
            >
              Rejeitar opcionais
            </button>
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-ink-2 text-xs font-medium hover:bg-cream-2 transition-colors ml-auto"
            >
              Personalizar
              {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            </button>
          </div>
        </div>

        {/* Expanded preferences */}
        {expanded && (
          <div className="border-t border-line px-5 sm:px-6 pb-5 pt-4 space-y-4">
            {/* Essential */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-ink mb-0.5">
                  Essenciais <span className="text-[10px] font-normal text-ink-3">(sempre ativos)</span>
                </p>
                <p className="text-xs text-ink-2">
                  Necessários para login, sessão e funcionamento básico da plataforma.
                </p>
              </div>
              <div className="flex-shrink-0 w-9 h-5 rounded-full bg-coral flex items-center justify-end px-0.5 opacity-50 cursor-not-allowed">
                <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
              </div>
            </div>

            {/* Analytics */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-ink mb-0.5">Analíticos</p>
                <p className="text-xs text-ink-2">
                  Nos ajudam a entender como o site é usado (Google Analytics, etc.).
                </p>
              </div>
              <button
                onClick={() => setAnalytics(!analytics)}
                aria-checked={analytics}
                role="switch"
                className={`flex-shrink-0 w-9 h-5 rounded-full transition-colors flex items-center px-0.5 ${
                  analytics ? 'bg-coral justify-end' : 'bg-cream-3 justify-start'
                }`}
              >
                <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
              </button>
            </div>

            {/* Functional */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-ink mb-0.5">Funcionais</p>
                <p className="text-xs text-ink-2">
                  Lembram preferências como tema e idioma para melhorar sua experiência.
                </p>
              </div>
              <button
                onClick={() => setFunctional(!functional)}
                aria-checked={functional}
                role="switch"
                className={`flex-shrink-0 w-9 h-5 rounded-full transition-colors flex items-center px-0.5 ${
                  functional ? 'bg-coral justify-end' : 'bg-cream-3 justify-start'
                }`}
              >
                <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
              </button>
            </div>

            <button
              onClick={saveCustom}
              className="w-full mt-2 px-4 py-2.5 rounded-lg bg-coral text-white text-xs font-semibold hover:bg-coral-600 transition-colors"
            >
              Salvar preferências
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
