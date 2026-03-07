"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-6">About</p>
          <div className="text-muted-foreground leading-relaxed text-lg">
            <div className="float-right ml-8 mb-6 w-48">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/mike-profile.jpg"
                  alt="Mike Wu, founder of Artesia Bookkeeping"
                  width={192}
                  height={256}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="mt-3 text-center">
                <p className="font-display text-sm font-semibold text-foreground">Mike Wu</p>
                <p className="text-muted-foreground text-xs tracking-wide">Artesia Bookkeeping</p>
              </div>
            </div>
            <p className="mb-4">
              I started Artesia Bookkeeping to bring an owner's mindset to small business bookkeeping.
            </p>
            <p className="mb-4">
              I've been an owner-operator myself, and in the early days, I made the mistake of focusing solely on service delivery and sales while neglecting my numbers. Profit suffered.
            </p>
            <p className="mb-4">
              Once I invested in keeping my books current and accurate, I was able to make decisions founded in truth and the right business fundamentals. Profits scaled.
            </p>
            <p className="mb-4">
              Artesia Bookkeeping is based in Southern California and serves companies across the United States. We are QuickBooks Online specialists and promise business owners to keep their books with care, consistency, and excellent communication.
            </p>
            <p>
              I studied finance and accounting at the University of Southern California, received an MBA from Harvard Business School, and am a QuickBooks ProAdvisor.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
