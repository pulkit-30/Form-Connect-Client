export const PublicRoutes = {
  HOME: "/",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
};
export const ProtectedRoutes = {
  DASHBOARD: "/user/dashboard",
  CREATEFORM: "/user/organization/form/create",
  EDITFORM: (formId: string) => `/user/organization/form/${formId}/edit/`,
  //   PROFILE: "/profile",
  //   SETTINGS: "/settings",
};
export const UniversalRoutes = {
  RESPONSEPAGE: "/form/[formToken]/response",
};
const AppRoutes = {
  PublicRoutes,
  ProtectedRoutes,
  UniversalRoutes,
};
export default AppRoutes;
