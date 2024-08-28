import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`w-full md:min-w-[1080px] md:w-4/5 mx-auto ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Container;
