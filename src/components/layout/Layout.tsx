import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

export default function Layout() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}
