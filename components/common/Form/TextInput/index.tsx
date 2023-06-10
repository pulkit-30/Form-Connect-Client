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
    <FieldWrapper label={label} errorText={errorText}>
      <input
        readOnly={readOnly}
        disabled={disabled}
        className={`w-full h-11 px-5 py-3 text-black rounded-lg font-medium focus:outline-0 border ${defaultBorderClass} 
        ${!isInputDisabled ? hoverBorderClass : ""} ${
          disabled ? "bg-hm-disabled" : ""
        } ${className}`}
        {...rest}
      />
    </FieldWrapper>
  );
};

export default TextInput;
