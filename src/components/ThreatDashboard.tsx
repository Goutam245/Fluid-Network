import { motion } from "framer-motion";
import { AlertTriangle, Newspaper, ArrowRight, ExternalLink } from "lucide-react";

export const ThreatDashboard = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl">
          {/* Threat Dashboard Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 md:p-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white"
          >
            {/* Background pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 2px 2px, white 1px, transparent 0)
                `,
                backgroundSize: '24px 24px',
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold font-display">THREAT DASHBOARD</h3>
              </div>

              {/* Mock Dashboard */}
              <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-slate-400">Real-Time Threat Monitor</span>
                  <span className="flex items-center gap-1 text-xs text-green-400">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Live
                  </span>
                </div>
                
                {/* Mock stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-fn-cyan">847</div>
                    <div className="text-xs text-slate-400">Threats Blocked</div>
                  </div>
                  <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-fn-green">99.9%</div>
                    <div className="text-xs text-slate-400">Protection Rate</div>
                  </div>
                  <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400">3</div>
                    <div className="text-xs text-slate-400">Active Alerts</div>
                  </div>
                </div>

                {/* Mock chart bars */}
                <div className="flex items-end gap-2 h-20">
                  {[60, 45, 80, 55, 70, 90, 65, 75, 85, 50].map((height, i) => (
                    <div 
                      key={i}
                      className="flex-1 bg-gradient-to-t from-fn-blue to-fn-cyan rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-fn-blue text-white font-semibold rounded-xl hover:bg-fn-cyan transition-colors"
              >
                View Real-Time Threats <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Security News Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 bg-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-fn-green/10 flex items-center justify-center">
                <Newspaper className="w-6 h-6 text-fn-green" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">SECURITY NEWS</h3>
            </div>

            <div className="space-y-6">
              {/* News items */}
              {[
                {
                  title: "New Ransomware Variant Targets SMBs",
                  date: "2 hours ago",
                  severity: "high",
                },
                {
                  title: "Critical Windows Patch Released",
                  date: "5 hours ago",
                  severity: "medium",
                },
                {
                  title: "Phishing Campaign Alert: Financial Sector",
                  date: "1 day ago",
                  severity: "high",
                },
              ].map((news, i) => (
                <div key={i} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                  <div className={`w-2 h-2 mt-2 rounded-full ${
                    news.severity === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                  }`} />
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 group-hover:text-fn-blue transition-colors">
                      {news.title}
                    </h4>
                    <span className="text-sm text-slate-500">{news.date}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

            <a 
              href="#" 
              className="inline-flex items-center gap-2 mt-6 text-fn-blue font-semibold hover:text-fn-cyan transition-colors"
            >
              Read Latest News <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
