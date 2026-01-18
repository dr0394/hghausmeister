interface CTASectionProps {
  onOpenForm: () => void;
}

export default function CTASection({ onOpenForm }: CTASectionProps) {
  return (
    <section className="text-center bg-gradient-to-r from-[#10b981] to-[#059669] text-white py-16 md:py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Noch Fragen? Wir helfen gerne!</h2>
        <button
          onClick={onOpenForm}
          className="bg-white text-[#1e3a5f] hover:bg-gray-100 font-bold py-4 px-10 transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          Jetzt kostenlos anfragen
        </button>
      </div>
    </section>
  );
}
