import { useEffect } from 'react';
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
  useScrollReveal();

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
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
