import FieldWrapper from "@/components/common/Form/FieldWrapper";
import Select, { SelectProps } from "@/components/common/Form/Select";
import { useField } from "formik";
import MultiSelect from "../MultiSelect";

interface SelectInputProps
  extends Omit<SelectProps, "value" | "setValue" | "hasError" | "name"> {
  name: string;
  label?: string;
  noLabel?: boolean;
  isMulti?: boolean;
}

const SelectInput = ({
  label,
  name,
  noLabel,
  isMulti = false,
  ...rest
}: SelectInputProps) => {
  const [field, meta, helpers] = useField(name);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <FieldWrapper label={label} errorText={errorText} noLabel={noLabel}>
      {isMulti ? (
        <MultiSelect
          name={name}
          value={field.value}
          setValue={helpers.setValue}
          {...rest}
        />
      ) : (
        <Select
          name={name}
          value={field.value}
          setValue={helpers.setValue}
          {...rest}
        />
      )}
    </FieldWrapper>
  );
};

export default SelectInput;
