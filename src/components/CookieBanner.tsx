import { useState, useEffect } from 'react';

interface CookieBannerProps {
  onOpenSettings: () => void;
}

export default function CookieBanner({ onOpenSettings }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-preferences', JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const rejectCookies = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem('cookie-consent', 'rejected');
    localStorage.setItem('cookie-preferences', JSON.stringify(onlyNecessary));
    setIsVisible(false);
  };

  const openSettings = () => {
    setIsVisible(false);
    onOpenSettings();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-40 p-4 md:p-6 border-t-4 border-[#10b981]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Wir verwenden Cookies
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren, Funktionen für soziale Medien anzubieten und die Zugriffe auf unsere Website zu analysieren. Sie können Ihre Einwilligung jederzeit widerrufen oder anpassen.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={rejectCookies}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-5 rounded-lg transition-colors whitespace-nowrap"
            >
              Alle ablehnen
            </button>
            <button
              onClick={openSettings}
              className="border-2 border-[#10b981] text-[#10b981] hover:bg-[#10b981] hover:text-white font-semibold py-3 px-5 rounded-lg transition-colors whitespace-nowrap"
            >
              Einstellungen
            </button>
            <button
              onClick={acceptCookies}
              className="bg-[#10b981] hover:bg-[#0d9668] text-white font-semibold py-3 px-5 rounded-lg transition-colors whitespace-nowrap"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
