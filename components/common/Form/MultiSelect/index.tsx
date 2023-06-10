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
  value: string[];
  name?: string;
  setValue: FieldHelperProps<string>["setValue"];
  isClearable?: boolean;
  onChange?: (value: any) => void;
  defaultOpen?: boolean;
  isSearchable?: boolean;
  className?: string;
};

const MultiSelect = ({
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
  const selectedValue = (mappedOptions || []).filter(({ value: optionValue }) =>
    value.includes(optionValue)
  );

  const handleChange = (updatedValue: any) => {
    setValue(
      updatedValue?.map((v: Option) => v.value),
      true
    );
    if (onChange) {
      onChange(updatedValue);
    }
  };

  return (
    <Select
      isMulti
      className={className}
      placeholder={placeholder}
      isDisabled={disabled}
      value={selectedValue}
      options={options}
      name={name}
      onChange={(option: any) => handleChange(option)}
      isClearable={isClearable}
      defaultMenuIsOpen={defaultOpen}
      isSearchable={isSearchable}
    />
  );
};

export default MultiSelect;
