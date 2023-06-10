import useAlertMessages from "@/contexts/AlertMessagesProvider/useAlertMessages";
import Portal from "@/components/common/Portal";
import AlertMessage from "./AlertMessage";

const AlertMessages = () => {
  const { alertMessages, removeAlertMessage } = useAlertMessages();
  return alertMessages.length > 0 ? (
    <Portal>
      <div
        style={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          zIndex: 1000,
        }}
      >
        {alertMessages.map((alertMessage) => (
          <AlertMessage
            key={alertMessage.id}
            alertMessage={alertMessage}
            onClose={removeAlertMessage}
            autoHide={3000}
          />
        ))}
      </div>
    </Portal>
  ) : null;
};

export default AlertMessages;
