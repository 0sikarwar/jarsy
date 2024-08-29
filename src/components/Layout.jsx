import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-PageBg">
      <Header />
      <main className="mb-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
