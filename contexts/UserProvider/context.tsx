import { createContext } from "react";

export type UserContextType = {
  organization: string;
  setOrganization: (organization: string) => void;
};

const initialContext: UserContextType = {
  organization: "",
  setOrganization: () => {},
};

const UserContext = createContext(initialContext);

export default UserContext;
