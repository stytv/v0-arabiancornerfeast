import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Teams", href: "#teams" },
    { name: "Events", href: "#events" },
    { name: "Leadership", href: "#leadership" },
    { name: "Join", href: "#join" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-strong shadow-lg shadow-primary/10" : "glass"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <img src={logo} alt="CODE VIVEKS Logo" className="h-10 w-auto" />
          <a href="#" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-glow">CODE VIVEKS</div>
            <span className="hidden md:block text-sm text-muted-foreground">
              | Create. Build. Innovate.
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <Button
              onClick={() => window.open("https://forms.gle/hPaXQNf8nhrdas3M8", "_blank")}
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold px-6 animate-glow-pulse hover:scale-105 transition-transform"
            >
              Join CODE VIVEKS
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 glass-strong rounded-lg p-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground/80 hover:text-primary transition-colors text-left py-2"
                >
                  {link.name}
                </button>
              ))}
              <Button
                onClick={() => window.open("https://forms.gle/hPaXQNf8nhrdas3M8", "_blank")}
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold w-full"
              >
                Join CODE VIVEKS
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
