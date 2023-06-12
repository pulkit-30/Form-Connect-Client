import Button from "@/components/common/Button";
import Form from "@/components/common/Form";
import TextInput from "@/components/common/Form/TextInput";
import { ProtectedRoutes } from "@/constants/appRoutes";
import useAuthContext from "@/contexts/AuthProvider/useAuthContext";
import useRequest from "@/hooks/useRequest";
import { Roles } from "@/types";
import goToPage from "@/utils/goToPage";
import Link from "next/link";
import { useReducer } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import * as yup from "yup";

const LoginPage = () => {
  const { setAuthData } = useAuthContext();
  const request = useRequest();
  const initalValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    orgName: "",
    orgCategory: "",
  };
  const validationSchema = yup.object({
    fullName: yup.string().required().label("Full name"),
    email: yup.string().email().required().label("User email"),
    password: yup.string().required().label("User password"),
    confirmPassword: yup
      .string()
      .required()
      .label("Confirm password")
      .equals([yup.ref("password")], "Password must match"),
    orgName: yup.string().required().label("Organization name"),
    orgCategory: yup.string().required().label("Organization category"),
  });

  const onSubmit = async (values: Record<any, any>) => {
    const response = await request("/auth/register", {
      method: "POST",
      body: {
        ...values,
        role: Roles.OWNER,
      },
    });
    if (response.success) {
      setAuthData({ token: response.data.token });
      goToPage(ProtectedRoutes.DASHBOARD);
    }
  };

  return (
    <Form
      title="register"
      initialValues={initalValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      className="mt-8 mb-4"
    >
      {(values, errors, isSubmitting, isValid, handleBlur, handleChange) => (
        <div className="w-full gap-y-4 flex flex-col">
          <TextInput
            type="text"
            label="full name"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            errorText={errors.fullName}
            placeholder="ex: John Doe"
            required
          />
          <TextInput
            label="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            errorText={errors.email}
            placeholder="ex: username@gmail.com "
            required
          />
          <TextInput
            type="text"
            label="organization name"
            name="orgName"
            value={values.orgName}
            onChange={handleChange}
            onBlur={handleBlur}
            errorText={errors.orgName}
            placeholder="ex: John pvt.ltd"
            required
          />
          <TextInput
            type="text"
            label="organization category"
            name="orgCategory"
            value={values.orgCategory}
            onChange={handleChange}
            onBlur={handleBlur}
            errorText={errors.orgCategory}
            placeholder="ex: IT, Education, etc"
            required
          />
          <TextInput
            type="password"
            label="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            errorText={errors.password}
            placeholder="ex: ********"
            required
          />
          <TextInput
            type="password"
            label="confirm password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            errorText={errors.confirmPassword}
            placeholder="ex: ********"
            required
          />
          <div className="flex justify-center items-center">
            <Button
              type="submit"
              size="medium"
              disabled={isSubmitting || !isValid}
              icon={<AiOutlineLogin />}
            >
              Register
            </Button>
          </div>
          <div className="text-sm flex justify-center items-center p-2 mt-4">
            Don&apos;t have an account?&nbsp;
            <Link href="/auth/login" className="text-blue-500">
              SignIn here
            </Link>
          </div>
        </div>
      )}
    </Form>
  );
};

export default LoginPage;
