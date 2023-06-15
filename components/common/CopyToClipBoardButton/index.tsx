import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "@/components/common/Button";
import useAlertMessages from "@/contexts/AlertMessagesProvider/useAlertMessages";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { BsCheckLg } from "react-icons/bs";

type CopyToClipBoardButtonProps = {
  text: string;
  title: string;
  onCopyMessage?: string;
};

const CopyToClipBoardButton = ({
  text,
  title,
  onCopyMessage,
}: CopyToClipBoardButtonProps) => {
  const [click, setClick] = useState<boolean>(false);
  const { showSuccessAlert } = useAlertMessages();
  return (
    <CopyToClipboard
      text={text}
      onCopy={() => showSuccessAlert(onCopyMessage || "copied to clipboard")}
    >
      <Button
        size="small"
        onClick={() => {
          setClick(true);
          setTimeout(() => {
            setClick(false);
          }, 1000);
        }}
        icon={
          click ? (
            <span className="text-green-500">
              <BsCheckLg />
            </span>
          ) : (
            <IoCopyOutline />
          )
        }
      >
        {title}
      </Button>
    </CopyToClipboard>
  );
};

export default CopyToClipBoardButton;
