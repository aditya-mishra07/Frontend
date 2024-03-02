import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
function Layout() {
  return (
    <>
      <div>
        <Navbar />

        <Outlet />
      </div>
    </>
  );
}

export default Layout;
