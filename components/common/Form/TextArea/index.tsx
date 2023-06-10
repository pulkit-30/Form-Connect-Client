import { TextareaHTMLAttributes } from "react";
import FieldTitle from "@/components/common/Form/FieldTitle";
import ErrorText from "@/components/common/Form/ErrorText";
import { useField } from "formik";

interface TextInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

const TextInput = ({
  label,
  name,
  className,
  disabled,
  children,
  ...props
}: TextInputProps) => {
  const [field, meta] = useField(name);
  const errorText = meta.error && meta.touched ? meta.error : "";
  const hasError = !!errorText;
  const defaultBorderClass =
    hasError && !disabled ? "border-hm-error" : "border-input-border-color";

  const hoverBorderClass = hasError
    ? "focus:border-hm-error"
    : "hover:border-hm-black focus:border-hm-black";
  return (
    <div className="flex flex-col">
      {!label && <span className="flex h-4 mb-4" />}
      {label && <FieldTitle>{label}</FieldTitle>}
      {!!errorText && <ErrorText>{errorText}</ErrorText>}
      <textarea
        {...field}
        className={`w-full h-11 px-5 py-3 text-input-color rounded-lg font-medium focus:outline-0 border ${defaultBorderClass} 
        ${!disabled ? hoverBorderClass : ""} ${
          disabled ? "bg-hm-disabled" : ""
        } ${className}`}
        readOnly={disabled}
        disabled={disabled}
        {...props}
      >
        {children}
      </textarea>
    </div>
  );
};

export default TextInput;
