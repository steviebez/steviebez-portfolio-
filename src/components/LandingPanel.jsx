import { MetaRow, Shot } from './ui.jsx';

export default function LandingPanel() {
  return (
    <section className="panel p1 in" id="top">
      <div className="l-top">
        <div className="ai" style={{ '--d': '.05s' }}>
          <h1 className="logo">STEVIEBEZ</h1>
          <MetaRow k="ROLE" v="Senior Multimedia Designer" />
          <MetaRow k="LOCATION" v="Cape Town, South Africa" />
        </div>
        <p className="hero-line ai" style={{ '--d': '.15s' }}>
          Boring on purpose.<br />Stop fiddling, solve problems.
        </p>
      </div>
      <div className="l-grid">
        <Shot src="https://picsum.photos/seed/steviebez-portrait/800/1000" alt="Portrait" word="animation" delay={0.25} />
        <div className="rcol">
          <div className="aboutcol">
            <h2 className="pill ai" style={{ '--d': '.35s' }}>About Me</h2>
            <p className="lorem ai" style={{ '--d': '.45s' }}>
              Senior Multimedia Designer with 9 years across Adobe Suite, Python and C#,
              Houdini and ComfyUI. Animation, brand and graphic design, illustration —
              replace this with your real bio.
            </p>
          </div>
          <div className="duo">
            <Shot src="https://picsum.photos/seed/steviebez-art/700/800" alt="Art" word="art" delay={0.5} />
            <Shot src="https://picsum.photos/seed/steviebez-design/700/800" alt="Design" word="design" delay={0.6} />
          </div>
        </div>
      </div>
    </section>
  );
}
