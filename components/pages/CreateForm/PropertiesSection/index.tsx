import GlassBg from "@/components/common/GlassBg";
import { Field as FieldType } from "@/types";
import Field from "./Field";
import Chip from "@/components/common/Chip";
import { IoAddOutline } from "react-icons/io5";

type Props = {
  fields: FieldType[];
  updateFields: Function;
};
const PropertiesSection = ({ fields, updateFields }: Props) => {
  const updateFieldsData = (newField: FieldType) => {
    const newFields = fields.map((field) => {
      if (field.id === newField.id) {
        return newField;
      }
      return field;
    });
    updateFields(newFields);
  };
  return (
    <GlassBg className="w-1/2 grow flex flex-col gap-y-2">
      <div className="text-xl font-semibold gap-x-4 gap-y-2 border-b border-slate-800 pb-6 flex justify-between items-center">
        Properties
      </div>
      {!fields.length && (
        <div className="text-sm mt-2 p-2 flex gap-x-1">
          Click on{" "}
          <Chip>
            Add New Field <IoAddOutline />
          </Chip>{" "}
          Button to add fields and set their properties
        </div>
      )}
      {fields.map((field) => (
        <Field key={field.id} field={field} updateFields={updateFieldsData} />
      ))}
    </GlassBg>
  );
};

export default PropertiesSection;
