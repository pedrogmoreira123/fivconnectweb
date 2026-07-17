import { lazy, Suspense, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BeforeAfter from './components/BeforeAfter';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Numbers from './components/Numbers';
import UseCases from './components/UseCases';
import TrustSection from './components/TrustSection';
import PricingTeaser from './components/PricingTeaser';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import EddieChat from './components/EddieChat';
import { useRoute } from './hooks/useRoute';
import { ROUTE_META } from './routes';

// Demais páginas em chunks separados — a home carrega só o dela.
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./components/TermsOfUse'));
const Contact = lazy(() => import('./components/Contact'));
const LGPD = lazy(() => import('./components/LGPD'));
const Funcionalidades = lazy(() => import('./pages/Funcionalidades'));
const Planos = lazy(() => import('./pages/Planos'));
const Novidades = lazy(() => import('./pages/Novidades'));
const Sobre = lazy(() => import('./pages/Sobre'));

function LandingPage() {
  return (
    <main>
      <Hero />
      <BeforeAfter />
      <HowItWorks />
      <Features />
      <Numbers />
      <UseCases />
      <TrustSection />
      <PricingTeaser />
      <FAQ />
      <CTASection />
    </main>
  );
}

const PAGES: Record<string, React.ComponentType> = {
  '/': LandingPage,
  '/funcionalidades': Funcionalidades,
  '/planos': Planos,
  '/novidades': Novidades,
  '/sobre': Sobre,
  '/contato': Contact,
  '/politica-de-privacidade': PrivacyPolicy,
  '/termos-de-uso': TermsOfUse,
  '/lgpd': LGPD,
};

function App() {
  const path = useRoute();

  // Título, meta description e canonical por rota
  useEffect(() => {
    const meta = ROUTE_META[path] ?? ROUTE_META['/'];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    const canonical = ROUTE_META[path] ? `https://fivconnect.net${path === '/' ? '/' : path}` : 'https://fivconnect.net/';
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonical);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonical);
  }, [path]);

  // Scroll: topo ao trocar de rota; âncora quando houver hash
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }));
    } else {
      window.scrollTo(0, 0);
    }
  }, [path]);

  if (path === '/cadastro') {
    window.location.replace('https://app.fivconnect.net/cadastro');
    return null;
  }

  const Page = PAGES[path] ?? LandingPage;

  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)', color: 'var(--ink)' }}>
      <Header />
      <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
        <Page />
      </Suspense>
      <Footer />
      <CookieBanner />
      <EddieChat />
    </div>
  );
}

export default App;
