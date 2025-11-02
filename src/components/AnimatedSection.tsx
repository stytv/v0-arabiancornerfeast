import { motion, Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up";
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  direction = "up",
  delay = 0 
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.1);

  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0
    }
  };

  const rightVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0
    }
  };

  const upVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  const variantMap = {
    left: leftVariants,
    right: rightVariants,
    up: upVariants
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variantMap[direction]}
      transition={{ duration: direction === "up" ? 0.7 : 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
