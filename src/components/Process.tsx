const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We hop on a call to understand your vision, goals, and requirements. No commitment, just vibes.",
  },
  {
    number: "02",
    title: "Strategy & Design",
    description: "We map out the tech stack, create wireframes, and design pixel-perfect mockups for your approval.",
  },
  {
    number: "03",
    title: "Development Sprint",
    description: "Our devs get to work. Regular updates, demos, and feedback loops to keep you in the loop.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We deploy, test, and launch your app. Then we stick around for updates and maintenance.",
  },
];

const Process = () => {
  return (
    <section className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="blob blob-3 w-[400px] h-[400px] right-0 top-1/3 opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            How We Work
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            Simple <span className="text-gradient">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From idea to launch in 4 straightforward steps. No surprises, no hidden fees, no drama.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative group"
              >
                {/* Card */}
                <div className="p-6 md:p-8 rounded-2xl bg-card border border-border transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_0_40px_hsl(82_84%_55%_/_0.15)]">
                  {/* Number */}
                  <div className="relative z-10 w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <span className="font-display font-bold text-lg text-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-xl mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
