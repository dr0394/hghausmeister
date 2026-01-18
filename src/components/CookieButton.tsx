import { Cookie } from 'lucide-react';

interface CookieButtonProps {
  onClick: () => void;
}

export default function CookieButton({ onClick }: CookieButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 left-5 bg-[#10b981] p-4 rounded-full shadow-lg hover:bg-[#0d9668] transition-colors z-40 group"
      aria-label="Cookie-Einstellungen"
      title="Cookie-Einstellungen"
    >
      <Cookie className="text-white" size={28} />
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Cookie-Einstellungen
      </span>
    </button>
  );
}
