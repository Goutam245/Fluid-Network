import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FluidNetworksLogo } from "./FluidNetworksLogo";
import { CompleteITLogo } from "./CompleteITLogo";
import { CheckCircle } from "lucide-react";

interface TransitionOverlayProps {
  isActive: boolean;
  onComplete: () => void;
}

const TRANSITION_DURATION = 15000; // 15 seconds total

const statusMessages = [
  { time: 0, message: "Preparing your new experience..." },
  { time: 5000, message: "Transforming the interface..." },
  { time: 10000, message: "Almost ready..." },
  { time: 13000, message: "Redirecting to Complete IT..." },
];

export const TransitionOverlay = ({ isActive, onComplete }: TransitionOverlayProps) => {
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState(statusMessages[0].message);
  const [showLogo, setShowLogo] = useState<'fluid' | 'transitioning' | 'complete'>('fluid');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const startTime = Date.now();
    let animationFrame: number;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / TRANSITION_DURATION) * 100, 100);
      setProgress(newProgress);

      // Update status message
      const currentStatus = [...statusMessages].reverse().find(s => elapsed >= s.time);
      if (currentStatus) {
        setStatusMessage(currentStatus.message);
      }

      // Update logo state
      if (elapsed < 4000) {
        setShowLogo('fluid');
      } else if (elapsed < 9000) {
        setShowLogo('transitioning');
      } else {
        setShowLogo('complete');
      }

      if (elapsed < TRANSITION_DURATION) {
        animationFrame = requestAnimationFrame(updateProgress);
      } else {
        setIsComplete(true);
        setTimeout(() => {
          onComplete();
        }, 1500);
      }
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isActive, onComplete]);

  const circumference = 2 * Math.PI * 60;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Calculate color interpolation for background
  const getGradientStyle = () => {
    const t = progress / 100;
    if (t < 0.4) {
      return 'linear-gradient(-45deg, #0066CC, #00A3E0, #00D084, #00A3E0)';
    } else if (t < 0.7) {
      const blend = (t - 0.4) / 0.3;
      return `linear-gradient(-45deg, 
        color-mix(in srgb, #0066CC ${100 - blend * 100}%, #4F46E5), 
        color-mix(in srgb, #00A3E0 ${100 - blend * 100}%, #7C3AED), 
        color-mix(in srgb, #00D084 ${100 - blend * 100}%, #EC4899), 
        color-mix(in srgb, #00A3E0 ${100 - blend * 100}%, #7C3AED)
      )`;
    }
    return 'linear-gradient(-45deg, #4F46E5, #7C3AED, #EC4899, #7C3AED)';
  };

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: progress < 40 
                ? 'linear-gradient(-45deg, #0066CC, #00A3E0, #00D084, #00A3E0)'
                : progress < 70 
                  ? 'linear-gradient(-45deg, #2855B8, #4E6FD6, #5CA890, #4E6FD6)'
                  : 'linear-gradient(-45deg, #4F46E5, #7C3AED, #EC4899, #7C3AED)',
              backgroundSize: '400% 400%',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 15,
              ease: 'linear',
              repeat: Infinity,
            }}
          />

          {/* Particle effects */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 6 + 2,
                  height: Math.random() * 6 + 2,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`,
                }}
                animate={{
                  y: [0, -100, 0],
                  x: [0, Math.random() * 50 - 25, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Glassmorphism card */}
          <motion.div
            className="relative w-[90%] max-w-lg p-8 md:p-12 rounded-3xl overflow-hidden"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: 'spring', 
              stiffness: 300, 
              damping: 25,
              delay: 0.3 
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(40px) saturate(180%)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25), inset 0 0 60px rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Shimmer effect */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 2s infinite',
              }}
            />

            {/* Rotating gradient border */}
            <div 
              className="absolute -inset-[2px] rounded-3xl opacity-50"
              style={{
                background: progress < 50 
                  ? 'conic-gradient(from 0deg, #0066CC, #00A3E0, #00D084, #00A3E0, #0066CC)'
                  : 'conic-gradient(from 0deg, #4F46E5, #7C3AED, #EC4899, #7C3AED, #4F46E5)',
                animation: 'rotate 4s linear infinite',
                zIndex: -1,
              }}
            />

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Logo transition */}
              <div className="mb-8 h-20 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {showLogo === 'fluid' && (
                    <motion.div
                      key="fluid"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5, rotate: 180, filter: 'blur(10px)' }}
                      transition={{ duration: 0.6 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-fn-green to-fn-cyan flex items-center justify-center shadow-lg">
                        <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="12" y1="5" x2="12" y2="11" strokeLinecap="round" />
                          <path d="M8 9 A 6 6 0 1 0 16 9" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <div className="text-xl font-bold text-white font-display">FLUID NETWORKS</div>
                        <div className="text-xs text-white/60 tracking-wider">POWER OVER ETHERNET</div>
                      </div>
                    </motion.div>
                  )}
                  
                  {showLogo === 'transitioning' && (
                    <motion.div
                      key="transitioning"
                      initial={{ opacity: 0, scale: 1.5 }}
                      animate={{ 
                        opacity: [0, 1, 1, 0],
                        scale: [1.5, 1, 1, 0.5],
                        rotate: [0, 180, 360, 540],
                      }}
                      transition={{ duration: 5, ease: 'easeInOut' }}
                      className="w-16 h-16 rounded-full"
                      style={{
                        background: 'conic-gradient(from 0deg, #0066CC, #00A3E0, #00D084, #4F46E5, #7C3AED, #EC4899)',
                        animation: 'rotate 1s linear infinite',
                      }}
                    />
                  )}
                  
                  {showLogo === 'complete' && (
                    <motion.div
                      key="complete"
                      initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="flex items-center gap-3"
                    >
                      <svg viewBox="0 0 64 32" className="w-16 h-8">
                        <defs>
                          <linearGradient id="overlayInfinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#4F46E5" />
                            <stop offset="50%" stopColor="#7C3AED" />
                            <stop offset="100%" stopColor="#EC4899" />
                          </linearGradient>
                        </defs>
                        <motion.path
                          d="M 16 16 C 16 8 8 8 8 16 C 8 24 16 24 16 16 C 16 8 24 8 32 16 C 40 24 48 24 48 16 C 48 8 56 8 56 16 C 56 24 48 24 48 16 C 48 8 40 8 32 16 C 24 24 16 24 16 16"
                          fill="none"
                          stroke="url(#overlayInfinityGradient)"
                          strokeWidth="4"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, ease: 'easeInOut' }}
                        />
                      </svg>
                      <div className="text-left">
                        <div className="text-xl font-bold text-white font-display">complete</div>
                        <div className="text-xs text-white/60 tracking-wider">A trusted technology partner</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Main message */}
              <motion.h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 font-display leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                style={{
                  textShadow: '0 2px 30px rgba(0, 0, 0, 0.3)',
                }}
              >
                <span className="bg-gradient-to-r from-white via-white/90 to-white bg-clip-text">
                  Fluid Networks is becoming your
                </span>
                <br />
                <span 
                  className="inline-block mt-2"
                  style={{
                    background: progress < 50 
                      ? 'linear-gradient(90deg, #00A3E0, #00D084)'
                      : 'linear-gradient(90deg, #7C3AED, #EC4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Complete IT provider!
                </span>
              </motion.h2>

              {/* Subtext */}
              <motion.p
                className="text-white/80 text-lg mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                Elevating your technology partnership to new heights
              </motion.p>

              {/* Progress Ring */}
              <motion.div
                className="relative w-32 h-32 mx-auto mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 140 140">
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      {progress < 50 ? (
                        <>
                          <stop offset="0%" stopColor="#00A3E0" />
                          <stop offset="100%" stopColor="#00D084" />
                        </>
                      ) : (
                        <>
                          <stop offset="0%" stopColor="#4F46E5" />
                          <stop offset="50%" stopColor="#7C3AED" />
                          <stop offset="100%" stopColor="#EC4899" />
                        </>
                      )}
                    </linearGradient>
                  </defs>
                  {/* Background circle */}
                  <circle
                    cx="70"
                    cy="70"
                    r="60"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth="4"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="70"
                    cy="70"
                    r="60"
                    fill="none"
                    stroke="url(#progressGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    style={{
                      filter: 'drop-shadow(0 0 10px currentColor)',
                      transition: 'stroke-dashoffset 0.1s ease-out',
                    }}
                  />
                </svg>
                
                {/* Percentage */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {!isComplete ? (
                      <motion.span
                        key="progress"
                        className="text-3xl font-bold text-white font-display"
                      >
                        {Math.round(progress)}%
                      </motion.span>
                    ) : (
                      <motion.div
                        key="check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <CheckCircle className="w-12 h-12 text-green-400" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Status message */}
              <motion.p
                className="text-white/60 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                {statusMessage}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
