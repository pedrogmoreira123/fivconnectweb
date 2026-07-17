# fivconnectweb

Site institucional e de vendas do **Fi.V Connect** (plataforma de atendimento via WhatsApp para PMEs) — https://fivconnect.net

## Stack

- **React 19** + TypeScript + **Vite 8**
- **Tailwind CSS 3.4** (dark mode por classe) + tokens em CSS variables (`src/index.css`)
- Roteamento próprio via History API (`src/hooks/useRoute.ts`) — o Nginx faz fallback SPA (`try_files → index.html`)
- Analytics: Google Tag Manager + Google Ads (`src/gtag.ts`)

## Identidade visual

- Cores: coral `#FF7A59`, âmbar `#E8923C`, ink `#1A1816`, cream `#FAF7F2` (tokens completos em `src/index.css` e `tailwind.config.js`)
- Tipografia (Google Fonts, carregadas no `index.html`): **Fraunces** (títulos, itálico de destaque), **Plus Jakarta Sans** (corpo), **JetBrains Mono** (técnico)

## Estrutura

```
src/
├── App.tsx            # Rotas (switch por pathname) e composição da home
├── components/        # Seções da home + páginas (legais, contato)
├── hooks/             # useRoute (navegação), useTheme (dark mode), useScrollAnimation
├── gtag.ts            # Conversões Google Ads
└── index.css          # Tokens de design (CSS variables, light/dark)
```

Integrações com o app (`app.fivconnect.net`): formulário de contato (`/api/public/contact`), chatbot Eddie (`/api/public/eddie-chat`), CTAs de cadastro (`/cadastro`).

## Desenvolvimento

```bash
npm install
npm run dev       # servidor local Vite
npm run build     # tsc -b && vite build → dist/
npm run lint
npm run preview
```

## Deploy

Estático via Nginx na VPS. `scripts/deploy-vps.sh` (chamado pelo GitHub Actions no push em `main`) faz `git reset --hard origin/main`, `npm ci` e `npm run build`. A working tree da VPS precisa estar limpa.
