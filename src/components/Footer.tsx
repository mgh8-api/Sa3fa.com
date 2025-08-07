import { Mail, MessageSquare, MapPin, Zap, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background/50 backdrop-blur-lg border-t border-border/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold glow-text">Sa3fa</span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Building the future of business technology. We create smart systems that help 
              companies grow, automate, and scale in the digital age.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/sa3fa.iq"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/sa3fa-ltd"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:info@sa3fa.com" className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4 mr-2" />
                info@sa3fa.com
              </a>
              <a href="https://wa.me/+9647801365149" className="flex items-center text-muted-foreground hover:text-success transition-colors text-sm">
                <MessageSquare className="w-4 h-4 mr-2" />
                +964 780 136 5149
              </a>
              <div className="flex items-center text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                Iraq - Baghdad
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Sa3fa. All rights reserved. Built with passion for innovation.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;