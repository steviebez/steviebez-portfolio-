import { Reveal } from './ui.jsx';
import ProjectBand from './ProjectBand.jsx';
import { siteConfig } from '../../config/site.config';

const work = siteConfig.sections.find((s) => s.id === 'work');

export default function Work() {
  if (!work || !work.enabled) return null;
  return (
    <>
      <section className="block work-head" id="work">
        <div className="wrap">
          <div className="work-head-inner">
            <Reveal>
              <p className="work-eyebrow">{work.eyebrow}</p>
            </Reveal>
            <Reveal delay={work.delays.title}>
              <h2 className="work-title">{work.title}</h2>
            </Reveal>
            <Reveal delay={work.delays.sub}>
              <p className="work-sub">
                {work.subLines[0]}
                <br />
                {work.subLines[1]}
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      {work.projects.map((p) => (
        <ProjectBand key={p.client} project={p} />
      ))}
    </>
  );
}
