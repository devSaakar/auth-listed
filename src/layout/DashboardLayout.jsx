import React from "react";
import Sidebar from "@/components/common/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen justify-center items-stretch p-2 md:px-10 md:pt-10 bg-bg-primary">
      <div className="min-w-[15%] w-1/6 bg-black text-white rounded-lg hidden md:flex justify-center">
        <Sidebar />
      </div>
      <div className="flex-5 rounded-lg overflow-y-auto overflow-x-hidden">{children}</div>
    </div>
  );
};

export default DashboardLayout;
