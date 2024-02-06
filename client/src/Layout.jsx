import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Nav/Navigation";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Outlet />
    </>
  );
};

export default Layout;
