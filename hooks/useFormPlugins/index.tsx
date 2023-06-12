import useUserContext from "@/contexts/UserProvider/useUserContext";
import useRequest from "../useRequest";
import { useQuery } from "react-query";

type Props = {
  formId?: string;
};
const useFormPlugins = ({ formId }: Props) => {
  const request = useRequest();
  const { organization } = useUserContext();
  const getPlugins = async () => {
    if (organization && formId) {
      const response = await request(
        `/organization/${organization}/form/${formId}/plugins`
      );
      if (response.success) {
        return response.data;
      }
    }
    return [];
  };

  const fetchFormPlugins = useQuery(
    `/organization/${organization}/form/${formId}/plugins`,
    getPlugins
  );

  return {
    fetchFormPlugins,
  };
};

export default useFormPlugins;
