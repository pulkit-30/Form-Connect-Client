import { ReactNode } from "react";

type ErrorTextProps = {
  children: ReactNode;
};

const ErrorText = ({ children }: ErrorTextProps) => (
  <span
    className="text-red-500 text-xs mt-1 ml-1"
    style={{ minHeight: "16px" }}
  >
    {children}
  </span>
);

export default ErrorText;
