import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PartnersSection } from "@/components/PartnersSection";
import { FeatureCards } from "@/components/FeatureCards";
import { ServicesSection } from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BlogSection } from "@/components/BlogSection";
import { ThreatDashboard } from "@/components/ThreatDashboard";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { TransitionOverlay } from "@/components/TransitionOverlay";

const Index = () => {
  const [showTransition, setShowTransition] = useState(false);
  const [pageBlur, setPageBlur] = useState(0);
  const [pageOpacity, setPageOpacity] = useState(1);

  useEffect(() => {
    // Start transition after 2 seconds
    const timer = setTimeout(() => {
      setShowTransition(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showTransition) {
      // Animate blur and opacity over time
      let elapsed = 0;
      const interval = setInterval(() => {
        elapsed += 100;
        
        // Blur increases during transition
        if (elapsed < 8000) {
          setPageBlur(prev => Math.min(prev + 0.3, 25));
          setPageOpacity(prev => Math.max(prev - 0.015, 0.3));
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [showTransition]);

  const handleTransitionComplete = () => {
    // Fade to white then redirect
    setPageOpacity(0);
    setPageBlur(30);
    
    setTimeout(() => {
      window.location.href = 'https://complete.net';
    }, 1000);
  };

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Main Page Content */}
      <motion.div
        style={{
          filter: `blur(${pageBlur}px)`,
          opacity: pageOpacity,
          transition: 'filter 0.3s ease, opacity 0.3s ease',
        }}
      >
        <Navigation />
        <main>
          <HeroSection />
          <PartnersSection />
          <FeatureCards />
          <ServicesSection />
          <StatsSection />
          <BlogSection />
          <ThreatDashboard />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </motion.div>

      {/* Transition Overlay */}
      <TransitionOverlay 
        isActive={showTransition} 
        onComplete={handleTransitionComplete}
      />

      {/* Fade to white overlay for redirect */}
      <motion.div
        className="fixed inset-0 bg-white pointer-events-none z-[10000]"
        initial={{ opacity: 0 }}
        animate={{ opacity: pageOpacity < 0.4 ? 1 : 0 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default Index;
