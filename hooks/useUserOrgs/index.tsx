import { UserOrg } from "@/types";
import useRequest from "../useRequest";
import { useQuery } from "react-query";

const useUserOrgs = () => {
  const request = useRequest();
  const fetchUserOrgs = async () => {
    const response = await request<UserOrg[]>("/user/organizations");
    if (response.success) {
      return response.data;
    }
    return [];
  };
  const userOrgs = useQuery<UserOrg[]>("/user/organizations", fetchUserOrgs);
  return {
    userOrgs,
  };
};

export default useUserOrgs;
