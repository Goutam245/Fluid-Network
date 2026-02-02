import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Fluid Networks transformed our entire IT infrastructure. We've seen a 40% reduction in downtime and our team is more productive than ever.",
    author: "Sarah Johnson",
    title: "CTO",
    company: "TechStart Inc.",
    rating: 5,
  },
  {
    quote: "Their 24/7 support is incredible. Anytime we have an issue, they're on it immediately. Best IT partner we've ever worked with.",
    author: "Michael Chen",
    title: "Operations Director",
    company: "Global Logistics Co.",
    rating: 5,
  },
  {
    quote: "The Cloud Enabled Office solution helped us transition to remote work seamlessly. Our security has never been better.",
    author: "Emily Rodriguez",
    title: "CEO",
    company: "Creative Agency",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-fn-cyan/10 text-fn-cyan text-sm font-semibold rounded-full mb-4 tracking-wide">
            TESTIMONIALS
          </span>
          <h2 className="text-heading-xl font-bold text-slate-900 font-display">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-3xl p-8 md:p-12 shadow-medium border border-slate-100 relative">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 left-8">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fn-blue to-fn-cyan flex items-center justify-center shadow-lg">
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-6 pt-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8 font-medium">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-fn-cyan to-fn-green p-0.5">
                        <div className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{testimonial.author}</p>
                        <p className="text-sm text-slate-500">{testimonial.title}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-fn-blue w-8" 
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
