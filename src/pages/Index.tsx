import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Work from "@/components/Work";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update page metadata
    document.title = "AppifiesTech | Flutter & React App Development Agency";
  }, []);

  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <main className="space-y-24">
        <Hero />
        <TechStack />
        <Services />
        <Work />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
    </div>
  );
};

export default Index;
