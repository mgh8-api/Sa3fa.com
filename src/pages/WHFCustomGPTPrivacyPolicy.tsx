import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const WHFCustomGPTPrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl font-bold glow-text mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                <strong>Effective Date:</strong> 01-08-2025
              </p>
              
              <p className="text-muted-foreground mb-6">
                At WHF Custom GPT, we respect your privacy and are committed to being transparent about how our service works and what information we handle.
              </p>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We do not collect any personally identifiable information (such as your name, email, address, or phone number).
                  The only data we process is:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>User queries: The questions or messages you enter into our service.</li>
                  <li>Workflow and logs: System-generated records necessary to operate, troubleshoot, and improve the service.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use the Data</h2>
                <p className="text-muted-foreground mb-4">
                  The limited data we collect is used solely to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Process your request and generate an accurate response.</li>
                  <li>Maintain and improve the service's performance.</li>
                  <li>Diagnose technical issues.</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  We do not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Sell your data.</li>
                  <li>Share your data with advertisers.</li>
                  <li>Use your data for marketing purposes.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Data Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We do not share your queries, workflows, or logs with any third party except:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>When required by law or legal process.</li>
                  <li>To protect the security or integrity of our systems.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Retention</h2>
                <p className="text-muted-foreground mb-4">
                  Workflow and log data may be retained for a limited period to ensure the service runs smoothly and securely.
                </p>
                <p className="text-muted-foreground mb-4">
                  Data is automatically deleted when it is no longer needed.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Security</h2>
                <p className="text-muted-foreground mb-4">
                  We use industry-standard security measures to protect the data we process. However, no system is completely secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Changes to This Policy</h2>
                <p className="text-muted-foreground mb-4">
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with the "Effective Date" updated.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="text-muted-foreground">
                  <p>📧 privacy@sa3fa.com</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WHFCustomGPTPrivacyPolicy;
