import { Eyebrow, FadeImg, Reveal } from './ui.jsx';

const WORK = [
  { title: 'Spotify Bites', meta: '2023 · Social Campaign', tags: 'Social Media · Video Editing · Motion Graphics',
    img: 'images/spotify-bites.png', href: '#contact' },
  { title: 'Betway Esports', meta: '2024 · Rebrand', tags: 'Motion Identity · Social Assets',
    img: 'https://picsum.photos/seed/betwayesports/900/675', href: '#contact' },
  { title: 'Grassy Plants', meta: '2025 · Houdini Study', tags: 'Houdini · Simulation · Motion Graphics',
    img: 'https://cdn.dribbble.com/userupload/18827355/file/still-9a23aeeb67b11b85b332965d0931976f.png?resize=800x600',
    href: 'https://dribbble.com/shots/25515374-Grassy-Plants' },
  { title: 'Spiny Thingy', meta: '2024 · Houdini Study', tags: 'Houdini · Particles · Motion Graphics',
    img: 'https://cdn.dribbble.com/userupload/13061621/file/still-dd23c1937eb903143838468ce0d37f02.png?resize=800x600',
    href: 'https://dribbble.com/shots/23645761-Spiny-Thingy' },
  { title: 'Vortex', meta: '2024 · Houdini Study', tags: 'Houdini · Nuke · Motion Graphics',
    img: 'https://cdn.dribbble.com/userupload/12870945/file/still-bd822dbea2d8557487148e8f74a20ccf.png?resize=800x600',
    href: 'https://dribbble.com/shots/23579839-Vortex' },
];

export default function Work() {
  return (
    <section className="block" id="work">
      <div className="wrap">
        <Eyebrow>03 — Selected Work</Eyebrow>
        <Reveal><h2 className="sec-title">Proof, not promises.</h2></Reveal>
        <div className="cards">
          {WORK.map((w, i) => {
            const ext = w.href.startsWith('http');
            return (
              <Reveal key={w.title} delay={(i % 2) * 0.08}>
                <a className="card" href={w.href} {...(ext ? { target: '_blank', rel: 'noopener' } : {})}>
                  <div className="ph"><FadeImg src={w.img} alt={w.title} /></div>
                  <div className="meta"><b>{w.title}</b><span>{w.meta}</span></div>
                  <div className="tags">{w.tags} →</div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
