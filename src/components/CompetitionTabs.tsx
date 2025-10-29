import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Globe, CheckCircle2, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn, toUpperCase } from "@/utils";

const regionalKeys = [
  "regional.feature1",
  "regional.feature2",
  "regional.feature3",
];
const internationalKeys = [
  "international.feature1",
  "international.feature2",
  "international.feature3",
];

const FeatureCard: React.FC<{
  title: string;
  desc: string;
  icon: React.ReactNode;
  delay?: number;
  tone?: "success" | "primary";
}> = ({ title, desc, icon, delay = 0, tone = "success" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: tone === "success" ? -16 : 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className={cn(
        "flex flex-col sm:flex-row gap-4 p-4 bg-muted/50 rounded-2xl hover:shadow-md border border-transparent",
        tone === "success"
          ? "hover:border-emerald-200"
          : "hover:border-primary/10"
      )}
    >
      <div
        className={cn(
          "flex-shrink-0 rounded-lg w-12 h-12 md:w-14 md:h-14 flex items-center justify-center",
          tone === "success" ? "bg-success/10" : "bg-primary/10"
        )}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-display font-bold text-base md:text-lg text-foreground mb-1 truncate">
          {title}
        </h4>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed break-words">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

export const CompetitionTabs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">
            {toUpperCase(t("competition.title"))}
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            {toUpperCase(t("competition.subtitle"))}
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-1 w-16 bg-accent rounded-full" />
            <div className="h-1 w-8 bg-primary rounded-full" />
          </div>
        </motion.div>

        <div className="hidden md:block">
          <Tabs defaultValue="regional" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 gap-3 h-auto p-2 bg-card shadow-medium rounded-2xl mb-12">
              <TabsTrigger
                value="regional"
                className="data-[state=active]:bg-gradient-hero data-[state=active]:text-white rounded-xl p-3 lg:p-4 font-display font-semibold text-lg min-h-[64px]"
              >
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>{toUpperCase(t("competition.phaseI"))}</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="international"
                className="data-[state=active]:bg-gradient-hero data-[state=active]:text-white rounded-xl p-3 lg:p-4 font-display font-semibold text-lg min-h-[64px]"
              >
                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-3" />
                  <span>{toUpperCase(t("competition.phaseII"))}</span>
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="regional" className="mt-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-3xl p-6 lg:p-10 shadow-medium border border-border"
              >
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-success" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                      {toUpperCase(t("competition.regionalTitle"))}
                    </h3>
                    <p className="text-sm md:text-lg text-muted-foreground font-semibold mt-1">
                      {toUpperCase(t("competition.regionalSubtitle"))}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {regionalKeys.map((k, i) => (
                    <FeatureCard
                      key={k}
                      title={toUpperCase(t(`competition.${k}.title`))}
                      desc={toUpperCase(t(`competition.${k}.description`))}
                      icon={<CheckCircle2 className="w-5 h-5 text-success" />}
                      delay={i * 0.06}
                      tone="success"
                    />
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="international" className="mt-0">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-3xl p-6 lg:p-10 shadow-medium border border-border"
              >
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                      {toUpperCase(t("competition.internationalTitle"))}
                    </h3>
                    <p className="text-sm md:text-lg text-muted-foreground font-semibold mt-1">
                      {toUpperCase(t("competition.internationalSubtitle"))}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {internationalKeys.map((k, i) => (
                    <FeatureCard
                      key={k}
                      title={toUpperCase(t(`competition.${k}.title`))}
                      desc={toUpperCase(t(`competition.${k}.description`))}
                      icon={<CheckCircle2 className="w-5 h-5 text-primary" />}
                      delay={i * 0.06}
                      tone="primary"
                    />
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="md:hidden space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="bg-card rounded-3xl p-5 shadow-medium border border-border"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-success/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-success" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {toUpperCase(t("competition.regionalTitle"))}
                </h3>
                <p className="text-sm text-muted-foreground font-semibold mt-1">
                  {toUpperCase(t("competition.regionalSubtitle"))}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {regionalKeys.map((k, i) => (
                <FeatureCard
                  key={k}
                  title={toUpperCase(t(`competition.${k}.title`))}
                  desc={toUpperCase(t(`competition.${k}.description`))}
                  icon={<CheckCircle2 className="w-5 h-5 text-success" />}
                  delay={i * 0.04}
                  tone="success"
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="bg-card rounded-3xl p-5 shadow-medium border border-border"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {toUpperCase(t("competition.internationalTitle"))}
                </h3>
                <p className="text-sm text-muted-foreground font-semibold mt-1">
                  {toUpperCase(t("competition.internationalSubtitle"))}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {internationalKeys.map((k, i) => (
                <FeatureCard
                  key={k}
                  title={toUpperCase(t(`competition.${k}.title`))}
                  desc={toUpperCase(t(`competition.${k}.description`))}
                  icon={<CheckCircle2 className="w-5 h-5 text-primary" />}
                  delay={i * 0.04}
                  tone="primary"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
