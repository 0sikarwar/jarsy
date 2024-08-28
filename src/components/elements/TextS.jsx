import React from "react";

const TextS = ({ children, className }) => {
  return <p className={`text-xs md:text-sm ${className || ""}`}>{children}</p>;
};

export default TextS;
