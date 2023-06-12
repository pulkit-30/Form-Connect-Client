import React, { useEffect } from "react";
import useUserOrgs from "@/hooks/useUserOrgs";
import SelectInput from "../Select";
import DivSkeleton from "../Skeletons/DivSkeleton";
import { SelectOption, UserOrg } from "@/types";
import useUserContext from "@/contexts/UserProvider/useUserContext";

const UserOrgs = () => {
  const {
    userOrgs: { data: userOrgs, isLoading },
  } = useUserOrgs();
  const { organization, setOrganization } = useUserContext();

  useEffect(() => {
    if (userOrgs && userOrgs.length > 0 && !organization) {
      setOrganization(userOrgs[0]?.organization.id || "");
    }
  }, [organization, userOrgs]);

  if (isLoading) {
    return <DivSkeleton className="h-[62px] w-80" />;
  }

  const options: SelectOption[] =
    userOrgs?.map(({ role, organization }: UserOrg) => ({
      label: (
        <div className="flex justify-between text-white">
          <span>{organization.name}</span>
          <span className="italic text-sm">({role})</span>
        </div>
      ),
      value: organization.id,
    })) || [];

  return (
    <div className="flex flex-col justify-center h-[62px]">
      <div className="capitalize text-sm mb-1 ml-1">organization</div>
      <SelectInput
        className="min-w-[14rem] max-w-[24rem]"
        options={options || []}
        defaultOption={options[0]}
        onChange={(option) => setOrganization(option.value)}
      />
    </div>
  );
};

export default UserOrgs;
