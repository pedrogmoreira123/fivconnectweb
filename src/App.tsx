import Header from './components/Header';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Numbers from './components/Numbers';
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
import { useRoute } from './hooks/useRoute';

function LandingPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)', color: 'var(--ink)' }}>
      <Header />
      <main>
        <Hero />
        <LogoStrip />
        <HowItWorks />
        <Features />
        <Showcase />
        <Numbers />
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

  return (
    <>
      <CustomCursor />
      <CookieBanner />
      {path === '/politica-de-privacidade' && <PrivacyPolicy />}
      {path === '/termos-de-uso' && <TermsOfUse />}
      {path !== '/politica-de-privacidade' && path !== '/termos-de-uso' && <LandingPage />}
    </>
  );
}

export default App;
