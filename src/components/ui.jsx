import { useEffect, useRef } from 'react';

export function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.disconnect(); }
    }), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`rv ${className}`} style={{ '--d': `${delay}s` }}>{children}</div>;
}

export function FadeImg({ src, alt }) {
  const ref = useRef(null);
  useEffect(() => {
    const img = ref.current;
    if (!img) return;
    const done = () => img.classList.add('ld');
    if (img.complete && img.naturalWidth) done();
    else { img.addEventListener('load', done); img.addEventListener('error', done); }
  }, [src]);
  return <img ref={ref} className="fadeimg" src={src} alt={alt} loading="lazy" />;
}

export function Eyebrow({ children }) {
  return <Reveal><p className="sec-eyebrow">{children}</p></Reveal>;
}
