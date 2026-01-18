import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ServicesSection from './components/ServicesSection';
import BeforeAfter from './components/BeforeAfter';
import WhySection from './components/WhySection';
import GoogleReviews from './components/GoogleReviews';
import ImageGallery from './components/ImageGallery';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import CookieBanner from './components/CookieBanner';
import CookieSettings from './components/CookieSettings';
import CookieButton from './components/CookieButton';
import ContactFormModal from './components/ContactFormModal';
import ImpressumModal from './components/ImpressumModal';
import DatenschutzModal from './components/DatenschutzModal';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false);
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero onOpenForm={() => setIsFormOpen(true)} />
      <ProblemSection />
      <ServicesSection />
      <div className="hidden">
        <BeforeAfter />
      </div>
      <WhySection />
      <GoogleReviews />
      <ImageGallery />
      <FAQSection />
      <ContactSection />
      <CTASection onOpenForm={() => setIsFormOpen(true)} />
      <Footer
        onOpenImpressum={() => setIsImpressumOpen(true)}
        onOpenDatenschutz={() => setIsDatenschutzOpen(true)}
      />
      <WhatsAppFloat />
      <CookieButton onClick={() => setIsCookieSettingsOpen(true)} />
      <CookieBanner onOpenSettings={() => setIsCookieSettingsOpen(true)} />
      <ContactFormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <ImpressumModal isOpen={isImpressumOpen} onClose={() => setIsImpressumOpen(false)} />
      <DatenschutzModal isOpen={isDatenschutzOpen} onClose={() => setIsDatenschutzOpen(false)} />
      <CookieSettings
        isOpen={isCookieSettingsOpen}
        onClose={() => setIsCookieSettingsOpen(false)}
        onSave={() => {}}
      />
    </div>
  );
}

export default App;
