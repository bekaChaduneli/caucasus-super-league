import React from "react";
import { useTranslation } from "react-i18next";
import { Linkedin, Github } from "lucide-react";
import { cn, toUpperCase } from "@/utils";

import Profile from "../../public/beka.jpg";
export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-t from-dark to-dark-lighter text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 ">
          <div className="flex items-center gap-4">
            <a
              href="https://www.bekachaduneli.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
              aria-label={toUpperCase(t("footer.visit"))}
            >
              <img
                src={Profile}
                alt="Beka Chaduneli"
                className="w-12 h-12 md:w-14 md:h-14 rounded-2xl object-cover border border-border/20 shadow-sm"
              />
              <div className="text-left">
                <div className="text-xs md:text-[14px] mb-1 text-white/70">
                  {toUpperCase(t("footer.poweredBy"))}
                </div>
                <div className="text-sm md:text-base font-display font-bold text-primary-foreground hover:underline">
                  Beka Chaduneli
                </div>
              </div>
            </a>
          </div>

          <p className="text-sm md:text-base text-muted-foreground md:max-w-[492px] lg:max-w-[812px] mx-auto md:mx-0 text-center md:text-left">
            {toUpperCase(t("footer.description"))}
          </p>
        </div>

        <div className="mt-6 text-center md:text-right text-xs text-muted-foreground">
          {toUpperCase(t("footer.note"))}
        </div>
      </div>
    </footer>
  );
};
