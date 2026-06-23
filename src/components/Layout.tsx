import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { StoreButtons } from './StoreButtons';

type LayoutProps = {
  children: React.ReactNode;
};

const navLinks = [
  { label: 'Features', to: '/#features' },
  { label: 'Blog', to: '/blog' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Presse', to: '/presse' },
];

const legalLinks = [
  { label: 'AGB', to: '/agb' },
  { label: 'Datenschutz', to: '/datenschutz' },
  { label: 'Impressum', to: '/impressum' },
];

export function ScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const frame = window.setTimeout(() => {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
      return () => window.clearTimeout(frame);
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
    return undefined;
  }, [location.pathname, location.hash]);

  return null;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}

function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link className="brand" to="/" aria-label="Tonspur Startseite">
          <img className="brand__mark" src="/tonspur-icon.png" alt="" />
          <span className="brand__name">Tonspur</span>
        </Link>
        <nav className="nav__links" aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <NavLink
              className={({ isActive }) =>
                `nav__link${isActive && !link.to.includes('#') ? ' nav__link--active' : ''}`
              }
              key={link.label}
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
          <Link className="btn btn--primary nav__cta" to="/#download">
            Download
          </Link>
        </nav>
        <button
          className="nav__toggle"
          type="button"
          aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {isOpen ? (
        <nav className="nav__mobile" aria-label="Mobile Navigation">
          {[...navLinks, { label: 'Download', to: '/#download' }].map((link) => (
            <Link key={link.label} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link className="footer__brand" to="/" aria-label="Tonspur Startseite">
              <img className="footer__mark" src="/tonspur-icon.png" alt="" />
              <span className="footer__brand-name">Tonspur</span>
            </Link>
            <p className="footer__tagline">
              Das Tagebuch für Hörspiel-Fans. Track - bewerte - entdecke.
            </p>
            <StoreButtons className="footer__stores" />
          </div>
          <FooterColumn
            title="Produkt"
            links={[
              { label: 'Features', to: '/#features' },
              { label: 'Blog', to: '/blog' },
              { label: 'FAQ', to: '/faq' },
              { label: 'Download', to: '/#download' },
            ]}
          />
          <FooterColumn title="Rechtliches" links={legalLinks} />
          <FooterColumn
            title="Mehr"
            links={[
              { label: 'Presse', to: '/presse' },
              { label: 'Kontakt', to: '/impressum#kontakt' },
              { label: 'Passwort vergessen', to: '/passwort-vergessen' },
            ]}
          />
        </div>
        <div className="footer__bar">
          <span>© 2026 Tonspur</span>
          <span>Mit Liebe für Hörspiele gemacht.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; to: string }>;
}) {
  return (
    <div>
      <div className="footer__col-title">{title}</div>
      <div className="footer__links">
        {links.map((link) => (
          <Link key={link.label} to={link.to}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
