import React from "react";

const TextL = ({ children, className }) => {
  return (
    <p className={`text-base md:text-lg my-2 ${className || ""}`}>{children}</p>
  );
};

export default TextL;
