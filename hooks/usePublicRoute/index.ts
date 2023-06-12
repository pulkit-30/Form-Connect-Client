import { PublicRoutes, UniversalRoutes } from "@/constants/appRoutes";
import { useRouter } from "next/router";

const usePublicRoute = () => {
  const router = useRouter();
  const publicRoutes = Object.values(PublicRoutes);
  const universalRoutes = Object.values(UniversalRoutes);

  return {
    isPublicRoute: publicRoutes.includes(router.pathname),
    isUniversalroute: universalRoutes.includes(router.pathname),
  };
};

export default usePublicRoute;
