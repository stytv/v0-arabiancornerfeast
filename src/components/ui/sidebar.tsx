"use client";

import React, { useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

/* ============================
   🎨 Neumorphic Sidebar Context
   ============================ */
interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) throw new Error("useSidebar must be used within SidebarProvider");
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);
  const open = openProp ?? openState;
  const setOpen = setOpenProp ?? setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

/* ============================
   💻 Main Sidebar Container
   ============================ */
export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => (
  <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
    {children}
  </SidebarProvider>
);

/* ============================
   🖥 Desktop Sidebar
   ============================ */
export const SidebarBody = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <>
    <DesktopSidebar className={className}>{children}</DesktopSidebar>
    <MobileSidebar className={className}>{children}</MobileSidebar>
  </>
);

export const DesktopSidebar = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const { open, setOpen, animate } = useSidebar();
  const hoverTimeout = React.useRef<NodeJS.Timeout>();

  return (
    <motion.div
      className={cn(
        "h-screen hidden lg:flex flex-col fixed top-0 left-0 z-50 border-r border-white/10 p-4",
        "bg-[hsl(var(--card))] backdrop-blur-xl",
        "shadow-[inset_2px_2px_6px_hsl(var(--shadow-light)),inset_-2px_-2px_6px_hsl(var(--shadow-dark))]",
        "rounded-r-3xl",
        className
      )}
      initial={{ x: -60, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        /* ----  NO width HERE  ---- */
      }}
      transition={{ duration: 0.22, ease: [0.25, 0.8, 0.25, 1] }}
      /* --------------  width set via CSS variable -------------- */
      style={{ width: animate ? (open ? 260 : 80) : 260 }}
      onMouseEnter={() => {
        clearTimeout(hoverTimeout.current);
        animate && setOpen(true);
      }}
      onMouseLeave={() => {
        hoverTimeout.current = setTimeout(() => animate && setOpen(false), 100);
      }}
    >
      {children}
    </motion.div>
  );
};


/* ============================
   📱 Mobile Top Bar
   ============================ */
export const MobileSidebar = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { setOpen } = useSidebar();

  // Ensure sidebar links are expanded in mobile
  React.useEffect(() => {
    setOpen(true);
  }, [setOpen]);

  return (
    <>
      {/* Top Navbar */}
      <div
        className={cn(
          "h-16 px-5 flex items-center justify-between lg:hidden fixed top-0 left-0 right-0 z-50",
          "bg-[hsl(var(--card))] backdrop-blur-xl border-b border-white/10",
          "shadow-[inset_2px_2px_6px_hsl(var(--shadow-light)),inset_-2px_-2px_6px_hsl(var(--shadow-dark))]"
        )}
      >
        <div className="text-xl font-bold text-glow">CODE VIVEKS</div>

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-[hsl(var(--card))] shadow-[inset_1px_1px_3px_hsl(var(--shadow-light)),inset_-1px_-1px_3px_hsl(var(--shadow-dark))]"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </motion.button>

          {/* Join Button */}
          <motion.a
            href="https://forms.gle/hPaXQNf8nhrdas3M8"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm shadow-[2px_2px_6px_hsl(var(--shadow-dark)),_-2px_-2px_6px_hsl(var(--shadow-light))]"
          >
            Join
          </motion.a>

          {/* Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-xl bg-[hsl(var(--card))] shadow-[inset_1px_1px_3px_hsl(var(--shadow-light)),inset_-1px_-1px_3px_hsl(var(--shadow-dark))]"
          >
            {menuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "fixed top-16 left-0 right-0 z-40 p-6 space-y-4",
              "bg-[hsl(var(--card))] backdrop-blur-2xl border-t border-white/10",
              "shadow-[4px_4px_10px_hsl(var(--shadow-dark)),_-4px_-4px_10px_hsl(var(--shadow-light))]"
            )}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ============================
   🔗 Sidebar Link (Neumorphic)
   ============================ */
export const SidebarLink = ({
  link,
  className,
}: {
  link: Links;
  className?: string;
}) => {
  const { open, animate } = useSidebar();

  return (
    <motion.a
      href={link.href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.18, ease: [0.25, 0.8, 0.25, 1] }}
      className={cn(
        "flex items-center gap-3 py-3 px-4 rounded-xl cursor-pointer transition-all duration-200",
        "bg-[hsl(var(--card))] text-foreground hover:shadow-[3px_3px_8px_hsl(var(--shadow-dark)),_-3px_-3px_8px_hsl(var(--shadow-light))]",
        "active:shadow-[inset_3px_3px_8px_hsl(var(--shadow-dark)),inset_-3px_-3px_8px_hsl(var(--shadow-light))]",
        className
      )}
    >
      <motion.div whileHover={{ rotate: 2 }} transition={{ duration: 0.12 }}>
        {link.icon}
      </motion.div>

      {/* --------------  text slides & fades -------------- */}
      <motion.span
        initial={false}
        animate={{
          opacity: animate ? (open ? 1 : 0) : 1,
          x: animate ? (open ? 0 : -14) : 0,
        }}
        transition={{ duration: 0.18, ease: [0.25, 0.8, 0.25, 1] }}
        className="text-sm font-medium whitespace-nowrap overflow-hidden"
      >
        {link.label}
      </motion.span>
    </motion.a>
  );
};
