import { Shield, Zap, Globe, Users, Database, Lock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Self-hosted & Secure',
    description: 'Complete control over your data and infrastructure. No vendor lock-in, maximum security.',
    benefit: '100% Data Ownership'
  },
  {
    icon: Zap,
    title: 'Lightning Fast Development',
    description: 'Rapid prototyping to production deployment. Get to market faster with battle-tested solutions.',
    benefit: '50% Faster Time-to-Market'
  },
  {
    icon: Globe,
    title: 'Scalable Architecture',
    description: 'Built for growth from day one. Handle 10 users or 10 million with the same architecture.',
    benefit: 'Infinite Scalability'
  },
  {
    icon: Users,
    title: 'Middle East Expertise',
    description: 'Deep understanding of regional business needs, regulations, and market dynamics.',
    benefit: 'Local Market Knowledge'
  },
  {
    icon: Database,
    title: 'Full-stack Excellence',
    description: 'From frontend to backend, DevOps to databases. Complete solutions, not just components.',
    benefit: 'End-to-end Solutions'
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Military-grade security implementations with advanced authentication and monitoring.',
    benefit: 'Bank-level Security'
  }
];

const WhySa3fa = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(59,130,246,0.15)_1px,_transparent_0)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-5xl font-bold mb-6">
            Why <span className="glow-text">Sa3fa</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just developers. We're technology partners who understand that great software 
            is about solving real business problems, not just writing code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={feature.title}
                className="relative group scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass-card p-8 h-full tech-border group-hover:scale-105 transition-all duration-300">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="inline-flex p-4 rounded-lg bg-primary/20 border border-primary/30 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/20 border border-success/30 text-success text-sm font-medium">
                      <div className="w-2 h-2 rounded-full bg-success mr-2" />
                      {feature.benefit}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="mt-20 scroll-reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' },
              { number: '< 1 week', label: 'Average MVP Time' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center glass-card p-6 tech-border">
                <div className="text-3xl font-bold glow-text mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySa3fa;