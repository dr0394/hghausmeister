import { useEffect, useState } from 'react';

interface ParallaxSectionProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export default function ParallaxSection({
  imageUrl,
  title,
  subtitle,
  ctaText,
  onCtaClick,
}: ParallaxSectionProps) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: `translateY(${offsetY * 0.5}px)`,
          willChange: 'transform',
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl">
          {title}
        </h2>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
          {subtitle}
        </p>
        {ctaText && onCtaClick && (
          <button
            onClick={onCtaClick}
            className="bg-[#ff7a00] hover:bg-[#e36c00] text-white font-bold py-4 px-8 rounded transition-colors"
          >
            {ctaText}
          </button>
        )}
      </div>
    </section>
  );
}
