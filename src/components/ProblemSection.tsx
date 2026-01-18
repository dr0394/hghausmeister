import { Building2, Users, Clock } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section id="problem" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-[#2d3748] via-[#1e3a5f] to-[#2d3748] overflow-hidden relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Professionelle Objektbetreuung für Ihr Unternehmen
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Hausverwaltungen, Gewerbekunden und Immobilieneigentümer vertrauen uns
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm p-8 border-l-4 border-[#10b981] hover:bg-white/10 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center mb-4 shadow-lg">
              <Building2 className="text-white" size={32} />
            </div>
            <p className="font-semibold text-lg text-white leading-relaxed">
              Wohnanlagen, Gewerbeobjekte & Firmenstandorte professionell betreut
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 border-l-4 border-[#10b981] hover:bg-white/10 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center mb-4 shadow-lg">
              <Users className="text-white" size={32} />
            </div>
            <p className="font-semibold text-lg text-white leading-relaxed">
              Für Hausverwaltungen, Banken, Filialbetriebe & Immobilieneigentümer
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 border-l-4 border-[#10b981] hover:bg-white/10 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center mb-4 shadow-lg">
              <Clock className="text-white" size={32} />
            </div>
            <p className="font-semibold text-lg text-white leading-relaxed">
              Zuverlässig, flexibel und umfassend – jeden Tag für Sie da
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#10b981] to-[#059669] p-8 md:p-12 text-center text-white shadow-2xl">
          <p className="text-xl md:text-2xl font-bold mb-2">
            Ein gepflegtes, sicheres und funktionales Objekt – jeden Tag
          </p>
          <p className="text-lg md:text-xl text-white/90">
            Konzentrieren Sie sich auf Ihr Kerngeschäft, wir kümmern uns um den Rest
          </p>
        </div>
      </div>
    </section>
  );
}
