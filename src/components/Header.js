import React from "react";
import TextL from "./elements/TextL";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-HeaderBg py-3 flex items-center justify-center position sticky top-0 z-10">
      <div className="flex justify-between w-1/2 text-TextColor">
        <TextL className="font-semibold">
          <Link href="/">Home</Link>
        </TextL>
      </div>
    </div>
  );
};

export default Header;
