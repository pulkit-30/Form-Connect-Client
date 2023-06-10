import { AiOutlineCheckCircle, AiOutlineWarning } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { AlertMessageVariants } from "@/types";

type AlertMessageProps = {
  variant: AlertMessageVariants;
};
const AlertIcon = ({ variant }: AlertMessageProps) => {
  switch (variant) {
    case AlertMessageVariants.SUCCESS:
      return <AiOutlineCheckCircle />;
    case AlertMessageVariants.WARNING:
      return <BiErrorCircle />;
    case AlertMessageVariants.ERROR:
      return <AiOutlineWarning />;
    default:
      return null;
  }
};

export default AlertIcon;
