import { ReactNode, useEffect, useMemo, useState } from "react";
import usePersistentState from "@/hooks/usePersistentState";
import useRequest from "@/hooks/useRequest";
import { isEmpty } from "lodash";
import { User } from "@/types";
import goToPage from "@/utils/goToPage";
import AuthContext, { AuthData, AuthContextType, LoginData } from "./context";
import { ProtectedRoutes, PublicRoutes } from "@/constants/appRoutes";
import useAlertMessages from "../AlertMessagesProvider/useAlertMessages";

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const { showSuccessAlert, showErrorAlert } = useAlertMessages();
  const [authData, setData] = usePersistentState<AuthData>(
    { key: "access-auth-data" },
    {}
  );
  const { token = "" } = authData;

  const setAuthData = (partialAuthData: Partial<AuthData>) => {
    setData({ ...authData, ...partialAuthData });
  };

  const request = useRequest();
  const logout = useMemo(
    () => () => {
      request("/user/logout", {
        body: { token },
        headers: { Authorization: `Bearer ${token}` },
        method: "DELETE",
      });
      setData({});
      goToPage(PublicRoutes.LOGIN);
      showSuccessAlert("You have been logged out successfully");
    },
    [authData, request, setData]
  );

  const getUser = useMemo(
    () => async () => {
      const response = await request<User>("/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.success) {
        setAuthData({ user: response.data });
      }
      if (!response.success && response.error && response?.statusCode === 401) {
        logout();
      }
    },
    [token]
  );

  useEffect(() => {
    if (!isEmpty(token)) {
      getUser();
    }
  }, [token]);

  const login = useMemo(
    () => async (values: LoginData) => {
      const response = await request("/auth/login", {
        body: values,
      });
      if (response.success) {
        const { token: authToken } = response.data;
        setAuthData({ token: authToken });
        showSuccessAlert("You have been logged in successfully");
        goToPage(ProtectedRoutes.DASHBOARD);
      } else {
        showErrorAlert(response.error.message);
      }
      return response;
    },
    [token]
  );

  const value: AuthContextType = useMemo(
    () => ({
      authData,
      userStatus: {
        isLoggedIn: token ? true : false,
      },
      setAuthData,
      logout,
      login,
    }),

    [authData, setAuthData, logout, login]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
