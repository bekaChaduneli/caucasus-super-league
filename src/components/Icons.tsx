import React, { SVGProps } from "react";

type SvgExtendedProps = SVGProps<SVGSVGElement> & {
  active?: boolean;
  className?: string;
};

export const Icons = {
  ArrowDown: (props: SvgExtendedProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 5v12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 12l-7 7-7-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
} as const;
