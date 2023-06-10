import { useContext } from "react";
import AlertMessagesContext from "./context";

const useAlertMessagesContext = () => useContext(AlertMessagesContext);

export default useAlertMessagesContext;
