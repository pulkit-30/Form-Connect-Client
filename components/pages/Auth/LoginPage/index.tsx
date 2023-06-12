import Button from "@/components/common/Button";
import Form from "@/components/common/Form";
import { AiOutlineLogin } from "react-icons/ai";
import TextInput from "@/components/common/Form/TextInput";
import useRequest from "@/hooks/useRequest";
import Link from "next/link";
import * as yup from "yup";
import useAuthContext from "@/contexts/AuthProvider/useAuthContext";

type LoginData = {
  email: string;
  password: string;
};
const LoginPage = () => {
  const { login } = useAuthContext();
  const onSubmit = async (values: Record<string, any>) => {
    await login(values as LoginData);
  };
  const initalValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object({
    email: yup.string().email().required().label("User email"),
    password: yup.string().required().label("User password"),
  });
  return (
    <Form
      title="Login"
      initialValues={initalValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      className="mt-4 mb-4"
    >
      {(values, errors, isSubmitting, isValid, handleBlur, handleChange) => (
        <div className="w-full gap-y-4 flex flex-col">
          <TextInput
            label="email"
            name="email"
            placeholder="ex: username@example.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            errorText={errors.email}
            required
          />
          <TextInput
            type="password"
            label="password"
            placeholder="ex: ************"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            errorText={errors.password}
            required
          />
          <div className="flex justify-center items-center">
            <Button
              type="submit"
              size="medium"
              disabled={isSubmitting || !isValid}
              icon={<AiOutlineLogin />}
            >
              LogIn
            </Button>
          </div>
          <div className="text-sm flex justify-center items-center p-2 mt-4">
            Don&apos;t have an account?&nbsp;
            <Link href="/auth/register" className="text-blue-500">
              SignUp here
            </Link>
          </div>
        </div>
      )}
    </Form>
  );
};

export default LoginPage;
