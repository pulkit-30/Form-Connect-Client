import { InputHTMLAttributes } from "react";
import FieldWrapper from "@/components/common/Form/FieldWrapper";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorText?: string;
}

const TextInput = ({
  label,
  errorText,
  className,
  readOnly,
  disabled,
  required = false,
  ...rest
}: TextInputProps) => {
  const isInputDisabled = readOnly || disabled;
  const hasError = !!errorText;

  const defaultBorderClass =
    hasError && !isInputDisabled
      ? "border-hm-error"
      : "border-input-border-color";

  const hoverBorderClass = hasError
    ? "focus:border-hm-error"
    : "hover:border-hm-black focus:border-hm-black";

  return (
    <FieldWrapper required={required} label={label} errorText={errorText}>
      <input
        readOnly={readOnly}
        disabled={disabled}
        className={`w-full h-9 bg-transparent text-white border-b placeholder:text-slate-600 py-4 font-medium focus:outline-0 focus:border-indigo-500 ${defaultBorderClass} 
        ${!isInputDisabled ? hoverBorderClass : ""} ${
          disabled ? "bg-hm-disabled" : ""
        } ${className}`}
        {...rest}
      />
    </FieldWrapper>
  );
};

export default TextInput;
