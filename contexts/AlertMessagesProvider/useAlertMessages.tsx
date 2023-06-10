import {
  AlertMessageType,
  AlertMessageVariants,
  AlertMessageTypes,
} from "@/types";
import getUID from "@/utils/getUID";

import useAlertMessagesContext from "@/contexts/AlertMessagesProvider/useAlertMessagesContext";
import { unionBy } from "lodash";

type PartialAlertMessage = Omit<AlertMessageType, "id">;
const useAlertMessages = () => {
  const { alertMessages, setAlertMessages } = useAlertMessagesContext();

  const addAlertMessage = (alertMessage: PartialAlertMessage) => {
    const existingMessage =
      alertMessages.find(
        ({ type, variant }) =>
          type && type === alertMessage.type && variant === alertMessage.variant
      ) || ({} as PartialAlertMessage);
    setAlertMessages((prev) =>
      unionBy(
        [...prev, { id: getUID(), ...existingMessage, ...alertMessage }],
        "id"
      )
    );
  };

  const showSuccessAlert = (message: string) => {
    addAlertMessage({ message, variant: AlertMessageVariants.SUCCESS });
  };

  const showWarningAlert = (message: string) => {
    addAlertMessage({ message, variant: AlertMessageVariants.WARNING });
  };

  const showErrorAlert = (message: string, type?: AlertMessageTypes) => {
    addAlertMessage({ message, variant: AlertMessageVariants.ERROR, type });
  };

  const removeAlertMessage = (id: AlertMessageType["id"]) => {
    setAlertMessages((prev) => prev.filter(({ id: _id }) => _id !== id));
  };

  return {
    alertMessages,
    showSuccessAlert,
    showWarningAlert,
    showErrorAlert,
    removeAlertMessage,
  };
};

export default useAlertMessages;
