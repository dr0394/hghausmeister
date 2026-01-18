import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#1e3a5f]">
            Kontakt & Adresse
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Nehmen Sie Kontakt mit uns auf – wir freuen uns auf Ihre Anfrage
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 border-2 border-gray-200 hover:border-[#10b981] transition-all hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-[#1e3a5f]">Adresse</h3>
                  <p className="text-gray-600">
                    Innlände 11<br />
                    83115 Neubeuern
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 border-2 border-gray-200 hover:border-[#10b981] transition-all hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center flex-shrink-0 shadow-md">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-[#1e3a5f]">Telefon</h3>
                  <a
                    href="tel:+4915161527438"
                    className="text-gray-600 hover:text-[#10b981] transition-colors text-lg font-semibold"
                  >
                    +49 151 61527438
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 border-2 border-gray-200 hover:border-[#10b981] transition-all hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center flex-shrink-0 shadow-md">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-[#1e3a5f]">E-Mail</h3>
                  <a
                    href="mailto:h.g.hausmeisterservice@t-online.de"
                    className="text-gray-600 hover:text-[#10b981] transition-colors break-all"
                  >
                    h.g.hausmeisterservice@t-online.de
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 border-2 border-gray-200 hover:border-[#10b981] transition-all hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center flex-shrink-0 shadow-md">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-[#1e3a5f]">Erreichbarkeit</h3>
                  <p className="text-gray-600">
                    Mo-Do: 08:00 - 17:00 Uhr<br />
                    Fr: 08:00 - 12:00 Uhr<br />
                    Sa-So: Geschlossen
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full min-h-[400px] md:min-h-[600px]">
            <iframe
              src="https://maps.google.com/maps?q=Innl%C3%A4nde%2011%2C%2083115%20Neubeuern&amp;output=embed"
              width="100%"
              height="100%"
              className="border-4 border-[#10b981] shadow-lg"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
