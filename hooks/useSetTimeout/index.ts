import { useEffect } from "react";

const useSetTimeout = (callback: Function, duration?: number) => {
  useEffect(() => {
    if (!duration) {
      return undefined;
    }

    const timeout = setTimeout(() => callback(), duration);

    return () => clearTimeout(timeout);
  }, [callback, duration]);
};

export default useSetTimeout;
