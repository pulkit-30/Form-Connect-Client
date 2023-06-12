import useOrgForm from "@/hooks/useOrgForms";
import ContainerSkeleton from "@/components/common/Skeletons/ConatinerSkeleton";
import Header from "./Header";
import GlassBg from "@/components/common/GlassBg";
import EmptyDashboard from "./EmptyDashboard";
import Banner from "./Banner";
import { Form } from "@/types";

const DashboardPage = () => {
  const {
    fetchForms: { data, isLoading },
  } = useOrgForm();
  return (
    <>
      <Header />
      <div>
        {isLoading ? (
          <ContainerSkeleton />
        ) : (
          <GlassBg className="mt-4 mb-4 min-h-[70vh]">
            <div className="text-3xl font-bold mb-4 border-b border-slate-800 pb-8">
              Organization Forms
            </div>
            <div>
              {data?.length ? (
                <div>
                  {data?.map((form: Form) => (
                    <Banner key={form.id} form={form} />
                  ))}
                </div>
              ) : (
                <EmptyDashboard />
              )}
            </div>
          </GlassBg>
        )}
      </div>
    </>
  );
};

export default DashboardPage;
