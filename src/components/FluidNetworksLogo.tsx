import { motion } from "framer-motion";

interface FluidNetworksLogoProps {
  className?: string;
  animate?: boolean;
}

export const FluidNetworksLogo = ({ className = "", animate = true }: FluidNetworksLogoProps) => {
  return (
    <motion.div 
      className={`flex items-center gap-2 ${className}`}
      initial={animate ? { opacity: 0, y: -10 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Power Button Symbol */}
      <motion.div 
        className="relative w-12 h-12"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Dotted circle */}
        <svg viewBox="0 0 48 48" className="w-full h-full">
          <defs>
            <linearGradient id="powerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D084" />
              <stop offset="100%" stopColor="#00A3E0" />
            </linearGradient>
          </defs>
          {/* Dotted arc */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const x = 24 + 18 * Math.cos(angle);
            const y = 24 + 18 * Math.sin(angle);
            return (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="2"
                fill="#00D084"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              />
            );
          })}
          {/* Power icon */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            {/* Vertical line */}
            <line 
              x1="24" y1="12" 
              x2="24" y2="22" 
              stroke="url(#powerGradient)" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
            {/* Arc */}
            <path 
              d="M 16 18 A 12 12 0 1 0 32 18" 
              fill="none" 
              stroke="url(#powerGradient)" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
          </motion.g>
        </svg>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-fn-green/20 rounded-full blur-xl animate-pulse" />
      </motion.div>

      {/* Text */}
      <div className="flex flex-col">
        <motion.div 
          className="flex items-baseline gap-1"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className="text-2xl font-bold tracking-tight text-fn-blue font-display">FLUID</span>
          <span className="text-2xl font-bold tracking-tight text-fn-green font-display">NETWORKS</span>
        </motion.div>
        <motion.span 
          className="text-[10px] tracking-[0.3em] text-slate-500 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          Power Over Ethernet
        </motion.span>
      </div>
    </motion.div>
  );
};
