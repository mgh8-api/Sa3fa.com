import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Zap, Shield } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full floating-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Floating icons */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="glass-card p-4 floating-animation">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <div className="glass-card p-4 floating-animation" style={{ animationDelay: '2s' }}>
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <div className="glass-card p-4 floating-animation" style={{ animationDelay: '4s' }}>
              <Shield className="w-6 h-6 text-success" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="glow-text">Build.</span>{' '}
            <span className="glow-text">Automate.</span>{' '}
            <span className="glow-text">Grow.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Sa3fa makes business smarter with{' '}
            <span className="text-primary font-semibold">custom SaaS development</span>,{' '}
            <span className="text-accent font-semibold">intelligent automation</span>, and{' '}
            <span className="text-success font-semibold">self-hosted solutions</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="glass-button text-lg px-8 py-4 group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Building
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="tech-border text-lg px-8 py-4 bg-transparent hover:bg-primary/10"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Work
            </Button>
          </div>

          {/* Tech stack indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            {['Server Setup & Management', 'Custom API Integration', 'Node.js', 'PostgreSQL', 'Automation', 'Custom SaaS'].map((tech) => (
              <span key={tech} className="glass-card px-4 py-2 tech-border">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;