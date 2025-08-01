import { Monitor, MessageSquare, Zap, Server, Shield, BarChart3, LayoutDashboard, Globe, Link2 } from 'lucide-react';
import dashboardVisual from '@/assets/dashboard-visual.jpg';
import automationVisual from '@/assets/automation-visual.jpg';

const services = [
  {
    icon: Monitor,
    title: 'Custom SaaS Development',
    description: 'From idea to MVP to scalable product. We build complete SaaS solutions that grow with your business.',
    features: ['MVP Development', 'Scalable Architecture', 'Modern Tech Stack'],
    color: 'primary'
  },
  {
    icon: BarChart3,
    title: 'Business Dashboards',
    description: 'Transform raw data into actionable insights with powerful visual dashboards.',
    features: ['Real-time Analytics', 'Custom Visualizations', 'Performance Metrics'],
    color: 'accent',
    image: dashboardVisual
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp & API Integration',
    description: 'Connect any platform directly to WhatsApp and automate customer interactions.',
    features: ['WhatsApp Business API', 'Multi-platform Integration', 'Automated Workflows'],
    color: 'success'
  },
  {
    icon: Zap,
    title: 'Automation & Business Tools',
    description: 'We build growth engines, not just software. Automate processes that scale your business.',
    features: ['Process Automation', 'Business Intelligence', 'Growth Analytics'],
    color: 'warning',
    image: automationVisual
  },
  {
    icon: LayoutDashboard,
    title: 'Live Dashboard',
    description: 'Track key metrics in real time with personalized dashboards and instant alerts.',
    features: ['Real-time Monitoring', 'Custom Metrics', 'Notifications'],
    color: 'accent'
  },
  {
    icon: Globe,
    title: 'Custom Websites',
    description: 'Bespoke websites tailored to your brand with modern design and SEO best practices.',
    features: ['Responsive Design', 'SEO Ready', 'CMS Integration'],
    color: 'primary'
  },
  {
    icon: Link2,
    title: 'Link Trackers',
    description: 'Shorten, track, and analyze links to optimize your marketing campaigns.',
    features: ['URL Shortening', 'Analytics', 'QR Codes'],
    color: 'success'
  },
  {
    icon: Server,
    title: 'Self-hosted Solutions',
    description: 'Complete hosting infrastructure with domains, reverse proxies, and Docker deployments.',
    features: ['Traefik Proxy', 'Docker Containers', 'Server Management'],
    color: 'primary'
  },
  {
    icon: Shield,
    title: 'Security & Authentication',
    description: 'Enterprise-grade security with advanced authentication systems and secure email services.',
    features: ['Authelia Integration', 'Mailcow Setup', 'Security Layers'],
    color: 'accent'
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
                {service.image && (
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-32 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                )}
                
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