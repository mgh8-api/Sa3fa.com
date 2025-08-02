import { Server, Link2, Zap, Database, Settings, Monitor } from 'lucide-react';

const services = [
  {
    icon: Server,
    title: 'Server Setup & Management',
    description: 'Professional server configuration and ongoing management for optimal performance and security.',
    features: ['Server Configuration', 'Performance Monitoring', 'Security Hardening'],
    color: 'primary'
  },
  {
    icon: Link2,
    title: 'Custom API Integration',
    description: 'Seamlessly connect your systems with custom API integrations and third-party services.',
    features: ['API Development', 'Third-party Integration', 'Data Synchronization'],
    color: 'accent'
  },
  {
    icon: Settings,
    title: 'Node.js',
    description: 'High-performance backend development using Node.js for scalable server-side applications.',
    features: ['Backend Development', 'RESTful APIs', 'Real-time Applications'],
    color: 'success'
  },
  {
    icon: Database,
    title: 'PostgreSQL',
    description: 'Robust database design and optimization using PostgreSQL for reliable data management.',
    features: ['Database Design', 'Query Optimization', 'Data Migration'],
    color: 'warning'
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Streamline your business processes with intelligent automation solutions.',
    features: ['Process Automation', 'Workflow Optimization', 'Task Scheduling'],
    color: 'accent'
  },
  {
    icon: Monitor,
    title: 'Custom SaaS',
    description: 'Complete SaaS platform development from concept to deployment and scaling.',
    features: ['SaaS Architecture', 'Multi-tenancy', 'Subscription Management'],
    color: 'primary'
  }
];

const colorClasses = {
  primary: 'border-primary/30 hover:border-primary/60 text-primary',
  accent: 'border-accent/30 hover:border-accent/60 text-accent',
  success: 'border-success/30 hover:border-success/60 text-success',
  warning: 'border-warning/30 hover:border-warning/60 text-warning'
};

const WhatWeBuild = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-5xl font-bold mb-6">
            What We <span className="glow-text">Build</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just code. We architect digital ecosystems that transform how businesses operate, 
            scale, and succeed in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClass = colorClasses[service.color as keyof typeof colorClasses];
            
            return (
              <div
                key={service.title}
                className="glass-card p-8 tech-border group hover:scale-105 transition-all duration-300 scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                
                <div className={`inline-flex p-4 rounded-lg border ${colorClass} mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className={`w-2 h-2 rounded-full mr-3 ${colorClass.split(' ')[0].replace('border-', 'bg-')}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;