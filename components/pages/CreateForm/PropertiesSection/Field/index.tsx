import Accordian from "@/components/common/Accordian";
import SelectInput from "@/components/common/Select";
import Toggle from "@/components/common/Toggle";
import { Field, FieldTypes } from "@/types";
import FieldWrapper from "./FieldWrapper";
import Input from "@/components/common/Form/Input";
import Button from "@/components/common/Button";

type Props = {
  field: Field;
  updateFields: Function;
};
const Field = ({ field, updateFields }: Props) => {
  const updateThisField = ({ key, value }: { key: string; value: any }) => {
    updateFields({
      ...field,
      [key]: value,
    });
  };
  return (
    <Accordian title={field.label || "Untitled"}>
      <FieldWrapper>
        <span className="w-24">Label</span>
        <Input
          name="label"
          className="h-10 text-black"
          placeholder="label"
          value={field.label}
          onChange={({ target }) =>
            updateThisField({ key: "label", value: target.value })
          }
        />
      </FieldWrapper>
      <FieldWrapper>
        <div className="w-24">Type</div>
        <SelectInput
          onChange={({ value }) => updateThisField({ key: "type", value })}
          options={Object.keys(FieldTypes).map((type) => ({
            label: type,
            // @ts-ignore
            value: FieldTypes[type],
          }))}
          className="w-full"
          defaultOption={{ label: field.type, value: field.type }}
        />
      </FieldWrapper>
      <FieldWrapper>
        <span className="w-24">Description</span>
        <Input
          name="description"
          className="h-10 text-black"
          placeholder="description"
          value={field.description}
          onChange={({ target }) =>
            updateThisField({ key: "description", value: target.value })
          }
        />
      </FieldWrapper>
      <FieldWrapper>
        <span className="w-24">Placeholder</span>
        <Input
          name="placeholder"
          className="h-10 text-black"
          placeholder="placeholder"
          value={field.placeholder}
          onChange={({ target }) =>
            updateThisField({ key: "placeholder", value: target.value })
          }
        />
      </FieldWrapper>
      <FieldWrapper>
        <span className="w-24">isRequired</span>
        <div className="flex gap-x-2 items-center">
          <Toggle
            active={field.isRequired}
            onClick={() =>
              updateThisField({
                key: "isRequired",
                value: !field.isRequired,
              })
            }
          />
        </div>
      </FieldWrapper>
      <div className="flex justify-end">
        {/* <Button className="hover:border-green-500 hover:text-green-500">
          Save
        </Button> */}
      </div>
    </Accordian>
  );
};

export default Field;
