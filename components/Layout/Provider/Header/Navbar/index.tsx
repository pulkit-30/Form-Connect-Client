import Button from "@/components/common/Button";
import Logo from "@/components/common/Logo";
import { AiOutlineLogin } from "react-icons/ai";
import Link from "next/link";
import { ProtectedRoutes, PublicRoutes } from "@/constants/appRoutes";
import usePublicRoute from "@/hooks/usePublicRoute";
import useAuthContext from "@/contexts/AuthProvider/useAuthContext";

const Navbar = () => {
  const { isPublicRoute } = usePublicRoute();
  const { logout } = useAuthContext();

  return (
    <nav className="w-11/12 m-auto items-center justify-between font-mono text-sm lg:flex gap-x-2">
      <Link
        href={isPublicRoute ? PublicRoutes.HOME : ProtectedRoutes.DASHBOARD}
        className="font-semibold text-lg"
      >
        <Logo />
      </Link>
      <div className="flex gap-x-4">
        <Link
          href={isPublicRoute ? PublicRoutes.LOGIN : ProtectedRoutes.DASHBOARD}
        >
          <Button
            onClick={() => {
              if (!isPublicRoute) {
                logout();
              }
            }}
            size="medium"
            className={
              isPublicRoute ? "hover:text-indigo-500" : "hover:text-red-600"
            }
            icon={<AiOutlineLogin />}
          >
            {isPublicRoute ? "Login" : "LogOut"}
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
