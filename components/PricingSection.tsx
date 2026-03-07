"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essential",
    price: "$300",
    period: "/month",
    description: "For solopreneurs, freelancers and small businesses getting started.",
    features: [
      "Categorization of all revenue and expense transactions",
      "Bank & Credit Card Reconciliation",
      "Financial reports sent to you",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$500",
    period: "/month",
    description: "For growing businesses that need more hands-on support.",
    features: [
      "Everything included in Essential",
      "Accounts receivable and payable tracking",
      "Notes and analysis on monthly financial performance",
    ],
    highlighted: true,
  },
  {
    name: "Growth",
    price: "$700",
    period: "/month",
    description: "For established businesses needing a full-service partner.",
    features: [
      "Everything included in Professional",
      "Financial analysis and insights",
      "Monthly business consultation based on your needs",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            No hidden fees. No long-term contracts. Just honest bookkeeping at a fair price.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-gradient-olive text-primary-foreground shadow-2xl shadow-primary/20 scale-105"
                  : "bg-background border border-border"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ts-red-light text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-2xl mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
              <div className="mb-8">
                <p className={`text-xs mb-1 ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>starting at</p>
                <span className="text-4xl font-bold font-body">{plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                    <span className={plan.highlighted ? "text-primary-foreground/90" : "text-foreground"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`inline-flex items-center justify-center py-3 rounded-lg font-semibold text-sm transition-all ${
                  plan.highlighted
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
