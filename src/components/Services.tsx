import { Smartphone, Server, Flame, Globe, Zap, Palette } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Flutter Development",
    description: "Cross-platform mobile apps that look fire on iOS & Android. One codebase, double the impact.",
    color: "primary",
  },
  {
    icon: Server,
    title: "Node.js Backend",
    description: "Scalable APIs and microservices that handle whatever you throw at them. Fast. Reliable. Clean.",
    color: "secondary",
  },
  {
    icon: Flame,
    title: "Firebase Magic",
    description: "Real-time databases, auth, cloud functions — the whole Google toolkit, expertly integrated.",
    color: "accent",
  },
  {
    icon: Globe,
    title: "React Web Apps",
    description: "Buttery smooth web experiences with React. SPAs, dashboards, landing pages — we do it all.",
    color: "primary",
  },
  {
    icon: Zap,
    title: "API Integration",
    description: "Connect to anything. Payment gateways, social logins, third-party services. We make it seamless.",
    color: "secondary",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designs that don't just look good — they feel good. User-centered, pixel-perfect, on-brand.",
    color: "accent",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    border: "border-primary/20",
    text: "text-primary",
    glow: "group-hover:shadow-[0_0_40px_hsl(82_84%_55%_/_0.3)]",
  },
  secondary: {
    bg: "bg-secondary/10",
    border: "border-secondary/20",
    text: "text-secondary",
    glow: "group-hover:shadow-[0_0_40px_hsl(192_91%_55%_/_0.3)]",
  },
  accent: {
    bg: "bg-accent/10",
    border: "border-accent/20",
    text: "text-accent",
    glow: "group-hover:shadow-[0_0_40px_hsl(330_85%_60%_/_0.3)]",
  },
};

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      {/* Background Elements */}
      <div className="blob blob-2 w-[400px] h-[400px] -right-40 top-1/4 opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            What We Do
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            Services That <span className="text-gradient">Deliver</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            End-to-end development from idea to App Store. We handle the tech so you can focus on growing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            return (
              <div
                key={service.title}
                className={`group relative p-8 rounded-2xl bg-card border border-border transition-all duration-500 hover:-translate-y-2 ${colors.glow}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <service.icon className={`w-7 h-7 ${colors.text}`} />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className={`absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 ${colors.text}`}>
                  →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
