import { useEffect, useRef } from 'react';

export function MetaRow({ k, v }) {
  return (
    <div className="mrow"><span className="k">{k}</span><span className="v">{v}</span></div>
  );
}

export function Shot({ src, alt, word, delay = 0 }) {
  return (
    <div className="shot ai" style={{ '--d': `${delay}s` }}>
      <FadeImg src={src} alt={alt} />
      {word && <div className="word">{word}</div>}
    </div>
  );
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
  return <img ref={ref} src={src} alt={alt} loading="lazy" />;
}
