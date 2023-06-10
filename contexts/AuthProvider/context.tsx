import { User } from "@/types";
import { createContext } from "react";

export type AuthData = {
  token?: string;
  user?: User;
};

export type LoginData = {
  email: string;
  password: string;
};

export type AuthContextType = {
  authData: AuthData;
  userStatus: {
    isLoggedIn: boolean;
  };
  setAuthData: (p: Partial<AuthData>) => void;
  logout: () => void;
  login: (values: LoginData) => any;
};

const initialContext: AuthContextType = {
  authData: {},
  userStatus: {
    isLoggedIn: false,
  },
  setAuthData: () => null,
  logout: () => null,
  login: () => null,
};

const AuthContext = createContext(initialContext);

export default AuthContext;
