import { MetaRow, Shot, FadeImg } from './ui.jsx';

export default function SpotifyPanel() {
  return (
    <section className="panel p2" id="spotify">
      <div className="s-top">
        <div className="ai" style={{ '--d': '.05s' }}>
          <h2 className="s-title">Spotify Projects</h2>
          <div className="s-meta">
            <MetaRow k="ROLE" v="Senior Multimedia Designer" />
            <MetaRow k="LOCATION" v="Cape Town, South Africa" />
            <a className="btn-outline" href="#contact">Project Link</a>
          </div>
        </div>
        <div className="details ai" style={{ '--d': '.2s' }}>
          <h2 className="pill-green">Details</h2>
          <p className="lorem">
            Short-form video and motion design for Spotify — bite-sized campaign assets
            cut for social feeds. Social media, video editing, motion graphics.
          </p>
        </div>
      </div>
      <div className="collage">
        <Shot src="images/spotify-bites.png" alt="Spotify Bites campaign" delay={0.3} />
        <Shot src="https://picsum.photos/seed/steviebez-wrapped/700/800" alt="Wrapped assets" delay={0.4} />
        <div className="tile-green ai" style={{ '--d': '.5s' }}>
          <div className="eq">EQUAL</div>
          <div className="sub">Women at full volume.</div>
          <div className="ab"><span>ABIGAIL CHAMS</span></div>
          <FadeImg src="https://picsum.photos/seed/steviebez-equal/700/500" alt="Equal campaign" />
        </div>
        <div className="tile-list ai" style={{ '--d': '.6s' }}>2.<br />3.<br />5.<br />7.<br />9.</div>
      </div>
    </section>
  );
}
