import { useMutation } from "react-query";
import useRequest from "../useRequest";
import { Form } from "@/types";

const useResponseForm = () => {
  const request = useRequest();

  const fetchForm = useMutation((token: string) => {
    return request<Form>(`/response/form`, {
      method: "POST",
      body: {
        token,
      },
    });
  });

  return {
    fetchForm,
  };
};

export default useResponseForm;
