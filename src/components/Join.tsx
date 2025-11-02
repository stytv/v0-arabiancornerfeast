"use client";
import { clubInfo } from "@/data/content";
import { Calendar, CheckCircle2, FileText, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, memo, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Timeline = ({ data }: { data: { title: string; content: React.ReactNode }[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full">
      <div ref={ref} className="relative max-w-6xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-16 md:pt-32 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-primary/40 border border-primary/60 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-muted-foreground">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 font-bold text-muted-foreground">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Scroll line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] 
          bg-gradient-to-b from-transparent via-muted-foreground/20 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-secondary to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

const Join = memo(() => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Who can apply?",
      a: "All SVIT students from any branch can apply. We value passion and commitment over just grades.",
    },
    {
      q: "What's the time commitment?",
      a: "Minimum 75% attendance at club activities. Approximately 4-6 hours per week including events and practice.",
    },
    {
      q: "Can I join multiple teams?",
      a: "You'll be allocated to one primary team based on your interests and assessment, but can collaborate across teams.",
    },
  ];

  const icons = [FileText, Calendar, Users2, CheckCircle2];

  return (
    <section id="join" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-glow">
            Join CODE VIVEKS
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Your journey to tech excellence starts here
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 text-glow-secondary">
            Selection Process
          </h3>
          <Timeline
            data={clubInfo.selection.phases.map((phase, index) => {
              const IconComponent = icons[index % icons.length];
              return {
                title: phase.phase,
                content: (
                  <div
                    className="glass-strong rounded-2xl p-6 sm:p-8 neon-border hover:scale-[1.02] transition-transform"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                      <div className="p-3 rounded-full bg-primary/20 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm sm:text-base text-muted-foreground mb-2">
                          {phase.description}
                        </p>
                        <span className="text-xs sm:text-sm text-secondary font-semibold">
                          {phase.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                ),
              };
            })}
          />
        </div>

        {/* Apply Button */}
        <div className="glass-strong rounded-2xl p-6 sm:p-8 neon-border text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-glow">Ready to Apply?</h3>
          <Button
            size="lg"
            onClick={() => window.open(clubInfo.contact.googleForm, "_blank")}
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6 hover:scale-105 transition-transform w-full sm:w-auto"
          >
            Apply Now via Google Form
          </Button>
        </div>

        {/* Benefits & Eligibility */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="glass rounded-2xl p-6 neon-border-secondary">
            <h4 className="text-lg sm:text-xl font-bold mb-4 text-glow-secondary">
              Member Benefits
            </h4>
            <ul className="space-y-2">
              {clubInfo.selection.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-2xl p-6 neon-border">
            <h4 className="text-lg sm:text-xl font-bold mb-4 text-glow">
              Eligibility Criteria
            </h4>
            <ul className="space-y-2">
              {clubInfo.selection.eligibility.map((criterion, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground/80">{criterion}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <div className="glass-strong rounded-2xl p-6 sm:p-8 neon-border">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-glow">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass rounded-lg overflow-hidden border border-primary/20 cursor-pointer hover:border-primary/40 transition-colors"
                onClick={() => setFaqOpen(faqOpen === index ? null : index)}
              >
                <div className="p-4 flex items-center justify-between">
                  <h5 className="font-semibold text-sm sm:text-base">{faq.q}</h5>
                  {faqOpen === index ? (
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-primary/50 flex-shrink-0" />
                  )}
                </div>
                {faqOpen === index && (
                  <div className="px-4 pb-4 text-sm sm:text-base text-muted-foreground">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Join.displayName = "Join";
export default Join;
