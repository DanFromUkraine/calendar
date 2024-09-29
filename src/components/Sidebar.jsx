import { useContext, useState } from "react";
import { Data } from "../context";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import S_Calendar_table from "./S_Calendar_table";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export default function Sidebar() {
  const { all_data,  set_all_data} = useContext(Data);

  const {
    quick_access: { curr_months_days, curr_month },
  } = all_data;

  console.log("render sidebar ", {curr_months_days});
  


  return (
    <div className="w-[250px] h-screen border-2 border-border px-4">
      <div className="flex justify-between h-12 items-center">
        <div className="flex items-center">
          <ArrowBackIosIcon fontSize="small" />
          <h2>{curr_month}</h2>
          <ArrowForwardIosIcon fontSize="small" />
        </div>

        <MenuOpenIcon />
      </div>
      <div>
        <S_Calendar_table curr_months_days={curr_months_days} curr_month={curr_month} />
      </div>
      <div>
        <h2>Upcoming events</h2>
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
}
