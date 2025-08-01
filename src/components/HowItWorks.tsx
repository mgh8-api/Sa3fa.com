import { Lightbulb, Cog, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Build',
    description: 'We start with your vision and architect a solution using cutting-edge technology. From MVP to enterprise-scale applications.',
    details: ['Requirements Analysis', 'Technical Architecture', 'MVP Development', 'User Testing'],
    color: 'primary'
  },
  {
    icon: Cog,
    title: 'Integrate',
    description: 'Connect all your tools, automate workflows, and integrate with existing systems. Everything works together seamlessly.',
    details: ['API Integrations', 'Workflow Automation', 'System Connectivity', 'Data Synchronization'],
    color: 'accent'
  },
  {
    icon: Rocket,
    title: 'Scale',
    description: 'Deploy on robust infrastructure with monitoring, security, and scalability built-in. Watch your business grow.',
    details: ['Cloud Deployment', 'Performance Monitoring', 'Security Implementation', 'Growth Analytics'],
    color: 'success'
  }
];

const colorClasses = {
  primary: 'bg-primary/20 text-primary border-primary/30',
  accent: 'bg-accent/20 text-accent border-accent/30',
  success: 'bg-success/20 text-success border-success/30'
};

const HowItWorks = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-5xl font-bold mb-6">
            How It <span className="glow-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven methodology transforms business ideas into scalable digital solutions. 
            From concept to deployment, we handle every step of the journey.
          </p>
        </div>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-success opacity-30" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colorClass = colorClasses[step.color as keyof typeof colorClasses];
              
              return (
                <div
                  key={step.title}
                  className="text-center scroll-reveal group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step number */}
                  <div className="flex justify-center mb-6">
                    <div className={`w-20 h-20 rounded-full border-2 ${colorClass} flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="glass-card p-6 tech-border">
                    <ul className="space-y-3 text-left">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center text-sm">
                          <div className={`w-2 h-2 rounded-full mr-3 ${colorClass.split(' ')[0].replace('bg-', 'bg-').replace('/20', '')}`} />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;