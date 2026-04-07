import { useState, useCallback } from 'react';
import './styles/globals.css';
import LoadingScreen from './components/layout/LoadingScreen';
import CustomCursor from './components/layout/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './sections/Hero/HeroSection';
import AboutSection from './sections/About/AboutSection';
import SkillsSection from './sections/Skills/SkillsSection';
import ProjectsSection from './sections/Projects/ProjectsSection';
import ExperienceSection from './sections/Experience/ExperienceSection';
import ContactSection from './sections/Contact/ContactSection';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <CustomCursor />
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s' }}>
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
