import { Download, FileText, Mail, Package, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts, faqItems } from '../data/marketing';

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
      <PageHead eyebrow="Presse" title="Material für Geschichten über Tonspur.">
        <p className="lede">
          Kurzprofil, Bildmaterial und Ansprechpartner für Medien. Das Press Kit ist
          vorbereitet, die finalen Assets müssen noch ergänzt werden.
        </p>
      </PageHead>
      <section className="section section--first">
        <div className="container">
          <div className="kit-grid">
            <KitCard
              icon={Package}
              title="Brand Kit"
              body="Logo, Farben, Screenshots und App-Icons als ZIP. Noch nicht final hochgeladen."
              action="Asset-Platzhalter"
            />
            <KitCard
              icon={FileText}
              title="Kurzbeschreibung"
              body="Tonspur ist ein deutsches Hörspiel-Tagebuch für Tracking, Bewertungen und Empfehlungen."
              action="Presse-Text"
            />
            <KitCard
              icon={Download}
              title="Screenshots"
              body="App-Screenshots werden nach Store-Freigabe ersetzt. Aktuell nutzt die Seite abstrakte Cover."
              action="Noch offen"
            />
          </div>
          <div className="contact-grid press-contact">
            <div className="contact-card">
              <h2 className="h-3">Kontakt</h2>
              <p>
                Presseanfragen gehen vorerst an{' '}
                <a href="mailto:contact@tonspur.social">contact@tonspur.social</a>.
              </p>
            </div>
            <div className="contact-card">
              <h2 className="h-3">Fakten</h2>
              <p>
                Alle Zahlen auf dieser Seite sind Launch-Platzhalter und müssen vor
                Veröffentlichung validiert werden.
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
      note="Diese AGB sind ein redaktioneller Platzhalter und keine Rechtsberatung."
      sections={[
        {
          title: 'Geltungsbereich',
          body:
            'Diese Seite beschreibt beispielhaft die Nutzung von Tonspur. Finale Bedingungen müssen von einer qualifizierten Stelle geprüft werden.',
        },
        {
          title: 'Nutzung der App',
          body:
            'Nutzerinnen und Nutzer können Hörspiele tracken, bewerten und eigene Inhalte anlegen. Details zu Accounts, Moderation und Sperrungen sind noch offen.',
        },
        {
          title: 'Verfügbarkeit',
          body:
            'Die App soll sorgfältig betrieben werden. Konkrete Service Levels, Wartungsfenster und Haftungsregelungen müssen vor Launch definiert werden.',
        },
      ]}
    />
  );
}

export function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Datenschutz"
      title="Datenschutzhinweise"
      note="Diese Datenschutzhinweise sind ein Strukturentwurf und müssen mit den realen Datenflüssen abgeglichen werden."
      sections={[
        {
          title: 'Verantwortlicher',
          body:
            'Name, Anschrift und Kontakt des Verantwortlichen sind noch Platzhalter und werden vor der Veröffentlichung ersetzt.',
        },
        {
          title: 'Supabase Auth',
          body:
            'Für Passwort-Zurücksetzungen nutzt die Website Supabase Auth. Die öffentlichen Browser-Keys dürfen genutzt werden; Service-Role-Schlüssel gehören nie in den Client.',
        },
        {
          title: 'Analyse und Marketing',
          body:
            'Aktuell ist kein Tracking eingebaut. Falls Analyse-Tools ergänzt werden, muss diese Seite entsprechend aktualisiert werden.',
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
        note="Das Impressum enthält Platzhalter für Unternehmensdaten, Anschrift und vertretungsberechtigte Personen."
        sections={[
          {
            title: 'Angaben gemäß § 5 TMG',
            body:
              'Tonspur Beispiel GmbH, Musterstraße 12, 10115 Berlin. Diese Angaben müssen durch echte Unternehmensdaten ersetzt werden.',
          },
          {
            title: 'Kontakt',
            body:
              'E-Mail: contact@tonspur.social. Telefon, Registereintrag und Umsatzsteuer-ID sind noch offen.',
          },
          {
            title: 'Redaktionell verantwortlich',
            body:
              'Die verantwortliche Person für redaktionelle Inhalte muss vor dem Launch benannt werden.',
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
  sections,
}: {
  eyebrow: string;
  title: string;
  note: string;
  sections: Array<{ title: string; body: string }>;
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
            <div className="doc-note">
              <ShieldCheck aria-hidden="true" />
              <span>{note}</span>
            </div>
            {sections.map((section) => (
              <section id={slug(section.title)} key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}
            <div className="doc-note doc-note--muted">
              <Mail aria-hidden="true" />
              <span>
                Offene Angaben sind in <code>PLACEHOLDERS.md</code> zusammengefasst.
              </span>
            </div>
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
  icon: typeof Package;
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
