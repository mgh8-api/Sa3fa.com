import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Calendar, Users, Target, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const projectsData = {
  'ecommerce-automation': {
    title: 'E-commerce Automation Platform',
    description: 'Complete tailored SaaS solution with store API integration, web scraping for auditing, inventory management, and automated customer service with WhatsApp integration.',
    fullDescription: 'This comprehensive e-commerce automation platform revolutionizes online retail operations by providing seamless integration with multiple store APIs, intelligent web scraping capabilities for competitive auditing, robust inventory management systems, and automated customer service through WhatsApp integration. The platform reduces manual work by 90% and increases operational efficiency significantly.',
    tech: ['Node.js', 'PostgreSQL', 'WhatsApp API', 'Web Scraping', 'Docker', 'Redis'],
    features: [
      'Multi-store API Integration',
      'Automated Web Scraping for Auditing',
      'Real-time Inventory Management',
      'WhatsApp Customer Service Bot',
      'Order Processing Automation',
      'Analytics & Reporting Dashboard'
    ],
    challenges: [
      'Integrating with 15+ different e-commerce platforms',
      'Real-time inventory synchronization across channels',
      'Building intelligent chatbot for customer queries'
    ],
    solutions: [
      'Developed universal API adapter for seamless integration',
      'Implemented event-driven architecture for real-time updates',
      'Created NLP-powered chatbot with 95% query resolution rate'
    ],
    results: [
      '300% increase in order processing speed',
      '90% reduction in manual inventory updates',
      '50% improvement in customer response time'
    ],
    timeline: '6 months',
    team: '4 developers',
    status: 'Live',
    year: '2024'
  },
  'business-intelligence': {
    title: 'Business Intelligence Dashboard',
    description: 'API integration with web scraping from 3 vendors who don\'t support API, unified database with WhatsApp automation, live dashboard tracking, and custom AI for end user questioning and querying.',
    fullDescription: 'A sophisticated business intelligence platform that consolidates data from multiple sources including APIs and web scraping, provides real-time analytics through interactive dashboards, and features a custom AI assistant for natural language querying and insights generation.',
    tech: ['React', 'PostgreSQL', 'WhatsApp API', 'Custom AI', 'Python', 'Machine Learning'],
    features: [
      'Multi-vendor Data Integration',
      'Real-time Dashboard Analytics',
      'Custom AI Query Assistant',
      'WhatsApp Report Automation',
      'Predictive Analytics',
      'Custom Report Generation'
    ],
    challenges: [
      'Scraping data from vendors without API support',
      'Creating unified data model from disparate sources',
      'Building AI that understands business context'
    ],
    solutions: [
      'Developed robust web scraping framework with anti-detection',
      'Designed flexible ETL pipeline for data normalization',
      'Trained custom NLP model on business domain data'
    ],
    results: [
      '50% faster decision making',
      '80% reduction in report generation time',
      '95% accuracy in AI-generated insights'
    ],
    timeline: '8 months',
    team: '5 developers',
    status: 'Live',
    year: '2024'
  },
  'hospital-management': {
    title: 'Hospital Management Custom SaaS',
    description: 'Custom software to manage hospital human resources and assets efficiently, ending paper transactions altogether and providing a full computerized solution.',
    fullDescription: 'A comprehensive hospital management system that digitizes all administrative processes, from HR management to asset tracking, creating a fully paperless environment that improves efficiency, reduces errors, and enhances patient care through better resource management.',
    tech: ['Node.js', 'PostgreSQL', 'Custom SaaS', 'Automation', 'React', 'Express'],
    features: [
      'Complete HR Management System',
      'Real-time Asset Tracking',
      'Paperless Workflow Management',
      'Patient Record Integration',
      'Staff Scheduling Automation',
      'Inventory Management'
    ],
    challenges: [
      'Migrating from decades of paper-based processes',
      'Ensuring HIPAA compliance and data security',
      'Training staff on new digital workflows'
    ],
    solutions: [
      'Developed intuitive UI matching familiar paper forms',
      'Implemented end-to-end encryption and audit trails',
      'Created comprehensive training program and support system'
    ],
    results: [
      '100% digital transformation achieved',
      '60% reduction in administrative time',
      '99.9% uptime and zero data breaches'
    ],
    timeline: '12 months',
    team: '6 developers',
    status: 'Deployed',
    year: '2023'
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectId ? projectsData[projectId as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-24">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/#projects')}
          className="mb-8 hover:bg-accent"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Button>

        {/* Project Header */}
        <div className="glass-card p-8 tech-border mb-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-success rounded-full animate-pulse" />
              <span className="text-success font-medium">{project.status}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{project.year}</span>
            </div>
            <Button variant="outline" className="tech-border">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          </div>

          <h1 className="text-4xl font-bold mb-4 glow-text">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Timeline</p>
                <p className="font-medium">{project.timeline}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Team Size</p>
                <p className="font-medium">{project.team}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="font-medium">{project.status}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Overview */}
          <div className="space-y-8">
            <div className="glass-card p-6 tech-border">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
            </div>

            <div className="glass-card p-6 tech-border">
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 tech-border">
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="space-y-8">
            <div className="glass-card p-6 tech-border">
              <h2 className="text-2xl font-bold mb-4">Challenges</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-warning mt-2" />
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 tech-border">
              <h2 className="text-2xl font-bold mb-4">Solutions</h2>
              <ul className="space-y-3">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-success mt-2" />
                    <span className="text-muted-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 tech-border">
              <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="font-medium text-success">📈 {result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 glass-card p-8 tech-border">
          <h2 className="text-3xl font-bold mb-4">Interested in Similar Solutions?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We specialize in creating custom solutions that transform businesses. 
            Let's discuss how we can build something amazing for your company.
          </p>
          <Button 
            size="lg" 
            className="glass-button"
            onClick={() => navigate('/#contact')}
          >
            Start Your Project
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;