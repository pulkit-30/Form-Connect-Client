import axios from "axios";
import { useQuery } from "react-query";
import useRequest from "../useRequest";
import useUserContext from "@/contexts/UserProvider/useUserContext";
import useAuthContext from "@/contexts/AuthProvider/useAuthContext";
import useAlertMessages from "@/contexts/AlertMessagesProvider/useAlertMessages";

const useFormIntegrations = () => {
  const request = useRequest();
  const { showErrorAlert, showSuccessAlert } = useAlertMessages();
  const { organization } = useUserContext();
  const {
    authData: { user },
  } = useAuthContext();

  const fecthIntegrations = async () => {
    const response = await request("/plugins");
    if (response.success) {
      return response.data;
    }
    return [];
  };

  const fetchAvailableIntegrations = useQuery("/plugins", fecthIntegrations);

  const startIntegration = async ({
    authUrl,
    formId,
  }: {
    authUrl: string;
    formId: string;
  }) => {
    try {
      if (!organization) {
        return {
          success: false,
          message: "Organization not found",
        };
      }

      const response = await axios.post(authUrl, {
        orgId: organization,
        formId,
        email: user?.email,
      });

      if (response.status === 200) {
        showSuccessAlert("Integration Sucess!");
        return {
          success: true,
          message: "Integration Sucessfully started",
        };
      }
      showErrorAlert("inegration failed");
      return {
        success: false,
        message: "Something went wrong",
      };
    } catch (err) {
      showErrorAlert("inegration failed");
      return {
        success: false,
        message: "Something went wrong",
      };
    }
  };
  return { fetchAvailableIntegrations, startIntegration };
};

export default useFormIntegrations;
