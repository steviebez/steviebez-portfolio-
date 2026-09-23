import { useEffect } from 'react';
import Hero from './components/Hero.jsx';
import WhyMe from './components/WhyMe.jsx';
import Work from './components/Work.jsx';
import Showreel from './components/Showreel.jsx';
import Clients from './components/Clients.jsx';
import Articles from './components/Articles.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  useEffect(() => { document.documentElement.classList.add('js'); }, []);
  // Landing page pieces — further sections added one at a time on request.
  return (
    <>
      <Hero />
      <Work />
      <Showreel />
      <Clients />
      <WhyMe />
      <Articles />
      <Contact />
    </>
  );
}
