import Select, { OptionsOrGroups, GroupBase } from "react-select";
import { FieldHelperProps } from "formik";

export type Option = {
  label: string;
  value: any;
  isDisabled?: boolean;
};

export type SelectProps = {
  options: OptionsOrGroups<Option, GroupBase<Option>>;
  placeholder?: string;
  disabled?: boolean;
  value?: any;
  name?: string;
  setValue: FieldHelperProps<string>["setValue"];
  isClearable?: boolean;
  onChange?: (value: any) => void;
  defaultOpen?: boolean;
  isSearchable?: boolean;
  className?: string;
};

const SelectInput = ({
  placeholder,
  options,
  disabled,
  value,
  name,
  setValue,
  isClearable,
  onChange,
  defaultOpen = false,
  isSearchable,
  className = "",
}: SelectProps) => {
  const mappedOptions: Option[] = (options || []).reduce(
    (acc: Option[], option) => {
      const { options: groupOptions } = option as GroupBase<Option>;
      if (groupOptions) {
        return [...acc, ...groupOptions];
      }
      return [...acc, option as Option];
    },
    []
  );
  const selectedValue = (mappedOptions || []).find(
    ({ value: optionValue }) => optionValue === value
  );

  const handleChange = (updatedValue: any) => {
    setValue(updatedValue, true);
    if (onChange) {
      onChange(updatedValue);
    }
  };

  return (
    <Select
      className={className}
      placeholder={placeholder}
      isDisabled={disabled}
      value={selectedValue || { label: "", value }}
      options={options}
      name={name}
      onChange={(option: Option | null) => handleChange(option?.value)}
      isClearable={isClearable}
      defaultMenuIsOpen={defaultOpen}
      isSearchable={isSearchable}
    />
  );
};

export default SelectInput;
