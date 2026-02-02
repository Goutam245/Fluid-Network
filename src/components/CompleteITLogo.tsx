import { motion } from "framer-motion";

interface CompleteITLogoProps {
  className?: string;
  animate?: boolean;
}

export const CompleteITLogo = ({ className = "", animate = true }: CompleteITLogoProps) => {
  return (
    <motion.div 
      className={`flex items-center gap-3 ${className}`}
      initial={animate ? { opacity: 0, scale: 0.9 } : false}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Infinity Symbol */}
      <motion.div 
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <svg viewBox="0 0 64 32" className="w-16 h-8">
          <defs>
            <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#4F46E5" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 16 16 C 16 8 8 8 8 16 C 8 24 16 24 16 16 C 16 8 24 8 32 16 C 40 24 48 24 48 16 C 48 8 56 8 56 16 C 56 24 48 24 48 16 C 48 8 40 8 32 16 C 24 24 16 24 16 16"
            fill="none"
            stroke="url(#infinityGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-cit-indigo/20 blur-xl animate-pulse" />
      </motion.div>

      {/* Text */}
      <motion.div 
        className="flex flex-col"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <span className="text-2xl font-bold tracking-tight text-slate-800 font-display">
          complete
        </span>
        <span className="text-xs tracking-widest text-slate-500 uppercase">
          A trusted technology partner
        </span>
      </motion.div>
    </motion.div>
  );
};
