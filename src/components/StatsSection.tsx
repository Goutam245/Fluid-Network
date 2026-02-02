import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Building, Clock, TrendingUp, Award } from "lucide-react";

const stats = [
  { icon: Building, value: 500, suffix: "+", label: "Businesses Served" },
  { icon: Clock, value: 24, suffix: "/7", label: "Support Available" },
  { icon: TrendingUp, value: 99.9, suffix: "%", label: "Uptime Guarantee" },
  { icon: Award, value: 15, suffix: "+", label: "Years Experience" },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const start = Date.now();
          
          const animateValue = () => {
            const now = Date.now();
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(value * eased);
            
            if (progress < 1) {
              requestAnimationFrame(animateValue);
            } else {
              setDisplayValue(value);
            }
          };
          
          animateValue();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="gradient-text-fn">
      {value % 1 === 0 ? Math.round(displayValue) : displayValue.toFixed(1)}
      {suffix}
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-fn-blue/20 via-fn-cyan/10 to-fn-green/20" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 50%, rgba(0, 163, 224, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 70% 50%, rgba(0, 208, 132, 0.3) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
                <stat.icon className="w-8 h-8 text-fn-cyan" />
              </div>

              {/* Number */}
              <div className="text-4xl md:text-5xl font-bold mb-2 font-display">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className="text-white/70 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
