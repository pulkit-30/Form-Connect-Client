import { ReactNode } from "react";

type FieldTitleProps = {
  children: ReactNode;
};

const FieldTitle = ({ children }: FieldTitleProps) => (
  <span className="font-medium text-label flex mb-1 ml-1 capitalize">
    {children}
  </span>
);

export default FieldTitle;
