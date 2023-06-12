import { AlertMessageVariants, Field, Form } from "@/types";
import Header from "../CreateForm/Header";
import Chip from "@/components/common/Chip";
import FormSection from "../CreateForm/FormSection";
import PropertiesSection from "../CreateForm/PropertiesSection";
import { useState } from "react";
import useFormActions from "@/hooks/useFormActions";
import AlertIcon from "@/contexts/AlertMessagesProvider/AlertMessages/AlertMessage/AlertIcon";

type Props = {
  form: Form;
};
const EditForm = ({ form }: Props) => {
  const [name, setName] = useState<string>(form.name);
  const [fields, updateFields] = useState<Field[]>(form.fields);
  const [description, setDescription] = useState<string>(form.description);
  const {
    saveFormAsDraft: { mutate: draft, isLoading },
    publishForm: { mutate: publish, isLoading: isPublishing },
  } = useFormActions();
  const handleSaveAsDraft = () => draft({ ...form, name, description, fields });
  const handelPublish = () => publish({ ...form, name, description, fields });

  return (
    <>
      <Header
        name={name}
        setName={setName}
        handelSaveAsDraft={handleSaveAsDraft}
        handlePublish={handelPublish}
        disabled={isLoading || isPublishing}
      />
      <div className="w-full p-3">
        <div className="text-lg">
          Form Description <span className="text-red-500">*</span>
        </div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="words that describe the form"
          className="w-full bg-transparent border-b border-gray-300 mt-2 text-sm focus:outline-none focus:border-indigo-500"
          name="description"
          required
        />
      </div>
      {!fields.length && (
        <Chip theme="medium" color="red" className="mb-4">
          {AlertIcon({ variant: AlertMessageVariants.ERROR })}
          Atleast one field is required to create a form.
        </Chip>
      )}
      <div className="flex gap-x-4 gap-y-2 justify-items-start items-start flex-wrap">
        <FormSection name={name} fields={fields} updateFields={updateFields} />
        <PropertiesSection fields={fields} updateFields={updateFields} />
      </div>
    </>
  );
};

export default EditForm;
