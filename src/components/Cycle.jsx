import { useEffect, useRef } from 'react';
import LandingPanel from './LandingPanel.jsx';
import SpotifyPanel from './SpotifyPanel.jsx';

const TAB = 64;

export default function Cycle() {
  const cycleRef = useRef(null);
  const trackRef = useRef(null);
  const tabsRef = useRef([]);
  const dotsRef = useRef([]);
  const panelsRef = useRef([]);
  const state = useRef({ target: 0, cur: 0, snapT: null });

  useEffect(() => {
    document.documentElement.classList.add('js');
    panelsRef.current = [...trackRef.current.querySelectorAll('.panel')];
    const mq = matchMedia('(max-width: 899px)');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const mobile = () => mq.matches || reduced.matches;
    const N = panelsRef.current.length;
    const st = state.current;
    let raf = 0;

    const progress = () => {
      const c = cycleRef.current;
      const total = c.offsetHeight - innerHeight;
      if (total <= 0) return 0;
      return Math.min(1, Math.max(0, -c.getBoundingClientRect().top / total));
    };
    const cycleTop = (idx) => {
      const c = cycleRef.current;
      const total = c.offsetHeight - innerHeight;
      return c.getBoundingClientRect().top + scrollY + (total * idx) / (N - 1);
    };
    const goTo = (i, instant) => scrollTo({ top: cycleTop(i), behavior: instant ? 'auto' : 'smooth' });
    const setActive = (idx) => {
      panelsRef.current.forEach((p, i) => p?.classList.toggle('in', i === idx));
      tabsRef.current.forEach((t, i) => t?.classList.toggle('show', idx > i));
      dotsRef.current.forEach((d, i) => d?.classList.toggle('on', i === idx));
    };
    const render = () => {
      if (!mobile()) {
        st.cur += (st.target - st.cur) * 0.12;
        if (Math.abs(st.target - st.cur) < 0.0005) st.cur = st.target;
        const track = trackRef.current;
        track.style.transform =
          'translateX(' + (-st.cur * (track.scrollWidth - innerWidth - TAB)) + 'px)';
        setActive(Math.round(st.cur * (N - 1)));
      }
      raf = requestAnimationFrame(render);
    };
    const onScroll = () => {
      if (mobile()) return;
      st.target = progress();
      clearTimeout(st.snapT);
      st.snapT = setTimeout(() => goTo(Math.round(st.target * (N - 1))), 140);
    };
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!mobile()) return;
      e.target.classList.toggle('in', e.isIntersecting);
    }), { threshold: 0.25 });

    panelsRef.current.forEach(p => p && io.observe(p));
    addEventListener('scroll', onScroll, { passive: true });
    const onResize = () => {
      if (mobile()) { if (trackRef.current) trackRef.current.style.transform = ''; }
      else st.target = progress();
    };
    addEventListener('resize', onResize);
    const onMq = () => { if (mobile() && trackRef.current) trackRef.current.style.transform = ''; };
    mq.addEventListener?.('change', onMq);
    raf = requestAnimationFrame(render);
    if (reduced.matches) panelsRef.current.forEach(p => p?.classList.add('in'));
    if (location.hash === '#spotify') {
      requestAnimationFrame(() => requestAnimationFrame(() => goTo(1, true)));
    }

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(st.snapT);
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', onResize);
      mq.removeEventListener?.('change', onMq);
      io.disconnect();
    };
  }, []);

  return (
    <div className="cycle" ref={cycleRef}>
      <div className="pin">
        <div className="tabs">
          <button className="tab t-terra" ref={el => (tabsRef.current[0] = el)}
            onClick={() => {
              const c = cycleRef.current, N = panelsRef.current.length;
              const total = c.offsetHeight - innerHeight;
              scrollTo({ top: c.getBoundingClientRect().top + scrollY + total / (N - 1), behavior: 'smooth' });
            }}>
            <span>01&nbsp;&nbsp;LANDING PAGE</span>
          </button>
        </div>
        <div className="track" ref={trackRef}>
          <LandingPanel />
          <SpotifyPanel />
        </div>
        <div className="prog">
          {[0, 1].map(i => (
            <i key={i} ref={el => (dotsRef.current[i] = el)} className={i === 0 ? 'on' : ''}
              onClick={() => {
                const c = cycleRef.current, N = panelsRef.current.length;
                const total = c.offsetHeight - innerHeight;
                scrollTo({ top: c.getBoundingClientRect().top + scrollY + (total * i) / (N - 1), behavior: 'smooth' });
              }} />
          ))}
        </div>
      </div>
    </div>
  );
}
