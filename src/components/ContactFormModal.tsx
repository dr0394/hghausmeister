import { useState } from 'react';
import { X, Mail, MessageCircle, Send } from 'lucide-react';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  serviceType: string;
  propertyType: string;
  propertySize: string;
  frequency: string;
  startDate: string;
  name: string;
  phone: string;
  email: string;
  contactMethod: 'whatsapp' | 'email' | 'both';
  additionalInfo: string;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    serviceType: '',
    propertyType: '',
    propertySize: '',
    frequency: '',
    startDate: '',
    name: '',
    phone: '',
    email: '',
    contactMethod: 'whatsapp',
    additionalInfo: '',
  });

  if (!isOpen) return null;

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const generateMessage = () => {
    return `Hallo H.G. Hausmeisterservice,

ich interessiere mich für Ihre Dienstleistungen:

📋 Service: ${formData.serviceType}
🏢 Objektart: ${formData.propertyType}
📐 Objektgröße: ${formData.propertySize}
🔄 Häufigkeit: ${formData.frequency}
📅 Gewünschter Beginn: ${formData.startDate}

👤 Name: ${formData.name}
📞 Telefon: ${formData.phone}
📧 E-Mail: ${formData.email}

${formData.additionalInfo ? `💬 Zusätzliche Informationen:\n${formData.additionalInfo}` : ''}

Ich bitte um ein unverbindliches Angebot.

Mit freundlichen Grüßen
${formData.name}`;
  };

  const handleSubmit = () => {
    const message = generateMessage();

    if (formData.contactMethod === 'whatsapp' || formData.contactMethod === 'both') {
      const whatsappUrl = `https://wa.me/4915161527438?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }

    if (formData.contactMethod === 'email' || formData.contactMethod === 'both') {
      const emailSubject = `Anfrage: ${formData.serviceType}`;
      const emailUrl = `mailto:h.g.hausmeisterservice@t-online.de?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(message)}`;
      window.location.href = emailUrl;
    }

    setTimeout(() => {
      setCurrentStep(0);
      setFormData({
        serviceType: '',
        propertyType: '',
        propertySize: '',
        frequency: '',
        startDate: '',
        name: '',
        phone: '',
        email: '',
        contactMethod: 'whatsapp',
        additionalInfo: '',
      });
      onClose();
    }, 500);
  };

  const services = [
    'Gartenpflege',
    'Außenanlagenpflege',
    'Treppenhausreinigung',
    'Entrümpelung und Entsorgung',
    'Winterdienst',
    'Anhängerverleih',
    'Gartenbau',
    'Allgemeine Hausmeisterpflege',
  ];

  const propertyTypes = [
    'Wohnanlage',
    'Einfamilienhaus',
    'Mehrfamilienhaus',
    'Gewerbeimmobilie',
    'Bürogebäude',
    'Sonstiges',
  ];

  const frequencies = [
    'Einmalig',
    'Wöchentlich',
    '14-tägig',
    'Monatlich',
    'Nach Bedarf',
  ];

  const totalSteps = 6;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg p-6 md:p-8 w-full max-w-2xl relative my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-[#10b981] transition-colors"
        >
          <X size={24} />
        </button>

        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
          Anfrage senden
        </h3>
        <p className="text-gray-600 mb-6">Schritt {currentStep + 1} von {totalSteps}</p>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div
            className="bg-[#10b981] h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {currentStep === 0 && (
          <div className="space-y-4">
            <label className="block text-lg font-semibold text-gray-900">
              Welche Dienstleistung benötigen Sie?
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => {
                    handleChange('serviceType', service);
                    handleNext();
                  }}
                  className={`p-4 border-2 rounded-lg text-left transition-all hover:border-[#10b981] hover:bg-[#10b981]/5 ${
                    formData.serviceType === service
                      ? 'border-[#10b981] bg-[#10b981]/5'
                      : 'border-gray-300'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-4">
            <label className="block text-lg font-semibold text-gray-900">
              Um welche Art von Objekt handelt es sich?
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleChange('propertyType', type)}
                  className={`p-4 border-2 rounded-lg text-left transition-all hover:border-[#10b981] hover:bg-[#10b981]/5 ${
                    formData.propertyType === type
                      ? 'border-[#10b981] bg-[#10b981]/5'
                      : 'border-gray-300'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <input
              type="text"
              value={formData.propertySize}
              onChange={(e) => handleChange('propertySize', e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#10b981] focus:outline-none"
              placeholder="Größe in m² (optional)"
            />
            <div className="flex justify-between pt-4">
              <button
                onClick={handlePrev}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Zurück
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.propertyType}
                className="bg-[#10b981] hover:bg-[#0d9668] text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Weiter
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <label className="block text-lg font-semibold text-gray-900">
              Wie oft benötigen Sie den Service?
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {frequencies.map((freq) => (
                <button
                  key={freq}
                  onClick={() => handleChange('frequency', freq)}
                  className={`p-4 border-2 rounded-lg text-left transition-all hover:border-[#10b981] hover:bg-[#10b981]/5 ${
                    formData.frequency === freq
                      ? 'border-[#10b981] bg-[#10b981]/5'
                      : 'border-gray-300'
                  }`}
                >
                  {freq}
                </button>
              ))}
            </div>
            <div className="pt-2">
              <label className="block mb-2 font-medium text-gray-700">
                Gewünschter Beginn
              </label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => handleChange('startDate', e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#10b981] focus:outline-none"
              />
            </div>
            <div className="flex justify-between pt-4">
              <button
                onClick={handlePrev}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Zurück
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.frequency}
                className="bg-[#10b981] hover:bg-[#0d9668] text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Weiter
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <label className="block text-lg font-semibold text-gray-900">
              Ihre Kontaktdaten
            </label>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Name*</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#10b981] focus:outline-none"
                placeholder="Ihr vollständiger Name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Telefon*</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#10b981] focus:outline-none"
                placeholder="+49 ..."
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">E-Mail*</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#10b981] focus:outline-none"
                placeholder="ihre.email@beispiel.de"
                required
              />
            </div>
            <div className="flex justify-between pt-4">
              <button
                onClick={handlePrev}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Zurück
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.name || !formData.phone || !formData.email}
                className="bg-[#10b981] hover:bg-[#0d9668] text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Weiter
              </button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-4">
            <label className="block text-lg font-semibold text-gray-900">
              Zusätzliche Informationen
            </label>
            <textarea
              value={formData.additionalInfo}
              onChange={(e) => handleChange('additionalInfo', e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#10b981] focus:outline-none"
              placeholder="Gibt es noch etwas, das wir wissen sollten? (optional)"
              rows={6}
            />
            <div className="flex justify-between pt-4">
              <button
                onClick={handlePrev}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Zurück
              </button>
              <button
                onClick={handleNext}
                className="bg-[#10b981] hover:bg-[#0d9668] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Weiter
              </button>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="space-y-6">
            <label className="block text-lg font-semibold text-gray-900">
              Wie möchten Sie kontaktiert werden?
            </label>
            <div className="space-y-3">
              <button
                onClick={() => handleChange('contactMethod', 'whatsapp')}
                className={`w-full p-4 border-2 rounded-lg flex items-center gap-3 transition-all hover:border-[#25d366] ${
                  formData.contactMethod === 'whatsapp'
                    ? 'border-[#25d366] bg-[#25d366]/5'
                    : 'border-gray-300'
                }`}
              >
                <MessageCircle className="text-[#25d366]" size={24} />
                <div className="text-left">
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-sm text-gray-600">Schnelle Antwort via WhatsApp</div>
                </div>
              </button>
              <button
                onClick={() => handleChange('contactMethod', 'email')}
                className={`w-full p-4 border-2 rounded-lg flex items-center gap-3 transition-all hover:border-[#10b981] ${
                  formData.contactMethod === 'email'
                    ? 'border-[#10b981] bg-[#10b981]/5'
                    : 'border-gray-300'
                }`}
              >
                <Mail className="text-[#10b981]" size={24} />
                <div className="text-left">
                  <div className="font-semibold">E-Mail</div>
                  <div className="text-sm text-gray-600">Kontakt per E-Mail</div>
                </div>
              </button>
              <button
                onClick={() => handleChange('contactMethod', 'both')}
                className={`w-full p-4 border-2 rounded-lg flex items-center gap-3 transition-all hover:border-[#10b981] ${
                  formData.contactMethod === 'both'
                    ? 'border-[#10b981] bg-[#10b981]/5'
                    : 'border-gray-300'
                }`}
              >
                <Send className="text-[#10b981]" size={24} />
                <div className="text-left">
                  <div className="font-semibold">Beides</div>
                  <div className="text-sm text-gray-600">WhatsApp und E-Mail öffnen</div>
                </div>
              </button>
            </div>
            <div className="flex justify-between pt-4">
              <button
                onClick={handlePrev}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Zurück
              </button>
              <button
                onClick={handleSubmit}
                className="bg-[#10b981] hover:bg-[#0d9668] text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center gap-2"
              >
                <Send size={20} />
                Anfrage senden
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
