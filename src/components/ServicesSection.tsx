import { motion } from "framer-motion";
import { Monitor, Shield, Cloud, MessageCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "MANAGED IT SERVICES",
    description: "Complete IT management with 24/7 monitoring, maintenance, and support.",
    color: "fn-blue",
  },
  {
    icon: Shield,
    title: "CYBER SECURITY",
    description: "Enterprise-grade security solutions to protect your business assets.",
    color: "fn-cyan",
  },
  {
    icon: Cloud,
    title: "CLOUD BACKUPS",
    description: "Automated backup solutions with instant disaster recovery capabilities.",
    color: "fn-green",
  },
  {
    icon: MessageCircle,
    title: "BUSINESS COMMUNICATIONS",
    description: "Unified communications for seamless team collaboration anywhere.",
    color: "fn-blue",
  },
];

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading-xl font-bold mb-4 font-display">
            <span className="gradient-text-fn">FLUID NETWORKS</span>{" "}
            <span className="text-slate-900">SOLVES PROBLEMS THROUGH IT</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Cloud Enabled Office™ built on an ecosystem blend of best-in-class solutions, 
            designed to propel your business forward.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center p-8 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-100 hover:border-fn-blue/30 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              {/* Icon Container */}
              <div className="relative mb-6 inline-block">
                <div className={`w-20 h-20 rounded-2xl bg-${service.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-10 h-10 text-${service.color}`} />
                </div>
                {/* Glow on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-${service.color}/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-slate-900 mb-3 font-display">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Link */}
              <a 
                href="#" 
                className="inline-flex items-center gap-1 text-fn-blue font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Learn More <ArrowRight className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
