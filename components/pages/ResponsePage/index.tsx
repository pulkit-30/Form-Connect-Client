import Button from "@/components/common/Button";
import Form from "@/components/common/Form";
import TextInput from "@/components/common/Form/TextInput";
import useAlertMessages from "@/contexts/AlertMessagesProvider/useAlertMessages";
import useRequest from "@/hooks/useRequest";
import { Form as FormType } from "@/types";
import React from "react";
import * as yup from "yup";

type Props = {
  form: FormType;
};

const ResponsePage = ({ form }: Props) => {
  const request = useRequest();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  let initialValues: Record<string, any> = {};
  const { showErrorAlert, showSuccessAlert } = useAlertMessages();
  let schema: Record<string, any> = {};
  const getSchema = (type: string) => {
    switch (type) {
      case "number":
        return yup.number();
      case "email":
        return yup.string().email();
      case "tel":
        return yup.string().matches(/^[0-9]+$/, "Must be only digits");
      default:
        return yup.string();
    }
  };

  form?.fields.forEach(({ label, defaultValue, isRequired, type }) => {
    initialValues[label] = defaultValue;
    schema[label] = isRequired ? getSchema(type).required() : getSchema(type);
  });

  const onSubmit = async (values: Record<string, any>) => {
    const response = await request("/response/form/save", {
      method: "POST",
      body: {
        formId: form.id,
        response: values,
      },
    });
    if (response.success) {
      showSuccessAlert("Response saved successfully");
      setIsSubmitted(true);
    } else {
      showErrorAlert("Error saving response");
    }
  };

  return (
    <Form
      initialValues={initialValues}
      validationSchema={yup.object(schema)}
      title={form?.name}
      onSubmit={onSubmit}
      className="pt-8"
    >
      {(values, errors, isSubmitting, isValid, handleBlur, handleChange) => (
        <div className="w-full flex flex-col gap-y-8">
          {isSubmitted && (
            <div className="text-green-500"> Response saved successfully!</div>
          )}
          {form?.fields.map(
            ({ label, defaultValue, type, placeholder, isRequired }) => (
              <TextInput
                name={label}
                key={label}
                label={label}
                type={type}
                required={isRequired}
                placeholder={placeholder}
                value={values[label]}
                onChange={handleChange}
                onBlur={handleBlur}
                errorText={errors[label]}
              />
            )
          )}
          <div className="flex justify-center mt-8">
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </div>
        </div>
      )}
    </Form>
  );
};

export default ResponsePage;
