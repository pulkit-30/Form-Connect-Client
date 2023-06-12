import Chip from "@/components/common/Chip";
import ContainerSkeleton from "@/components/common/Skeletons/ConatinerSkeleton";
import EditForm from "@/components/pages/EditForm";
import { ProtectedRoutes } from "@/constants/appRoutes";
import useOrgForm from "@/hooks/useOrgForm";
import { PublicationStatus } from "@/types";
import goToPage from "@/utils/goToPage";

import { useRouter } from "next/router";

const Edit = () => {
  const router = useRouter();
  const {
    fetchForm: { data, isLoading },
  } = useOrgForm({ formId: router.query.formId as string });

  if (!router.isReady || isLoading) {
    return <ContainerSkeleton />;
  }
  if (!router.query.formId || !data) {
    return (
      <Chip color="red" className="mt-4 mb-4">
        Invalid Request to this Form
      </Chip>
    );
  }
  if (data?.publication?.status !== PublicationStatus.DRAFT) {
    goToPage(ProtectedRoutes.DASHBOARD);
  }

  return <EditForm form={data} />;
};

export default Edit;
