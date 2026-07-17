import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useRoute } from '../hooks/useRoute';
import Link from './ui/Link';

const navLinks = [
  { label: 'Funcionalidades', href: '/funcionalidades' },
  { label: 'Planos', href: '/planos' },
  { label: 'Novidades', href: '/novidades' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
];

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-0"
      style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: '22px', letterSpacing: '-0.02em' }}
    >
      <span style={{ color: 'var(--ink)' }}>Fi</span>
      <span style={{ color: 'var(--coral)' }}>.</span>
      <span style={{ color: 'var(--ink)' }}>V</span>
      <span
        className="ml-2.5 pl-2.5"
        style={{
          fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif',
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--ink-3)',
          borderLeft: '1px solid var(--line-2)',
        }}
      >
        Connect
      </span>
    </Link>
  );
}

export default function Header() {
  const { theme, toggle } = useTheme();
  const path = useRoute();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || menuOpen
          ? 'backdrop-blur-md border-b shadow-sm'
          : 'bg-transparent'
      }`}
      style={isScrolled || menuOpen ? {
        backgroundColor: 'color-mix(in srgb, var(--cream) 88%, transparent)',
        borderColor: 'var(--line)',
      } : {}}
    >
      <div className="max-w-container mx-auto px-7">
        <div className="flex items-center gap-10 py-4">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(link => {
              const active = path === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className="text-sm font-medium transition-colors"
                  style={{ color: active ? 'var(--coral-700)' : 'var(--ink-2)' }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = 'var(--ink)'; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = 'var(--ink-2)'; }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <a
              href="https://app.fivconnect.net"
              className="text-sm font-medium transition-colors"
              style={{ color: 'var(--ink-2)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-2)')}
            >
              Entrar
            </a>
            <a
              href="https://app.fivconnect.net/cadastro"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90 hover:-translate-y-px shadow-sm"
              style={{ background: 'var(--coral)' }}
            >
              Começar grátis
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>

            <button
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
              className="p-2 rounded-lg transition-colors"
              style={{ color: 'var(--ink-3)' }}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-2 ml-auto">
            <button onClick={toggle} aria-label="Alternar tema" className="p-2 rounded-lg" style={{ color: 'var(--ink-3)' }}>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen} className="p-2 rounded-lg" style={{ color: 'var(--ink-3)' }}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-4 pb-4 pt-2 space-y-1"
          style={{ backgroundColor: 'var(--cream)', borderColor: 'var(--line)' }}
        >
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 px-3 rounded-lg text-sm font-medium"
              style={{ color: path === link.href ? 'var(--coral-700)' : 'var(--ink-2)' }}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://app.fivconnect.net"
              className="block py-2 px-3 rounded-lg text-sm font-medium text-center border"
              style={{ color: 'var(--ink)', borderColor: 'var(--line-2)' }}
            >
              Entrar
            </a>
            <a
              href="https://app.fivconnect.net/cadastro"
              className="block py-2 px-3 rounded-xl text-sm font-semibold text-center text-white"
              style={{ background: 'var(--coral)' }}
            >
              Começar grátis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
