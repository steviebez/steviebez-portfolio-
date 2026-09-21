import { Eyebrow, FadeImg, Reveal } from './ui.jsx';

const SERVICES = [
  { n: '01', t: 'Social Campaigns', d: 'Bite-sized campaign assets cut for feeds — concept to delivery.', img: 'images/spotify-bites.png', label: 'Spotify Bites' },
  { n: '02', t: '3D & Simulation', d: 'Procedural Houdini work — growth, particles, flow fields.', img: 'https://cdn.dribbble.com/userupload/18827355/file/still-9a23aeeb67b11b85b332965d0931976f.png?resize=800x600', label: 'Grassy Plants' },
  { n: '03', t: 'Video Editing', d: 'Paced cuts, clean timelines, broadcast-ready delivery.', img: 'https://cdn.dribbble.com/userupload/13061621/file/still-dd23c1937eb903143838468ce0d37f02.png?resize=800x600', label: 'Spiny Thingy' },
  { n: '04', t: 'Motion Graphics', d: 'Loops, idents and composited pieces with an art-directed grade.', img: 'https://cdn.dribbble.com/userupload/12870945/file/still-bd822dbea2d8557487148e8f74a20ccf.png?resize=800x600', label: 'Vortex' },
];

export default function Services() {
  return (
    <section className="block" id="services">
      <div className="wrap">
        <Eyebrow>02 — Services</Eyebrow>
        <Reveal><h2 className="sec-title">What I can do for your brand.</h2></Reveal>
        <Reveal delay={0.1}><p className="sec-lede">Premium visuals delivered in days, not months — without traditional studio costs.</p></Reveal>
        <div style={{ marginTop: '2rem' }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="svc">
                <span className="n">{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="tiles">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n + '-t'} delay={i * 0.07}>
              <div className="tile"><FadeImg src={s.img} alt={s.label} /><span>{s.label}</span></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
