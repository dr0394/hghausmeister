import { useState } from 'react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const comparisons = [
    {
      before: 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Fassadenreinigung',
      description: 'Professionelle Reinigung und Aufbereitung',
    },
    {
      before: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Gartenpflege',
      description: 'Von verwildert zu gepflegt',
    },
  ];

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const container = e.currentTarget.getBoundingClientRect();
    let clientX: number;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const x = clientX - container.left;
    const percentage = (x / container.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#1e3a5f]">
            Vorher & Nachher
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Sehen Sie selbst, wie wir Ihre Objekte auf Vordermann bringen
          </p>
        </div>

        <div className="space-y-12">
          {comparisons.map((comparison, index) => (
            <div key={index} className="max-w-4xl mx-auto">
              <div
                className="relative w-full aspect-video overflow-hidden select-none border-4 border-[#10b981] shadow-lg"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMove}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
                onTouchMove={handleMove}
              >
                <img
                  src={comparison.after}
                  alt="Nachher"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img
                    src={comparison.before}
                    alt="Vorher"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <div
                  className="absolute top-0 bottom-0 w-1 bg-[#10b981] cursor-ew-resize"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center shadow-lg">
                    <div className="flex gap-1">
                      <div className="w-1 h-6 bg-white"></div>
                      <div className="w-1 h-6 bg-white"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-[#2d3748] bg-opacity-90 text-white px-4 py-2 text-sm font-bold shadow-md">
                  VORHER
                </div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#10b981] to-[#059669] text-white px-4 py-2 text-sm font-bold shadow-md">
                  NACHHER
                </div>
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">{comparison.title}</h3>
                <p className="text-gray-600">{comparison.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
