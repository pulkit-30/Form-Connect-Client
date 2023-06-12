import Button from "@/components/common/Button";
import UserOrgs from "@/components/common/UserOrg";
import { ProtectedRoutes } from "@/constants/appRoutes";
import { IoAddOutline } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <UserOrgs />
      <Link href={ProtectedRoutes.CREATEFORM}>
        <Button icon={<IoAddOutline />}>Create New Form</Button>
      </Link>
    </div>
  );
};

export default Header;
