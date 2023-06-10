import { InputHTMLAttributes, ReactNode } from "react";
import { useField } from "formik";
import FieldWrapper from "@/components/common/Form/FieldWrapper";

export interface RadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "title"> {
  identifier: string;
  name: string;
  title: ReactNode;
  // children: ReactNode;
  hideInput?: boolean;
  hasError?: boolean;
  wrapperClassName?: string;
}

const Checkbox = ({
  identifier,
  name,
  title,
  className,
  wrapperClassName = "pt-6",
  ...rest
}: RadioButtonProps) => {
  const [field, meta] = useField(name);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <FieldWrapper noLabel errorText={errorText} className={wrapperClassName}>
      <label
        htmlFor={identifier}
        className={`flex h-11 items-center p-3 rounded-lg text-black ${className}`}
      >
        <input
          {...field}
          className="mr-2"
          id={identifier}
          type="checkbox"
          checked={field?.value || false}
          {...rest}
        />
        {title}
      </label>
    </FieldWrapper>
  );
};

export default Checkbox;
