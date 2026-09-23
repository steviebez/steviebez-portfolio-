import { useMemo } from 'react';
import { Reveal } from './ui.jsx';
import { siteConfig } from '../../config/site.config';

const clients = siteConfig.sections.find((s) => s.id === 'clients');

export default function Clients() {
  // random entrance order per visit — reshuffled every mount,
  // offset to start after the header text cascade
  const delays = useMemo(
    () =>
      clients && clients.enabled
        ? clients.logos.map(() => 0.35 + Math.random() * 0.65)
        : [],
    []
  );
  if (!clients || !clients.enabled) return null;
  return (
    <section className="block clients" id="clients">
      <div className="wrap">
        {clients.header && (
          <div className="clients-head">
            <Reveal>
              <p className="clients-eyebrow">{clients.header.eyebrow}</p>
            </Reveal>
            <Reveal delay={clients.header.delays.title}>
              <h2 className="clients-title">
                {clients.header.lines.map((line, li) => (
                  <span key={li} className="clients-title-line">
                    {line.map((seg, si) =>
                      seg.accent ? (
                        <em key={si}>{seg.text}</em>
                      ) : (
                        <span key={si}>{seg.text}</span>
                      )
                    )}
                  </span>
                ))}
              </h2>
            </Reveal>
          </div>
        )}
        <div className="logo-wall">
          {clients.logos.map((logo, i) => (
            <Reveal key={logo.name} delay={delays[i] ?? 0.4}>
              <img className="logo-wall-mark" src={logo.src} alt={logo.alt} loading="lazy" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
