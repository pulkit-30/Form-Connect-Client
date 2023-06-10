import { AlertMessageVariants } from "@/types";

export type GetClassesProps = {
  variant: AlertMessageVariants;
};
const getClasses = ({ variant }: GetClassesProps) => {
  let backgroundClass = "";
  let textColorClass = "";
  switch (variant) {
    case AlertMessageVariants.SUCCESS:
      backgroundClass = "#539165";
      textColorClass = "text-white";
      break;
    case AlertMessageVariants.WARNING:
      backgroundClass = "#E7B10A";
      textColorClass = "#000";
      break;
    case AlertMessageVariants.ERROR:
      backgroundClass = "#DF2E38";
      textColorClass = "text-white";
      break;
    default:
      break;
  }

  return {
    backgroundColor: backgroundClass,
    color: textColorClass,
  };
};

export default getClasses;
