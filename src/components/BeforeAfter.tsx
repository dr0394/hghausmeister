export default function BeforeAfter() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#1e3a5f]">
            Vorher & Nachher
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Sehen Sie selbst die Ergebnisse unserer professionellen Pflasterreinigung
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative w-full overflow-hidden border-4 border-[#10b981] shadow-lg">
            <img
              src="https://i.imgur.com/ew1qlEn.jpeg"
              alt="Professionelle Pflasterreinigung"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">Professionelle Pflasterreinigung</h3>
            <p className="text-gray-600">Vorher und Nachher unserer Arbeit</p>
          </div>
        </div>
      </div>
    </section>
  );
}
