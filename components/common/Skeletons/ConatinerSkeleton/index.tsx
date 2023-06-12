import GlassBg from "../../GlassBg";

const ContainerSkeleton = () => {
  return (
    <GlassBg className="gap-y-4 flex flex-col animate-pulse">
      <div className="bg-slate-500 rounded w-full p-4">
        <div className="bg-slate-300 rounded p-2 m-2"></div>
        <div className="bg-slate-300 w-1/2 rounded p-2 m-2"></div>
      </div>
      <div className="bg-slate-500 rounded w-full p-4">
        <div className="bg-slate-300 rounded p-2 m-2"></div>
        <div className="bg-slate-300 w-1/2 rounded p-2 m-2"></div>
      </div>
      <div className="bg-slate-500 rounded w-full p-4">
        <div className="bg-slate-300 rounded p-2 m-2"></div>
        <div className="bg-slate-300 w-1/2 rounded p-2 m-2"></div>
      </div>
    </GlassBg>
  );
};

export default ContainerSkeleton;
