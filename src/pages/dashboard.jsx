import React from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { BsBell } from "react-icons/bs";
import ActivityGraph from "@/components/Dashboard/ActivityGraph";
import TopProducts from "@/components/Dashboard/TopProducts";
import TodaySchedule from "@/components/Dashboard/TodaySchedule";
import MiniCard from "@/components/common/MiniCard";
import { cardData } from "@/Utils/data";

const Dashboard = () => {
  const session = useSession();
  return (
    <section className="flex flex-col px-6 pt-0 w-50">
      <div className="TOP__BANNER px-2 flex rounded items-center sticky top-0 bg-bg-primary">
        <div className="PAGE__TITLE__CONTAINER grow">
          <p className="PAGE__TITLE font-bold text-2xl text-black">Dashboard</p>
        </div>
        <div className="p-2 rounded-lg flex justify-around items-center gap-4">
          <div className="cursor-pointer">
            <label>
              <input placeholder="Search..." className="rounded-lg p-1 ps-2 outline-none"></input>
            </label>
          </div>
          <div className="cursor-pointer text-black font-bold">
            <BsBell />
          </div>
          {session?.data?.user?.image && (
            <div onClick={signOut} className="cursor-pointer">
              {/* <img src={session.data.user.image} alt="user.png" /> */}
              <Image
                title="Logout"
                className="rounded-full"
                src={session.data.user.image}
                alt="User Profile"
                width={30}
                height={30}
                priority
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between my-6 gap-4">
        {cardData?.map(({ Icon, title, subTitle, bgColor }) => (
          <MiniCard key={title} Icon={Icon} title={title} subTitle={subTitle} bgColor={bgColor} />
        ))}
      </div>

      <ActivityGraph />
      <div className="PRODUCT__INSIGHTS flex w-100 justify-between gap-8 mt-10">
        <TopProducts />
        <TodaySchedule />
      </div>
    </section>
  );
};

export default Dashboard;
