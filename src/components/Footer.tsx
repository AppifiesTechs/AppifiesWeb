import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from '../assets/appifies_logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { name: "Flutter Development", href: "#services" },
      { name: "Node.js Backend", href: "#services" },
      { name: "React Web Apps", href: "#services" },
      { name: "Firebase Integration", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Work", href: "#work" },
      { name: "Process", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
    social: [
      { name: "Twitter", icon: Twitter, href: "#" },
      { name: "GitHub", icon: Github, href: "#" },
      { name: "LinkedIn", icon: Linkedin, href: "#" },
      { name: "Instagram", icon: Instagram, href: "#" },
    ],
  };

  return (
    <footer className="border-t border-border bg-muted/30 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              {/* <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">&lt;/&gt;</span>
              </div> */}
              <img 
  src={logo}
  alt="AppifiesTech Logo"
  className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
/>

              <span className="font-display font-bold text-xl text-foreground">
                AppifiesTech
              </span>
            </a>
            <p className="text-muted-foreground mb-6">
              Building apps and Websites that hit different. Flutter, Node.js, Firebase & React — we've got the stack.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {links.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-foreground">
              Services
            </h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-foreground">
              Company
            </h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-foreground">
              Stay in the Loop
            </h4>
            <p className="text-muted-foreground mb-4">
              Get updates on our latest projects and tech insights.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-300"
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AppifiesTech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
