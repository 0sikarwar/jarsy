import React from "react";

const Text = ({ children, className }) => {
  return (
    <p className={`text-sm md:text-base ${className || ""}`}>{children}</p>
  );
};

export default Text;
