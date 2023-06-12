import { ReactNode } from "react";

type FieldTitleProps = {
  children: ReactNode;
};

const FieldTitle = ({ children }: FieldTitleProps) => (
  <span className="text-sm flex mb-1 capitalize gap-x-1">{children}</span>
);

export default FieldTitle;
