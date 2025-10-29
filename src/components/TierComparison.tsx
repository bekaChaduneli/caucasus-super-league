import { motion } from "framer-motion";
import { Trophy, TrendingUp, Award, Target } from "lucide-react";
import { Button } from "./ui/button";
import { cn, toUpperCase } from "@/utils";
import { useTranslation } from "react-i18next";

interface TierComparisonProps {
  onOpenModal: (title: string, content: string) => void;
}

const StatHeader: React.FC<{
  icon: React.ReactNode;
  count: string | number;
  title: string;
  subtitle: string;
  tone?: "accent" | "secondary";
}> = ({ icon, count, title, subtitle, tone }) => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <div
          className={cn(
            "flex items-center justify-center rounded-2xl",
            "p-2 md:p-3",
            "w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16",
            tone === "accent" ? "bg-gradient-accent" : "bg-secondary"
          )}
          aria-hidden
        >
          <div className="flex items-center justify-center">{icon}</div>
        </div>
        <div
          className={cn(
            "bg-gradient-accent leading-[100%] text-[20px] rounded-full flex items-center justify-center font-display font-bold md:text-2xl w-10 h-10 md:w-14 md:h-14 text-accent-foreground",
            tone === "accent"
              ? "bg-gradient-accent"
              : "bg-secondary text-secondary-foreground"
          )}
        >
          {count}
        </div>
      </div>
      <h3 className="font-display text-[22px] md:text-[26px] lg:text-[28px] font-bold text-foreground mb-2">
        {" "}
        {title}
      </h3>
      <p className="text-[17px] md:text-lg font-semibold text-accent">
        {subtitle}
      </p>
    </div>
  );
};

const RewardRow: React.FC<{
  icon: React.ReactNode;
  title: string;
  desc: string;
  tone?: "accent" | "secondary";
}> = ({ icon, title, desc, tone = "accent" }) => {
  return (
    <div
      className={cn(
        "flex items-start gap-3 p-3 md:p-4 rounded-xl",
        tone === "accent"
          ? "bg-accent/10 border border-accent/20"
          : "bg-secondary/10 border border-secondary/20"
      )}
    >
      <div
        className={cn(
          "flex-shrink-0 rounded-lg flex items-center justify-center"
        )}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-bold text-sm md:text-base text-foreground">
          {title}
        </div>
        <div className="text-sm text-muted-foreground mt-1">{desc}</div>
      </div>
    </div>
  );
};

export const TierComparison = ({ onOpenModal }: TierComparisonProps) => {
  const { t } = useTranslation();

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
            {toUpperCase(t("tier.title"))}
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            {t("tier.subtitle")}
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-1 w-16 bg-accent rounded-full" />
            <div className="h-1 w-8 bg-primary rounded-full" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="h-full bg-gradient-to-br from-card to-muted/30 rounded-3xl p-4 sm:p-8 md:p-10 shadow-medium hover:shadow-hard transition-all duration-500 border-2 border-transparent hover:border-accent/30 relative ">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="mb-6">
                  <StatHeader
                    icon={
                      <Trophy className="w-6 h-6 md:w-7 md:h-7 text-accent-foreground" />
                    }
                    count={t("tier.champ.count")}
                    tone="accent"
                    title={toUpperCase(t("tier.champ.title"))}
                    subtitle={toUpperCase(t("tier.champ.subtitle"))}
                  />
                </div>

                <p className="text-[14px] md:text-[16px] text-muted-foreground leading-relaxed mb-6">
                  {t("tier.champ.description")}
                </p>

                <div className="space-y-3 mb-6">
                  <RewardRow
                    icon={<Award className="w-5 h-5 text-accent" />}
                    title={t("tier.champ.reward1.title")}
                    desc={t("tier.champ.reward1.desc")}
                    tone="accent"
                  />
                  <RewardRow
                    icon={<Target className="w-5 h-5 text-accent" />}
                    title={t("tier.champ.reward2.title")}
                    desc={t("tier.champ.reward2.desc")}
                    tone="accent"
                  />
                </div>

                <Button
                  onClick={() =>
                    onOpenModal(
                      t("tier.champ.modalTitle"),
                      t("tier.champ.modalContent")
                    )
                  }
                  variant="default"
                  className={cn("w-full md:w-auto text-sm md:text-base")}
                >
                  {t("tier.champ.cta")}
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="group "
          >
            <div className="h-full bg-gradient-to-br from-card to-muted/30 rounded-3xl p-4 sm:p-8 md:p-10 shadow-medium hover:shadow-hard transition-all duration-500 border-2 border-transparent hover:border-secondary/30 relative ">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="mb-6">
                  <StatHeader
                    icon={
                      <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-secondary-foreground" />
                    }
                    count={t("tier.dev.count")}
                    title={toUpperCase(t("tier.dev.title"))}
                    tone="secondary"
                    subtitle={t("tier.dev.subtitle")}
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t("tier.dev.description")}
                </p>

                <div className="space-y-3 mb-6">
                  <RewardRow
                    icon={<Award className="w-5 h-5 text-secondary" />}
                    title={t("tier.dev.reward1.title")}
                    desc={t("tier.dev.reward1.desc")}
                    tone="secondary"
                  />
                  <RewardRow
                    icon={<Target className="w-5 h-5 text-secondary" />}
                    title={t("tier.dev.reward2.title")}
                    desc={t("tier.dev.reward2.desc")}
                    tone="secondary"
                  />
                </div>
                <Button
                  onClick={() =>
                    onOpenModal(
                      t("tier.dev.modalTitle"),
                      t("tier.dev.modalContent")
                    )
                  }
                  variant="secondary"
                  className={cn("w-full md:w-auto text-sm md:text-base")}
                >
                  {t("tier.dev.cta")}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
