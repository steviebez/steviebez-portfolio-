import { FadeImg, Reveal } from './ui.jsx';

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="bg">
        <FadeImg src="https://picsum.photos/seed/steviebez-hero/1600/1000" alt="Studio backdrop" />
      </div>
      <div className="shade" />
      <img className="floaty f1 fadeimg ld" src="https://cdn.dribbble.com/userupload/18827355/file/still-9a23aeeb67b11b85b332965d0931976f.png?resize=400x300" alt="Grassy Plants study" loading="lazy"
        onLoad={e => e.currentTarget.classList.add('ld')} onError={e => e.currentTarget.classList.add('ld')} />
      <img className="floaty f2 fadeimg ld" src="https://cdn.dribbble.com/userupload/13061621/file/still-dd23c1937eb903143838468ce0d37f02.png?resize=400x300" alt="Spiny Thingy study" loading="lazy"
        onLoad={e => e.currentTarget.classList.add('ld')} onError={e => e.currentTarget.classList.add('ld')} />
      <div className="inner">
        <Reveal><p className="eyebrow">Senior Multimedia Designer</p></Reveal>
        <Reveal delay={0.1}>
          <h1>Boring on purpose.<br />Stop fiddling, solve problems.</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="sub">Motion · 3D &amp; Simulation · Social Campaigns — Cape Town, South Africa</p>
        </Reveal>
      </div>
      <span className="cap">STEVIEBEZ — PORTFOLIO 2026</span>
      <span className="scrollcue">SCROLL ↓</span>
    </header>
  );
}
