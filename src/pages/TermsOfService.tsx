import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl font-bold glow-text mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                <strong>Effective Date:</strong> January 1, 2024
              </p>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using Sa3fa's services, you accept and agree to be bound by the 
                  terms and provision of this agreement. If you do not agree to these terms, 
                  you should not use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Service Description</h2>
                <p className="text-muted-foreground mb-4">
                  Sa3fa provides custom software development, business automation solutions, 
                  SaaS applications, and related technology services. Our services are provided 
                  "as is" and we reserve the right to modify or discontinue services at any time.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
                <p className="text-muted-foreground mb-4">
                  You agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Not interfere with or disrupt our services</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  All content, features, and functionality of our services are owned by Sa3fa 
                  and are protected by copyright, trademark, and other intellectual property laws. 
                  Custom solutions developed for clients remain the property of the client upon 
                  full payment.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Payment Terms</h2>
                <p className="text-muted-foreground mb-4">
                  Payment terms are specified in individual service agreements. Late payments 
                  may result in service suspension. All fees are non-refundable unless 
                  otherwise specified in writing.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  Sa3fa shall not be liable for any indirect, incidental, special, or 
                  consequential damages arising out of the use or inability to use our services. 
                  Our total liability shall not exceed the amount paid for the specific service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Termination</h2>
                <p className="text-muted-foreground mb-4">
                  Either party may terminate services with appropriate notice as specified in 
                  individual agreements. Upon termination, your right to use our services ceases immediately.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  For questions about these Terms of Service, contact us at:
                </p>
                <div className="text-muted-foreground">
                  <p>Email: info@sa3fa.com</p>
                  <p>Phone: +964 780 136 5149</p>
                  <p>Address: Iraq - Baghdad</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;