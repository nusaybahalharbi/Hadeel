import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { useTheme } from './hooks';
import AnimatedBackground from './components/AnimatedBackground';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';

import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Certifications from './sections/Certifications';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const { theme, toggle } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen key="loader" />}</AnimatePresence>

      <AnimatedBackground />
      <Navbar theme={theme} toggleTheme={toggle} />

      <main className="relative">
        <Hero />
        <div className="section-divider container-luxe" aria-hidden />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
