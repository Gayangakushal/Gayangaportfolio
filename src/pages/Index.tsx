import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import GraphicDesign from "@/components/GraphicDesign";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div id="hero">
        <Hero />
      </div>
      
      <div id="about">
        <About />
      </div>
      
      <div id="skills">
        <Skills />
      </div>
      
      <div id="graphic-design">
        <GraphicDesign />
      </div>
      
      <div id="projects">
        <Projects />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
      
      {/* Footer */}
      <footer className="border-t border-accent/20 py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 U.L. Gayanga. Crafted with passion and creativity.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
