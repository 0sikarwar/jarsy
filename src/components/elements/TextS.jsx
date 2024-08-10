import React from "react";

const TextS = ({ children, className }) => {
  return (
    <p className={`text-xs md:text-sm my-2 ${className || ""}`}>{children}</p>
  );
};

export default TextS;
