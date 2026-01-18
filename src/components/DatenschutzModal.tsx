import { X } from 'lucide-react';

interface DatenschutzModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DatenschutzModal({ isOpen, onClose }: DatenschutzModalProps) {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Datenschutzerklärung</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Verantwortlicher</h2>
            <div className="text-gray-700 space-y-2">
              <p className="font-semibold text-lg">H.G. Hausmeisterservice</p>
              <p>Einzelunternehmer: Helmut Geisler Hausmeisterservice</p>
              <p>Inhaber: Helmut Geisler</p>
              <p>Innlände 11</p>
              <p>83115 Neubeuern</p>
              <p>Deutschland</p>
              <div className="mt-4 space-y-2">
                <p className="font-semibold">Kontakt:</p>
                <p>Telefon: <a href="tel:+4915161527438" className="text-[#10b981] hover:underline">+49 (0) 151 61527438</a></p>
                <p>E-Mail: <a href="mailto:h.g.hausmeisterservice@t-online.de" className="text-[#10b981] hover:underline">h.g.hausmeisterservice@t-online.de</a></p>
                <p>Web: <a href="https://www.hghausmeisterservice.eu" className="text-[#10b981] hover:underline" target="_blank" rel="noopener noreferrer">www.hghausmeisterservice.eu</a></p>
              </div>
              <p className="mt-4">Umsatzsteuer-Identifikationsnummer: DE 281621501</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Berufsbezeichnung</h2>
            <p className="text-gray-700">Hausmeisterservice / Gebäudedienstleistungen</p>
            <p className="text-gray-700">Tätig für gewerbliche Kunden und Privatkunden.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Leistungsübersicht</h2>
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
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Allgemeines zur Datenverarbeitung</h2>
            <div className="text-gray-700 space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">4.1 Umfang der Verarbeitung personenbezogener Daten</h3>
                <p>
                  Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung
                  einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung
                  personenbezogener Daten erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen
                  Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und
                  die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">4.2 Rechtsgrundlage für die Verarbeitung personenbezogener Daten</h3>
                <p>
                  Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen,
                  dient Art. 6 Abs. 1 lit. a EU-Datenschutzgrundverordnung (DSGVO) als Rechtsgrundlage.
                </p>
                <p className="mt-2">
                  Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages, dessen Vertragspartei die
                  betroffene Person ist, erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage.
                </p>
                <p className="mt-2">
                  Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist,
                  dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage.
                </p>
                <p className="mt-2">
                  Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich
                  und überwiegen die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das erstgenannte Interesse nicht,
                  so dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage für die Verarbeitung.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">4.3 Datenlöschung und Speicherdauer</h3>
                <p>
                  Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt, sobald der Zweck der Speicherung
                  entfällt. Eine Speicherung kann darüber hinaus erfolgen, wenn dies durch den europäischen oder nationalen Gesetzgeber
                  in unionsrechtlichen Verordnungen, Gesetzen oder sonstigen Vorschriften, denen der Verantwortliche unterliegt,
                  vorgesehen wurde.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Bereitstellung der Website und Erstellung von Logfiles</h2>
            <div className="text-gray-700 space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">5.1 Beschreibung und Umfang der Datenverarbeitung</h3>
                <p>
                  Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten und Informationen vom Computersystem
                  des aufrufenden Rechners. Folgende Daten werden hierbei erhoben:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Informationen über den Browsertyp und die verwendete Version</li>
                  <li>Das Betriebssystem des Nutzers</li>
                  <li>Den Internet-Service-Provider des Nutzers</li>
                  <li>Die IP-Adresse des Nutzers</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Websites, von denen das System des Nutzers auf unsere Internetseite gelangt</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">5.2 Rechtsgrundlage für die Datenverarbeitung</h3>
                <p>
                  Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">5.3 Zweck der Datenverarbeitung</h3>
                <p>
                  Die vorübergehende Speicherung der IP-Adresse durch das System ist notwendig, um eine Auslieferung der Website
                  an den Rechner des Nutzers zu ermöglichen. Hierfür muss die IP-Adresse des Nutzers für die Dauer der Sitzung
                  gespeichert bleiben.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Rechte der betroffenen Person</h2>
            <div className="text-gray-700 space-y-4">
              <p>Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener i.S.d. DSGVO und es stehen Ihnen folgende Rechte gegenüber dem Verantwortlichen zu:</p>

              <div>
                <h3 className="font-semibold text-lg mb-2">6.1 Auskunftsrecht</h3>
                <p>
                  Sie können von dem Verantwortlichen eine Bestätigung darüber verlangen, ob personenbezogene Daten, die Sie betreffen,
                  von uns verarbeitet werden.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">6.2 Recht auf Berichtigung</h3>
                <p>
                  Sie haben ein Recht auf Berichtigung und/oder Vervollständigung gegenüber dem Verantwortlichen, sofern die
                  verarbeiteten personenbezogenen Daten, die Sie betreffen, unrichtig oder unvollständig sind.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">6.3 Recht auf Löschung</h3>
                <p>
                  Sie können von dem Verantwortlichen verlangen, dass die Sie betreffenden personenbezogenen Daten unverzüglich
                  gelöscht werden, und der Verantwortliche ist verpflichtet, diese Daten unverzüglich zu löschen.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">6.4 Recht auf Einschränkung der Verarbeitung</h3>
                <p>
                  Unter bestimmten Voraussetzungen können Sie die Einschränkung der Verarbeitung der Sie betreffenden
                  personenbezogenen Daten verlangen.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">6.5 Recht auf Datenübertragbarkeit</h3>
                <p>
                  Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie dem Verantwortlichen bereitgestellt haben,
                  in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">6.6 Widerspruchsrecht</h3>
                <p>
                  Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung
                  der Sie betreffenden personenbezogenen Daten Widerspruch einzulegen.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">6.7 Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung</h3>
                <p>
                  Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu widerrufen. Durch den Widerruf
                  der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung
                  nicht berührt.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">6.8 Recht auf Beschwerde bei einer Aufsichtsbehörde</h3>
                <p>
                  Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf
                  Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres Aufenthaltsorts, ihres Arbeitsplatzes
                  oder des Orts des mutmaßlichen Verstoßes, zu, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden
                  personenbezogenen Daten gegen die DSGVO verstößt.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. EU-Streitschlichtung / Verbraucherstreitbeilegung</h2>
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
              Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p className="text-gray-700">
              Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer Website und Angebote darüber oder
              aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung
              zu ändern.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
