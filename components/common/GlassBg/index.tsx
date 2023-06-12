import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const GlassBg = ({ className, children }: Props) => {
  return (
    <div
      className={`${className} bg-slate-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-2xl shadow-slate-900 p-8`}
    >
      {children}
    </div>
  );
};

export default GlassBg;
