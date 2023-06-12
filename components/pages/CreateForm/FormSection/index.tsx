import TextInput from "@/components/common/Form/TextInput";
import defaultField from "@/constants/defaultField";
import { Field } from "@/types";
import GlassBg from "@/components/common/GlassBg";
import Button from "@/components/common/Button";
import { AiOutlineDelete, AiOutlineInfoCircle } from "react-icons/ai";
import getUID from "@/utils/getUID";
import Chip from "@/components/common/Chip";
import { IoAddOutline } from "react-icons/io5";

type Props = {
  name: string;
  fields: Field[];
  updateFields: (fields: Field[]) => void;
};

const FormSection = ({ name, fields, updateFields }: Props) => {
  const addNewField = () => {
    const newField = { ...defaultField, id: getUID() };
    updateFields([...fields, newField]);
  };

  const removeField = (id: string) => {
    updateFields(fields.filter((field) => field.id !== id));
  };

  return (
    <GlassBg className="min-w-[45%] grow flex flex-col gap-y-2">
      <div className="text-xl font-semibold gap-x-4 gap-y-2 border-b border-slate-800 pb-6 flex justify-between items-center">
        <div>{name.trim() || "Untitled"}</div>
        <Button
          size="small"
          className="hover:text-green-500 hover:border-green-500"
          onClick={addNewField}
          icon={<IoAddOutline />}
        >
          Add New Field
        </Button>
      </div>
      <div className="w-full flex gap-y-4 flex-col">
        {!fields.length && (
          <div className="text-sm mt-2 p-2 flex gap-x-1">
            Click on{" "}
            <Chip>
              Add New Field <IoAddOutline />
            </Chip>{" "}
            Button to add fields
          </div>
        )}
        {fields.map(
          ({ id, type, placeholder, label, defaultValue, isRequired }) => (
            <div
              className="flex items-center justify-center gap-x-2 w-full"
              key={id}
            >
              <div className="grow pb-4">
                <TextInput
                  label={label || "Untitled"}
                  type={type}
                  placeholder={placeholder}
                  defaultValue={defaultValue}
                  required={isRequired}
                />
              </div>
              <Button
                size="medium"
                className="text-red-500 mt-2 border-red-500"
                icon={<AiOutlineDelete />}
                onClick={() => removeField(id)}
              />
            </div>
          )
        )}
      </div>
    </GlassBg>
  );
};

export default FormSection;
