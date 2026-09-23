import { Reveal } from './ui.jsx';
import { siteConfig } from '../../config/site.config';

const articles = siteConfig.sections.find((s) => s.id === 'articles');

function Card({ card }) {
  return (
    <article className="article-card">
      <img className="article-img" src={card.image} alt={card.imageAlt} loading="lazy" decoding="async" />
      <Reveal delay={card.delay}>
        <h3 className="article-title">{card.title}</h3>
      </Reveal>
      <Reveal delay={card.delay + 0.05}>
        <p className="article-body">{card.body}</p>
      </Reveal>
      <Reveal delay={card.delay + 0.1}>
        <a className="article-link" href={card.linkHref} target="_blank" rel="noopener">
          {card.linkLabel}
        </a>
      </Reveal>
    </article>
  );
}

export default function Articles() {
  if (!articles || !articles.enabled) return null;
  return (
    <section className="block articles" id="articles">
      <div className="wrap articles-head">
        <div className="wrap">
          <Reveal>
            <p className="articles-eyebrow">{articles.eyebrow}</p>
          </Reveal>
          <Reveal delay={articles.delays.title}>
            <h2 className="articles-title">{articles.title}</h2>
          </Reveal>
        </div>
      </div>
      <div className="wrap articles-cols">
        <div className="articles-col">
          {articles.left.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </div>
        <div className="articles-col articles-col-right">
          {articles.right.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
