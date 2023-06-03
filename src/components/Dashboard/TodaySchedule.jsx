import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const TodaySchedule = () => {
  return (
    <div className="flex-1 bg-white rounded-lg p-8">
      <div className="w-full flex justify-between align-centers mb-6">
        <p className="text-lg text-black font-bold">TodaySchedule</p>
        <p className="text-gray-500 flex items-center cursor-pointer gap-1 text-sm">
          See All <AiOutlineRight />
        </p>
      </div>

      <div className="flex flex-col gap-1 pl-3 mb-3" style={{ borderLeft: "5px solid #9BDD7C" }}>
        <p className="text-black font-bold text-sm">Meeting with suppliers from Kuta Bali</p>
        <p className="text-zinc-500 text-sm">14.00-15.00</p>
        <p className="text-zinc-500 text-sm">at Sunset Road, Kuta, Bali </p>
      </div>

      <div className="flex flex-col gap-1 pl-3 " style={{ borderLeft: "5px solid #6972C4" }}>
        <p className="text-black font-bold text-sm">Check operation at Giga Factory 1</p>
        <p className="text-zinc-500 text-sm">18.00-20.00</p>
        <p className="text-zinc-500 text-sm">at Central Jakarta </p>
      </div>
    </div>
  );
};

export default TodaySchedule;
