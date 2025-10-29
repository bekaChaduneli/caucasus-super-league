import { cn } from "@/utils";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import React from "react";
import { useTranslation } from "react-i18next";

interface LanguageChangerProps {
  className?: string;
}

const lanuageItems = [
  {
    icon: "🇺🇸",
    langauge: "en",
    text: "English",
  },
  {
    icon: "🇬🇪",
    langauge: "ka",
    text: "Georgian",
  },
  {
    icon: "🇦🇿",
    langauge: "az",
    text: "Azerbiajani",
  },
  {
    icon: "🇦🇲",
    langauge: "ar",
    text: "Armenian",
  },
];

export const LanguageChanger: React.FC<LanguageChangerProps> = ({
  className,
}) => {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const changeLanguageHandler = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
  };

  const active = lanuageItems.find((lang) => lang.langauge === language);
  return (
    <div className={cn("relative", className)}>
      <Select value={language} onValueChange={changeLanguageHandler}>
        <SelectTrigger
          variant="minimize"
          className="border-border/50 bg-background/50 hover:bg-background/80 hover:border-primary/30 group !h-9 md:!h-11 !w-28 !rounded-2xl transition-all duration-200"
        >
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="border-border/30 h-6 w-6 overflow-hidden rounded-full border shadow-sm">
                <span className="text-sm">{active?.icon ?? "🇺🇸"}</span>
              </div>
              <div className="from-primary/20 to-accent/20 absolute -inset-0.5 rounded-full bg-gradient-to-br opacity-0 blur-sm transition-all duration-200 group-hover:opacity-100 group-hover:blur-md"></div>
            </div>
            <span className="text-foreground/80 group-hover:text-foreground text-xs font-medium transition-colors duration-200">
              {language.toUpperCase()}
            </span>
          </div>
        </SelectTrigger>
        <SelectContent className="border-border/50 bg-background/95 min-w-32 rounded-xl shadow-xl backdrop-blur-md">
          {lanuageItems.map((langugeItem) => (
            <SelectItem
              value={langugeItem.langauge}
              className="hover:bg-accent/10 group cursor-pointer rounded-lg py-1.5 transition-colors duration-200"
            >
              <div className="flex items-center gap-2">
                <div className="border-border/5 flex h-5 w-5 items-center justify-center overflow-hidden rounded-full border shadow-sm">
                  <span className="text-xs">{langugeItem.icon}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium">
                    {langugeItem.text}
                  </span>
                </div>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
