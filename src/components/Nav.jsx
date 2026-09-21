import { useState } from 'react';

const LINKS = [
  ['Services', '#services'],
  ['Work', '#work'],
  ['Process', '#process'],
  ['Contact', '#contact'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="pillnav">
        <span className="dot">✳</span>
        <a className="word" href="#top">Stevie Bez</a>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </nav>
      <div className={`menu${open ? ' open' : ''}`}>
        <small>MENU</small>
        {LINKS.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </div>
    </>
  );
}
