import { Reveal } from './ui.jsx';

export default function ProjectBand({ project: p }) {
  const hasImgs = p.images.length > 0;
  return (
    <section
      id={p.id}
      className={`band band-${p.theme}${p.imageSide === 'right' ? ' band-side-right' : ''}${hasImgs ? '' : ' no-imgs'}`}
    >
      <div className="band-grid">
        {hasImgs && (
          <div className="band-imgs">
            {p.images.map((img) => (
              <img key={img.src} src={img.src} alt={img.alt} loading="lazy" decoding="async" />
            ))}
          </div>
        )}
        <div className="band-text">
          <Reveal delay={p.delays.logo}>
            <img
              className={`band-logo${p.logoInvert ? ' inv' : ''}`}
              src={p.logo}
              alt={p.logoAlt}
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={p.delays.headline}>
            <h3 className="band-title">{p.headline}</h3>
          </Reveal>
          <Reveal delay={p.delays.body}>
            <p className="band-body">{p.body}</p>
          </Reveal>
          <Reveal delay={p.delays.link}>
            <a className="band-link" href={p.linkHref} target="_blank" rel="noopener">
              {p.linkLabel}
              <span className="link-arrow" aria-hidden="true">
                &gt;
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
