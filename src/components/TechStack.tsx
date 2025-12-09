const technologies = [
  { name: "Flutter", logo: "🦋" },
  { name: "React", logo: "⚛️" },
  { name: "Node.js", logo: "🟢" },
  { name: "Firebase", logo: "🔥" },
  { name: "TypeScript", logo: "💙" },
  { name: "Dart", logo: "🎯" },
  { name: "MongoDB", logo: "🍃" },
  { name: "PostgreSQL", logo: "🐘" },
  { name: "AWS", logo: "☁️" },
  { name: "Docker", logo: "🐳" },
  { name: "GraphQL", logo: "◈" },
  { name: "REST API", logo: "🔗" },
];

const TechStack = () => {
  return (
    <section className="py-16 border-y border-border bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-sm uppercase tracking-widest text-muted-foreground">
          Our Tech Arsenal
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling Content */}
        <div className="flex animate-marquee">
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 px-8 py-4 mx-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-300 shrink-0"
            >
              <span className="text-2xl">{tech.logo}</span>
              <span className="font-medium text-foreground whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
