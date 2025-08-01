import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Mail, Phone, MapPin, Calendar, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
              <div 
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" 
                style={{ animationDelay: '1s' }} 
              />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-5xl font-bold mb-6">
            Start <span className="glow-text">Building</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with smart technology? Let's discuss your project 
            and create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card p-8 tech-border scroll-reveal">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Get Started Today
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-input/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email Address" 
                    className="bg-input/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                  />
                </div>
              </div>
              
              <Input 
                placeholder="Company Name (Optional)" 
                className="bg-input/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Phone Number" 
                  className="bg-input/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                />
                <select className="w-full px-3 py-2 bg-input/50 border border-border/50 rounded-md focus:border-primary/50 focus:ring-primary/20 text-foreground">
                  <option value="">Project Type</option>
                  <option value="saas">Custom SaaS Development</option>
                  <option value="dashboard">Business Dashboard</option>
                  <option value="integration">WhatsApp Integration</option>
                  <option value="automation">Business Automation</option>
                  <option value="hosting">Self-hosted Solutions</option>
                  <option value="security">Security & Auth</option>
                </select>
              </div>
              
              <Textarea 
                placeholder="Tell us about your project, goals, and timeline..."
                className="bg-input/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 min-h-32"
              />
              
              <Button 
                size="lg" 
                className="w-full glass-button text-lg py-4 group"
                onClick={(e) => {
                  e.preventDefault();
                  // Handle form submission here
                  console.log('Form submitted');
                }}
              >
                Start Building
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>

          {/* Contact Info & Options */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="glass-card p-8 tech-border scroll-reveal">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Quick Contact
              </h3>
              
              <div className="space-y-4">
                <a href="mailto:info@sa3fa.com" className="flex items-center p-4 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors group">
                  <Mail className="w-5 h-5 mr-4" />
                  <div>
                    <div className="font-medium">Email Us</div>
                    <div className="text-sm opacity-80">info@sa3fa.com</div>
                  </div>
                  <ArrowRight className="ml-auto w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                
                <a href="https://wa.me/+964780136549" className="flex items-center p-4 rounded-lg bg-success/10 border border-success/30 text-success hover:bg-success/20 transition-colors group">
                  <MessageSquare className="w-5 h-5 mr-4" />
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-sm opacity-80">+964 780 136 549</div>
                  </div>
                  <ArrowRight className="ml-auto w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                
                <div className="flex items-center p-4 rounded-lg bg-accent/10 border border-accent/30 text-accent">
                  <MapPin className="w-5 h-5 mr-4" />
                  <div>
                    <div className="font-medium">Based in</div>
                    <div className="text-sm opacity-80">Iraq - Baghdad</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Discovery Call */}
            <div className="glass-card p-8 tech-border scroll-reveal">
              <h3 className="text-xl font-bold mb-4 text-foreground">
                Free Discovery Call
              </h3>
              <p className="text-muted-foreground mb-6">
                Book a 30-minute consultation to discuss your project requirements and get expert advice.
              </p>
              <Button 
                variant="outline" 
                className="w-full tech-border group"
                onClick={() => window.open('https://calendly.com/sa3fa', '_blank')}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Call
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Response Time */}
            <div className="glass-card p-6 tech-border scroll-reveal">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">Average Response Time</div>
                  <div className="text-sm text-muted-foreground">We typically respond within</div>
                </div>
                <div className="text-2xl font-bold text-success">&lt; 2 hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;