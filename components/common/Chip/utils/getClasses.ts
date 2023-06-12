export type GetClassesProps = {
  color: "green" | "blue" | "red" | "success-dark" | "yellow" | "gray";
  theme?: "default" | "big" | "medium";
};
const getClasses = ({ color, theme }: GetClassesProps) => {
  let backgroundClass = "";
  let textColorClass = "";
  let borderRoundedClass = "";
  let paddingCLass = "";
  switch (color) {
    case "blue":
      backgroundClass = "bg-indigo-500";
      textColorClass = "text-white";
      break;
    case "red":
      backgroundClass = "bg-red-500";
      textColorClass = "text-white";
      break;
    case "green":
      backgroundClass = "bg-green-500";
      textColorClass = "text-white";
      break;
    case "success-dark":
      backgroundClass = "bg-green-700";
      textColorClass = "text-white";
      break;
    case "yellow":
      backgroundClass = "bg-amber-500";
      textColorClass = "text-white";
      break;
    case "gray":
      backgroundClass = "bg-gray-100";
      textColorClass = "text-black";
      break;
    default:
      backgroundClass = "bg-blue-100";
      textColorClass = "text-white";
      break;
  }

  switch (theme) {
    case "big":
      paddingCLass = "px-5 py-3";
      borderRoundedClass = "rounded-3xl";
      break;
    case "medium":
      paddingCLass = "px-3 py-2";
      borderRoundedClass = "rounded-2xl";
      break;
    default:
      paddingCLass = "px-1";
      borderRoundedClass = "rounded-sm";
      break;
  }
  return {
    backgroundClass,
    textColorClass,
    paddingCLass,
    borderRoundedClass,
  };
};

export default getClasses;
