import { useState, useEffect, useId, useRef } from "react";
import { clubInfo } from "@/data/content";
import * as Icons from "lucide-react";
import { X } from "lucide-react";
import { useOutsideClick } from "@/hooks/use-outside-click";

const Teams = () => {
  const [active, setActive] = useState<typeof clubInfo.teams[0] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    if (active) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Modal Backdrop */}
      {active && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[90]" />
      )}

      {/* Modal Content */}
      {active && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <button
            onClick={() => setActive(null)}
            className="absolute top-4 right-4 z-[110] flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 rounded-full h-10 w-10 transition-transform hover:scale-110"
          >
            <X className="h-5 w-5 text-white" />
          </button>

          <div
            ref={ref}
            className="relative w-full max-w-[600px] max-h-[85vh] overflow-y-auto glass-strong neon-border rounded-3xl shadow-2xl scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
          >
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div
                  className={`p-4 rounded-lg neon-border ${
                    active.color === "primary"
                      ? "bg-primary/20"
                      : active.color === "secondary"
                      ? "bg-secondary/20"
                      : "bg-accent/20"
                  }`}
                >
                  {(() => {
                    const IconComponent =
                      Icons[active.icon as keyof typeof Icons] as React.ComponentType<{
                        className?: string;
                      }>;
                    return (
                      <IconComponent
                        className={`w-8 h-8 ${
                          active.color === "primary"
                            ? "text-primary"
                            : active.color === "secondary"
                            ? "text-secondary"
                            : "text-accent"
                        }`}
                      />
                    );
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-glow">{active.name}</h3>
                  <p className="text-muted-foreground">{active.description}</p>
                </div>
              </div>

              {/* Focus Areas */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">
                  Key Focus Areas
                </h4>
                <ul className="space-y-2">
                  {active.focus.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground/80">
                      <span className="text-primary mt-0.5">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div>
                <h4 className="text-lg font-semibold text-secondary mb-3">
                  Target Outcomes
                </h4>
                <ul className="space-y-2">
                  {active.outcomes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground/80">
                      <span className="text-secondary mt-0.5">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Teams Section */}
      <section id="teams" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
              Our Teams
            </h2>
            <p className="text-muted-foreground text-lg">
              Specialized teams for every tech domain
            </p>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubInfo.teams.map((team) => {
              const IconComponent =
                Icons[team.icon as keyof typeof Icons] as React.ComponentType<{
                  className?: string;
                }>;

              return (
                <li
                  key={team.id}
                  onClick={() => setActive(team)}
                  className="glass-strong rounded-2xl p-6 neon-border hover-lift hover-glow cursor-pointer group list-none transition-transform hover:scale-105"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`p-3 rounded-lg ${
                        team.color === "primary"
                          ? "bg-primary/20"
                          : team.color === "secondary"
                          ? "bg-secondary/20"
                          : "bg-accent/20"
                      }`}
                    >
                      <IconComponent
                        className={`w-6 h-6 ${
                          team.color === "primary"
                            ? "text-primary"
                            : team.color === "secondary"
                            ? "text-secondary"
                            : "text-accent"
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-bold">{team.name}</h3>
                  </div>

                  <p className="text-foreground/70 mb-4">{team.description}</p>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-muted-foreground">
                      Key Focus:
                    </p>
                    <ul className="space-y-1">
                      {team.focus.slice(0, 2).map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-foreground/60 flex items-start gap-2"
                        >
                          <span className="text-primary mt-0.5">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 text-sm text-primary group-hover:text-secondary transition-colors font-semibold flex items-center gap-1">
                    Learn More
                    <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Teams;
