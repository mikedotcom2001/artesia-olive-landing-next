"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-ts-red-light/10 text-ts-red-light px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <TrendingUp className="w-4 h-4" />
            Bookkeeping that grows with you
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display text-foreground leading-tight mb-6"
          >
            Your numbers,{" "}
            <span className="text-gradient">handled.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed font-body"
          >
            Artesia Bookkeeping gives small business owners clarity, confidence,
            and more time to focus on what matters — running your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-olive text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              Book a Free Consultation <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary/20 text-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/5 transition-colors"
            >
              See Our Services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-primary/5 rounded-l-[80px] -z-10 hidden lg:block" />
    </section>
  );
};

export default HeroSection;
