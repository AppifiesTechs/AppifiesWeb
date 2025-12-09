import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageCircle, Send } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="blob blob-1 w-[600px] h-[600px] -bottom-40 -left-40" />
      <div className="blob blob-2 w-[500px] h-[500px] -top-40 -right-40" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              Get In Touch
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
              Ready To Build
              <span className="block text-gradient">Something Epic?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Drop us a message and let's turn your idea into reality. We respond faster than your last Tinder match.
            </p>
          </div>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Email Card */}
            <a
              href="mailto:hello@devforge.dev"
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_hsl(82_84%_55%_/_0.15)]"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-foreground">
                Email Us
              </h3>
              <p className="text-muted-foreground mb-4">
                For detailed project discussions and proposals
              </p>
              <span className="text-primary font-medium flex items-center gap-2 group-hover:gap-4 transition-all">
                appifies.tech@gmail.com
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            {/* Chat Card */}
            <a
              href="#"
              className="group p-8 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_hsl(192_91%_55%_/_0.15)]"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <MessageCircle className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-foreground">
                Quick Chat
              </h3>
              <p className="text-muted-foreground mb-4">
                For quick questions and casual conversations
              </p>
              <span className="text-secondary font-medium flex items-center gap-2 group-hover:gap-4 transition-all">
                Start a conversation
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>

          {/* Main CTA */}
          <div className="text-center p-10 md:p-16 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border border-primary/20">
            <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">
              Let's Make It Happen
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Tell us about your project and we'll get back to you within 24 hours with a game plan.
            </p>
            <Link to={"/start-project"}>
            <Button variant="hero" size="xl" className="group">
              <Send className="w-5 h-5" />
              Start Your Project
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
