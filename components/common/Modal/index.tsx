import { ReactNode } from "react";
import Portal from "@/components/common/Portal";
import HandleOutsideClick from "@/components/common/HandleOutsideClick";
import GlassBg from "../GlassBg";

type ModalPops = {
  title: ReactNode;
  footer?: ReactNode;
  open: boolean;
  children: ReactNode;
  onClose: Function;
  size?: "medium" | "large" | "extra-large";
  className?: string;
  innerClassName?: string;
};

const Modal = ({
  title,
  children,
  footer,
  open,
  onClose,
  size = "medium",
  className = "",
  innerClassName = "",
}: ModalPops) =>
  open ? (
    <Portal>
      <div>
        <div className="fixed inset-0 z-[1000] bg-[#00000087]" />
        <div
          className={`fixed inset-0 z-[1000] ${
            size === "extra-large" ? "px-20 py-8" : "p-20"
          }`}
        >
          <HandleOutsideClick callBack={onClose}>
            <div
              className={`bg-slate-700 rounded-md overflow-hidden w-fit m-auto flex flex-col max-h-full ${
                size === "large" || size === "extra-large"
                  ? "min-w-[70%] max-w-[90%]"
                  : "max-w-2xl"
              } ${size === "extra-large" ? "min-h-[95%]" : ""} ${className}`}
              role="dialog"
              aria-modal
            >
              <div className="flex h-16 items-center px-20 min-h-[4rem] text-hm-xl font-medium bg-slate-800 py-4">
                {title}
              </div>
              <div
                className={`px-20 py-5 flex-1 overflow-auto ${innerClassName}`}
              >
                {children}
              </div>
              {footer && (
                <div className="flex h-16 items-center justify-end px-20 min-h-[4rem] bg-slate-800">
                  {footer}
                </div>
              )}
            </div>
          </HandleOutsideClick>
        </div>
      </div>
    </Portal>
  ) : null;

export default Modal;
