import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TrendingUp, DollarSign, Shield, Eye } from "lucide-react";
import { cn, toUpperCase } from "@/utils";

export const BenefitsGrid = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: TrendingUp,
      key: "experience",
      className: "from-accent/20 to-accent/5 hover:border-accent/30",
    },
    {
      icon: DollarSign,
      key: "finance",
      className: "from-success/20 to-success/5 hover:border-success/30",
    },
    {
      icon: Shield,
      key: "uefa",
      className: "from-primary/20 to-primary/5 hover:border-primary/30",
    },
    {
      icon: Eye,
      key: "talents",
      className: "from-secondary/20 to-secondary/5 hover:border-secondary/30",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">
            {toUpperCase(t("benefits.title"))}
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            {toUpperCase(t("benefits.subtitle"))}
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-1 w-16 bg-accent rounded-full" />
            <div className="h-1 w-8 bg-primary rounded-full" />
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div
                  className={cn(
                    "h-full rounded-3xl p-4 md:p-8 shadow-soft hover:shadow-hard transition-all duration-500 border relative overflow-hidden",
                    "border-border/50 hover:border-accent/30 bg-gradient-to-br",
                    benefit.className
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-hero rounded-2xl flex items-center justify-center duration-300 mb-4 md:mb-6">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>

                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                      {toUpperCase(t(`benefits.items.${benefit.key}.title`))}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {toUpperCase(
                        t(`benefits.items.${benefit.key}.description`)
                      )}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
