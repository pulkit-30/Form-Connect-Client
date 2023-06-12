import { ReactNode, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

export type AccordianProps = {
  stateKey?: string;
  title: ReactNode;
  children: ReactNode;
  theme?: "default" | "error";
  size?: "default" | "large";
  className?: string;
  defaultOpen?: boolean;
};

const Accordian = ({
  size = "default",
  theme = "default",
  className,
  title,
  children,
  defaultOpen,
}: AccordianProps) => {
  const paddingClass = size === "large" ? "px-11 py-8" : "px-4 py-6";
  const [open, setOpen] = useState<boolean>(defaultOpen || false);
  const borderClass =
    theme === "error" ? "border border-hm-error" : "border-b border-slate-700";
  return (
    <div
      className={`flex flex-col justify-between ${
        open ? borderClass : ""
      } ${paddingClass} ${className}`}
    >
      {title && (
        <div
          className={`cursor-pointer flex flex-auto items-center border-b pb-4 border-slate-700 justify-between ${
            open ? "mb-2" : ""
          }`}
          role="button"
          tabIndex={0}
          onClick={() => setOpen((prev) => !prev)}
          onKeyDownCapture={() => setOpen((prev) => !prev)}
        >
          {title}
          <span
            className={`text-hm-neutral-dark transition-all ${
              open ? "origin-center rotate-180" : ""
            }`}
          >
            <AiOutlineCaretDown />
          </span>
        </div>
      )}
      <div className="w-11/12 m-auto">{open && children}</div>
    </div>
  );
};

export default Accordian;
