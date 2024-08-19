import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout({ setActiveComponent }) {
  return (
    <>
      <Header setActiveComponent={setActiveComponent} />
      <Outlet />
      <Footer setActiveComponent={setActiveComponent} />
    </>
  );
}
