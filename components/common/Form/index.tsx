import React from "react";
import { Formik, Form as FormComponent } from "formik";
import GlassBg from "../GlassBg";

type Props = {
  className?: string;
  title?: string;
  children: (
    values: Record<string, any>,
    errors: Record<string, any>,
    isSubmitting: boolean,
    isValid: boolean,
    handleBlur: (e: React.FocusEvent<any>) => void,
    handleChange: (e: React.ChangeEvent<any>) => void,
    submitForm: () => void
  ) => React.ReactNode;
  initialValues: Record<string, any>;
  validationSchema: Record<string, any>;
  onSubmit: (values: Record<string, any>) => void;
};
const Form = ({ className, title, children, ...rest }: Props) => {
  return (
    <div className={`${className} flex justify-center items-center`}>
      <GlassBg>
        <div className="w-full flex justify-center items-center text-2xl capitalize font-semibold p-2 border-b-2 border-slate-900">
          {title}
        </div>
        <Formik {...rest}>
          {({
            values,
            errors,
            isSubmitting,
            isValid,
            isInitialValid,
            submitForm,
            handleBlur,
            handleChange,
          }) => (
            <FormComponent>
              <div className="flex justify-center items-center min-w-[500px] flex-col gap-y-2 py-4 px-2">
                {children(
                  values,
                  errors,
                  isSubmitting,
                  isValid,
                  handleBlur,
                  handleChange,
                  submitForm
                )}
              </div>
            </FormComponent>
          )}
        </Formik>
      </GlassBg>
    </div>
  );
};

export default Form;
