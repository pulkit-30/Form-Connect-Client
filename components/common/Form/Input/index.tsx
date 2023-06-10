import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const Input = ({ className, hasError, disabled, ...props }: InputProps) => {
  const defaultBorderClass =
    hasError && !disabled ? "border-hm-error" : "border-input-border-color";

  const hoverBorderClass = hasError
    ? "focus:border-hm-error"
    : "hover:border-hm-black focus:border-hm-black";
  return (
    <input
      className={`w-full h-11 px-5 py-3 text-input-color rounded-lg font-medium focus:outline-0 border ${defaultBorderClass} 
        ${!disabled ? hoverBorderClass : ""} ${
        disabled ? "bg-hm-disabled" : ""
      } ${className}`}
      {...props}
    />
  );
};

export default Input;
