import Link from "next/link";
import React from "react";

const Button = ({ type = "primary", url = "", children, className }) => {
  const isAbsUrl = url.indexOf("://") > 0 || url.indexOf("//") === 0;
  const elementType = url ? (isAbsUrl ? "a" : Link) : "span";
  const eleClass =
    "px-5 py-1 font-bold leading-normal " +
    (type == "secondary"
      ? "bg-SecBtnBg text-SecBtnText"
      : "bg-PrimaryBtnBg text-PrimaryBtnText") +
    (className || "");
  return React.createElement(
    elementType,
    { className: eleClass, href: url || undefined },
    children
  );
};

export default Button;
