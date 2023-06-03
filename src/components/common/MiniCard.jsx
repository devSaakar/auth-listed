import React from "react";

const MiniCard = ({ Icon, title, subTitle, bgColor }) => {
  return (
    <div style={{ backgroundColor: bgColor }} className="rounded-lg p-4 cursor-pointer flex-1">
      <div className="w-full flex items-center justify-end">
        <Icon color="#000" size={20} />
      </div>
      <p className="text-black text-sm">{title}</p>
      <h1 className="text-black font-bold text-xl">{subTitle}</h1>
    </div>
  );
};

export default MiniCard;
