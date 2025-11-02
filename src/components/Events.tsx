import { clubInfo } from "@/data/content";
import { Calendar, Clock, Trophy, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { memo } from "react";

const Events = memo(() => {
  const eventCategories = [
    { title: "Weekly/Bi-weekly", events: [...clubInfo.events.weekly, ...clubInfo.events.biweekly], icon: Clock, color: "primary" },
    { title: "Monthly", events: clubInfo.events.monthly, icon: Calendar, color: "secondary" },
    { title: "Semester Long", events: clubInfo.events.semester, icon: Users, color: "accent" },
    { title: "Annual Flagship", events: clubInfo.events.annual, icon: Trophy, color: "primary" },
  ];

  return (
    <section id="events" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-glow">Events & Activities</h2>
          <p className="text-muted-foreground text-base sm:text-lg">Regular events to keep you learning and growing</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {eventCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <AnimatedSection key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                <div
                className="glass-strong rounded-2xl p-4 sm:p-6 neon-border hover:scale-[1.02] transition-transform h-full"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${category.color === "primary" ? "bg-primary/20" : category.color === "secondary" ? "bg-secondary/20" : "bg-accent/20"}`}>
                    <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${category.color === "primary" ? "text-primary" : category.color === "secondary" ? "text-secondary" : "text-accent"}`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.events.map((event, i) => (
                    <div key={i} className="glass rounded-lg p-3 border border-primary/20">
                      <p className="font-semibold text-sm sm:text-base text-foreground">{event.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{event.description}</p>
                    </div>
                  ))}
                </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <div className="glass-strong rounded-2xl p-6 sm:p-8 neon-border-secondary animate-fade-in">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-glow-secondary">External Competitions</h3>
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">We actively participate in prestigious coding competitions:</p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {clubInfo.events.external.map((competition, index) => (
              <div
                key={index}
                className="glass rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 border border-secondary/30 hover:border-secondary transition-colors"
              >
                <span className="text-xs sm:text-sm font-medium">{competition}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Events.displayName = "Events";

export default Events;
