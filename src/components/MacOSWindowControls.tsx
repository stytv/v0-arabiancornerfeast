import { motion } from "framer-motion";

interface MacOSWindowControlsProps {
  className?: string;
}

const MacOSWindowControls = ({ className = "" }: MacOSWindowControlsProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.div
        className="w-3 h-3 rounded-full bg-[#FF5F57] cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Close"
      />
      <motion.div
        className="w-3 h-3 rounded-full bg-[#FEBC2E] cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Minimize"
      />
      <motion.div
        className="w-3 h-3 rounded-full bg-[#28C840] cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Maximize"
      />
    </div>
  );
};

export default MacOSWindowControls;
