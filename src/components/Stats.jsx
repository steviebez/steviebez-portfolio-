import { Reveal } from './ui.jsx';

const STATS = [
  ['9<em>+</em>', 'Years across Adobe, code & 3D'],
  ['20+', 'Shots, loops & studies shipped'],
  ['3D', 'Houdini-first motion practice'],
];

export default function Stats() {
  return (
    <section className="block stats">
      <div className="wrap">
        <div className="grid">
          {STATS.map(([big, small], i) => (
            <Reveal key={small} delay={i * 0.08}>
              <div className="stat">
                <b dangerouslySetInnerHTML={{ __html: big }} />
                <span>{small}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
