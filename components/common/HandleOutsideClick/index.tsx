import { useEffect, useRef, cloneElement, ReactElement } from "react";

type HandleOutsideClickProps = {
  callBack: Function;
  type?: string;
  children: ReactElement;
};

const HandleOutsideClick = ({
  callBack,
  type = "mousedown",
  children,
}: HandleOutsideClickProps) => {
  const reference = useRef<HTMLElement>(null);

  const handleClick = (e: any) => {
    const clickedOutside =
      reference && reference.current
        ? !reference.current.contains(e.target)
        : false;

    if (clickedOutside) {
      callBack();
    }
  };

  useEffect(() => {
    window.addEventListener(type, handleClick);

    return () => {
      window.removeEventListener(type, handleClick);
    };
  });
  return cloneElement(children, { ref: reference });
};

export default HandleOutsideClick;
