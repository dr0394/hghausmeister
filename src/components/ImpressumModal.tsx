import { X } from 'lucide-react';

interface ImpressumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ImpressumModal({ isOpen, onClose }: ImpressumModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 mt-4 text-gray-600 hover:text-[#10b981] transition-colors z-10"
        >
          <X size={32} />
        </button>

        <div className="p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Impressum</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Angaben gemäß § 5 TMG</h2>
            <div className="text-gray-700 space-y-2">
              <p className="font-semibold text-lg">H.G. Hausmeisterservice</p>
              <p>Einzelunternehmer: Helmut Geisler Hausmeisterservice</p>
              <p>Inhaber: Helmut Geisler</p>
              <p>Innlände 11</p>
              <p>83115 Neubeuern</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Kontakt</h2>
            <div className="text-gray-700 space-y-2">
              <p>Telefon: <a href="tel:+4915161527438" className="text-[#10b981] hover:underline">+49 (0) 151 61527438</a></p>
              <p>E-Mail: <a href="mailto:h.g.hausmeisterservice@t-online.de" className="text-[#10b981] hover:underline">h.g.hausmeisterservice@t-online.de</a></p>
              <p>Web: <a href="https://www.hghausmeisterservice.eu" className="text-[#10b981] hover:underline" target="_blank" rel="noopener noreferrer">www.hghausmeisterservice.eu</a></p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Umsatzsteuer-ID</h2>
            <p className="text-gray-700">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p className="text-gray-700 font-semibold">DE 281621501</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Berufsbezeichnung</h2>
            <p className="text-gray-700">Hausmeisterservice / Gebäudedienstleistungen</p>
            <p className="text-gray-700">Tätig für gewerbliche Kunden und Privatkunden.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Leistungsübersicht</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Gartenpflege</li>
              <li>Außenanlagenpflege</li>
              <li>Treppenhausreinigung</li>
              <li>Entrümpelung und Entsorgung</li>
              <li>Winterdienst</li>
              <li>Anhängerverleih</li>
              <li>Gartenbau / kleinere Baumaßnahmen</li>
              <li>Allgemeine Hausmeister- und Objektpflege</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">EU-Streitschlichtung</h2>
            <p className="text-gray-700 mb-2">
              Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                className="text-[#10b981] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="text-gray-700">
              Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Haftung für Inhalte</h2>
            <p className="text-gray-700">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten verantwortlich.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir keine Gewähr.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Haftung für Links</h2>
            <p className="text-gray-700">
              Unsere Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Für diese Inhalte übernehmen wir keine Haftung. Für die Inhalte verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Urheberrecht</h2>
            <p className="text-gray-700">
              Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem deutschen Urheberrecht.
              Vervielfältigung, Bearbeitung oder jede Art der Verwertung bedürfen der schriftlichen Zustimmung des Seitenbetreibers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
