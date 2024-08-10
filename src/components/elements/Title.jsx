import React from "react";

const Title = ({ children, className }) => {
  return (
    <h1
      className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ${
        className || ""
      }`}
    >
      {children}
    </h1>
  );
};

export default Title;
