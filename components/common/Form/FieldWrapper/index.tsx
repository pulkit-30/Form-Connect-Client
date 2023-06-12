import { ReactNode } from "react";
import ErrorText from "@/components/common/Form/ErrorText";
import FieldTitle from "@/components/common/Form/FieldTitle";
import { FaStarOfLife } from "react-icons/fa";

type FieldWrapperProps = {
  label?: string;
  errorText?: string;
  children: ReactNode;
  className?: string;
  noLabel?: boolean;
  required?: boolean;
};

const FieldWrapper = ({
  label,
  errorText,
  children,
  className = "",
  noLabel,
  required = false,
}: FieldWrapperProps) => (
  <div className={`${noLabel ? "" : "h-22"} flex flex-col ${className}`}>
    {!label && !noLabel && <span className="flex h-4 mb-4" />}
    {label && (
      <FieldTitle>
        {label}
        <span className="text-[7px] mt-1 text-red-500 ">
          {required && <FaStarOfLife />}
        </span>
      </FieldTitle>
    )}
    {children}
    {!!errorText && <ErrorText>{errorText}</ErrorText>}
  </div>
);

export default FieldWrapper;
