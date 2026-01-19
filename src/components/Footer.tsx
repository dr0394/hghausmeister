import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react';

interface FooterProps {
  onOpenImpressum: () => void;
  onOpenDatenschutz: () => void;
}

export default function Footer({ onOpenImpressum, onOpenDatenschutz }: FooterProps) {
  return (
    <footer className="bg-[#2d3748] border-t-4 border-[#10b981] py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="https://alkaio.com/media/1363382228921411.jpeg"
              alt="H.G. Hausmeisterservice Logo"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 leading-relaxed mb-4">
              Ihr zuverlässiger Partner für professionelle Objektbetreuung in Neubeuern und Umgebung.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1Z93V3oWjx/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1877f2] hover:bg-[#165ec4] rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-white" fill="white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Kontakt</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-gray-300">
                <MapPin className="text-[#10b981] flex-shrink-0" size={18} />
                Innlände 11, 83115 Neubeuern
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <Phone className="text-[#10b981] flex-shrink-0" size={18} />
                <a href="tel:+4915161527438" className="hover:text-[#10b981] transition-colors">
                  +49 151 61527438
                </a>
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <Mail className="text-[#10b981] flex-shrink-0" size={18} />
                <a
                  href="mailto:h.g.hausmeisterservice@t-online.de"
                  className="hover:text-[#10b981] transition-colors break-all"
                >
                  h.g.hausmeisterservice@t-online.de
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Öffnungszeiten</h3>
            <div className="space-y-2 mb-6">
              <p className="flex items-start gap-2 text-gray-300">
                <Clock className="text-[#10b981] flex-shrink-0 mt-1" size={18} />
                <span>
                  <strong>Mo-Do:</strong> 08:00 - 17:00 Uhr<br />
                  <strong>Fr:</strong> 08:00 - 12:00 Uhr<br />
                  <strong>Sa-So:</strong> Geschlossen
                </span>
              </p>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Rechtliches</h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={onOpenImpressum}
                className="text-gray-300 hover:text-[#10b981] transition-colors text-left"
              >
                Impressum
              </button>
              <button
                onClick={onOpenDatenschutz}
                className="text-gray-300 hover:text-[#10b981] transition-colors text-left"
              >
                Datenschutz
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} H.G. Hausmeisterservice. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
