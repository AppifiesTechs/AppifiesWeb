import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "../assets/appifies_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    if (!id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
      setIsOpen(false);
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    // Adjust offset to account for fixed navbar height (72px here). Tweak as needed.
    const headerOffset = 72;
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });

    // Use pushState on user-initiated navigation so it's navigable in history
    window.history.pushState(null, "", `#${id}`);
    setIsOpen(false);
  };

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Choose the intersecting entry with the largest visible area
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const id = visible.target.id;
        const hash = `#${id}`;
        if (window.location.hash !== hash) {
          // replaceState so we don't flood back-history while the user scrolls
          window.history.replaceState(null, "", hash);
        }
      },
      {
        // thresholds give the observer multiple points to measure visibility
        threshold: [0.25, 0.5, 0.75],
        // Adjust top rootMargin to roughly equal your navbar height (negative)
        rootMargin: "-72px 0px -40% 0px",
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
    // navLinks is stable here (literal), include if linter complains
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("");
            }}
            className="flex items-center gap-2 group"
          >
            <img
              src={logo}
              alt="AppifiesTech Logo"
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            />

            <span className="font-display font-bold text-xl text-foreground">
              AppifiesTech
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(id);
                  }}
                  className="text-muted-foreground hover:text-primary font-medium transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              variant="hero"
              size="default"
              onClick={() => scrollToSection("contact")}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(id);
                    }}
                    className="text-muted-foreground hover:text-primary font-medium text-lg py-2 transition-colors"
                  >
                    {link.name}
                  </a>
                );
              })}
              <Button
                variant="hero"
                size="lg"
                className="mt-4"
                onClick={() => scrollToSection("contact")}
              >
                Let's Talk
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
