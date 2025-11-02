import { clubInfo } from "@/data/content";
import { Target, Lightbulb } from "lucide-react";
import * as Icons from "lucide-react";
import { memo } from "react";

const About = memo(() => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gradient text-glow">
            Vision & Mission
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Building the future of tech education
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Vision */}
          <div className="neumorphic rounded-2xl p-6 sm:p-8 glow-primary hover:scale-[1.02] transition-all h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 sm:p-3 rounded-lg bg-primary/10">
                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-glow">
                Our Vision
              </h3>
            </div>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
              {clubInfo.vision}
            </p>
          </div>

          {/* Mission */}
          <div className="neumorphic rounded-2xl p-6 sm:p-8 glow-primary hover:scale-[1.02] transition-all h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 sm:p-3 rounded-lg bg-secondary/10">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-glow text-secondary">
                Our Mission
              </h3>
            </div>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
              {clubInfo.mission}
            </p>
          </div>
        </div>

        {/* Core Objectives */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gradient text-glow">
            Core Objectives
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {clubInfo.objectives.map((objective, index) => {
              const IconComponent =
                Icons[objective.icon as keyof typeof Icons] as React.ComponentType<{
                  className?: string;
                }>;
              return (
                <div
                  key={`objective-${index}`}
                  className="glass rounded-xl p-4 sm:p-6 glow-primary hover:glow-primary hover:scale-105 transition-all group"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-secondary/10 transition-colors flex-shrink-0">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-secondary transition-colors" />
                    </div>
                    <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                      {objective.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
