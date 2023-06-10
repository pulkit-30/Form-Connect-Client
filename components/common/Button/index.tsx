import React from "react";

type Props = {
  children?: React.ReactNode;
  size?: "default" | "extra-small" | "small" | "medium" | "large";
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  noPadding?: boolean;
};

const getSizeClass = (size: string) => {
  switch (size) {
    case "small":
      return "text-xs px-2 py-1";
    case "extra-small":
      return "text-xs px-1 py-1";
    case "medium":
      return "text-sm px-4 py-2";
    case "large":
      return "text-lg px-8 py-2";
    default:
      return "text-base px-6 py-2";
  }
};

const Button = ({
  children,
  size = "default",
  className,
  icon,
  disabled = false,
  onClick,
}: Props) => {
  const sizeClass = getSizeClass(size);
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${className} ${sizeClass} flex items-center justify-center gap-x-2 cursor-pointer border-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-slate-800 hover:scale-[1.02] transition duration-150`}
    >
      {children && <span>{children}</span>}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
