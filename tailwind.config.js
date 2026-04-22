/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design system from Fi.V Connect design
        coral: {
          DEFAULT: '#FF7A59',
          600: '#F26444',
          700: '#D9502F',
        },
        amber: {
          soft: '#F4B880',
        },
        ink: {
          DEFAULT: '#1A1816',
          2: '#4A433C',
          3: '#7A7169',
        },
        cream: {
          DEFAULT: '#FAF7F2',
          2: '#F3EDE3',
          3: '#EADFCE',
          // legacy
          50: '#FAF7F2',
          100: '#F3EDE3',
          200: '#EADFCE',
        },
        graphite: {
          DEFAULT: '#1A1816',
          2: '#2A2520',
          3: '#3D3630',
        },
        // Keep orange for backwards compat
        primary: {
          DEFAULT: '#FF7A59',
          dark: '#F26444',
          foreground: '#ffffff',
        },
        surface: {
          dark: '#14110F',
          'dark-alt': '#1E1A16',
          'dark-card': '#2A241F',
          'dark-elevated': '#332D26',
          'dark-deep': '#0D0B09',
        },
      },
      fontFamily: {
        sans: ['Munika', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Munika', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
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
