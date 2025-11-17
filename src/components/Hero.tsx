import React, { useRef } from "react";
import { toUpperCase } from "@/utils";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Icons } from "./Icons";

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const rootRef = useRef<HTMLElement | null>(null);

  const handleExploreClick = () => {
    const current = rootRef.current;
    if (!current) return;

    const next = current.nextElementSibling as HTMLElement | null;
    const docHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;

    if (next instanceof HTMLElement) {
      const nextTop = next.getBoundingClientRect().top + window.scrollY;

      const clampedTop = Math.max(
        0,
        Math.min(nextTop, docHeight - viewportHeight)
      );

      window.scrollTo({ top: clampedTop, behavior: "smooth" });
      return;
    }

    const fallbackTop = Math.max(
      0,
      Math.min(window.scrollY + viewportHeight, docHeight - viewportHeight)
    );

    window.scrollTo({ top: fallbackTop, behavior: "smooth" });
  };

  return (
    <section
      ref={rootRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-muted"
      aria-label="Hero"
    >
      <motion.div
        className="absolute z-0 top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
        }}
        transition={{
          duration: 300,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden
      />
      <motion.div
        className="absolute z-0 bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]"
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 40, -80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 7,
        }}
        aria-hidden
      />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.35, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="px-5 py-2 bg-accent/20 backdrop-blur-sm border-2 border-accent rounded-full inline-flex items-center justify-center">
              <span className="text-[12px] md:text-sm font-bold text-accent uppercase tracking-wider">
                {toUpperCase(t("hero.badge"))}
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-display font-bold mb-6 leading-tight text-[clamp(2.2rem,6.5vw,6.5rem)]"
          >
            <span className="block text-foreground/95">
              {toUpperCase(t("hero.caucasus"))}
            </span>
            <span className="block text-primary">
              {toUpperCase(t("hero.superLeague"))}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="text-base sm:text-lg max-w-3xl mx-auto mb-4 text-muted-foreground break-words"
          >
            {toUpperCase(t("hero.inovativeConception"))}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            className="text-sm sm:text-base max-w-2xl mx-auto mb-8 text-muted-foreground break-words"
          >
            {toUpperCase(t("hero.countries"))}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={handleExploreClick}
              className="group px-6 py-3 md:px-8 md:py-4 bg-accent text-accent-foreground rounded-xl font-bold md:text-lg shadow-accent hover:shadow-accent/80 hover:scale-105 transition-all duration-300 inline-flex items-center"
              aria-label={String(t("hero.explore"))}
            >
              <span>{toUpperCase(t("hero.explore"))}</span>
              <span className="ml-3 inline-flex items-center">
                <Icons.ArrowDown className="w-4 h-4 md:w-5 md:h-5" />
              </span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-7 h-11 border-2 border-primary/30 rounded-full flex items-start justify-center p-2"
            aria-hidden
          >
            <div className="w-1 h-2 bg-primary/30 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
