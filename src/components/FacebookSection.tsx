import { Facebook } from 'lucide-react';

export default function FacebookSection() {
  return (
    <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2d3748] py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-[#1877f2] rounded-full flex items-center justify-center shadow-2xl">
            <Facebook size={40} className="text-white" fill="white" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Folgen Sie uns auf Facebook
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Bleiben Sie auf dem Laufenden über unsere aktuellen Projekte, Tipps und Neuigkeiten rund um Hausmeisterservice und Objektbetreuung.
        </p>

        <a
          href="https://www.facebook.com/share/1Z93V3oWjx/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#1877f2] hover:bg-[#165ec4] text-white font-bold py-4 px-8 text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          <Facebook size={24} fill="white" />
          Besuchen Sie uns auf Facebook
        </a>
      </div>
    </section>
  );
}
