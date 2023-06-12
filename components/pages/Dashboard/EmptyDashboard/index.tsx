import Button from "@/components/common/Button";
import { IoAddOutline } from "react-icons/io5";
import Link from "next/link";
import { ProtectedRoutes } from "@/constants/appRoutes";

const EmptyDashboard = () => {
  return (
    <div className="p-4 w-full min-h-[30vh] items-center justify-center flex flex-col gap-y-4">
      <div className="text-lg">Let&apos;s start buolding very first form</div>
      <Link href={ProtectedRoutes.CREATEFORM}>
        <Button
          className="hover:text-indigo-300 hover:border-indigo-300"
          icon={<IoAddOutline />}
        >
          Create First Form{" "}
        </Button>
      </Link>
    </div>
  );
};

export default EmptyDashboard;
