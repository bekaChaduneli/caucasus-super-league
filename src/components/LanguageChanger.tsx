import { cn } from "@/utils";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import React from "react";
import { useTranslation } from "react-i18next";

interface LanguageChangerProps {
  className?: string;
}

const lanuageItems = [
  {
    langauge: "en",
    text: "English",
  },
  {
    langauge: "ka",
    text: "Georgian",
  },
  {
    langauge: "az",
    text: "Azerbiajani",
  },
  {
    icon: "🇦🇲",
    langauge: "am",
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

  return (
    <div className={cn("relative", className)}>
      <Select value={language} onValueChange={changeLanguageHandler}>
        <SelectTrigger
          variant="minimize"
          className="border-border/50 bg-background/50 hover:bg-background/80 hover:border-primary/30 group !h-9 md:!h-10 !w-24 !rounded-[14px] transition-all duration-200"
        >
          <div className="flex items-center gap-2">
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
              <div className="flex flex-col">
                <span className="text-xs font-medium">{langugeItem.text}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
