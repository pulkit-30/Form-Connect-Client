import Button from "../Button";

type Props = {
  active: boolean;
  onClick: () => void;
};

const Toggle = ({ onClick, active }: Props) => (
  <Button
    size="small"
    onClick={onClick}
    className={`gap-x-2 ${active ? "border-green-500" : "border-white"}`}
  >
    <span
      className={`transition flex items-center relative h-5 w-10 ${
        !active ? "justify-end" : ""
      }`}
    >
      <span
        className={`h-3 w-8 ${
          active ? "bg-green-500" : "bg-slate-500"
        }  rounded-2xl`}
      />
      <span
        className={`h-5 w-5 ${
          active ? "bg-green-600" : "bg-slate-600"
        } rounded-full absolute ${
          active ? "right-0" : "left-0"
        } drop-shadow-toggle`}
      />
    </span>
  </Button>
);

export default Toggle;
