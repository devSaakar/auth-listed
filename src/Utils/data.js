import { AiOutlinePieChart } from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { BsCalendar2Event } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { RiLuggageDepositLine } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { RiGroupLine } from "react-icons/ri";

const sideBarData = [
  {
    Icon: AiOutlinePieChart,
    title: "Dashboard",
  },
  {
    Icon: BsTags,
    title: "Transactions",
  },
  {
    Icon: BsCalendar2Event,
    title: "Schedules",
  },
  {
    Icon: BiUserCircle,
    title: "Users",
  },
  {
    Icon: AiOutlineSetting,
    title: "Settings",
  },
];

const cardData = [
  {
    Icon: RiLuggageDepositLine,
    title: "Total Revenues",
    subTitle: "$2,129,430",
    bgColor: "#DDEFE0",
  },
  {
    Icon: BsTags,
    title: "Total Transactions",
    subTitle: "1,520",
    bgColor: "#F4ECDD",
  },
  {
    Icon: AiOutlineLike,
    title: "Total Likes",
    subTitle: "9,721",
    bgColor: "#EFDADA",
  },
  {
    Icon: RiGroupLine,
    title: "Total Users",
    subTitle: "892",
    bgColor: "#DEE0EF",
  },
];

export { sideBarData, cardData };
