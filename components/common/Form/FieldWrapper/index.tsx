import { ReactNode } from "react";
import ErrorText from "@/components/common/Form/ErrorText";
import FieldTitle from "@/components/common/Form/FieldTitle";

type FieldWrapperProps = {
  label?: string;
  errorText?: string;
  children: ReactNode;
  className?: string;
  noLabel?: boolean;
};

const FieldWrapper = ({
  label,
  errorText,
  children,
  className = "",
  noLabel,
}: FieldWrapperProps) => (
  <div className={`${noLabel ? "" : "h-22"} flex flex-col ${className}`}>
    {!label && !noLabel && <span className="flex h-4 mb-4" />}
    {label && <FieldTitle>{label}</FieldTitle>}
    {children}
    {!!errorText && <ErrorText>{errorText}</ErrorText>}
  </div>
);

export default FieldWrapper;
