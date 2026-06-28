import {
  Download,
  FileText,
  Globe2,
  Image as ImageIcon,
  Mail,
  Palette,
  ShieldCheck,
  Type,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts, faqItems } from '../data/marketing';

type LegalSection = {
  title: string;
  body: React.ReactNode;
};

const pressAssets = [
  {
    title: 'App Icon',
    meta: 'PNG · 1024 × 1024',
    href: '/press/tonspur-app-icon.png',
    imageSrc: '/press/tonspur-app-icon.png',
  },
  {
    title: 'Web Icon',
    meta: 'PNG · 512 × 512',
    href: '/press/tonspur-web-icon-512.png',
    imageSrc: '/press/tonspur-web-icon-512.png',
  },
  {
    title: 'Web Icon klein',
    meta: 'PNG · 192 × 192',
    href: '/press/tonspur-web-icon-192.png',
    imageSrc: '/press/tonspur-web-icon-192.png',
  },
];

const pressFacts = [
  { label: 'Marke', value: 'Tonspur' },
  { label: 'Produkt', value: 'App für Audio-Geschichten' },
  { label: 'Bundle ID', value: 'social.tonspur.app' },
  { label: 'Website', value: 'tonspur.app' },
];

const brandSwatches = [
  { name: 'Background', hex: '#16110F' },
  { name: 'Surface', hex: '#1C1614' },
  { name: 'Text Bright', hex: '#FDF8F0' },
  { name: 'Accent Teal', hex: '#3D8A86' },
  { name: 'Accent Hover', hex: '#5DABA7' },
  { name: 'Star', hex: '#F2B544' },
];

export function BlogPage() {
  return (
    <>
      <PageHead eyebrow="Blog" title="Notizen aus dem Hörspiel-Tagebuch.">
        <p className="lede">
          Redaktionelle Entwürfe für Produktgeschichten, Hörgewohnheiten und
          Community-Listen. Die Inhalte sind als Platzhalter markiert, bis der echte
          Redaktionsplan steht.
        </p>
      </PageHead>
      <section className="section section--first">
        <div className="container">
          <div className="post-grid">
            {blogPosts.map((post) => (
              <article
                className={`post-card${post.featured ? ' post-card--feature' : ''}`}
                key={post.title}
              >
                <div
                  className="post-card__art"
                  style={{ '--cover-grad': post.grad } as React.CSSProperties}
                  aria-hidden="true"
                />
                <div className="post-card__body">
                  <span className="post-card__cat">{post.category}</span>
                  <h2 className="post-card__title">{post.title}</h2>
                  <p className="post-card__excerpt">{post.excerpt}</p>
                  <p className="post-card__meta">{post.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function FaqPage() {
  return (
    <>
      <PageHead eyebrow="FAQ" title="Antworten, bevor die erste Folge startet.">
        <p className="lede">
          Die wichtigsten Fragen für die Launch-Seite. Einige Antworten brauchen noch
          finale Produkt- und Store-Informationen.
        </p>
      </PageHead>
      <section className="section section--first">
        <div className="container">
          <div className="faq-list">
            {faqItems.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <div className="faq-item__body">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function PressPage() {
  return (
    <>
      <header className="page-head press-hero">
        <div className="container press-hero__inner">
          <div className="press-hero__copy">
            <span className="eyebrow">Presse Kit · Stand 27. Juni 2026</span>
            <h1 className="display-lg">Material für Geschichten über Tonspur.</h1>
            <p className="lede">
              Kurzprofil, Markenangaben, Bildmaterial und Ansprechpartner für Medien.
              Tonspur ist eine App zum Entdecken, Sammeln, Bewerten und Besprechen von
              Hörspielen, Hörbüchern und verwandten Audioinhalten.
            </p>
          </div>
          <figure className="press-hero__icon">
            <img src="/press/tonspur-app-icon.png" alt="Tonspur App Icon" />
            <figcaption>Offizielles Presse-Icon</figcaption>
          </figure>
        </div>
      </header>
      <section className="section section--first">
        <div className="container">
          <div className="press-facts" aria-label="Tonspur Fakten">
            {pressFacts.map((fact) => (
              <div className="press-fact" key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>

          <div className="press-intro">
            <div>
              <span className="eyebrow">Kurzbeschreibung</span>
              <h2 className="h-2">Ein kuratiertes Regal für Audio-Geschichten.</h2>
            </div>
            <div className="press-copy">
              <p>
                Tonspur richtet sich an Menschen, die Audio-Geschichten nicht nur
                konsumieren, sondern entdecken, einordnen, sammeln und mit anderen
                besprechen möchten.
              </p>
              <p>
                Nutzerinnen und Nutzer entdecken neue Reihen und Episoden, speichern
                Favoriten, bewerten Inhalte und tauschen sich mit der Community aus.
              </p>
            </div>
          </div>

          <div className="kit-grid press-kit-grid">
            <KitCard
              icon={ImageIcon}
              title="Bildmaterial"
              body="Das App Icon und Web-Icons sind aktuell die offiziellen Tonspur-Bildquellen für Presse und Vorschauen."
              action="PNG-Assets unten"
            />
            <KitCard
              icon={FileText}
              title="Schreibweise"
              body="Der Markenname wird immer Tonspur geschrieben. Varianten wie TonSpur, Ton Spur oder kleingeschriebenes tonspur bitte vermeiden."
              action="Markenname"
            />
            <KitCard
              icon={Palette}
              title="Markenwirkung"
              body="Tonspur wirkt ruhig, kuratiert und communitynah. Teal bleibt der primäre Akzent auf warmen neutralen Flächen."
              action="Branding"
            />
          </div>

          <div className="press-section">
            <div className="section-head">
              <span className="eyebrow">Downloads</span>
              <h2 className="h-2">Offizielle Bildquellen</h2>
            </div>
            <div className="press-assets">
              {pressAssets.map((asset) => (
                <article className="press-asset" key={asset.href}>
                  <div className="press-asset__preview">
                    <img src={asset.imageSrc} alt="" />
                  </div>
                  <div>
                    <h3 className="h-3">{asset.title}</h3>
                    <p>{asset.meta}</p>
                  </div>
                  <a className="btn" href={asset.href} download>
                    <Download aria-hidden="true" />
                    Download
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div className="press-section press-brand">
            <section>
              <div className="feature__icon">
                <Type strokeWidth={1.75} aria-hidden="true" />
              </div>
              <h2 className="h-3">Logo und Wortmarke</h2>
              <p>
                Die Wortmarke wird als echter Text gesetzt: Instrument Serif Italic,
                Gewicht 400, mit ausreichend Abstand. Sie wird nicht verzerrt,
                umrandet, gekippt oder mit fremden Effekten überladen.
              </p>
              <div className="press-wordmark" aria-label="Tonspur Wortmarke">
                Tonspur
              </div>
            </section>
            <section>
              <div className="feature__icon">
                <Globe2 strokeWidth={1.75} aria-hidden="true" />
              </div>
              <h2 className="h-3">Webseitennutzung</h2>
              <p>
                Für sichtbare Pressebereiche wird das hochaufgelöste App Icon
                bevorzugt. Spotify-Assets gehören ausschließlich zur Spotify-Integration
                und sind keine Tonspur-Markenassets.
              </p>
            </section>
          </div>

          <div className="press-section">
            <div className="section-head">
              <span className="eyebrow">Farben</span>
              <h2 className="h-2">Primäre Dark-Mode-Palette</h2>
            </div>
            <div className="swatch-grid">
              {brandSwatches.map((color) => (
                <div className="swatch" key={color.hex}>
                  <span className="swatch__chip" style={{ background: color.hex }} />
                  <span className="swatch__name">{color.name}</span>
                  <code>{color.hex}</code>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-grid press-contact">
            <div className="contact-card">
              <h2 className="h-3">Kontakt</h2>
              <p>
                Presseanfragen gehen an{' '}
                <a href="mailto:contact@tonspur.social">contact@tonspur.social</a>.
              </p>
            </div>
            <div className="contact-card">
              <h2 className="h-3">Noch fehlende Assets</h2>
              <p>
                Dedizierte Wortmarken-Dateien, Open-Graph-Grafik, App-Screenshots,
                Pressebilder und Mockups liegen aktuell noch nicht vor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function TermsPage() {
  return (
    <LegalPage
      eyebrow="AGB"
      title="Allgemeine Geschäftsbedingungen"
      note={null}
      intro={<p>Stand: Juni 2026</p>}
      sections={[
        {
          title: '1. Geltungsbereich und Vertragspartner',
          body: (
            <>
              <p>
                Diese Nutzungsbedingungen gelten für die Nutzung der App Tonspur und aller
                damit verbundenen Dienste, Inhalte, Funktionen und Online-Angebote.
              </p>
              <p>Anbieter und Verantwortlicher:</p>
              <p>
                Tonspur UG i.G.
                <br />
                Glauchauer Str. 7
                <br />
                33739 Bielefeld
                <br />
                E-Mail:{' '}
                <a href="mailto:contact@tonspur.social">contact@tonspur.social</a>
              </p>
              <p>
                Mit dem Download, der Installation, der Registrierung oder der Nutzung von
                Tonspur erklären Sie sich mit diesen Nutzungsbedingungen einverstanden. Wenn
                Sie mit diesen Nutzungsbedingungen nicht einverstanden sind, dürfen Sie
                Tonspur nicht nutzen.
              </p>
              <p>
                Für die technische Bereitstellung über App-Stores gelten zusätzlich die
                Bedingungen des jeweiligen App-Store-Betreibers. Soweit Tonspur über den
                Apple App Store bezogen wird und keine gesonderte Endnutzer-Lizenzvereinbarung
                vereinbart wurde, gilt ergänzend die Apple Standard EULA.
              </p>
            </>
          ),
        },
        {
          title: '2. Leistungsbeschreibung',
          body: (
            <>
              <p>
                Tonspur ist eine App für Hörspiele, Hörbücher und andere Audio-Inhalte. Die
                App unterstützt Nutzerinnen und Nutzer insbesondere dabei,
              </p>
              <ul>
                <li>Audio-Produktionen, Serien, Folgen und Veröffentlichungen zu entdecken,</li>
                <li>Inhalte in einer persönlichen Bibliothek zu speichern,</li>
                <li>
                  Hörfortschritt, Bewertungen, Rezensionen und Statistiken zu verwalten,
                </li>
                <li>eigene Playlists und Listen zu erstellen,</li>
                <li>sich über Audio-Inhalte in Diskussionen auszutauschen,</li>
                <li>
                  ausgewählte Inhalte oder Metadaten über Drittanbieter wie Spotify
                  aufzurufen,
                </li>
                <li>
                  Tonspur optional über ein kostenpflichtiges Abonnement (&quot;Tonspur
                  Club&quot;) zu unterstützen.
                </li>
              </ul>
              <p>
                Tonspur ist kein Streamingdienst für alle angezeigten Audio-Inhalte. Soweit
                Audio-Inhalte, Cover, Beschreibungen, Verfügbarkeiten, Veröffentlichungsdaten
                oder externe Links von Dritten stammen oder auf Drittplattformen verweisen,
                gelten zusätzlich die Bedingungen dieser Drittanbieter. Tonspur übernimmt
                keine Gewähr dafür, dass externe Inhalte jederzeit verfügbar, vollständig,
                richtig, werbefrei oder in allen Ländern abrufbar sind.
              </p>
              <p>
                Katalogdaten, Rankings, Empfehlungen, Veröffentlichungsdaten, Bewertungen und
                Statistiken können redaktionell gepflegt, automatisiert verarbeitet oder aus
                Nutzeraktivität abgeleitet werden. Sie dienen der Orientierung und begründen
                keinen Anspruch auf Aufnahme, Platzierung, Sichtbarkeit oder dauerhafte
                Verfügbarkeit bestimmter Inhalte.
              </p>
            </>
          ),
        },
        {
          title: '3. Registrierung und Nutzerkonto',
          body: (
            <>
              <p>
                Die Nutzung bestimmter Funktionen erfordert die Erstellung eines
                Nutzerkontos. Hierzu können insbesondere eine E-Mail-Adresse, ein Benutzername
                und weitere Profilangaben erforderlich sein.
              </p>
              <p>
                Sie sind verpflichtet, bei der Registrierung und Nutzung richtige und
                aktuelle Angaben zu machen, soweit diese für die Nutzung erforderlich sind.
                Zugangsdaten sind vertraulich zu behandeln. Bei Verdacht auf eine unbefugte
                Nutzung Ihres Kontos informieren Sie uns bitte unverzüglich.
              </p>
              <p>
                Pro Person ist nur ein Konto zulässig, sofern wir im Einzelfall nichts
                anderes erlauben. Benutzername, Profilbild, Anzeigename, Biografie und
                sonstige Profilangaben dürfen keine Rechte Dritter verletzen, nicht
                irreführend sein und nicht gegen diese Nutzungsbedingungen verstoßen.
              </p>
              <p>
                Die Nutzung von Tonspur ist nur zulässig, wenn Sie mindestens 16 Jahre alt
                sind. Wenn Sie jünger sind, dürfen Sie Tonspur nur nutzen, wenn die
                Einwilligung Ihrer gesetzlichen Vertretung vorliegt und die Nutzung nach
                geltendem Recht zulässig ist.
              </p>
            </>
          ),
        },
        {
          title: '4. Community-Funktionen und Nutzerinhalte',
          body: (
            <>
              <p>
                Tonspur kann Funktionen enthalten, mit denen Nutzerinnen und Nutzer eigene
                Inhalte veröffentlichen oder anderen zugänglich machen, insbesondere
                Rezensionen, Bewertungen, Diskussionen, Kommentare, Antworten, Playlists,
                Profilangaben, Bilder und sonstige Beiträge (&quot;Nutzerinhalte&quot;).
              </p>
              <p>
                Sie bleiben Inhaberin oder Inhaber Ihrer Nutzerinhalte. Sie räumen uns jedoch
                ein einfaches, unentgeltliches, weltweites, nicht ausschließliches und
                übertragbares Nutzungsrecht ein, Ihre Nutzerinhalte im Rahmen von Tonspur zu
                speichern, zu vervielfältigen, öffentlich zugänglich zu machen, anzuzeigen,
                technisch zu bearbeiten, zu formatieren, zu moderieren und zu verbreiten,
                soweit dies für Betrieb, Sicherheit, Darstellung, Weiterentwicklung und
                Bewerbung von Tonspur erforderlich ist. Dieses Recht endet grundsätzlich,
                wenn Sie den jeweiligen Inhalt löschen oder Ihr Konto gelöscht wird, soweit
                eine weitere Speicherung oder Anzeige nicht aus technischen, rechtlichen oder
                berechtigten Gründen erforderlich ist, etwa bei Sicherungskopien, Nachweisen,
                Moderationsentscheidungen oder bereits geführten Diskussionen.
              </p>
              <p>
                Sie sichern zu, dass Sie über alle erforderlichen Rechte an Ihren
                Nutzerinhalten verfügen und dass Ihre Nutzerinhalte keine Rechte Dritter
                verletzen. Dazu gehören insbesondere Urheberrechte, Markenrechte,
                Persönlichkeitsrechte, Datenschutzrechte und sonstige Schutzrechte.
              </p>
            </>
          ),
        },
        {
          title: '5. Verbotene Inhalte und verbotenes Verhalten',
          body: (
            <>
              <p>
                Sie dürfen Tonspur nicht nutzen, um Inhalte zu erstellen, hochzuladen, zu
                verlinken, zu verbreiten oder sonst zugänglich zu machen, die
              </p>
              <ul>
                <li>rechtswidrig sind oder zu rechtswidrigem Verhalten auffordern,</li>
                <li>
                  Urheberrechte, Markenrechte, Persönlichkeitsrechte, Datenschutzrechte oder
                  sonstige Rechte Dritter verletzen,
                </li>
                <li>
                  beleidigend, bedrohend, belästigend, verleumderisch, diskriminierend,
                  hasserfüllt oder entwürdigend sind,
                </li>
                <li>
                  Gewalt, Selbstgefährdung, Missbrauch, Ausbeutung oder gefährliches
                  Verhalten fördern oder verherrlichen,
                </li>
                <li>pornografische, sexualisierte oder jugendgefährdende Inhalte enthalten,</li>
                <li>
                  private oder vertrauliche Informationen Dritter ohne Berechtigung
                  offenlegen,
                </li>
                <li>
                  Spam, Werbung, Kettenbriefe, Betrug, Phishing, Schadsoftware oder
                  manipulative Inhalte enthalten,
                </li>
                <li>Bewertungen, Rankings, Diskussionen oder technische Systeme manipulieren,</li>
                <li>
                  sich als eine andere Person oder Organisation ausgeben oder eine falsche
                  Verbindung zu Dritten behaupten.
                </li>
              </ul>
              <p>
                Ebenfalls untersagt sind automatisierte Zugriffe, Scraping, Bots, Reverse
                Engineering, Umgehung technischer Schutzmaßnahmen, Überlastung unserer
                Infrastruktur, Störung des Dienstbetriebs sowie jede Nutzung, die Tonspur,
                andere Nutzerinnen und Nutzer oder Dritte schädigt.
              </p>
            </>
          ),
        },
        {
          title: '6. Moderation, Meldungen und Maßnahmen',
          body: (
            <>
              <p>
                Wir können Nutzerinhalte prüfen, moderieren, einschränken, herabstufen,
                ausblenden, sperren oder löschen, wenn sie gegen diese Nutzungsbedingungen,
                gesetzliche Vorgaben, Rechte Dritter oder Community- und Sicherheitsstandards
                verstoßen oder wenn ein entsprechender Verdacht besteht.
              </p>
              <p>
                Wir können außerdem Nutzerkonten verwarnen, Funktionen einschränken,
                Diskussionen schließen, Beiträge löschen, Nutzende zeitweise oder dauerhaft
                sperren oder ein Konto kündigen, wenn dies zur Durchsetzung dieser
                Nutzungsbedingungen, zum Schutz anderer Nutzerinnen und Nutzer, zur
                Einhaltung gesetzlicher Pflichten oder zur Sicherheit von Tonspur
                erforderlich ist.
              </p>
              <p>
                Nutzerinnen und Nutzer können mutmaßlich rechtswidrige oder regelwidrige
                Inhalte über die in der App vorgesehenen Meldefunktionen oder per E-Mail an{' '}
                <a href="mailto:contact@tonspur.social">contact@tonspur.social</a> melden.
                Meldungen sollten den betroffenen Inhalt, den Grund der Meldung und eine
                kurze Begründung enthalten.
              </p>
              <p>
                Wir bearbeiten Meldungen sorgfältig, objektiv und verhältnismäßig. Soweit
                gesetzlich erforderlich, informieren wir betroffene Nutzerinnen und Nutzer
                über wesentliche Moderationsentscheidungen und vorhandene
                Beschwerdemöglichkeiten. Bei offensichtlich unbegründeten, missbräuchlichen
                oder massenhaften Meldungen können wir die Bearbeitung weiterer Meldungen
                einschränken.
              </p>
            </>
          ),
        },
        {
          title: '7. Nutzungsrechte an der App',
          body: (
            <>
              <p>
                Wir gewähren Ihnen ein einfaches, nicht ausschließliches, nicht
                übertragbares, widerrufliches Recht, Tonspur im Rahmen dieser
                Nutzungsbedingungen privat und bestimmungsgemäß zu nutzen.
              </p>
              <p>Nicht erlaubt sind insbesondere</p>
              <ul>
                <li>
                  die kommerzielle Verwertung, Vermietung, Weiterlizenzierung oder der
                  Weitervertrieb der App oder ihrer Inhalte ohne unsere Zustimmung,
                </li>
                <li>
                  das Kopieren, Ändern, Dekompilieren, Zerlegen oder Reverse Engineering der
                  App, soweit dies nicht gesetzlich ausdrücklich erlaubt ist,
                </li>
                <li>der Zugriff auf nicht öffentliche Schnittstellen oder Systeme,</li>
                <li>
                  das Entfernen von Urheberrechts-, Marken- oder sonstigen
                  Schutzrechtshinweisen,
                </li>
                <li>
                  die Nutzung der App für Zwecke, die gegen geltendes Recht oder diese
                  Nutzungsbedingungen verstoßen.
                </li>
              </ul>
              <p>
                Alle Rechte an der App, am Design, an Marken, Logos, Software, Datenbanken,
                redaktionellen Inhalten und sonstigen von uns bereitgestellten Inhalten
                verbleiben bei uns oder den jeweiligen Rechteinhabern.
              </p>
            </>
          ),
        },
        {
          title: '8. Drittanbieter, externe Inhalte und Spotify',
          body: (
            <>
              <p>
                Tonspur kann Inhalte, Links, Metadaten, Coverbilder, Namen, Marken oder
                sonstige Informationen von Drittanbietern anzeigen oder auf Drittanbieter
                verweisen. Dazu können insbesondere Streamingplattformen, App-Stores,
                Zahlungsdienste, Analyse- und Backend-Dienste sowie Anbieter von
                Audio-Inhalten gehören.
              </p>
              <p>
                Wenn Sie externe Links öffnen oder Drittanbieterfunktionen nutzen, gelten die
                jeweiligen Bedingungen und Datenschutzhinweise des Drittanbieters. Wir sind
                nicht verantwortlich für Inhalte, Verfügbarkeit, Preise, Vertragsbedingungen,
                Datenschutzpraktiken oder technische Funktionsfähigkeit von Drittanbietern.
              </p>
              <p>
                Spotify und andere genannte Marken sind Marken ihrer jeweiligen Inhaber.
                Tonspur steht nicht automatisch in einer geschäftlichen Verbindung zu diesen
                Drittanbietern, sofern dies nicht ausdrücklich angegeben ist.
              </p>
            </>
          ),
        },
        {
          title: '9. Kostenpflichtige Nutzung und Tonspur Club',
          body: (
            <>
              <p>
                Tonspur kann kostenlos nutzbare Funktionen sowie kostenpflichtige
                Zusatzfunktionen oder Unterstützungsabonnements anbieten. Das kostenpflichtige
                Angebot wird in der App beschrieben.
              </p>
              <p>
                Der Tonspur Club ist ein optionales, kostenpflichtiges Abonnement.
                Unterschiedliche Unterstützungsstufen können denselben Funktionsumfang
                freischalten und sich lediglich im monatlichen Unterstützungsbetrag
                unterscheiden, sofern in der App nichts anderes angegeben ist. Die jeweils
                angezeigten Preise, Laufzeiten, Vorteile und Bedingungen gelten zum Zeitpunkt
                des Abschlusses.
              </p>
              <p>
                Abonnements werden je nach Plattform über den Apple App Store, Google Play
                Store oder einen anderen eingebundenen Zahlungsanbieter abgeschlossen und
                abgerechnet. Die Zahlung erfolgt über Ihr jeweiliges Store- oder
                Zahlungskonto. Für Zahlung, Abrechnung, Verlängerung, Kündigung, Erstattung
                und Zahlungsdaten gelten zusätzlich die Bedingungen des jeweiligen App-Store-
                oder Zahlungsanbieters.
              </p>
              <p>
                Abonnements verlängern sich automatisch, sofern sie nicht rechtzeitig vor
                Ablauf des laufenden Abrechnungszeitraums gekündigt werden. Bei
                Apple-Abonnements muss die Kündigung grundsätzlich spätestens 24 Stunden vor
                Ablauf des aktuellen Zeitraums erfolgen. Die Verwaltung und Kündigung erfolgt
                über die Einstellungen des jeweiligen App-Stores oder über die in der App
                angebotenen Verwaltungsfunktionen, soweit verfügbar.
              </p>
              <p>
                Bereits bezahlte Zeiträume werden nicht erstattet, soweit gesetzlich nichts
                anderes vorgeschrieben ist oder der jeweilige App-Store- oder Zahlungsanbieter
                eine Erstattung gewährt.
              </p>
              <p>
                Wenn Sie die App neu installieren oder das Gerät wechseln, können Sie
                berechtigte Käufe über die Funktion &quot;Käufe wiederherstellen&quot;
                reaktivieren, soweit der jeweilige App-Store oder Zahlungsanbieter dies
                unterstützt.
              </p>
              <p>
                Die Löschung des Tonspur-Kontos beendet ein laufendes App-Store-Abonnement
                nicht automatisch. Ein Abonnement muss separat über den jeweiligen App-Store
                oder Zahlungsanbieter gekündigt werden.
              </p>
            </>
          ),
        },
        {
          title: '10. Verfügbarkeit, Änderungen und Weiterentwicklung',
          body: (
            <>
              <p>
                Wir bemühen uns um einen zuverlässigen Betrieb von Tonspur, schulden jedoch
                keine ununterbrochene oder fehlerfreie Verfügbarkeit. Wartung, Updates,
                Sicherheitsmaßnahmen, technische Störungen, höhere Gewalt oder Ausfälle bei
                Drittanbietern können die Nutzung vorübergehend einschränken.
              </p>
              <p>
                Wir können Tonspur, einzelne Funktionen, Inhalte, Schnittstellen, Designs,
                Empfehlungen, Rankings oder Community-Funktionen ändern, erweitern,
                einschränken oder einstellen, soweit dies für Betrieb, Sicherheit,
                Rechtmäßigkeit, technische Weiterentwicklung, Missbrauchsvermeidung oder
                wirtschaftliche Zumutbarkeit erforderlich oder angemessen ist.
              </p>
              <p>
                Bei kostenpflichtigen Funktionen werden wir wesentliche Änderungen, die das
                vertraglich vereinbarte Verhältnis erheblich zu Ihrem Nachteil verändern,
                angemessen berücksichtigen. Gesetzliche Rechte bleiben unberührt.
              </p>
            </>
          ),
        },
        {
          title: '11. Kontolöschung und Kündigung',
          body: (
            <>
              <p>
                Sie können Ihr Nutzerkonto jederzeit über die in der App vorgesehene Funktion
                löschen, soweit diese verfügbar ist. Alternativ können Sie uns eine
                Löschanfrage per E-Mail senden. Mit der Kontolöschung werden personenbezogene
                Daten und nutzerbezogene Inhalte nach Maßgabe der Datenschutzerklärung und
                gesetzlicher Aufbewahrungspflichten gelöscht oder anonymisiert.
              </p>
              <p>
                Öffentliche Inhalte können nach einer Kontolöschung ganz oder teilweise
                weiterhin sichtbar bleiben, wenn dies für die Verständlichkeit bestehender
                Diskussionen, zur Dokumentation von Moderationsentscheidungen, zur
                Rechtsverteidigung oder aus technischen Gründen erforderlich ist. In diesem
                Fall werden sie, soweit möglich, von Ihrem Konto getrennt oder anonymisiert.
              </p>
              <p>
                Wir können den Nutzungsvertrag aus wichtigem Grund kündigen oder ein Konto
                sperren, insbesondere bei schweren oder wiederholten Verstößen gegen diese
                Nutzungsbedingungen, Missbrauch, Sicherheitsrisiken, Rechtsverletzungen oder
                gesetzlicher Verpflichtung.
              </p>
            </>
          ),
        },
        {
          title: '12. Gewährleistung und Haftung',
          body: (
            <>
              <p>
                Tonspur wird mit angemessener Sorgfalt bereitgestellt. Katalogdaten,
                Veröffentlichungsdaten, Rankings, Empfehlungen, Bewertungen, Statistiken,
                Fortschrittsanzeigen und externe Links können jedoch unvollständig,
                fehlerhaft, veraltet oder vorübergehend nicht verfügbar sein.
              </p>
              <p>
                Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit, bei Verletzung
                von Leben, Körper oder Gesundheit, nach dem Produkthaftungsgesetz sowie in
                allen weiteren Fällen, in denen eine Haftungsbeschränkung gesetzlich
                unzulässig ist.
              </p>
              <p>
                Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten haften wir
                nur für den vertragstypischen, vorhersehbaren Schaden. Wesentliche
                Vertragspflichten sind Pflichten, deren Erfüllung die ordnungsgemäße
                Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung
                Nutzerinnen und Nutzer regelmäßig vertrauen dürfen.
              </p>
              <p>
                Im Übrigen ist unsere Haftung, soweit gesetzlich zulässig, ausgeschlossen.
                Wir haften insbesondere nicht für Schäden, die durch Drittanbieter, externe
                Inhalte, fehlerhafte Nutzerangaben, rechtswidrige Nutzerinhalte,
                missbräuchliche Nutzung, fehlende Internetverbindung, App-Store-Probleme oder
                Ereignisse außerhalb unseres Einflussbereichs entstehen.
              </p>
            </>
          ),
        },
        {
          title: '13. Datenschutz',
          body: (
            <>
              <p>
                Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer
                Datenschutzerklärung unter:
              </p>
              <p>
                <a href="https://tonspur.app/datenschutz">https://tonspur.app/datenschutz</a>
              </p>
              <p>
                Die Datenschutzerklärung ist nicht Bestandteil dieser Nutzungsbedingungen,
                enthält aber wichtige Informationen zur Nutzung von Tonspur, insbesondere zu
                Konto, Profil, Community-Funktionen, Zahlungen, Drittanbietern, Analyse,
                Speicherdauer und Betroffenenrechten.
              </p>
            </>
          ),
        },
        {
          title: '14. Änderungen dieser Nutzungsbedingungen',
          body: (
            <>
              <p>
                Wir können diese Nutzungsbedingungen ändern, wenn dies wegen neuer
                Funktionen, technischer Änderungen, rechtlicher Änderungen,
                Sicherheitsanforderungen, Missbrauchsvermeidung oder wirtschaftlicher
                Anpassungen erforderlich oder angemessen ist.
              </p>
              <p>
                Über wesentliche Änderungen informieren wir Sie in geeigneter Weise, zum
                Beispiel per App-Hinweis, E-Mail oder Veröffentlichung in der App. Wenn Sie
                Tonspur nach Inkrafttreten der Änderungen weiter nutzen, gelten die geänderten
                Nutzungsbedingungen, sofern dies gesetzlich zulässig ist. Bei Änderungen, die
                Ihre wesentlichen Rechte erheblich beeinträchtigen, werden wir Ihre Zustimmung
                einholen, soweit dies gesetzlich erforderlich ist.
              </p>
            </>
          ),
        },
        {
          title: '15. Anwendbares Recht und Gerichtsstand',
          body: (
            <>
              <p>
                Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Wenn Sie
                Verbraucherin oder Verbraucher sind und Ihren gewöhnlichen Aufenthalt in einem
                anderen Staat haben, bleiben zwingende Verbraucherschutzvorschriften dieses
                Staates unberührt.
              </p>
              <p>
                Für Kaufleute, juristische Personen des öffentlichen Rechts oder
                öffentlich-rechtliche Sondervermögen ist Gerichtsstand Bielefeld. Für
                Verbraucherinnen und Verbraucher gelten die gesetzlichen Gerichtsstände.
              </p>
            </>
          ),
        },
        {
          title: '16. Verbraucherstreitbeilegung',
          body: (
            <>
              <p>
                Wir sind nicht verpflichtet und nicht bereit, an einem
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
              <p>
                Die frühere Plattform der EU-Kommission zur Online-Streitbeilegung wurde zum
                20. Juli 2025 eingestellt. Ein Link auf diese Plattform wird deshalb nicht
                mehr bereitgestellt.
              </p>
            </>
          ),
        },
        {
          title: '17. Schlussbestimmungen',
          body: (
            <>
              <p>
                Sollten einzelne Bestimmungen dieser Nutzungsbedingungen unwirksam oder
                undurchführbar sein oder werden, bleibt die Wirksamkeit der übrigen
                Bestimmungen unberührt. An die Stelle der unwirksamen oder undurchführbaren
                Bestimmung treten die gesetzlichen Regelungen.
              </p>
              <p>Die Vertragssprache ist Deutsch.</p>
            </>
          ),
        },
      ]}
    />
  );
}

export function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Datenschutz"
      title="Datenschutzerklärung"
      note="Letzte Aktualisierung: 27. Juni 2026"
      footerNote={null}
      intro={
        <p>
          Diese Datenschutzerklärung informiert darüber, wie Tonspur personenbezogene Daten
          verarbeitet, wenn Sie die Tonspur-App oder die Web-Version unter{' '}
          <code>https://tonspur.app</code> nutzen.
        </p>
      }
      sections={[
        {
          title: '1. Verantwortlicher',
          body: (
            <>
              <p>
                Tonspur UG i.G.
                <br />
                Glauchauer Str. 7
                <br />
                33739 Bielefeld
                <br />
                Deutschland
              </p>
              <p>
                E-Mail:{' '}
                <a href="mailto:contact@tonspur.social">contact@tonspur.social</a>
              </p>
            </>
          ),
        },
        {
          title: '2. Überblick der verarbeiteten Daten',
          body: (
            <>
              <p>
                Tonspur ist eine App zum Entdecken, Bewerten, Sammeln und Besprechen von
                Hörspielen, Hörbüchern und ähnlichen Audioinhalten. Je nach Nutzung
                verarbeiten wir insbesondere folgende Daten:
              </p>
              <ul>
                <li>
                  Account- und Authentifizierungsdaten: E-Mail-Adresse, Passwort-Hash,
                  Supabase-Auth-ID, Nutzer-ID, Sitzungs- und Authentifizierungstoken,
                  E-Mail-Verifizierungsstatus.
                </li>
                <li>
                  Profildaten: Benutzername, Anzeigename, optional Vorname, Nachname,
                  Biografie, Profilbild/Avatar, Profilstatus, Erstellungs- und
                  Änderungszeitpunkte.
                </li>
                <li>
                  Onboarding- und Einstellungsdaten: Onboarding-Schritt, Theme-/Farbauswahl,
                  bevorzugte Genres, Lieblingsserien, lokale App-Einstellungen.
                </li>
                <li>
                  Spotify-Daten: Verbindungsstatus, Spotify-Nutzer-ID,
                  OAuth-Autorisierungscode und technische Daten zur Verbindung, soweit Sie
                  Spotify freiwillig verbinden.
                </li>
                <li>
                  Bibliotheks- und Nutzungsdaten: gespeicherte Serien, Merkliste, Playlists,
                  Playlist-Follows, gepinnte Inhalte, Hörfortschritt, Wiedergabepositionen,
                  zuletzt gehörte Inhalte und daraus abgeleitete Profilstatistiken.
                </li>
                <li>
                  Community-Daten: Diskussionstitel, Diskussionsbeiträge, Antworten,
                  Bewertungen, Rezensionstexte, Stimmen, Meldungen sowie zugehörige
                  Zeitpunkte und Autorenangaben.
                </li>
                <li>
                  Such- und Interaktionsdaten: Suchbegriffe in Discover, Diskussionen oder
                  Playlists, Filter, aufgerufene Bereiche, technische Anfrageinformationen.
                </li>
                <li>
                  Support- und Wunschdaten: von Ihnen eingereichte Folgen-/Serienwünsche,
                  Fehlerberichte, Titel, Details, Quell-URLs und Bearbeitungsstatus.
                </li>
                <li>
                  Kauf- und Abonnementdaten: RevenueCat-App-User-ID, Produkt- und
                  Paketkennungen, Entitlement-Status, aktive Abonnements, Ablaufdaten,
                  Kauf-/Wiederherstellungsstatus und Store-Verwaltungslinks.
                </li>
                <li>
                  Analyse- und Fehlerdaten: App- und Web-Nutzungsereignisse,
                  Bildschirm-/Routenaufrufe, Lifecycle-Ereignisse, technische Gerätedaten,
                  Fehler, Stacktraces, Korrelations-IDs und Diagnoseinformationen.
                </li>
                <li>
                  Technische Serverdaten: IP-Adresse, Zeitstempel, HTTP-Methode, Host, Pfad,
                  Statuscode, Antwortdauer, User-ID im Logkontext, Header wie
                  Autorisierungstoken und Korrelations-ID, soweit dies für Betrieb und
                  Sicherheit erforderlich ist.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: '3. Zwecke und Rechtsgrundlagen',
          body: (
            <>
              <p>Wir verarbeiten personenbezogene Daten zu folgenden Zwecken:</p>
              <ul>
                <li>
                  Bereitstellung der App und Ihres Accounts, einschließlich Registrierung,
                  Anmeldung, E-Mail-Verifizierung, Passwortzurücksetzung und Kontolöschung.
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
                </li>
                <li>
                  Betrieb von Profil, Bibliothek, Merkliste, Playlists, Hörfortschritt,
                  Bewertungen, Diskussionen und Profilstatistiken. Rechtsgrundlage ist Art. 6
                  Abs. 1 lit. b DSGVO.
                </li>
                <li>
                  Personalisierung von Inhalten, etwa über Lieblingsgenres, Lieblingsserien,
                  gespeicherte Inhalte und Hörfortschritt. Rechtsgrundlage ist Art. 6 Abs. 1
                  lit. b DSGVO.
                </li>
                <li>
                  Spotify-Verknüpfung, soweit Sie diese freiwillig nutzen. Rechtsgrundlage
                  ist Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 6 Abs. 1 lit. b DSGVO, soweit die
                  Verbindung zur gewünschten Funktion erforderlich ist. Sie können die
                  Verbindung in der App wieder trennen.
                </li>
                <li>
                  Verwaltung von In-App-Käufen, Abonnements, Entitlements und
                  Wiederherstellung von Käufen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
                  DSGVO; gesetzliche Aufbewahrungspflichten beruhen auf Art. 6 Abs. 1 lit. c
                  DSGVO.
                </li>
                <li>
                  Bearbeitung von Supportanfragen, Fehlerberichten und Inhaltswünschen.
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit es um Ihr
                  Nutzungsverhältnis geht, sonst Art. 6 Abs. 1 lit. f DSGVO.
                </li>
                <li>
                  Sicherheit, Fehleranalyse, Missbrauchsvermeidung, Stabilität und technische
                  Wartung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
                </li>
                <li>
                  Produktanalyse und Verbesserung der App. Rechtsgrundlage ist Art. 6 Abs. 1
                  lit. f DSGVO; soweit eine Einwilligung gesetzlich erforderlich ist,
                  verarbeiten wir diese Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: '4. Eingesetzte Dienstleister und Empfänger',
          body: (
            <>
              <h3>4.1 Eigener API-Dienst</h3>
              <p>
                Die App kommuniziert mit unserem eigenen API-Dienst, um Profile, Inhalte,
                Bibliothek, Playlists, Diskussionen, Bewertungen, Hörfortschritt, Statistiken
                und Support-/User-Requests bereitzustellen. Dabei werden die jeweils für die
                angeforderte Funktion erforderlichen Account-, Profil-, Inhalts-, Nutzungs-
                und technischen Daten verarbeitet.
              </p>
              <p>
                Der konkrete Hosting-Anbieter des API-Dienstes ist in dieser Fassung noch zu
                ergänzen, falls der Dienst nicht ausschließlich über die unten genannten
                Anbieter betrieben wird.
              </p>

              <h3>4.2 Supabase</h3>
              <p>
                Anbieter: Supabase, Inc.
                <br />
                Datenschutz:{' '}
                <a href="https://supabase.com/privacy">https://supabase.com/privacy</a>
                <br />
                Datenverarbeitungsvereinbarung:{' '}
                <a href="https://supabase.com/legal/dpa">https://supabase.com/legal/dpa</a>
              </p>
              <p>
                Wir nutzen Supabase für Authentifizierung, Datenbankfunktionen und Storage.
                Über Supabase werden insbesondere Accountdaten, Authentifizierung,
                Profildaten, App-Inhalte, Bibliotheksdaten, Community-Daten, Bewertungen,
                Hörfortschritt, Avatare und Authentifizierungs-E-Mails verarbeitet.
                Profilbilder werden im Supabase-Storage-Bucket für Avatare gespeichert.
              </p>

              <h3>4.3 PostHog</h3>
              <p>
                Anbieter: PostHog Inc.
                <br />
                Datenschutz/GDPR-Hinweise:{' '}
                <a href="https://posthog.com/docs/privacy/gdpr-compliance">
                  https://posthog.com/docs/privacy/gdpr-compliance
                </a>
              </p>
              <p>
                Wir nutzen PostHog für Produktanalyse und Fehlertracking. In der App werden
                PostHog-Ereignisse nur bei entsprechender Konfiguration aktiviert.
                Verarbeitet werden insbesondere Nutzer-ID, Profil-ID, Benutzername,
                Onboarding-Status, E-Mail-Verifizierungsstatus, Spotify-Verbindungsstatus,
                Verifikationsstatus, App-Lifecycle-Ereignisse, Routen-/Bildschirmaufrufe,
                technische Gerätedaten sowie Fehler und Stacktraces. Die vollständige
                E-Mail-Adresse wird von uns nicht bewusst als PostHog-Nutzereigenschaft
                übermittelt.
              </p>
              <p>
                In der Web-Version kann zusätzlich ein PostHog-Skript geladen werden. Dabei
                können Cookies, lokale Speichertechnologien oder ähnliche Identifikatoren
                sowie technische Nutzungsdaten verarbeitet werden.
              </p>

              <h3>4.4 RevenueCat</h3>
              <p>
                Anbieter: RevenueCat, Inc.
                <br />
                Datenschutz:{' '}
                <a href="https://www.revenuecat.com/privacy">
                  https://www.revenuecat.com/privacy
                </a>
                <br />
                Datenverarbeitungsvereinbarung:{' '}
                <a href="https://www.revenuecat.com/dpa">
                  https://www.revenuecat.com/dpa
                </a>
              </p>
              <p>
                Wir nutzen RevenueCat zur Verwaltung von In-App-Käufen, Abonnements,
                Paywalls, Entitlements, Kaufwiederherstellungen und dem Customer Center.
                Verarbeitet werden insbesondere App-User-ID, Produkt- und Paketkennungen,
                aktive Abonnements, Entitlement-Status, Ablaufdaten, Store-Informationen und
                kaufbezogene Diagnoseinformationen.
              </p>

              <h3>4.5 Apple App Store und Google Play</h3>
              <p>
                Wenn Sie In-App-Käufe oder Abonnements abschließen, erfolgt die
                Zahlungsabwicklung über den jeweiligen Store-Betreiber:
              </p>
              <ul>
                <li>
                  Apple App Store / Apple Inc.:{' '}
                  <a href="https://www.apple.com/legal/privacy/data/en/app-store/">
                    https://www.apple.com/legal/privacy/data/en/app-store/
                  </a>
                </li>
                <li>
                  Google Play / Google:{' '}
                  <a href="https://policies.google.com/privacy">
                    https://policies.google.com/privacy
                  </a>
                </li>
              </ul>
              <p>
                Die Store-Betreiber verarbeiten Zahlungs-, Rechnungs-, Geräte-, Account- und
                Transaktionsdaten nach ihren eigenen Datenschutzbestimmungen. Wir erhalten von
                den Stores bzw. über RevenueCat nur die für die App erforderlichen Kauf- und
                Abonnementinformationen, nicht Ihre vollständigen Zahlungsdaten.
              </p>

              <h3>4.6 Spotify</h3>
              <p>
                Anbieter: Spotify AB und verbundene Spotify-Unternehmen
                <br />
                Datenschutz:{' '}
                <a href="https://www.spotify.com/legal/privacy-policy/">
                  https://www.spotify.com/legal/privacy-policy/
                </a>
                <br />
                Developer Terms:{' '}
                <a href="https://developer.spotify.com/terms">
                  https://developer.spotify.com/terms
                </a>
              </p>
              <p>
                Sie können Ihr Spotify-Konto freiwillig mit Tonspur verbinden. Dafür nutzt
                Tonspur den Spotify-OAuth-Flow mit den Berechtigungen <code>streaming</code>,{' '}
                <code>user-read-email</code>, <code>user-read-private</code>,{' '}
                <code>user-read-playback-state</code> und{' '}
                <code>user-modify-playback-state</code>. Dabei werden Sie zu Spotify
                weitergeleitet; Spotify verarbeitet die Anmeldung und übermittelt nach Ihrer
                Freigabe einen Autorisierungscode an Tonspur. Unser Backend kann daraus die
                für die Spotify-Integration erforderlichen Token und Daten verarbeiten,
                insbesondere Spotify-Nutzer-ID, Verbindungsstatus und technische Daten zur
                Steuerung oder Anzeige von Spotify-Funktionen.
              </p>
              <p>
                Tonspur zeigt außerdem Spotify-Links, Spotify-Attributionen und
                Cover-/Artwork-URLs an. Wenn Sie Spotify-Links öffnen oder Spotify-Inhalte
                abrufen, kann Spotify eigene Daten nach den Spotify-Bedingungen verarbeiten.
              </p>

              <h3>4.7 Notion für Support- und User-Requests</h3>
              <p>
                Anbieter: Notion Labs, Inc.
                <br />
                Datenschutz/Sicherheit:{' '}
                <a href="https://www.notion.com/help/security-and-privacy">
                  https://www.notion.com/help/security-and-privacy
                </a>
              </p>
              <p>
                Soweit unser Backend User-Requests, Fehlerberichte oder Supportanfragen in
                Notion verarbeitet, werden die von Ihnen eingegebenen Inhalte, insbesondere
                Titel, Details, Quell-URLs, Request-Typ, Status und ggf. technische
                Bearbeitungsdaten an Notion übermittelt. Diese Verarbeitung dient der
                internen Bearbeitung und Nachverfolgung von Anfragen.
              </p>
            </>
          ),
        },
        {
          title: '5. Internationale Datenübermittlungen',
          body: (
            <>
              <p>
                Einige Anbieter haben Sitz, Konzernunternehmen oder technische Infrastruktur
                außerhalb der Europäischen Union bzw. des Europäischen Wirtschaftsraums. Dies
                betrifft insbesondere Supabase, PostHog, RevenueCat, Spotify, Apple, Google
                und Notion.
              </p>
              <p>
                Soweit personenbezogene Daten in Drittländer übermittelt werden, erfolgt dies
                auf Grundlage geeigneter Garantien im Sinne der Art. 44 ff. DSGVO,
                insbesondere EU-Standardvertragsklauseln, Datenverarbeitungsvereinbarungen,
                Angemessenheitsbeschlüssen oder sonstigen rechtlich vorgesehenen Mechanismen.
                Einzelheiten ergeben sich aus den Datenschutz- und DPA-Dokumenten der
                jeweiligen Anbieter.
              </p>
            </>
          ),
        },
        {
          title: '6. Lokale Speicherung und Berechtigungen',
          body: (
            <>
              <p>
                Die App kann Daten lokal auf Ihrem Gerät speichern, insbesondere
                Sitzungsinformationen, App-Einstellungen, Theme-/Farbauswahl und technische
                Zustände. Diese lokale Speicherung dient dazu, die App funktionsfähig zu
                halten und Ihre Einstellungen wiederherzustellen.
              </p>
              <p>
                Wenn Sie ein Profilbild auswählen, nutzt die App den systemseitigen
                Bildauswahldialog. Das ausgewählte Bild wird als Avatar an Supabase
                übertragen und dort gespeichert. Tonspur greift nicht auf Ihre gesamte
                Fotobibliothek zu, sondern verarbeitet das von Ihnen ausgewählte Bild.
              </p>
            </>
          ),
        },
        {
          title: '7. Cookies, Webtracking und ähnliche Technologien',
          body: (
            <>
              <p>
                In der Web-Version von Tonspur können Cookies, lokale Speichertechnologien
                und ähnliche Identifikatoren eingesetzt werden. Dazu gehören technisch
                erforderliche Speicherungen für die App-Funktion sowie PostHog-Technologien
                zur Analyse und Fehlerdiagnose, soweit aktiviert.
              </p>
              <p>
                Sie können Cookies und lokale Speichertechnologien über Ihren Browser
                einschränken oder löschen. Dies kann dazu führen, dass einzelne Funktionen
                der Web-Version nicht oder nur eingeschränkt funktionieren.
              </p>
            </>
          ),
        },
        {
          title: '8. Speicherdauer und Löschung',
          body: (
            <>
              <p>
                Wir speichern personenbezogene Daten nur so lange, wie dies für die genannten
                Zwecke erforderlich ist oder gesetzliche Pflichten bestehen.
              </p>
              <ul>
                <li>
                  Account-, Profil- und Authentifizierungsdaten speichern wir grundsätzlich
                  für die Dauer Ihres Nutzerkontos.
                </li>
                <li>
                  Avatare, Bibliotheksdaten, Playlists, Hörfortschritt, Bewertungen,
                  Diskussionen und sonstige nutzergenerierte Inhalte speichern wir bis zur
                  Löschung durch Sie, bis zur Kontolöschung oder solange sie für die
                  App-Funktion erforderlich sind.
                </li>
                <li>
                  Öffentliche oder communitybezogene Inhalte können nach Kontolöschung
                  anonymisiert oder gelöscht werden, soweit dies technisch und rechtlich
                  erforderlich ist.
                </li>
                <li>
                  Support- und User-Requests speichern wir für die Bearbeitungsdauer und
                  anschließend für angemessene Nachweis- und Qualitätszwecke.
                </li>
                <li>
                  Kauf- und Abonnementdaten speichern wir für die Dauer des Abonnements und
                  darüber hinaus, soweit steuer-, handels- oder nachweisrechtliche
                  Aufbewahrungspflichten bestehen.
                </li>
                <li>
                  Technische Logs speichern wir zeitlich begrenzt, soweit sie für Sicherheit,
                  Fehleranalyse und Betrieb erforderlich sind.
                </li>
                <li>
                  Analyse- und Fehlerdaten in PostHog speichern wir nach der jeweiligen
                  Projektkonfiguration und löschen oder anonymisieren sie, sobald sie für die
                  Analysezwecke nicht mehr erforderlich sind.
                </li>
              </ul>
              <p>
                Sie können Ihr Konto in der App löschen. Bei einer Kontolöschung werden nach
                dem vorgesehenen Backend-Verfahren insbesondere Profil, Avatar-Dateien,
                Spotify-Verbindung, Bewertungen, Lieblingsdaten, Bibliotheksdaten, Playlists,
                Hörhistorie und zugehörige Nutzerdaten gelöscht, soweit keine gesetzlichen
                Aufbewahrungspflichten entgegenstehen.
              </p>
            </>
          ),
        },
        {
          title: '9. Ihre Rechte',
          body: (
            <>
              <p>Sie haben nach der DSGVO insbesondere folgende Rechte:</p>
              <ul>
                <li>Auskunft über die zu Ihrer Person gespeicherten Daten, Art. 15 DSGVO.</li>
                <li>Berichtigung unrichtiger Daten, Art. 16 DSGVO.</li>
                <li>Löschung Ihrer Daten, Art. 17 DSGVO.</li>
                <li>Einschränkung der Verarbeitung, Art. 18 DSGVO.</li>
                <li>Datenübertragbarkeit, Art. 20 DSGVO.</li>
                <li>
                  Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen,
                  Art. 21 DSGVO.
                </li>
                <li>
                  Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft, Art. 7 Abs.
                  3 DSGVO.
                </li>
                <li>
                  Beschwerde bei einer Datenschutzaufsichtsbehörde, Art. 77 DSGVO.
                </li>
              </ul>
              <p>
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an{' '}
                <a href="mailto:contact@tonspur.social">contact@tonspur.social</a>.
              </p>
            </>
          ),
        },
        {
          title: '10. Beschwerderecht bei der Aufsichtsbehörde',
          body: (
            <>
              <p>
                Sie können sich bei einer Datenschutzaufsichtsbehörde beschweren. Für
                Tonspur ist voraussichtlich zuständig:
              </p>
              <p>
                Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen
                <br />
                Postfach 20 04 44
                <br />
                40102 Düsseldorf
                <br />
                Telefonzentrale: +49 (0)211 / 38424 - 0
                <br />
                E-Mail: <a href="mailto:poststelle@ldi.nrw.de">poststelle@ldi.nrw.de</a>
                <br />
                Website: <a href="https://www.ldi.nrw.de">https://www.ldi.nrw.de</a>
              </p>
            </>
          ),
        },
        {
          title: '11. Datensicherheit',
          body: (
            <>
              <p>
                Wir setzen technische und organisatorische Maßnahmen ein, um personenbezogene
                Daten gegen unbefugten Zugriff, Verlust, Missbrauch und Veränderung zu
                schützen. Die Kommunikation zwischen App, Web-Version, API-Dienst und
                eingesetzten Diensten erfolgt grundsätzlich verschlüsselt über TLS/HTTPS. Der
                Zugriff auf nutzerbezogene Daten wird technisch beschränkt und über
                Authentifizierungs- und Berechtigungsmechanismen abgesichert.
              </p>
              <p>
                Trotz aller Maßnahmen kann keine elektronische Übertragung oder Speicherung
                vollständig risikofrei sein. Wenn Sie den Verdacht haben, dass Ihr Konto
                missbraucht wurde oder Daten unbefugt offengelegt wurden, kontaktieren Sie
                uns bitte unter{' '}
                <a href="mailto:contact@tonspur.social">contact@tonspur.social</a>.
              </p>
            </>
          ),
        },
        {
          title: '12. Änderungen dieser Datenschutzerklärung',
          body: (
            <p>
              Wir können diese Datenschutzerklärung anpassen, wenn sich Funktionen,
              Datenverarbeitungen, Dienstleister oder rechtliche Anforderungen ändern. Die
              jeweils aktuelle Fassung wird in der App bzw. unter{' '}
              <code>https://tonspur.app/datenschutz</code> bereitgestellt.
            </p>
          ),
        },
      ]}
    />
  );
}

export function ImprintPage() {
  return (
    <>
      <LegalPage
        eyebrow="Impressum"
        title="Impressum"
        note="Rechtliche Pflichtangaben für Tonspur."
        sections={[
          {
            title: 'Angaben gemäß § 5 DDG',
            body: (
              <p>
                Tonspur UG i.G.
                <br />
                Glauchauer Str. 7
                <br />
                33739 Bielefeld
                <br />
                Deutschland
              </p>
            ),
          },
          {
            title: 'Vertreten durch',
            body: (
              <p>
                Geschäftsführer: Sebastian Orth, Jan Oberwahrenbrock, Timo
                Oberwahrenbrock
              </p>
            ),
          },
          {
            title: 'Kontakt',
            body: (
              <p>
                E-Mail:{' '}
                <a href="mailto:contact@tonspur.social">contact@tonspur.social</a>
              </p>
            ),
          },
        ]}
      />
      <div id="kontakt" className="contact-anchor" aria-hidden="true" />
    </>
  );
}

export function NotFoundPage() {
  return (
    <section className="page-head">
      <div className="container container--narrow center">
        <span className="eyebrow">404</span>
        <h1 className="display-lg">Diese Spur führt ins Leere.</h1>
        <p className="lede lede--center">
          Die Seite existiert nicht oder wurde verschoben.
        </p>
        <Link className="btn btn--primary btn--lg" to="/">
          Zur Startseite
        </Link>
      </div>
    </section>
  );
}

function PageHead({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="page-head">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="display-lg">{title}</h1>
        {children}
      </div>
    </header>
  );
}

function LegalPage({
  eyebrow,
  title,
  note,
  intro,
  sections,
  footerNote = (
    <>
      Offene Angaben sind in <code>PLACEHOLDERS.md</code> zusammengefasst.
    </>
  ),
}: {
  eyebrow: string;
  title: string;
  note?: React.ReactNode;
  intro?: React.ReactNode;
  sections: LegalSection[];
  footerNote?: React.ReactNode;
}) {
  return (
    <>
      <PageHead eyebrow={eyebrow} title={title} />
      <section className="doc-layout-wrap">
        <div className="container doc-layout">
          <aside className="doc-toc" aria-label="Inhalt">
            <div className="doc-toc__title">Inhalt</div>
            {sections.map((section) => (
              <a href={`#${slug(section.title)}`} key={section.title}>
                {section.title}
              </a>
            ))}
          </aside>
          <article className="doc-body">
            {note ? (
              <div className="doc-note">
                <ShieldCheck aria-hidden="true" />
                <span>{note}</span>
              </div>
            ) : null}
            {intro ? <div className="doc-intro">{intro}</div> : null}
            {sections.map((section) => (
              <section id={slug(section.title)} key={section.title}>
                <h2>{section.title}</h2>
                {typeof section.body === 'string' ? <p>{section.body}</p> : section.body}
              </section>
            ))}
            {footerNote ? (
              <div className="doc-note doc-note--muted">
                <Mail aria-hidden="true" />
                <span>{footerNote}</span>
              </div>
            ) : null}
          </article>
        </div>
      </section>
    </>
  );
}

function KitCard({
  icon: Icon,
  title,
  body,
  action,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  action: string;
}) {
  return (
    <article className="kit-card">
      <div className="feature__icon">
        <Icon strokeWidth={1.75} aria-hidden="true" />
      </div>
      <h2 className="h-3">{title}</h2>
      <p>{body}</p>
      <span className="kit-card__meta">{action}</span>
    </article>
  );
}

function slug(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ß/g, 'ss')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
