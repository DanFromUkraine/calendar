import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useContext } from "react";
import { Data, SidebarUtils } from "../context";
import { format } from "date-fns";

export default function Header() {
  const {
    all_data: { quick_access },
  } = useContext(Data);
  const { show_sidebar, is_shown } = useContext(SidebarUtils);

  const day = format(quick_access.curr_month.date, "dd");
  const month = quick_access.curr_month.name;
  const year = format(quick_access.curr_month.date, "y");


  return (
    <header className="h-20 w-full flex items-center px-4 justify-between">
      <div className="flex gap-4 items-center">
        <span onClick={() => show_sidebar()} className={is_shown ? "hidden" : "flex"}>
          <MenuIcon />
        </span>
        <div className="flex gap-2 text-3xl ">
          <span className="font-medium">{day}</span>
          <span className="font-medium">{month}</span>
          <span>{year}</span>
        </div>
      </div>

      <div className="flex gap-4">
        <span className="rounded-full bg-light_gray p-2.5">
          <SearchIcon />
        </span>
        <button className="bg-blue p-2 text-white text-[12px] flex items-center rounded gap-1">
          <span>Add Event</span>
            <AddCircleIcon style={{width: "14px", height: "14px"}}/>
        </button>
      </div>
    </header>
  );
}
