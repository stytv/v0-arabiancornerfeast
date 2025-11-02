"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import logo from "@/assets/logo.png";

export default function Preloader({ onFinish }: { onFinish: () => void }) {
  const { theme } = useTheme();

  useEffect(() => {
    const timeout = setTimeout(() => {
      onFinish();
    }, 2500); // 2.5s cinematic load
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <motion.div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#101010]"
          : "bg-gradient-to-br from-[#f5f5f5] via-[#eaeaea] to-[#e0e0e0]"
      }`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.8, ease: "easeInOut" }}
    >
      {/* Floating particles shimmer effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[200%] h-[200%] animate-pulse-slow bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
      </div>

      {/* Glowing ring backdrop */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-primary/20 to-transparent blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      {/* Logo reveal */}
      <motion.img
        src={logo}
        alt="CODE VIVEKS"
        className="relative z-10 h-20 sm:h-24 w-auto drop-shadow-glow"
        initial={{ opacity: 0, scale: 0.85, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Pulsing glow effect */}
      <motion.div
        className="absolute z-0 w-48 h-48 rounded-full bg-primary/30 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Text reveal */}
      <motion.span
        className="relative z-10 mt-6 text-lg sm:text-xl font-semibold tracking-wide bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        CODE VIVEKS — Initializing Experience...
      </motion.span>

      {/* Subtle fade shimmer on bottom */}
      <div
        className={`absolute bottom-0 h-1/3 w-full ${
          theme === "dark"
            ? "bg-gradient-to-t from-black/60 to-transparent"
            : "bg-gradient-to-t from-white/60 to-transparent"
        }`}
      />
    </motion.div>
  );
}

/* ✨ Tailwind custom animation (add in globals.css or tailwind.css)
---------------------------------------------------------------
@keyframes pulse-slow {
  0%, 100% { transform: translate(-25%, -25%) scale(1); opacity: 0.3; }
  50% { transform: translate(-20%, -20%) scale(1.2); opacity: 0.5; }
}
.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}
.drop-shadow-glow {
  filter: drop-shadow(0 0 15px rgba(100, 180, 255, 0.4));
}
---------------------------------------------------------------
*/
