import { ReactNode, useMemo } from "react";
import Header from "./Header";
import usePublicRoute from "@/hooks/usePublicRoute";

type Props = {
  children: ReactNode;
};
const Provider = ({ children }: Props) => {
  const { isUniversalroute } = usePublicRoute();
  return (
    <div className="min-h-screen m-auto">
      {!isUniversalroute && <Header />}
      <div className="z-0">
        <div className="fixed top-[40%] right-[60%] before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"></div>
      </div>
      <main className="min-h-[80vh] w-11/12 m-auto z-30">{children}</main>
    </div>
  );
};

export default Provider;
