import { useState } from "react";
import Header from "./Header";
import FormSection from "./FormSection";
import PropertiesSection from "./PropertiesSection";
import { AlertMessageVariants, Field } from "@/types";
import Chip from "@/components/common/Chip";
import AlertIcon from "@/contexts/AlertMessagesProvider/AlertMessages/AlertMessage/AlertIcon";
import useFormActions from "@/hooks/useFormActions";

const CreateFormPage = () => {
  const [name, setName] = useState<string>("New-Form");
  const [description, setDescription] = useState<string>("my new form.");
  const [fields, updateFields] = useState<Field[]>([]);
  const {
    saveFormAsDraft: { mutate: draft, isLoading },
    publishForm: { mutate: publish, isLoading: isPublishing },
  } = useFormActions();
  const handleSaveAsDraft = () => draft({ name, description, fields });
  const handelPublish = () => publish({ name, description, fields });

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

export default CreateFormPage;
