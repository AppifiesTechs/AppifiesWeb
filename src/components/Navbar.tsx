import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import  logo  from '../assets/appifies_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" 
      
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            {/* <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <span className="text-primary-foreground font-display font-bold text-lg">&lt;/&gt;</span>
            </div> */}
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
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary font-medium transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button variant="hero" size="default">
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
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary font-medium text-lg py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-4">
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


// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import logo from "../assets/appifies_logo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: "Services", id: "services" },
//     { name: "Work", id: "work" },
//     { name: "About", id: "about" },
//     { name: "Contact", id: "contact" },
//   ];

//   // ✅ Smooth scroll + remove #
//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if(!section)return;
//     section.scrollIntoView({ behavior: "smooth" });

//     // ✅ Removes # from URL
//     // window.history.replaceState(null, "", window.location.pathname);
//     window.history.pushState(null, "", `/${id}`);
//     setIsOpen(false);
//   };
//   useEffect(() => {
//     const path = window.location.pathname;
//     const sectionId = path.replace('/', '');
    
//     if (sectionId && sectionId !== '') {
//       // Wait for DOM to be ready
//       setTimeout(() => {
//         const section = document.getElementById(sectionId);
//         if (section) {
//           section.scrollIntoView({ behavior: "smooth" });
//         }
//       }, 100);
//     }
//   }, []);
//   // useEffect(() => {
//   //   const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);

//   //   const observer = new IntersectionObserver(
//   //     (entries) => {
//   //       entries.forEach((entry) => {
//   //         if (entry.isIntersecting) {
//   //           window.history.replaceState(null, "", `/${entry.target.id}`);
//   //         }
//   //       });
//   //     },
//   //     { threshold: 0.5 ,
//   //       rootMargin: "-100px 0px -50% 0px" 
//   //     },
      
//   //   );

//   //   sections.forEach((section) => {
//   //     if (section) observer.observe(section);
//   //   });

//   //   return () => observer.disconnect();
//   // }, []);
//   useEffect(() => {
//   const sections = navLinks
//     .map((l) => document.getElementById(l.id))
//     .filter(Boolean);

//   if (sections.length === 0) return;

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           window.history.replaceState(null, "", `/${entry.target.id}`);
//         }
//       });
//     },
//     {
//       threshold: 0.5,
//       rootMargin: "0px 0px -40% 0px",
//     }
//   );

//   sections.forEach((section) => observer.observe(section));

//   return () => observer.disconnect();
// }, [navLinks]);


//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
//       <div className="container mx-auto px-6">
//         <div className="flex items-center justify-between h-20">
          
//           {/* ✅ LOGO */}
//           <div
//             onClick={() => scrollToSection("home")}
//             className="flex items-center gap-2 group cursor-pointer"
//           >
//             <img
//               src={logo}
//               alt="AppifiesTech Logo"
//               className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
//             />
//             <span className="font-display font-bold text-xl text-foreground">
//               AppifiesTech
//             </span>
//           </div>

//           {/* ✅ DESKTOP NAV */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <button
//                 key={link.name}
//                 onClick={() => scrollToSection(link.id)}
//                 className="text-muted-foreground hover:text-primary font-medium transition-colors duration-300 relative group"
//               >
//                 {link.name}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
//               </button>
//             ))}
//           </div>

//           {/* ✅ CTA */}
//           <div className="hidden md:block">
//             <Button
//               variant="hero"
//               size="default"
//               onClick={() => scrollToSection("contact")}
//             >
//               Let's Talk
//             </Button>
//           </div>

//           {/* ✅ MOBILE TOGGLE */}
//           <button
//             className="md:hidden text-foreground p-2"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* ✅ MOBILE MENU */}
//         {isOpen && (
//           <div className="md:hidden py-6 border-t border-border animate-fade-in">
//             <div className="flex flex-col gap-4">
//               {navLinks.map((link) => (
//                 <button
//                   key={link.name}
//                   onClick={() => scrollToSection(link.id)}
//                   className="text-muted-foreground hover:text-primary font-medium text-lg py-2 transition-colors text-left"
//                 >
//                   {link.name}
//                 </button>
//               ))}

//               <Button
//                 variant="hero"
//                 size="lg"
//                 className="mt-4"
//                 onClick={() => scrollToSection("contact")}
//               >
//                 Let's Talk
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
