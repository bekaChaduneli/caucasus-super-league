import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { cn, toUpperCase } from "@/utils";

export const ScheduleTable: React.FC = () => {
  const { t } = useTranslation();

  const rows = [
    "schedule.rows.regional",
    "schedule.rows.international",
    "schedule.rows.total",
  ];

  const getHighlight = (key: string): boolean => {
    const val = t(`${key}.highlight`);
    return val === "true" || !!val || val === "1";
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">
            {toUpperCase(t("schedule.title"))}
          </h2>

          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-1 w-16 bg-accent rounded-full" />
            <div className="h-1 w-8 bg-primary rounded-full" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl shadow-hard overflow-hidden border border-border"
        >
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gradient-hero text-white">
                  {["stage", "opponents", "matches", "comment"].map((h) => (
                    <th
                      key={h}
                      className="px-6 py-4 text-left text-sm font-display font-bold uppercase tracking-wider"
                    >
                      {toUpperCase(t(`schedule.headers.${h}`))}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((key, index) => {
                  const highlight = getHighlight(key);
                  return (
                    <motion.tr
                      key={key}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className={cn(
                        "transition-colors duration-200",
                        highlight
                          ? "bg-accent/10 border-t-2 border-accent"
                          : "hover:bg-muted/50"
                      )}
                    >
                      <td className="px-6 py-5 font-display font-bold text-foreground whitespace-nowrap">
                        {toUpperCase(t(`${key}.stage`))}
                      </td>
                      <td className="px-6 py-5 text-muted-foreground whitespace-nowrap">
                        {toUpperCase(t(`${key}.opponents`))}
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span
                          className={cn(
                            "font-display font-bold",
                            highlight
                              ? "text-4xl text-accent"
                              : "text-2xl text-primary"
                          )}
                        >
                          {t(`${key}.matches`)}
                        </span>
                      </td>
                      <td
                        className={cn(
                          "px-6 py-5",
                          highlight
                            ? "font-semibold text-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        {toUpperCase(t(`${key}.comment`))}
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="md:hidden p-4 space-y-4">
            {rows.map((key, index) => {
              const highlight = getHighlight(key);
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className={cn(
                    "p-5 rounded-2xl border",
                    highlight
                      ? "bg-accent/10 border-accent"
                      : "bg-muted/50 border-border"
                  )}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {toUpperCase(t(`${key}.stage`))}
                    </h3>
                    <span
                      className={cn(
                        "font-display font-bold",
                        highlight
                          ? "text-4xl text-accent"
                          : "text-3xl text-primary"
                      )}
                    >
                      {t(`${key}.matches`)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {toUpperCase(t(`${key}.opponents`))}
                  </p>
                  <p
                    className={cn(
                      "text-sm",
                      highlight
                        ? "font-semibold text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {toUpperCase(t(`${key}.comment`))}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
