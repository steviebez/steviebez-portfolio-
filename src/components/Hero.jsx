import { FadeImg, Reveal } from './ui.jsx';

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="bg" aria-hidden="true">
        <FadeImg src="images/hero-art.jpg" alt="" eager />
      </div>
      <div className="inner">
        <Reveal>
          <p className="eyebrow">Multimedia Designer</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1>
            Stephan
            <br />
            Bezuidenhout
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="sub">
            Design – Animation
            <br />
            AI – Python – Houdini
            <br />
            ComfyUI – Agentic
          </p>
        </Reveal>
      </div>
    </header>
  );
}
