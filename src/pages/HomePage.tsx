import { features, heroCovers, stats } from '../data/marketing';
import { CoverTile } from '../components/CoverTile';
import { StoreButtons } from '../components/StoreButtons';

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container container--wide">
          <div className="hero-split">
            <div className="hero-copy">
              <h1 className="display-xl">Halte fest, was du hörst.</h1>
              <p className="lede">
                Jede Folge bekommt ihren Eintrag: gehört, bewertet, besprochen. Tonspur
                verwandelt dein Hören in eine Sammlung, durch die du blättern kannst wie
                durch ein Notizbuch.
              </p>
              <div id="download" className="download-anchor">
                <StoreButtons />
              </div>
              <p className="meta">Kostenlos · für iPhone und Android</p>
            </div>
            <div className="cover-panel" aria-label="Beispielhafte Hörspiel-Cover">
              {heroCovers.map((cover) => (
                <CoverTile cover={cover} key={cover.title} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="stat-strip" aria-label="Tonspur in Zahlen">
        <div className="container stat-strip__inner">
          <div className="stat-band">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="stat__num">{stat.num}</div>
                <div className="stat__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="container">
          <div className="section-head section-head--roomy">
            <span className="eyebrow">Features</span>
            <h2 className="display-lg">Für die Community.</h2>
          </div>

          {features.map((feature) => (
            <article
              className={`feature-row${feature.flip ? ' feature-row--flip' : ''}`}
              key={feature.title}
            >
              <div className="feature-row__copy">
                <h3 className="h-2">{feature.title}</h3>
                <p className="body-lg">{feature.body}</p>
              </div>
              <figure className="feature-row__media">
                <div className="phone-frame">
                  <img src={feature.imageSrc} alt={feature.imageAlt} loading="lazy" />
                </div>
              </figure>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <div className="cta-band">
            <h2 className="display-lg">Fang heute an zu zählen.</h2>
            <p className="lede lede--center">
              Tonspur ist kostenlos. Deine erste Wertung ist nur einen Download entfernt.
            </p>
            <div className="cta-band__stores">
              <StoreButtons />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
