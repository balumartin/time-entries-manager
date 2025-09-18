import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";

export default function MainLayout() {
  return (
    <div className="flex flex-col items-start justify-start w-full h-screen">
      <Header />
      <div className="flex h-full w-full">
        <Sidebar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
      <Footer className="bg-slate-800 text-white p-2 text-center" />
    </div>
  );
}
