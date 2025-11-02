import { clubInfo } from "@/data/content";
import { Mail, Instagram, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <footer id="contact" className="py-12 sm:py-16 md:py-20 relative border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="animate-fade-in text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-glow">CODE VIVEKS</h3>
            <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">{clubInfo.tagline}</p>
            <p className="text-xs sm:text-sm text-foreground/60">{clubInfo.institution}</p>
          </div>

          <div className="animate-fade-in text-center sm:text-left" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Teams", "Events", "Leadership", "Join"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm sm:text-base text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in text-center sm:text-left sm:col-span-2 lg:col-span-1" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-secondary">Connect With Us</h4>
            <div className="space-y-3 mb-4 sm:mb-6">
              <a
                href={`mailto:${clubInfo.contact.email}`}
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors justify-center sm:justify-start"
              >
                <Mail className="w-4 h-4" />
                <span className="text-xs sm:text-sm break-all">{clubInfo.contact.email}</span>
              </a>
            </div>

            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              <a
                href={clubInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 glass rounded-lg neon-border hover:scale-110 transition-transform"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </a>
              <a
                href={clubInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 glass rounded-lg neon-border hover:scale-110 transition-transform"
                aria-label="LinkedIn"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </a>
              <a
                href={clubInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 glass rounded-lg neon-border hover:scale-110 transition-transform"
                aria-label="GitHub"
                data-testid="link-github"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © 2025 CODE VIVEKS. All rights reserved. Built with passion by the Web Development Team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
