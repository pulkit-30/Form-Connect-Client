import { useState, useEffect } from "react";
import { getItem, setItem, matchKeys } from "@/utils/localStorage";

type UsePersistentStateProps = {
  key: string;
};
const usePersistentState = <I>(
  { key }: UsePersistentStateProps,
  initial: I
) => {
  const [state, setState] = useState<I>(getItem(key, initial));

  useEffect(() => {
    setItem(key, state);
  }, [state, key]);

  useEffect(() => {
    window.addEventListener("storage", ({ key: changedKey }) => {
      if (changedKey && matchKeys(key, changedKey)) {
        setState(getItem(key, state));
      }
    });
  }, [key, state]);

  return [state, setState] as const;
};

export default usePersistentState;
