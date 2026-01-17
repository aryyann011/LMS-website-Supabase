import React from "react";
import Navbar from "@/Components/Navbar1";
import Footer from "@/Components/Footer";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
   
    <div className="w-full min-h-screen flex flex-col">
      
      <Navbar />

      <div className="flex-1 w-full flex flex-col">
         <Outlet />
      </div>

      {/* <Footer /> */}
      
    </div>
  );
};

export default PublicLayout;