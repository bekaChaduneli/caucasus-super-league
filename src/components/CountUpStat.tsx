import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface CountUpStatProps {
  icon: LucideIcon;
  value: number;
  label: string;
  description: string;
  delay?: number;
  suffix?: string;
}

export const CountUpStat = ({
  icon: Icon,
  value,
  label,
  description,
  delay = 0,
  suffix = "",
}: CountUpStatProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <div className="relative h-full bg-card rounded-xl md:rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-hard transition-all duration-500 border border-border/50 hover:border-accent/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-hero rounded-xl md:rounded-2xl flex items-center justify-center shadow-primary group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
          </motion.div>
          <div className="mb-3">
            <span className="font-display text-4xl md:text-6xl font-bold bg-gradient-to-br from-primary to-primary-light bg-clip-text text-transparent">
              {count}
              {suffix}
            </span>
          </div>
          <h3 className="font-display text-xl font-bold text-foreground mb-2">
            {label}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : {}}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-accent"
        />
      </div>
    </motion.div>
  );
};
