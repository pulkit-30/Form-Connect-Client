import Select from "react-select";
import { SelectOption } from "@/types";

type Props = {
  options: SelectOption[];
  defaultOption?: SelectOption;
  className?: string;
  onChange?: (newValue: any) => void;
  value?: SelectOption;
  isClearable?: boolean;
  disabled?: boolean;
};
const SelectInput = ({
  options,
  defaultOption,
  className,
  onChange,
  value,
  isClearable = false,
  disabled = false,
}: Props) => (
  <Select
    menuPlacement="auto"
    className={`${className} text-black bg-transparent`}
    styles={{
      control: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor: "transparent",
        color: "white",
      }),
    }}
    defaultValue={defaultOption}
    options={options}
    onChange={onChange}
    value={value}
    isClearable={isClearable}
    isDisabled={disabled}
  />
);

export default SelectInput;
