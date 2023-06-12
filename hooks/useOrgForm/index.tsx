import { Form } from "@/types";
import { useQuery } from "react-query";
import useRequest from "../useRequest";
import useUserContext from "@/contexts/UserProvider/useUserContext";

const useOrgForm = ({ formId }: { formId: string }) => {
  const request = useRequest();
  const { organization } = useUserContext();

  const fetchOrgForm = async () => {
    if (organization && formId) {
      const response = await request<Form>(
        `/organization/${organization}/form/${formId}`
      );
      if (response.success) {
        return response.data;
      }
    }
    return null;
  };

  const fetchForm = useQuery<Form | null>(
    `/organization/${organization}/form/${formId}`,
    fetchOrgForm
  );

  return {
    fetchForm,
  };
};

export default useOrgForm;
