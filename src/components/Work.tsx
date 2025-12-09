import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FinFlow",
    category: "Flutter • Firebase",
    description: "A sleek personal finance app with AI-powered insights and real-time sync.",
    color: "from-primary/20 to-secondary/20",
    tags: ["Flutter", "Firebase", "AI"],
  },
  {
    title: "FoodieHub",
    category: "React • Node.js",
    description: "Restaurant discovery platform with real-time reservations and reviews.",
    color: "from-secondary/20 to-accent/20",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "FitTrack Pro",
    category: "Flutter • Node.js",
    description: "Fitness tracking app with social features and personalized workout plans.",
    color: "from-accent/20 to-primary/20",
    tags: ["Flutter", "Node.js", "Firebase"],
  },
  {
    title: "EcoMart",
    category: "React • Firebase",
    description: "Sustainable e-commerce platform with carbon footprint tracking.",
    color: "from-primary/20 to-accent/20",
    tags: ["React", "Firebase", "Stripe"],
  },
];

const Work = () => {
  return (
    <section id="work" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="blob blob-1 w-[500px] h-[500px] -left-60 top-1/2 opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              Our Work
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl">
              Projects That <span className="text-gradient">Slap</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A peek at some of the apps we've shipped. Each one built with love, caffeine, and clean code.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/50"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative p-8 md:p-10">
                {/* Category */}
                <span className="text-sm text-muted-foreground font-medium">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl md:text-3xl mt-2 mb-4 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span>View Case Study</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
