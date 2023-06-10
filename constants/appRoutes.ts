export const PublicRoutes = {
  HOME: "/",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
};
export const ProtectedRoutes = {
  DASHBOARD: "/user/dashboard",
  //   PROFILE: "/profile",
  //   SETTINGS: "/settings",
};
export const UniversalRoutes = {};
const AppRoutes = {
  PublicRoutes,
  ProtectedRoutes,
  UniversalRoutes,
};
export default AppRoutes;
