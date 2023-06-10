import { createContext, Dispatch, SetStateAction } from "react";
import { AlertMessageType } from "@/types";

export type AlertMessagesContextType = {
  alertMessages: AlertMessageType[];
  setAlertMessages: Dispatch<SetStateAction<AlertMessageType[]>>;
};

const initialContext: AlertMessagesContextType = {
  alertMessages: [],
  setAlertMessages: () => null,
};

const AlertMessagesContext = createContext(initialContext);

export default AlertMessagesContext;
