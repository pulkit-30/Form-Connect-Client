import Button from "@/components/common/Button";
import Chip from "@/components/common/Chip";
import Form from "@/components/common/Form";
import TextInput from "@/components/common/Form/TextInput";
import ContainerSkeleton from "@/components/common/Skeletons/ConatinerSkeleton";
import ResponsePage from "@/components/pages/ResponsePage";
import { ProtectedRoutes, PublicRoutes } from "@/constants/appRoutes";
import useResponseForm from "@/hooks/useResponseForm";
import { Form as FormType } from "@/types";
import goToPage from "@/utils/goToPage";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import * as yup from "yup";

const PublicResponsePage = () => {
  const router = useRouter();
  const [form, updateForm] = useState<FormType | null>(null);
  const { formToken } = router.query;
  const {
    fetchForm: { mutate: fetchForm, isLoading },
  } = useResponseForm();

  useEffect(() => {
    if (formToken) {
      fetchForm(formToken as string, {
        onSettled: (response) => {
          if (response?.success) {
            updateForm(response.data);
          }
        },
      });
    }
  }, [formToken]);

  if (!router.isReady || isLoading) {
    return <ContainerSkeleton />;
  }

  if (!formToken) {
    return <div>Invalid Request</div>;
  }
  if (!form) {
    return (
      <div className="flex justify-center flex-col gap-4 items-center h-80">
        <Chip color="red" theme="big" className="">
          Currently form not accepting responses
        </Chip>
        <Button onClick={() => goToPage(PublicRoutes.HOME)}>Go back</Button>
      </div>
    );
  }

  return <ResponsePage form={form} />;
};

export default PublicResponsePage;
