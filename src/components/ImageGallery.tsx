import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface MediaItem {
  url: string;
  title: string;
  category: string;
  type: 'image' | 'video';
}

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images: MediaItem[] = [
    {
      url: 'https://alkaio.com/media/1160843629191429.jpeg',
      title: 'Hausmeisterservice',
      category: 'Objektbetreuung',
      type: 'image',
    },
    {
      url: 'https://alkaio.com/media/671584949281133.jpeg',
      title: 'Außenanlagen',
      category: 'Gartenpflege',
      type: 'image',
    },
    {
      url: 'https://alkaio.com/media/1757672948971434.jpeg',
      title: 'Reinigung',
      category: 'Gebäudereinigung',
      type: 'image',
    },
    {
      url: 'https://alkaio.com/media/905324158685475.jpeg',
      title: 'Wartungsarbeiten',
      category: 'Instandhaltung',
      type: 'image',
    },
    {
      url: 'https://alkaio.com/media/1204261434592753.jpeg',
      title: 'Objektbetreuung',
      category: 'Hausmeisterdienste',
      type: 'image',
    },
    {
      url: 'https://alkaio.com/media/1931834197728289.jpeg',
      title: 'Gebäudepflege',
      category: 'Objektbetreuung',
      type: 'image',
    },
    {
      url: 'https://alkaio.com/media/25447597224863580.jpeg',
      title: 'Professionelle Betreuung',
      category: 'Hausmeisterdienste',
      type: 'image',
    },
    {
      url: 'https://alkaio.com/media/2100412564123077.jpeg',
      title: 'Objektservice',
      category: 'Hausmeisterdienste',
      type: 'image',
    },
    {
      url: 'https://alkaio.com/media/773379662487179.jpeg',
      title: 'Pflasterreinigung',
      category: 'Reinigung',
      type: 'image',
    },
    {
      url: 'https://alkaio.com/media/1609380573399244.mp4',
      title: 'Unsere Arbeiten im Video',
      category: 'Video',
      type: 'video',
    },
  ];

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section className="bg-black py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Unsere Arbeiten
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden cursor-pointer group aspect-square"
              onClick={() => setSelectedImage(index)}
            >
              {image.type === 'video' ? (
                <>
                  <video
                    src={image.url}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-16 h-16 rounded-full bg-[#10b981] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={32} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                </>
              ) : (
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-[#10b981] transition-colors"
          >
            <X size={32} />
          </button>

          <button
            onClick={handlePrevious}
            className="absolute left-4 text-white hover:text-[#10b981] transition-colors"
          >
            <ChevronLeft size={48} />
          </button>

          <div className="max-w-5xl w-full">
            {images[selectedImage].type === 'video' ? (
              <video
                src={images[selectedImage].url}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            ) : (
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            )}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 text-white hover:text-[#10b981] transition-colors"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
}
