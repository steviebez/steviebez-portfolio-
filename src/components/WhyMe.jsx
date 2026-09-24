import { FadeImg, Reveal } from './ui.jsx';
import { siteConfig } from '../../config/site.config';

const why = siteConfig.sections.find((s) => s.id === 'why');

export default function WhyMe() {
  if (!why || !why.enabled) return null;
  return (
    <section className="block why" id="why">
      <div className="wrap">
        <div className="why-head">
          <Reveal>
            <p className="why-eyebrow">{why.eyebrow}</p>
          </Reveal>
          <Reveal delay={why.delays.title}>
            <h2 className="why-title">
              {why.titleBefore} <em>{why.titleAccent}</em>
            </h2>
          </Reveal>
          <Reveal delay={why.delays.sub}>
            <p className="why-sub">
              {why.subLines[0]}
              <br />
              {why.subLines[1]}
            </p>
          </Reveal>
        </div>
        <div className="why-rows">
          {why.rows.map((r) => (
            <Reveal key={r.label} delay={r.delay} from={r.from}>
              <div className={`why-row${r.side === 'right' ? ' flip' : ''}`}>
                <div className="why-text">
                  <p className="why-label">{r.label}</p>
                  <p className="why-row-body">{r.body}</p>
                </div>
                <div className="why-img">
                  <FadeImg src={r.img} alt={r.alt} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
