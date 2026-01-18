import { Shield, Award, User } from 'lucide-react';

export default function WhySection() {
  return (
    <section id="why" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-[#1e3a5f] via-[#2d3748] to-[#1e3a5f] overflow-hidden relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Warum H.G. Hausmeisterservice?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Qualität, Nachhaltigkeit und persönlicher Service seit über 15 Jahren
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#10b981] to-[#059669] transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <img
                src="https://i.imgur.com/2MIQIfY.png"
                alt="Professioneller H.G. Hausmeisterservice"
                className="relative w-full border-2 border-[#10b981] shadow-2xl"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="flex gap-4 bg-white/5 backdrop-blur-sm p-6 border-l-4 border-[#10b981] hover:bg-white/10 transition-all">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center shadow-lg">
                  <Shield className="text-white" size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">Zuverlässig</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Termine und Absprachen werden eingehalten. Verlassen Sie sich auf pünktliche und
                  professionelle Ausführung aller vereinbarten Leistungen.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white/5 backdrop-blur-sm p-6 border-l-4 border-[#10b981] hover:bg-white/10 transition-all">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center shadow-lg">
                  <Award className="text-white" size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">Sauber & Nachhaltig</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Gründliche Leistungen mit höchster Sorgfalt. Umweltfreundliche Materialien und
                  effiziente Arbeitsweisen für nachhaltigen Werterhalt.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white/5 backdrop-blur-sm p-6 border-l-4 border-[#10b981] hover:bg-white/10 transition-all">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center shadow-lg">
                  <User className="text-white" size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">Persönlich</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Direkter Kontakt zum Inhaber Helmut Geisler. Kurze Kommunikationswege und
                  individuelle Betreuung garantiert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
