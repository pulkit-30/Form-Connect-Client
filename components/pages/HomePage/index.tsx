import Button from "@/components/common/Button";
import Logo from "@/components/common/Logo";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const HomePage = () => (
  <div className="flex flex-col h-[70vh] w-full justify-center items-center">
    <div className="flex items-center gap-x-4">
      <div className="text-4xl font-bold">
        <Logo />
      </div>
      <span className="border-2 border-green-300 px-3 py-1 rounded-full text-sm text-green-300 font-semibold">
        Pro
      </span>
    </div>
    <Link href="/auth/register">
      <Button
        size="large"
        className="relative top-10 text-indigo-300 border-indigo-300"
        icon={<FaChevronRight />}
      >
        Get Started
      </Button>
    </Link>
  </div>
);

export default HomePage;
