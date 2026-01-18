import { useState, useEffect } from 'react';
import { X, Cookie, Shield, BarChart } from 'lucide-react';

interface CookieSettingsProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (settings: CookiePreferences) => void;
}

export interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieSettings({ isOpen, onClose, onSave }: CookieSettingsProps) {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem('cookie-preferences');
    if (saved) {
      try {
        setPreferences(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading cookie preferences', e);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleToggle = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return;
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    localStorage.setItem('cookie-preferences', JSON.stringify(preferences));
    localStorage.setItem('cookie-consent', 'custom');
    onSave(preferences);
    onClose();
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookie-preferences', JSON.stringify(allAccepted));
    localStorage.setItem('cookie-consent', 'accepted');
    onSave(allAccepted);
    onClose();
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    setPreferences(onlyNecessary);
    localStorage.setItem('cookie-preferences', JSON.stringify(onlyNecessary));
    localStorage.setItem('cookie-consent', 'rejected');
    onSave(onlyNecessary);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg w-full max-w-3xl relative my-8 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-lg">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-500 hover:text-[#10b981] transition-colors"
          >
            <X size={24} />
          </button>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Cookie className="text-[#10b981]" size={32} />
            Cookie-Einstellungen
          </h2>
          <p className="text-gray-600 mt-2">
            Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Sie können Ihre Präferenzen hier anpassen.
          </p>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-300">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <Shield className="text-[#10b981]" size={20} />
                <h3 className="font-bold text-gray-900">Notwendige Cookies</h3>
              </div>
              <div className="bg-[#10b981] text-white px-3 py-1 rounded-full text-sm font-semibold">
                Immer aktiv
              </div>
            </div>
            <p className="text-sm text-gray-600 ml-7">
              Diese Cookies sind für das Funktionieren der Website erforderlich und können nicht deaktiviert werden. Sie werden normalerweise nur als Reaktion auf von Ihnen durchgeführte Aktionen gesetzt, wie z.B. das Festlegen Ihrer Datenschutzeinstellungen.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 border-2 border-gray-300 hover:border-[#10b981] transition-colors">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <Cookie className="text-[#10b981]" size={20} />
                <h3 className="font-bold text-gray-900">Funktionale Cookies</h3>
              </div>
              <button
                onClick={() => handleToggle('functional')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  preferences.functional ? 'bg-[#10b981]' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    preferences.functional ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <p className="text-sm text-gray-600 ml-7">
              Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung bereitzustellen. Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten nutzen.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 border-2 border-gray-300 hover:border-[#10b981] transition-colors">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <BarChart className="text-[#10b981]" size={20} />
                <h3 className="font-bold text-gray-900">Analyse-Cookies</h3>
              </div>
              <button
                onClick={() => handleToggle('analytics')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  preferences.analytics ? 'bg-[#10b981]' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <p className="text-sm text-gray-600 ml-7">
              Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit wir die Leistung unserer Website messen und verbessern können. Sie helfen uns zu verstehen, welche Seiten am beliebtesten sind.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 border-2 border-gray-300 hover:border-[#10b981] transition-colors">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <Cookie className="text-[#10b981]" size={20} />
                <h3 className="font-bold text-gray-900">Marketing-Cookies</h3>
              </div>
              <button
                onClick={() => handleToggle('marketing')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  preferences.marketing ? 'bg-[#10b981]' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <p className="text-sm text-gray-600 ml-7">
              Diese Cookies können über unsere Website von unseren Werbepartnern gesetzt werden. Sie können verwendet werden, um ein Profil Ihrer Interessen zu erstellen und Ihnen relevante Werbung zu zeigen.
            </p>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 rounded-b-lg">
          <div className="flex flex-col md:flex-row gap-3 justify-between">
            <button
              onClick={handleRejectAll}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Alle ablehnen
            </button>
            <div className="flex flex-col md:flex-row gap-3">
              <button
                onClick={handleSave}
                className="bg-[#10b981] hover:bg-[#0d9668] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Auswahl speichern
              </button>
              <button
                onClick={handleAcceptAll}
                className="bg-[#10b981] hover:bg-[#0d9668] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
