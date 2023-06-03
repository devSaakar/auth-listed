import React from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { BsBell } from "react-icons/bs";
import ActivityGraph from "@/components/Dashboard/ActivityGraph";
import TopProducts from "@/components/Dashboard/TopProducts";
import TodaySchedule from "@/components/Dashboard/TodaySchedule";

const Dashboard = () => {
  const session = useSession();
  console.log("session :>> ", session);
  return (
    <section className="flex flex-col p-6 w-50">
      <div className="TOP__BANNER  flex rounded">
        <div className="PAGE__TITLE__CONTAINER flex-6">
          <p className="PAGE__TITLE font-bold text-2xl text-black">Dashboard</p>
        </div>
        <div className="p-2 flex-3 rounded-lg flex justify-around items-center">
          <div className="cursor-pointer">
            <label>
              <input className="rounded-lg"></input>
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
      <ActivityGraph />
      <div className="PRODUCT__INSIGHTS flex w-100 justify-between gap-8 mt-10">
        <TopProducts />
        <TodaySchedule />
      </div>
    </section>
  );
};

export default Dashboard;
