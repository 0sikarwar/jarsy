import React from "react";

const SubHeading = ({ children, className }) => {
  return (
    <h3
      className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium ${
        className || ""
      }`}
    >
      {children}
    </h3>
  );
};

export default SubHeading;
