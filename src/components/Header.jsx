import MenuIcon from "@mui/icons-material/Menu";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useContext } from "react";
import { Data, SidebarUtils } from "../context";
import { format } from "date-fns";

import NavLastMonth from "./NavLastMonth";
import NavNextMonth from "./NavNextMonth";
import CurrentDate from "./CurrentDate";
import AddEventWrapper from "./AddEventWrapper";

export default function Header() {
  // const {
  //   all_data: { quick_access },
  // } = useContext(Data);
  const { show_sidebar, is_shown } = useContext(SidebarUtils);

  return (
    <header className="h-20 w-full flex items-center px-4 justify-between">
      <div className="flex gap-4 items-center">
        <span
          onClick={() => show_sidebar()}
          className={is_shown ? "hidden" : "flex"}
        >
          <MenuIcon />
        </span>
        <div className="flex gap-2 items-center">
          <NavLastMonth />
          <CurrentDate />
          <NavNextMonth />
        </div>
      </div>

      <AddEventWrapper>
        <button className="bg-blue p-2 text-white text-[12px] flex items-center rounded gap-1 max-phone:hidden">
          <span>Add Event</span>
          <AddCircleIcon style={{ width: "14px", height: "14px" }} />
        </button>
      </AddEventWrapper>
    </header>
  );
}
