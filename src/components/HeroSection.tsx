import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  const words = ["DATA", "LOSS", "DESTROYS", "BUSINESSES"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animated-gradient-fn" />
      
      {/* Mesh overlay */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(0, 163, 224, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(0, 208, 132, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(0, 102, 204, 0.3) 0%, transparent 70%)
            `,
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium tracking-widest uppercase border border-white/20">
            Enterprise IT Solutions
          </span>
        </motion.div>

        {/* Main Headline */}
        <h1 className="mb-6">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {words.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-display-xl font-extrabold text-white font-display drop-shadow-lg"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Run your IT better. Monitor it. Utilize QR (vCIO) tools and Disaster Recovery 
          service will keep you up and running.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="bg-white text-fn-blue font-bold px-8 py-6 rounded-xl text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
          >
            <Play className="w-5 h-5 mr-2" />
            REQUEST DEMO
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="btn-secondary text-lg group"
          >
            Learn More
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-fn-green animate-pulse" />
            99.9% Uptime
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-fn-cyan animate-pulse" />
            24/7 Support
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
            SOC2 Compliant
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};
