import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen justify-center items-stretch p-2 md:p-10 bg-bg-primary">
      <div className=" flex-1 min-w-[15%] bg-black text-white rounded-lg hidden md:flex justify-center">
        <p className="text-lg lg:text-4xl font-bold pt-10">Board.</p>
      </div>
      <div className="flex-5 rounded-lg">{children}</div>
    </div>
  );
};

export default DashboardLayout;
