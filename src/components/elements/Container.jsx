import React from "react";

const Container = ({ children, className, id }) => {
  return (
    <div
      className={`w-full md:min-w-[1080px] md:w-4/5 mx-auto ${className || ""}`}
      id={id}
    >
      {children}
    </div>
  );
};

export default Container;
