import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";
import useFormIntegrations from "@/hooks/useFormIntegrations";
import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { IoAdd, IoCheckmark, IoClose } from "react-icons/io5";
import { useRouter } from "next/router";
import useFormPlugins from "@/hooks/useFormPlugins";
import { Plugin } from "@/types";
import ContainerSkeleton from "@/components/common/Skeletons/ConatinerSkeleton";

const Settings = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { query } = useRouter();
  const {
    fetchAvailableIntegrations: { data, isLoading: isfetching },
    startIntegration,
  } = useFormIntegrations();

  const {
    fetchFormPlugins: { data: formPlugins, isLoading, refetch },
  } = useFormPlugins({ formId: query.formId as string });

  if (isLoading || isfetching) {
    return <ContainerSkeleton />;
  }
  const handelIntegration = async (authUrl: string) => {
    setLoading(true);
    const response = await startIntegration({
      authUrl,
      formId: query.formId as string,
    });
    refetch();
    setLoading(false);
  };
  const plugged = formPlugins?.map(
    ({ plugin }: { plugin: Plugin }) => plugin.id
  );
  return (
    <>
      <Button
        icon={<FiSettings />}
        className="ml-4"
        onClick={() => setOpen(true)}
      >
        Integrations
      </Button>
      <Modal
        title="Integrations"
        open={open}
        onClose={() => setOpen(false)}
        size="large"
        footer={
          <Button
            onClick={() => setOpen(false)}
            size="medium"
            className="hover:border-red-500 hover:text-red-500"
            icon={<IoClose />}
          >
            Close
          </Button>
        }
      >
        {data?.map((integration: any) => (
          <div
            key={integration.id}
            className="bg-slate-500 px-4 py-4 w-full m-2 rounded flex flex-col gap-y-2 w-[500px]"
          >
            <div className="flex gap-2 items-center border-b border-slate-600 py-2">
              <img src={integration.icon} alt="plugin-image" className="w-8" />
              <div>{integration.name}</div>
            </div>
            <p>{integration.description}</p>
            <div className="mt-4">
              {plugged.includes(integration.id) ? (
                <Button
                  size="small"
                  className="border-green-500 text-green-500"
                  icon={<IoCheckmark />}
                  disabled={loading}
                >
                  Integrated
                </Button>
              ) : (
                <Button
                  size="small"
                  className="hover:border-green-500 hover:text-green-500"
                  icon={<IoAdd />}
                  onClick={() => handelIntegration(integration.authCallbackUrl)}
                  disabled={loading}
                >
                  Integrate
                </Button>
              )}
            </div>
          </div>
        ))}
      </Modal>
    </>
  );
};

export default Settings;
