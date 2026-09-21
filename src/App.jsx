import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Services from './components/Services.jsx';
import Work from './components/Work.jsx';
import Stats from './components/Stats.jsx';
import Process from './components/Process.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useEffect(() => { document.documentElement.classList.add('js'); }, []);
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Stats />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}
