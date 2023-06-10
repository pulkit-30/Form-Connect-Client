import { PropsWithChildren, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: PropsWithChildren<{}>) => {
  const hasDocument = typeof document !== "undefined";
  const divElement = useMemo(() => {
    if (!hasDocument) {
      return null;
    }
    return document.createElement("div");
  }, [hasDocument]);

  useEffect(() => {
    if (!divElement) {
      return () => {};
    }

    document.body.appendChild(divElement);

    return () => {
      document.body.removeChild(divElement);
    };
  }, [divElement]);

  if (!divElement) {
    return null;
  }

  return createPortal(children, divElement);
};

export default Portal;
