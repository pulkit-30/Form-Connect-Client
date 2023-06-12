import useUserContext from "@/contexts/UserProvider/useUserContext";
import useRequest from "../useRequest";
import { useMutation } from "react-query";
import useAlertMessages from "@/contexts/AlertMessagesProvider/useAlertMessages";
import goToPage from "@/utils/goToPage";
import { ProtectedRoutes } from "@/constants/appRoutes";
import { Form } from "@/types";

const useFormActions = () => {
  const request = useRequest();
  const { organization } = useUserContext();
  const { showSuccessAlert, showErrorAlert } = useAlertMessages();

  const saveFormAsDraft = useMutation(
    (form: Form) => {
      return request(`/organization/${organization}/form/draft`, {
        method: "POST",
        body: { form },
      });
    },
    {
      onSettled: (response) => {
        if (response?.success) {
          showSuccessAlert("Form Saved as Draft");
          goToPage(ProtectedRoutes.DASHBOARD);
        } else {
          showErrorAlert("Error Saving Form");
        }
      },
    }
  );

  const publishForm = useMutation(
    (form: Form) => {
      return request(`/organization/${organization}/form/publish`, {
        method: "POST",
        body: { form },
      });
    },
    {
      onSettled: (response) => {
        if (response?.success) {
          showSuccessAlert("Form Published");
          goToPage(ProtectedRoutes.DASHBOARD);
        } else {
          showErrorAlert("Error Publishing Form");
        }
      },
    }
  );

  const archiveForm = useMutation((form: string) => {
    return request(`/organization/${organization}/form/${form}/archive`, {
      method: "DELETE",
    });
  });

  return { saveFormAsDraft, publishForm, archiveForm };
};

export default useFormActions;
