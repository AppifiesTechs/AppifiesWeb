import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="blob blob-1 w-[600px] h-[600px] -top-40 -left-40" />
      <div className="blob blob-2 w-[500px] h-[500px] top-1/2 -right-40" />
      <div className="blob blob-3 w-[400px] h-[400px] bottom-20 left-1/3" />

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">We ship apps that slap</span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 animate-fade-up delay-100">
            We Build
            <span className="block text-gradient">Apps and Websites</span>
            <span className="block text-foreground/90">That Hit Different</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            Your go-to squad for <span className="text-secondary font-semibold">Flutter</span>, {" "}
            <span className="text-primary font-semibold">Node.js</span>, {" "}
            <span className="text-accent font-semibold">Firebase</span> & {" "}
            <span className="text-foreground font-semibold">React</span>. 
            From zero to launch, we've got you.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <Link to={"/start-project"}>
            <Button variant="hero" size="xl" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            </Link>
            <Button variant="heroOutline" size="xl">
              View Our Work
            </Button>
            {/* </Link> */}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-16 animate-fade-up delay-400">
            {[
              { value: "50+", label: "Apps Shipped" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-4xl md:text-5xl text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
