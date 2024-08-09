import React from "react";

const Heading = ({ children, className }) => {
  return (
    <h2
      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold ${
        className || ""
      }`}
    >
      {children}
    </h2>
  );
};

export default Heading;
