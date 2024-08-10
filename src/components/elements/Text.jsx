import React from "react";

const Text = ({ children, className }) => {
  return (
    <p className={`text-sm md:text-base my-2 ${className || ""}`}>{children}</p>
  );
};

export default Text;
