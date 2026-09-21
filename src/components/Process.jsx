import { Eyebrow, Reveal } from './ui.jsx';

const STEPS = [
  ['01 · Discovery', 'Vision', 'Share your brand and goals. We find the idea worth making.'],
  ['02 · Direction', 'Strategy', 'Define the creative approach — references, grade, rhythm.'],
  ['03 · Creation', 'Production', 'Design, simulate, cut and composite until it sings.'],
  ['04 · Handoff', 'Delivery', 'Platform-ready assets with source files included.'],
];

export default function Process() {
  return (
    <section className="block" id="process">
      <div className="wrap">
        <Eyebrow>04 — Process</Eyebrow>
        <Reveal><h2 className="sec-title">From brief to delivery.</h2></Reveal>
        <div className="steps">
          {STEPS.map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 0.06}>
              <div className="step">
                <span className="n">{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
