/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Paleta mapeada para as CSS variables de src/index.css — classes
      // acompanham o dark mode automaticamente (as variáveis invertem em .dark).
      colors: {
        coral: {
          DEFAULT: 'var(--coral)',
          600: 'var(--coral-600)',
          700: 'var(--coral-700)',
          soft: 'var(--coral-soft)',
        },
        amber: {
          DEFAULT: 'var(--amber-c)',
          soft: 'var(--amber-soft)',
        },
        ink: {
          DEFAULT: 'var(--ink)',
          2: 'var(--ink-2)',
          3: 'var(--ink-3)',
        },
        cream: {
          DEFAULT: 'var(--cream)',
          2: 'var(--cream-2)',
          3: 'var(--cream-3)',
        },
        graphite: {
          DEFAULT: 'var(--graphite)',
          2: 'var(--graphite-2)',
          3: 'var(--graphite-3)',
        },
        line: {
          DEFAULT: 'var(--line)',
          2: 'var(--line-2)',
        },
        green: {
          DEFAULT: 'var(--green)',
          soft: 'var(--green-soft)',
        },
        purple: 'var(--purple)',
        surface: {
          DEFAULT: 'var(--surface)',
          dark: '#14110F',
          'dark-alt': '#1E1A16',
          'dark-card': '#2A241F',
          'dark-elevated': '#332D26',
          'dark-deep': '#0D0B09',
        },
        primary: {
          DEFAULT: 'var(--coral)',
          dark: 'var(--coral-600)',
          foreground: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        container: '1200px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'bubble-in': 'bubbleIn 0.4s ease-out forwards',
        'typing': 'typing 1.2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bubbleIn: {
          '0%': { opacity: '0', transform: 'translateY(8px) scale(0.96)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        typing: {
          '0%, 60%, 100%': { opacity: '0.3', transform: 'translateY(0)' },
          '30%': { opacity: '1', transform: 'translateY(-3px)' },
        },
      },
    },
  },
  plugins: [],
}
