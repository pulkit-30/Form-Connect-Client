import DivSkeleton from "@/components/common/Skeletons/DivSkeleton";
import useFormPlugins from "@/hooks/useFormPlugins";
import { Form, Plugin } from "@/types";
import React from "react";

type Props = {
  form: Form;
};

const PluginsList = ({ form }: Props) => {
  const {
    fetchFormPlugins: { data: plugins, isLoading },
  } = useFormPlugins({ formId: form.id });
  if (isLoading) {
    return <DivSkeleton />;
  }
  if (!plugins?.length) {
    return <></>;
  }
  return (
    <div className="flex gap-x-2 gap-2 items-center text-sm py-2 border-b border-slate-800 mb-2 text-slate-600">
      <div>Plugins Integrated: </div>
      {plugins?.map(({ plugin }: { plugin: Plugin }) => (
        <img
          key={plugin.id}
          src={plugin.icon}
          alt="plugin-image"
          className="w-4 hover:scale-110"
        />
      ))}
    </div>
  );
};

export default PluginsList;
