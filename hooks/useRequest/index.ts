import useAuthContext from "@/contexts/AuthProvider/useAuthContext";
import useAlertMessages from "@/contexts/AlertMessagesProvider/useAlertMessages";
import { AlertMessageTypes, ResponseType } from "@/types";
import getRequestInit from "./util/getRequestInit";
import { UseRequestOptions } from "./types";
import apiBaseUrl from "@/constants/apiBaseUrl";

const REQUEST_FAIL_ERROR_MESSAGE = "Request failed.";

const useRequest = () => {
  const {
    authData: { token = "" },
  } = useAuthContext();

  const { showErrorAlert } = useAlertMessages();

  return async <ResponseData = Record<string, any>>(
    path: string,
    options?: UseRequestOptions
  ): Promise<ResponseType<ResponseData>> => {
    const requestOptions = getRequestInit(token, options);

    try {
      const response = await fetch(`${apiBaseUrl}/v1${path}`, requestOptions);
      const data = await response.json();
      return { ...data, statusCode: response.status };
    } catch (e: any) {
      const message = e.statusText || REQUEST_FAIL_ERROR_MESSAGE;
      showErrorAlert(message, AlertMessageTypes.REQUEST_ERROR);

      return {
        success: false,
        error: { message },
      };
    }
  };
};

export default useRequest;
