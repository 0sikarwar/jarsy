import React from "react";

const Text2Xl = ({ children, className }) => {
  return (
    <p className={`text-xl md:text-2xl my-2 ${className || ""}`}>{children}</p>
  );
};

export default Text2Xl;
