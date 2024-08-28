import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <div className={`w-full md:min-w-[1080px] ${className || ""}`}>
      {children}
    </div>
  );
};

export default Wrapper;
