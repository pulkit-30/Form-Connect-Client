import { InputHTMLAttributes } from "react";
import FieldWrapper from "@/components/common/Form/FieldWrapper";
import Input from "@/components/common/Form/Input";
import { useField } from "formik";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  hint?: string;
  noLabel?: boolean;
}

const TextInput = ({
  label,
  name,
  disabled,
  hint,
  noLabel,
  ...props
}: TextInputProps) => {
  const [field, meta] = useField(name);
  const errorText = meta.error && meta.touched ? meta.error : "";
  const hasError = !!errorText;
  return (
    <FieldWrapper label={label} errorText={errorText} noLabel={noLabel}>
      <div className="flex items-center">
        <Input
          {...field}
          readOnly={disabled}
          disabled={disabled}
          hasError={hasError}
          {...props}
        />
        {hint && <span>{hint}</span>}
      </div>
    </FieldWrapper>
  );
};

export default TextInput;
