import React from "react";
import Button from "@/components/common/Button";
import { MdPublishedWithChanges } from "react-icons/md";
import { RiDraftLine } from "react-icons/ri";
import UserOrgs from "@/components/common/UserOrg";
import TextInput from "@/components/common/Form/TextInput";
import Settings from "./Settings";
import { useRouter } from "next/router";

type Props = {
  name: string;
  setName: (name: string) => void;
  handelSaveAsDraft: () => void;
  handlePublish: () => void;
  disabled: boolean;
};
const Header = ({
  name,
  setName,
  handelSaveAsDraft,
  handlePublish,
  disabled,
}: Props) => {
  const router = useRouter();

  return (
    <div className="flex justify-between flex-wrap items-center gap-4 gap-4 w-full mt-8 mb-8">
      <div className="flex flex-wrap items-center gap-4">
        <div className="min-w-[14rem] max-w-[24rem]">
          <TextInput
            label="Form Name"
            name="name"
            placeholder="ex: my-form"
            value={name}
            onChange={(e: any) => setName(e.target.value.trim())}
            required
          />
        </div>
        <div>
          <UserOrgs />
        </div>
      </div>
      <div className="flex gap-4 mt-4 flex-wrap">
        <Button
          onClick={handelSaveAsDraft}
          icon={<RiDraftLine />}
          disabled={disabled}
        >
          Save As Draft
        </Button>
        {router.query.formId && (
          <Button
            className="text-green-500 border-green-500"
            icon={<MdPublishedWithChanges />}
            onClick={handlePublish}
          >
            Publish
          </Button>
        )}
        {router.query.formId && <Settings />}
      </div>
    </div>
  );
};

export default Header;
