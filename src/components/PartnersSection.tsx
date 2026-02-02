import { motion } from "framer-motion";

const partners = [
  { name: "Microsoft", logo: "M" },
  { name: "Dell", logo: "DELL" },
  { name: "Cisco", logo: "CISCO" },
  { name: "VMware", logo: "VM" },
  { name: "AWS", logo: "AWS" },
  { name: "Google Cloud", logo: "GCP" },
];

export const PartnersSection = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-sm text-slate-500 uppercase tracking-widest font-medium">
            Trusted By Leading Organizations
          </p>
        </motion.div>

        {/* Infinite scroll marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-[scroll_30s_linear_infinite] gap-16">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
              >
                <div className="text-2xl font-bold text-slate-400 hover:text-fn-blue transition-colors font-display">
                  {partner.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};
