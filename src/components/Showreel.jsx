import { useState } from 'react';
import { Reveal } from './ui.jsx';
import { siteConfig } from '../../config/site.config';

const reel = siteConfig.sections.find((s) => s.id === 'showreel');

export default function Showreel() {
  const [playing, setPlaying] = useState(false);
  if (!reel || !reel.enabled) return null;
  return (
    <section className="block showreel" id="showreel">
      <div className="wrap showreel-head">
        <Reveal>
          <p className="showreel-eyebrow">{reel.eyebrow}</p>
        </Reveal>
        <Reveal delay={reel.delays.title}>
          <h2 className="showreel-title">{reel.title}</h2>
        </Reveal>
      </div>
      <div className="wrap">
        <div className="showreel-frame">
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${reel.videoId}?autoplay=1&rel=0`}
              title="Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              className="showreel-facade"
              type="button"
              aria-label="Play showreel"
              onClick={() => setPlaying(true)}
            >
              <img src={reel.poster} alt={reel.posterAlt} loading="lazy" decoding="async" />
              <svg className="showreel-play" viewBox="0 0 32 28" aria-hidden="true">
                <path d="M8 3 L28 14 L8 25 Z" fill="#fff" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
