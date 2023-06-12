import { ReactNode } from "react";
import getClasses, { GetClassesProps } from "./utils/getClasses";

export type ChipProps = {
  children: ReactNode;
  className?: string;
  theme?: GetClassesProps["theme"];
  color?: GetClassesProps["color"];
};

const Chip = ({
  children,
  className = "",
  theme,
  color = "blue",
}: ChipProps) => {
  const { textColorClass, backgroundClass, paddingCLass, borderRoundedClass } =
    getClasses({ color, theme });
  return (
    <span
      className={`flex gap-x-1 items-center text-sm font-normal max-w-max ${backgroundClass} ${textColorClass} ${paddingCLass} ${borderRoundedClass} ${className}`}
    >
      {children}
    </span>
  );
};

export default Chip;
