import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`sticky top-0 bg-[#1e3a5f] z-50 transition-all ${
        isScrolled ? 'shadow-xl' : 'shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="https://alkaio.com/media/1363382228921411.jpeg"
            alt="H.G. Hausmeisterservice Logo"
            className="h-12 md:h-16 w-auto"
          />
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className="hidden md:flex gap-8 list-none">
          <li
            className="font-medium cursor-pointer text-white hover:text-[#10b981] transition-colors"
            onClick={() => scrollToSection('hero')}
          >
            Start
          </li>
          <li
            className="font-medium cursor-pointer text-white hover:text-[#10b981] transition-colors"
            onClick={() => scrollToSection('services')}
          >
            Leistungen
          </li>
          <li
            className="font-medium cursor-pointer text-white hover:text-[#10b981] transition-colors"
            onClick={() => scrollToSection('why')}
          >
            Warum wir
          </li>
          <li
            className="font-medium cursor-pointer text-white hover:text-[#10b981] transition-colors"
            onClick={() => scrollToSection('faq')}
          >
            FAQ
          </li>
          <li
            className="font-medium cursor-pointer text-white hover:text-[#10b981] transition-colors"
            onClick={() => scrollToSection('contact')}
          >
            Kontakt
          </li>
        </ul>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2d3748] border-t border-[#10b981]/30 shadow-lg">
          <ul className="flex flex-col py-4">
            <li
              className="px-6 py-3 font-medium cursor-pointer text-white hover:bg-[#1e3a5f] hover:text-[#10b981] transition-colors"
              onClick={() => scrollToSection('hero')}
            >
              Start
            </li>
            <li
              className="px-6 py-3 font-medium cursor-pointer text-white hover:bg-[#1e3a5f] hover:text-[#10b981] transition-colors"
              onClick={() => scrollToSection('services')}
            >
              Leistungen
            </li>
            <li
              className="px-6 py-3 font-medium cursor-pointer text-white hover:bg-[#1e3a5f] hover:text-[#10b981] transition-colors"
              onClick={() => scrollToSection('why')}
            >
              Warum wir
            </li>
            <li
              className="px-6 py-3 font-medium cursor-pointer text-white hover:bg-[#1e3a5f] hover:text-[#10b981] transition-colors"
              onClick={() => scrollToSection('faq')}
            >
              FAQ
            </li>
            <li
              className="px-6 py-3 font-medium cursor-pointer text-white hover:bg-[#1e3a5f] hover:text-[#10b981] transition-colors"
              onClick={() => scrollToSection('contact')}
            >
              Kontakt
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
