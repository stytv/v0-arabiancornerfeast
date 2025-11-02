import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TeamModalProps {
  team: {
    name: string;
    description: string;
    focus: string[];
    outcomes: string[];
  };
  onClose: () => void;
}

const TeamModal = ({ team, onClose }: TeamModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative glass-strong rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto neon-border shadow-2xl shadow-primary/20 animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-primary/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-3xl font-bold mb-2 text-glow">{team.name}</h3>
        <p className="text-muted-foreground mb-6">{team.description}</p>

        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-3 text-primary">Focus Areas</h4>
            <ul className="space-y-2">
              {team.focus.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-secondary mt-1">▸</span>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3 text-secondary">Target Outcomes</h4>
            <ul className="space-y-2">
              {team.outcomes.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Button
          onClick={onClose}
          className="w-full mt-6 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold"
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default TeamModal;
