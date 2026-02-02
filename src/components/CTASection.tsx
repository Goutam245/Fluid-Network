import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 animated-gradient-fn" />
      
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, white 1px, transparent 0)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-display font-bold text-white mb-4 font-display">
            Meet your new C.E.O.
          </h2>
          <p className="text-xl text-white/90 mb-4 font-medium">
            Cloud-enabled Office™ from Fluid Networks
          </p>
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Transform your business with enterprise-grade IT solutions designed 
            for the modern workplace.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-fn-blue font-bold px-10 py-6 rounded-xl text-lg shadow-xl hover:shadow-2xl group"
            >
              GET STARTED TODAY
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-white/60 text-sm">
            <span>✓ No Credit Card Required</span>
            <span>✓ Free Consultation</span>
            <span>✓ 24/7 Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
