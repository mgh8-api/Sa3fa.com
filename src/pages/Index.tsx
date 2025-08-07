import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhatWeBuild from '@/components/WhatWeBuild';
import HowItWorks from '@/components/HowItWorks';
import RecentProjects from '@/components/RecentProjects';
import WhySa3fa from '@/components/WhySa3fa';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Index = () => {
  const location = useLocation();
  useScrollReveal();

  useEffect(() => {
    if (location.hash === '#projects') {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.hash === '#team') {
      const el = document.getElementById('team');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <Hero />
        
        <section id="services">
          <WhatWeBuild />
        </section>
        
        <section id="how-it-works">
          <HowItWorks />
        </section>
        
        <section id="projects">
          <RecentProjects />
        </section>
        
        <section id="about">
          <WhySa3fa />
        </section>
        <section id="team">
          {/* Only the Team section from WhySa3fa should be rendered here. If needed, extract Team to its own component. */}
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
