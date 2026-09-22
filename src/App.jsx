import { useEffect } from 'react';
import Hero from './components/Hero.jsx';
import WhyMe from './components/WhyMe.jsx';
import Work from './components/Work.jsx';

export default function App() {
  useEffect(() => { document.documentElement.classList.add('js'); }, []);
  // Landing page pieces — further sections added one at a time on request.
  return (
    <>
      <Hero />
      <WhyMe />
      <Work />
    </>
  );
}
