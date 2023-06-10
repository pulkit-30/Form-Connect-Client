import { useQuery } from "react-query";
import useRequest from "@/hooks/useRequest";
import useAuthContext from "@/contexts/AuthProvider/useAuthContext";
import { User } from "@/types";

const useUser = () => {
  const request = useRequest();
  const {
    authData: { token = "" },
    userStatus: { isLoggedIn },
    logout,
  } = useAuthContext();

  const fetchUser = async () => {
    if (!isLoggedIn) return {} as User;
    const response = await request<User>("/user/me");

    if (response.success) {
      return response.data;
    }
    if (!response.success && response.error && response?.statusCode === 401) {
      logout();
    }
    return {} as User;
  };

  const data = useQuery(`user-${token}`, fetchUser);

  return {
    ...data,
  };
};

export default useUser;
