import { Rocket, Users, Coffee, Code } from "lucide-react";

const stats = [
  { icon: Rocket, value: "50+", label: "Projects Launched" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Coffee, value: "∞", label: "Coffee Consumed" },
  { icon: Code, value: "500K+", label: "Lines of Code" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              About Us
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              We're Not Your
              <span className="block text-gradient">Typical Agency</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                We're a crew of developers, designers, and problem-solvers who actually care about what we build. No corporate BS, no endless meetings — just great work delivered fast.
              </p>
              <p>
                Founded by devs who got tired of seeing bad apps, we focus on quality, performance, and UX that makes users go "damn, that's smooth."
              </p>
              <p>
                Whether you're a startup with a big idea or an established company needing an upgrade, we've got your back.
              </p>
            </div>

            {/* Values */}
            <div className="flex flex-wrap gap-3 mt-8">
              {["Speed", "Quality", "Transparency", "Innovation"].map((value) => (
                <span
                  key={value}
                  className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors duration-300"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_hsl(82_84%_55%_/_0.15)]"
              >
                <stat.icon className="w-8 h-8 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                <div className="font-display font-bold text-3xl md:text-4xl text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
