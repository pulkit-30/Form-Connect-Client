import { ReactNode, useEffect } from "react";
import Provider from "./Provider";
import useAuthContext from "@/contexts/AuthProvider/useAuthContext";
import usePublicRoute from "@/hooks/usePublicRoute";
import goToPage from "@/utils/goToPage";

type Props = {
  children: ReactNode;
};
const LayoutProvider = ({ children }: Props) => {
  const { isPublicRoute, isUniversalroute } = usePublicRoute();
  const {
    userStatus: { isLoggedIn },
  } = useAuthContext();
  useEffect(() => {
    if (isLoggedIn && isPublicRoute) {
      goToPage("/user/dashboard");
    } else if (!isLoggedIn && !isPublicRoute && !isUniversalroute) {
      goToPage("/auth/login");
    }
  }, [isPublicRoute, isLoggedIn]);

  return <Provider>{children}</Provider>;
};

export default LayoutProvider;
