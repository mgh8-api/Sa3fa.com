import { ExternalLink, Github, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-commerce Automation Platform',
    description: 'Complete SaaS solution with WhatsApp integration, inventory management, and automated customer service.',
    tech: ['Node.js', 'PostgreSQL', 'WhatsApp API', 'Docker'],
    features: ['Real-time Inventory', 'Automated Orders', 'Customer Support'],
    status: 'Live',
    impact: '300% increase in order processing speed'
  },
  {
    title: 'Business Intelligence Dashboard',
    description: 'Custom analytics platform aggregating data from multiple sources with real-time visualizations.',
    tech: ['React', 'n8n', 'PostgreSQL', 'Traefik'],
    features: ['Multi-source Data', 'Real-time Analytics', 'Custom Reports'],
    status: 'Live',
    impact: '50% faster decision making'
  },
  {
    title: 'Self-hosted Communication Suite',
    description: 'Complete communication infrastructure with secure email, authentication, and file sharing.',
    tech: ['Mailcow', 'Authelia', 'Docker', 'Traefik'],
    features: ['Secure Email', 'SSO Authentication', 'File Management'],
    status: 'Deployed',
    impact: '100% data ownership & control'
  }
];

const RecentProjects = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-5xl font-bold mb-6">
            Recent <span className="glow-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real solutions for real businesses. See how we've transformed operations 
            and accelerated growth for companies across the Middle East.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card p-8 tech-border group hover:scale-105 transition-all duration-300 scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Status badge */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                  <span className="text-sm text-success font-medium">{project.status}</span>
                </div>
                <Zap className="w-5 h-5 text-warning" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-accent mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="border-t border-border/50 pt-6 mb-6">
                <p className="text-sm font-medium text-success">
                  📈 {project.impact}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="flex-1 tech-border">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </Button>
                <Button size="sm" variant="outline" className="tech-border">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 scroll-reveal">
          <Button size="lg" className="glass-button">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;