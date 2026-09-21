const WORDS = ['HOUDINI', 'MOTION GRAPHICS', 'SOCIAL CAMPAIGNS', 'VIDEO EDITING', '3D & SIMULATION', 'BRAND & DESIGN'];

export default function Marquee() {
  const lane = [...WORDS, ...WORDS].map((w, i) => (
    <span key={i}>{w} <b>✳ </b></span>
  ));
  return <div className="marquee" aria-hidden="true"><div className="lane">{lane}{lane}</div></div>;
}
