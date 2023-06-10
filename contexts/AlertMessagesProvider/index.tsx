import { ReactNode, useState, useMemo } from "react";
import { AlertMessageType } from "@/types";
import AlertMessagesContext, { AlertMessagesContextType } from "./context";
import AlertMessages from "./AlertMessages";

type Props = {
  children: ReactNode;
};

const AlertMessagesProvider = ({ children }: Props) => {
  const [alertMessages, setAlertMessages] = useState<AlertMessageType[]>([]);

  const value: AlertMessagesContextType = useMemo(
    () => ({
      alertMessages,
      setAlertMessages,
    }),
    [alertMessages, setAlertMessages]
  );

  return (
    <AlertMessagesContext.Provider value={value}>
      {children}
      <AlertMessages />
    </AlertMessagesContext.Provider>
  );
};

export default AlertMessagesProvider;
