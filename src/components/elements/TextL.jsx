import React from "react";

const TextL = ({ children, className }) => {
  return (
    <p className={`text-base md:text-lg ${className || ""}`}>{children}</p>
  );
};

export default TextL;
