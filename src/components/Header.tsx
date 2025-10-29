import { motion } from "framer-motion";
import { LanguageChanger } from "./LanguageChanger";
import { toUpperCase } from "@/utils";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-5">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="block">
              <div className="text-[14px] sm:text-[16px] md:text-lg font-display font-bold text-foreground">
                {toUpperCase(t("header.name"))}
              </div>
            </div>
          </motion.div>

          <LanguageChanger />
        </div>
      </div>
    </motion.header>
  );
};
