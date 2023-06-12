import useUserContext from "@/contexts/UserProvider/useUserContext";
import useRequest from "../useRequest";
import { useQuery, useMutation } from "react-query";

const useOrgForms = () => {
  const { organization } = useUserContext();
  const request = useRequest();
  const fetchOrgForms = async () => {
    if (organization) {
      const response = await request(`/organization/${organization}/forms`);
      if (response.success) {
        return response.data;
      }
    }
    return [];
  };

  const fetchForms = useQuery(
    `/organization/${organization}/forms`,
    fetchOrgForms
  );

  return {
    fetchForms,
  };
};

export default useOrgForms;
