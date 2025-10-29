import React from "react";
import { toUpperCase } from "@/utils";
import { useTranslation } from "react-i18next";
import { CountUpStat } from "./CountUpStat";
import { Users, CalendarCheck, Layers } from "lucide-react";

export const StatsOverview: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-10 md:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl">
            {toUpperCase(t("stats.title"))}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            {t("stats.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CountUpStat
            icon={Users}
            value={30}
            label={toUpperCase(t("stats.teams"))}
            description={t("stats.teamsDesc")}
            delay={0.05}
          />
          <CountUpStat
            icon={CalendarCheck}
            value={38}
            label={toUpperCase(t("stats.games"))}
            description={t("stats.gamesDesc")}
            delay={0.12}
          />
          <CountUpStat
            icon={Layers}
            value={2}
            label={toUpperCase(t("stats.conferences"))}
            description={t("stats.conferencesDesc")}
            delay={0.18}
          />
        </div>
      </div>
    </section>
  );
};
