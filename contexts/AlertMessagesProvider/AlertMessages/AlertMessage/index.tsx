import { useCallback } from "react";
import Button from "@/components/common/Button";
import { AlertMessageType } from "@/types";
import useSetTimeout from "@/hooks/useSetTimeout";
import AlertIcon from "./AlertIcon";
import getClasses from "./utils/getClasses";
import { AiOutlineClose } from "react-icons/ai";

type AlertMessageProps = {
  alertMessage: AlertMessageType;
  onClose: (id: AlertMessageType["id"]) => void;
  autoHide?: number;
};
const AlertMessage = ({
  alertMessage,
  onClose,
  autoHide,
}: AlertMessageProps) => {
  const { id, message, variant } = alertMessage;
  const addonsClass = getClasses({
    variant,
  });

  const handleClose = useCallback(() => {
    onClose(id);
  }, [onClose, id]);

  useSetTimeout(handleClose, autoHide);

  return (
    <div
      style={{
        zIndex: 1000,
        margin: "2rem",
        maxHeight: "200px",
        maxWidth: "300px",
        transition: "all 0.5s ease-in-out",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem",
        borderRadius: "0.5rem",
        ...addonsClass,
      }}
    >
      <div className="text-2xl mr-2">
        <AlertIcon variant={variant} />
      </div>
      <div className="flex flex-auto mr-3">{message}</div>
      <Button size="extra-small" className="ml-2" onClick={handleClose}>
        <div className="text-lg">
          <AiOutlineClose />
        </div>
      </Button>
    </div>
  );
};

export default AlertMessage;
