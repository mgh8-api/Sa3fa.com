import { ExternalLink, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 'ecommerce-automation',
    title: 'E-commerce Automation Platform',
    description: 'Complete tailored SaaS solution with store API integration, web scraping for auditing, inventory management, and automated customer service with WhatsApp integration.',
    tech: ['Node.js', 'PostgreSQL', 'WhatsApp API', 'Web Scraping'],
    features: ['Store API Integration', 'Web Scraping Auditing', 'Inventory Management'],
    status: 'Live',
    impact: '300% increase in order processing speed'
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence Dashboard',
    description: 'API integration with web scraping from 3 vendors who don\'t support API, unified database with WhatsApp automation, live dashboard tracking, and custom AI for end user questioning and querying.',
    tech: ['React', 'PostgreSQL', 'WhatsApp API', 'Custom AI'],
    features: ['Multi-vendor Integration', 'Live Dashboard', 'Custom AI Querying'],
    status: 'Live',
    impact: '50% faster decision making'
  },
  {
    id: 'hospital-management',
    title: 'Hospital Management Custom SaaS',
    description: 'Custom software to manage hospital human resources and assets efficiently, ending paper transactions altogether and providing a full computerized solution.',
    tech: ['Node.js', 'PostgreSQL', 'Custom SaaS', 'Automation'],
    features: ['HR Management', 'Asset Tracking', 'Paperless Workflow'],
    status: 'Deployed',
    impact: '100% digital transformation achieved'
  }
];

const RecentProjects = () => {
  const navigate = useNavigate();

  const handleViewDetails = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

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
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 tech-border"
                  onClick={() => handleViewDetails(project.id)}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
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