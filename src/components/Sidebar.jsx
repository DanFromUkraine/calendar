import { useContext } from "react";

import { Data } from "../context";
import S_Calendar_table from "./S_Calendar_table";
import { REDUCER_TYPES } from "../constants"; 

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


export default function Sidebar() {
  const {NAV_MONTH_LAST, NAV_MONTH_NEXT} = REDUCER_TYPES;
  const {
    all_data: {
      quick_access: { curr_month },
    },
    set_all_data
  } = useContext(Data);

  const handle_arrow_left_click = () => {
    set_all_data({type: NAV_MONTH_LAST})
  }
  const handle_arrow_right_click  = () => {
    set_all_data({type: NAV_MONTH_NEXT})

  }

  return (
    <div className="w-[250px] h-screen border-2 border-border px-4">
      <div className="flex justify-between h-12 items-center">
        <div className="flex items-center">
          <span onClick={handle_arrow_left_click}>
            <ArrowBackIosIcon fontSize="small" />
          </span>
          <h2>{curr_month.name}</h2>
          <span onClick={handle_arrow_right_click}>
            <ArrowForwardIosIcon fontSize="small" />
          </span>
        </div>

        <MenuOpenIcon />
      </div>
      <div>
        <S_Calendar_table />
      </div>
      <div>
        <h2>Upcoming events</h2>
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
}
