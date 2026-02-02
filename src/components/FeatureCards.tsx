import { motion } from "framer-motion";
import { Cloud, TrendingUp, DollarSign, Zap, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "MODERNIZING IT",
    description: "Organizations who move to cloud technology see better IT results with accessibility, cost savings, & scalability.",
    gradient: "from-fn-blue to-fn-cyan",
  },
  {
    icon: DollarSign,
    title: "LOW UPFRONT CAPITAL",
    description: "The subscription-based pricing helps you save more efficiently, while capital expenditure transforms to operational costs.",
    gradient: "from-fn-cyan to-fn-green",
  },
  {
    icon: TrendingUp,
    title: "SCALABLE COSTS",
    description: "The cloud is the most efficient model for the modern workplace. Add or reduce IT costs on-demand based on your business needs.",
    gradient: "from-fn-green to-fn-blue",
  },
  {
    icon: Zap,
    title: "RAPID DEPLOYMENT",
    description: "Get up and running quickly with our streamlined implementation process. Minimal disruption, maximum efficiency.",
    gradient: "from-fn-blue to-fn-green",
  },
];

export const FeatureCards = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-fn-ice to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-fn-blue/10 text-fn-blue text-sm font-semibold rounded-full mb-4 tracking-wide">
            OUR SOLUTIONS
          </span>
          <h2 className="text-display font-bold text-slate-900 mb-4 font-display">
            CLOUD ENABLED OFFICE™
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Run Tomorrow's Innovations today with our comprehensive cloud solutions
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 shadow-soft border border-slate-100 card-hover overflow-hidden"
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className={`absolute -inset-full bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ 
                  maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  padding: '2px',
                  animation: 'rotate 4s linear infinite',
                }} />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Link */}
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-fn-blue font-semibold group-hover:text-fn-cyan transition-colors"
                >
                  LEARN MORE
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
