import { Sparkles } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-glow">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-12">
            Innovative solutions built by our members
          </p>
        </div>

        <div className="glass-strong rounded-2xl py-12 sm:py-16 md:py-20 px-6 sm:px-8 mx-auto max-w-2xl neon-border animate-pulse-slow">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-primary animate-spin-slow" />
            <h3 className="text-2xl sm:text-3xl font-bold text-primary text-glow">
              Coming Soon
            </h3>
            <p className="text-sm sm:text-base text-foreground/70 max-w-md px-4">
              Our talented teams are working on exciting projects that will be revealed soon. Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
