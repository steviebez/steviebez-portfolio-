import { useEffect, useRef } from 'react';

export function Reveal({ children, delay = 0, from = 'up', className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const sync = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom <= 0) {
        // scrolled past: drift up and fade out
        el.classList.remove('in');
        el.classList.add('out-top');
      } else if (r.top >= vh) {
        // still below the fold: reset to entrance state
        el.classList.remove('in', 'out-top');
      } else {
        el.classList.add('in');
        el.classList.remove('out-top');
      }
    };
    sync();
    const io = new IntersectionObserver(() => sync(), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const dir = from === 'left' ? 'rv-l' : from === 'right' ? 'rv-r' : '';
  return <div ref={ref} className={`rv ${dir} ${className}`} style={{ '--d': `${delay}s` }}>{children}</div>;
}

export function FadeImg({ src, alt, eager = false }) {
  const ref = useRef(null);
  useEffect(() => {
    const img = ref.current;
    if (!img) return;
    const done = () => img.classList.add('ld');
    if (img.complete && img.naturalWidth) done();
    else { img.addEventListener('load', done); img.addEventListener('error', done); }
  }, [src]);
  return <img ref={ref} className="fadeimg" src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} {...(eager ? { fetchpriority: 'high' } : {})} />;
}

export function Eyebrow({ children }) {
  return <Reveal><p className="sec-eyebrow">{children}</p></Reveal>;
}
