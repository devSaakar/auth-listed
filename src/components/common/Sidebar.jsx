import { useRouter } from "next/router";
import React from "react";
import { sideBarData } from "../../Utils/data";

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="SIDEBAR__CONTAINER  w-full p-8 pt-0 relative">
      <p className="text-lg lg:text-4xl font-bold pt-10 pb-7">Board.</p>

      {sideBarData.map(({ Icon, title }) => (
        <div key={title} className="flex items-center gap-3 my-8 text-sm cursor-pointer">
          <Icon />
          <p className={`${router.asPath.includes(title.toLowerCase()) ? "font-bold" : "font-normal"}`}>{title}</p>
        </div>
      ))}

      <div className="flex flex-col gap-3 absolute bottom-16">
        <p className="text-sm cursor-pointer">Help</p>
        <p className="text-sm cursor-pointer">Contact Us</p>
      </div>
    </div>
  );
};

export default Sidebar;
