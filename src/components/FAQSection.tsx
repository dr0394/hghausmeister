import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Was kostet ein Service?',
      answer:
        'Preise richten sich nach Objektgröße und Umfang. Wir erstellen Ihnen gerne ein individuelles Angebot. Kontaktieren Sie uns über das Formular oder telefonisch für ein unverbindliches Gespräch.',
    },
    {
      question: 'Wo sind Sie tätig?',
      answer: 'Wir bieten regionalen Service in Neubeuern und Umgebung. Kontaktieren Sie uns gerne, um zu erfahren, ob Ihr Standort in unserem Einzugsgebiet liegt.',
    },
    {
      question: 'Bieten Sie Winterdienst an?',
      answer: 'Ja, wir bieten professionellen Winterdienst inklusive Gehweg- und Parkflächenräumung sowie Streudienst. Verlassen Sie sich auf unseren zuverlässigen Service auch bei Schnee und Eis.',
    },
    {
      question: 'Wie schnell bekommen wir ein Angebot?',
      answer: 'In der Regel erhalten Sie innerhalb weniger Werktage ein individuelles Angebot von uns. Bei dringenden Anfragen melden wir uns schnellstmöglich bei Ihnen.',
    },
    {
      question: 'Welche Leistungen bieten Sie an?',
      answer: 'Unser Leistungsspektrum umfasst Hausmeisterdienste, Objektpflege, Gartenpflege, Kleinreparaturen, Wartung, Entrümpelung, Winterdienst und Reinigungsarbeiten. Kontaktieren Sie uns für spezifische Anfragen.',
    },
    {
      question: 'Sind Sie auch für Notfälle erreichbar?',
      answer: 'Ja, bei dringenden Fällen sind wir auch außerhalb der regulären Geschäftszeiten erreichbar. Rufen Sie uns einfach an – wir helfen Ihnen schnell und zuverlässig weiter.',
    },
  ];

  return (
    <section id="faq" className="bg-gradient-to-br from-[#1e3a5f] via-[#2d3748] to-[#1e3a5f] py-16 md:py-24 px-4 md:px-6 overflow-hidden relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Häufige Fragen
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Alles, was Sie über unseren Service wissen müssen
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-[#10b981] overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-6 flex justify-between items-center hover:bg-white/10 transition-colors text-left"
              >
                <strong className="text-lg md:text-xl text-white pr-4">{faq.question}</strong>
                <ChevronDown
                  className={`text-[#10b981] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 md:px-8 pb-6 border-t-2 border-[#10b981]">
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
