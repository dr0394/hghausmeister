import { Home, Trees, Wrench, Trash2, Snowflake, Sparkles, Truck } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: 'Hausmeisterdienste & Objektpflege',
      icon: Home,
      description: 'Komplette Betreuung Ihrer Immobilie',
    },
    {
      title: 'Grundstücks- & Gartenpflege',
      icon: Trees,
      description: 'Professionelle Grünflächenpflege',
    },
    {
      title: 'Kleinreparaturen & Wartung',
      icon: Wrench,
      description: 'Schnelle Instandhaltung',
    },
    {
      title: 'Entrümpelung & Entsorgung',
      icon: Trash2,
      description: 'Fachgerechte Entsorgung',
    },
    {
      title: 'Winterdienst & Räumservice',
      icon: Snowflake,
      description: 'Zuverlässiger Räumdienst',
    },
    {
      title: 'Treppenhaus- & Glasreinigung',
      icon: Sparkles,
      description: 'Gründliche Reinigung',
    },
    {
      title: 'Anhängerverleih',
      icon: Truck,
      description: 'Mich kann man mieten',
      phone: '0151 / 61527438',
      image: 'https://alkaio.com/media/1190952396350364.jpeg',
    },
  ];

  return (
    <section id="services" className="bg-white py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#1e3a5f]">
            Unsere Leistungen
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Umfassende Objektbetreuung für Gewerbe, Hausverwaltungen & Immobilien
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 p-8 border-2 border-gray-200 hover:border-[#10b981] transition-all group hover:shadow-lg"
              >
                {service.image ? (
                  <div className="mb-5 overflow-hidden rounded-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                    <Icon className="text-white" size={28} />
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2 text-[#1e3a5f]">{service.title}</h3>
                <p className="text-gray-600 mb-2">{service.description}</p>
                {service.phone && (
                  <a
                    href={`tel:${service.phone.replace(/\s/g, '')}`}
                    className="text-[#10b981] hover:text-[#059669] font-semibold transition-colors"
                  >
                    {service.phone}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
