import React from "react";

const TextXl = ({ children, className }) => {
  return (
    <p className={`text-lg md:text-xl my-2 ${className || ""}`}>{children}</p>
  );
};

export default TextXl;
