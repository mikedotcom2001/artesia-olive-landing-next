"use client";

import { motion } from "framer-motion";
import { BookOpen, Calculator, FileText, PieChart, Receipt, Shield } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Transaction Categorization",
    description: "Maintain current and accurate financial records with systematic categorization of expenses, income, and other transactions",
  },
  {
    icon: Receipt,
    title: "Bank & Credit Card Reconciliation",
    description: "Match every transaction to your bank and credit card statements to ensure accuracy and up-to-date books",
  },
  {
    icon: PieChart,
    title: "Financial Reporting",
    description: "Make smarter business decisions with accurate profit and loss statements and balance sheets",
  },
  {
    icon: Calculator,
    title: "Accounts Receivable and Payable",
    description: "Stay on top of what you're owed and your funds available to make payments",
  },
  {
    icon: FileText,
    title: "Financial Analysis and Insights",
    description: "Track KPIs, budgeting, forecasting, and regular insights based on historical performance",
  },
  {
    icon: Shield,
    title: "Catch-Up Bookkeeping",
    description: "Rebuild months or years of records to get your books back on track",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
            Bookkeeping built for small business
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From day-to-day bookkeeping to financial reporting, we handle the numbers so you can handle your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gradient-olive group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
