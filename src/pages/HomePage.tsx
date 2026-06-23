import { features, heroCovers, reviews, stats } from '../data/marketing';
import { CoverTile } from '../components/CoverTile';
import { Stars } from '../components/Stars';
import { StoreButtons } from '../components/StoreButtons';

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container container--wide">
          <div className="hero-split">
            <div className="hero-copy">
              <span className="eyebrow">Das Hörspiel-Tagebuch</span>
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
            <h2 className="display-lg">Gebaut fürs ernsthafte Hören.</h2>
          </div>

          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                className={`feature-row${feature.flip ? ' feature-row--flip' : ''}`}
                key={feature.title}
              >
                <div className="feature-row__copy">
                  <div className="feature__icon">
                    <Icon strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className="h-2">{feature.title}</h3>
                  <p className="body-lg">{feature.body}</p>
                </div>
                <div
                  className="feature-row__media"
                  style={{ '--cover-grad': feature.grad } as React.CSSProperties}
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Stimmen aus der Community</span>
            <h2 className="h-2">Von Fans, die mitzählen.</h2>
          </div>
          <div className="feature-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.handle}>
                <Stars />
                <p className="review-card__text">„{review.text}“</p>
                <div className="review-card__by">
                  <span
                    className="review-card__avatar"
                    style={{ '--cover-grad': review.grad } as React.CSSProperties}
                    aria-hidden="true"
                  />
                  <span>
                    <span className="review-card__name">{review.name}</span>
                    <br />
                    <span className="review-card__handle">{review.handle}</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
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
