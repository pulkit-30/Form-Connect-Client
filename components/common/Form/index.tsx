import React from "react";
import { Formik, Form as FormComponent } from "formik";

type Props = {
  className?: string;
  title?: string;
  children: (
    values: Record<string, any>,
    errors: Record<string, any>,
    isSubmitting: boolean,
    isValid: boolean,
    handleBlur: (e: React.FocusEvent<any>) => void,
    handleChange: (e: React.ChangeEvent<any>) => void
  ) => React.ReactNode;
  initialValues: Record<string, any>;
  validationSchema: Record<string, any>;
  onSubmit: (values: Record<string, any>) => void;
};
const Form = ({ className, title, children, ...rest }: Props) => {
  return (
    <div className="w-full mt-4 mb-4 flex justify-center items-center">
      <div className="min-w-[500px] bg-slate-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-2xl shadow-slate-900 p-8">
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
            handleBlur,
            handleChange,
          }) => (
            <FormComponent>
              <div className="flex justify-center items-center w-full flex-col gap-y-2 py-4 px-2">
                {children(
                  values,
                  errors,
                  isSubmitting,
                  isValid,
                  handleBlur,
                  handleChange
                )}
              </div>
            </FormComponent>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Form;
