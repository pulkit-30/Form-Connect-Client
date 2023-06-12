import Button from "@/components/common/Button";
import GlassBg from "@/components/common/GlassBg";
import { Form, PublicationStatus } from "@/types";
import { LuEdit2 } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";
import useFormActions from "@/hooks/useFormActions";
import useOrgForm from "@/hooks/useOrgForms";
import goToPage from "@/utils/goToPage";
import { ProtectedRoutes } from "@/constants/appRoutes";
import CopyToClipBoardButton from "@/components/common/CopyToClipBoardButton";
import getFormPublicUrl from "@/constants/getFormPublicUrl";
import Chip from "@/components/common/Chip";
import PluginsList from "./PluginsList";

type Props = {
  form: Form;
};

const Banner = ({ form }: Props) => {
  const {
    archiveForm: { mutate: archive, isLoading },
  } = useFormActions();
  const {
    fetchForms: { refetch },
  } = useOrgForm();
  const getChipColor = () => {
    switch (form.publication?.status) {
      case PublicationStatus.PUBLISHED:
        return "success-dark";
      case PublicationStatus.ARCHIVE:
        return "red";
      default:
        return "yellow";
    }
  };
  return (
    <div key={form.id}>
      <GlassBg className="mt-2 mb-4">
        <div className="text-xl font-bold mb-2 flex justify-between items-center border-b border-slate-800 pb-4">
          <div>{form.name}</div>
          {form.publication?.status !== PublicationStatus.ARCHIVE && (
            <div className="flex gap-x-2">
              {form.publication?.status === PublicationStatus.DRAFT && (
                <Button
                  size="small"
                  className="hover:border-indigo-300 hover:text-indigo-300"
                  icon={<LuEdit2 />}
                  onClick={() =>
                    form.id && goToPage(ProtectedRoutes.EDITFORM(form.id))
                  }
                >
                  Edit
                </Button>
              )}
              {form.publication?.status === PublicationStatus.PUBLISHED && (
                <CopyToClipBoardButton
                  text={getFormPublicUrl(form.publication.token)}
                  title="Copy URL"
                  onCopyMessage="Form Url copied to clipboard!"
                />
              )}

              <Button
                size="small"
                className="hover:border-red-500 hover:text-red-500"
                icon={<AiOutlineDelete />}
                onClick={() => {
                  form.id &&
                    archive(form.id, {
                      onSettled: () => {
                        refetch();
                      },
                    });
                }}
                disabled={isLoading}
              >
                Archive
              </Button>
            </div>
          )}
        </div>
        <PluginsList form={form} />
        <div className="text-sm text-slate-600 flex justify-between items-center gap-x-4">
          <p className="w-1/2 grow truncate">{form.description}</p>
          <div className="text-green-200">
            Responses: {form.responses?.length || 0}
          </div>
          <div className="text-green-200 flex gap-x-2">
            Status:{" "}
            <Chip color={getChipColor()} className="uppercase">
              {form.publication?.status}
            </Chip>
          </div>
        </div>
      </GlassBg>
    </div>
  );
};

export default Banner;
