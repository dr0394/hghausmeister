import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const message = encodeURIComponent('Ich interessiere mich für Ihren Service');

  return (
    <a
      href={`https://wa.me/4915161527438?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-[#25d366] p-4 rounded-full shadow-lg hover:bg-[#20b858] transition-colors z-50"
      aria-label="WhatsApp Kontakt"
    >
      <MessageCircle className="text-white" size={28} />
    </a>
  );
}
