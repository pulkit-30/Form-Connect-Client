import React from "react";

type Props = {
  className?: string;
};
const DivSkeleton = ({ className }: Props) => {
  return (
    <div className={`animate-pulse bg-slate-700 ${className} rounded`}></div>
  );
};

export default DivSkeleton;
