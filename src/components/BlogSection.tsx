import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";

const blogPosts = [
  {
    title: "2024 Cybersecurity Trends and Predictions",
    excerpt: "Stay ahead of emerging threats with our comprehensive guide to cybersecurity trends shaping the industry.",
    category: "Cybersecurity",
    author: "John Smith",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
  },
  {
    title: "Disaster Recovery Planning for Financial Services",
    excerpt: "How financial institutions can ensure business continuity with robust disaster recovery strategies.",
    category: "Business Continuity",
    author: "Sarah Johnson",
    date: "Jan 10, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
  },
  {
    title: "Unlocking the Power of Data With Power BI",
    excerpt: "Transform your business intelligence with Microsoft Power BI consulting services.",
    category: "Data Analytics",
    author: "Michael Chen",
    date: "Jan 5, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
  },
];

export const BlogSection = () => {
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
          <span className="inline-block px-4 py-1.5 bg-fn-green/10 text-fn-green text-sm font-semibold rounded-full mb-4 tracking-wide">
            INDUSTRY INSIGHTS
          </span>
          <h2 className="text-heading-xl font-bold text-slate-900 mb-4 font-display">
            FLUID NETWORKS' IT INDUSTRY BLOG
          </h2>
          <p className="text-lg text-slate-600">
            Topics and trends from the world of technology
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-soft hover:shadow-large transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category tag */}
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-fn-blue to-fn-cyan rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-fn-blue transition-colors font-display">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <span>{post.date}</span>
                </div>

                {/* Read More */}
                <a 
                  href="#" 
                  className="inline-flex items-center gap-1 mt-4 text-fn-blue font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Read More <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-6 py-3 text-fn-blue font-semibold border-2 border-fn-blue/20 rounded-xl hover:bg-fn-blue hover:text-white transition-all duration-300"
          >
            View All Insights <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
