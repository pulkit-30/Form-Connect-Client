import { ReactNode, useEffect, useMemo } from "react";
import usePersistentState from "@/hooks/usePersistentState";
import UserContext, { UserContextType } from "./context";

type Props = {
  children: ReactNode;
};

const UserProvider = ({ children }: Props) => {
  const [organization, setOrganization] = usePersistentState<string>(
    { key: "organization" },
    ""
  );

  const value: UserContextType = useMemo(
    () => ({
      organization,
      setOrganization,
    }),

    [organization, setOrganization]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
