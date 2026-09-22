import { FadeImg, Reveal } from './ui.jsx';

const ROWS = [
  { label: 'Technical Understanding', img: 'images/why-technical.jpg', alt: 'Monochrome geometric paper study', flip: false, from: 'left' },
  { label: 'Experience', img: 'images/why-experience.jpg', alt: 'Red light reflected on wet asphalt', flip: true, from: 'right' },
  { label: 'Always Learning', img: 'images/why-learning.jpg', alt: 'Blue foliage at night', flip: false, from: 'left' },
];

export default function WhyMe() {
  return (
    <section className="block why" id="why">
      <div className="wrap">
        <div className="why-head">
          <Reveal>
            <p className="why-eyebrow">Why me?</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="why-title">
              Familiar with brand identity and
              the language of <em>design</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="why-sub">
              Creating scalable design
              <br />
              imagery and visuals
            </p>
          </Reveal>
        </div>
        <div className="why-rows">
          {ROWS.map((r, i) => (
            <Reveal key={r.label} delay={0.3 + i * 0.1} from={r.from}>
              <div className={`why-row${r.flip ? ' flip' : ''}`}>
                <p className="why-label">{r.label}</p>
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
