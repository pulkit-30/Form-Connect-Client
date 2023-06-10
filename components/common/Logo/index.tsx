import React from "react";
import { AiOutlineFileProtect } from "react-icons/ai";

const Logo = () => {
  return (
    <div className="flex gap-x-3 items-center justify-center">
      <span className="scale-150">
        <AiOutlineFileProtect />
      </span>
      <span>FormConnect</span>
    </div>
  );
};

export default Logo;
