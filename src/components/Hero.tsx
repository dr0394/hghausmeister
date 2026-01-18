import { Building2, Shield, Leaf, Phone, Clock } from 'lucide-react';

interface HeroProps {
  onOpenForm: () => void;
}

export default function Hero({ onOpenForm }: HeroProps) {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2d3748] to-[#1e3a5f] py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10b981] via-[#059669] to-[#10b981]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-1 md:order-1">
            <div className="inline-flex items-center gap-2 bg-[#10b981] text-white px-4 py-2 font-bold text-sm mb-6 shadow-lg">
              <Shield size={18} />
              <span>Professionell · Zuverlässig · Nachhaltig</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              H.G. HAUSMEISTER<br className="md:hidden" /><span className="text-[#10b981]">SERVICE</span><br />
              <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-300">Neubeuern & Umgebung</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              Professionelle Objektbetreuung für Hausverwaltungen, Gewerbeimmobilien & Wohnanlagen
            </p>

            <div className="md:hidden mb-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#10b981] to-[#059669] transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <img
                src="https://alkaio.com/media/1469294004615804.jpeg"
                alt="H.G. Hausmeisterservice"
                className="relative w-full border-2 border-[#10b981] shadow-2xl"
              />
            </div>

            <div className="space-y-3 mb-10">
              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 border-l-4 border-[#10b981] hover:bg-white/10 transition-all">
                <Building2 className="text-[#10b981] flex-shrink-0 mt-1" size={24} />
                <div>
                  <span className="text-white font-semibold text-lg block">Gewerbe & Hausverwaltungen</span>
                  <span className="text-gray-400 text-sm">Banken, Filialbetriebe, Wohnanlagen</span>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 border-l-4 border-[#10b981] hover:bg-white/10 transition-all">
                <Shield className="text-[#10b981] flex-shrink-0 mt-1" size={24} />
                <div>
                  <span className="text-white font-semibold text-lg block">15+ Jahre Erfahrung</span>
                  <span className="text-gray-400 text-sm">Festpreise & transparente Abrechnung</span>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 border-l-4 border-[#10b981] hover:bg-white/10 transition-all">
                <Leaf className="text-[#10b981] flex-shrink-0 mt-1" size={24} />
                <div>
                  <span className="text-white font-semibold text-lg block">Nachhaltig & Umweltbewusst</span>
                  <span className="text-gray-400 text-sm">Effiziente & ökologische Arbeitsweise</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm p-6 border border-[#10b981]/30 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                  alt="Google"
                  className="h-6"
                />
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                <span className="text-white font-bold text-xl">4.9/5</span> · Über 24 zufriedene Kunden
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenForm}
                className="bg-[#10b981] hover:bg-[#059669] text-white font-bold py-5 px-8 text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Kostenlos anfragen
              </button>
              <a
                href="tel:+4915161527438"
                className="bg-transparent border-2 border-white/30 hover:border-[#10b981] hover:bg-white/5 text-white font-bold py-5 px-8 text-lg transition-all flex items-center justify-center gap-3"
              >
                <Phone size={24} />
                Jetzt anrufen
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 text-gray-400">
              <Clock size={20} />
              <span className="text-sm">Mo-Do: 8:00 - 17:00 Uhr · Fr: 8:00 - 12:00 Uhr</span>
            </div>
          </div>

          <div className="hidden md:block order-2 md:order-2 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#10b981] to-[#059669] transform translate-x-6 translate-y-6 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
            <img
              src="https://alkaio.com/media/1469294004615804.jpeg"
              alt="H.G. Hausmeisterservice"
              className="relative w-full border-2 border-[#10b981] shadow-2xl"
            />
            <div className="absolute bottom-0 right-0 bg-gradient-to-r from-[#10b981] to-[#059669] text-white px-8 py-4 font-bold text-lg shadow-xl">
              HELMUT GEISLER
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#10b981] via-[#059669] to-[#10b981]"></div>
    </section>
  );
}
