import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-background/80">
      <div className="glass-card p-12 max-w-md w-full mx-4 text-center">
        <div className="mb-8">
          <img 
            src="/this-is-fine.gif" 
            alt="This is fine meme" 
            className="w-48 h-48 mx-auto mb-6 rounded-lg"
          />
        </div>
        
        <h1 className="text-6xl font-bold mb-4 glow-text">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist. But that's fine... everything is fine.
        </p>
        
        <Button 
          onClick={() => window.location.href = '/'}
          className="glass-button w-full"
          size="lg"
        >
          Return to Home
        </Button>
        
        <p className="text-xs text-muted-foreground mt-4 opacity-60">
          Route: {location.pathname}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
