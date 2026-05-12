import Header from './components/Header';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import BeforeAfter from './components/BeforeAfter';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import AISpotlight from './components/AISpotlight';
import Showcase from './components/Showcase';
import Numbers from './components/Numbers';
import Reports from './components/Reports';
import UseCases from './components/UseCases';
import Testimonial from './components/Testimonial';
import TrustSection from './components/TrustSection';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import CookieBanner from './components/CookieBanner';
import Contact from './components/Contact';
import LGPD from './components/LGPD';
import EddieChat from './components/EddieChat';
import { useRoute } from './hooks/useRoute';

function LandingPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)', color: 'var(--ink)' }}>
      <Header />
      <main>
        <Hero />
        <LogoStrip />
        <BeforeAfter />
        <HowItWorks />
        <Features />
        <AISpotlight />
        <Showcase />
        <Numbers />
        <Reports />
        <UseCases />
        <Testimonial />
        <TrustSection />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const path = useRoute();

  if (path === '/cadastro') {
    window.location.replace('https://app.fivconnect.net/cadastro');
    return null;
  }

  if (path === '/contato') {
    return (
      <>
        <CustomCursor />
        <Contact />
      </>
    );
  }

  return (
    <>
      <CustomCursor />
      <CookieBanner />
      <EddieChat />
      {path === '/politica-de-privacidade' && <PrivacyPolicy />}
      {path === '/termos-de-uso' && <TermsOfUse />}
      {path === '/lgpd' && <LGPD />}
      {path !== '/politica-de-privacidade' && path !== '/termos-de-uso' && path !== '/lgpd' && <LandingPage />}
    </>
  );
}

export default App;
