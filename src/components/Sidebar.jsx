import { useContext, useState } from "react";

import { Data } from "../context";
import S_Calendar_table from "./S_Calendar_table";
import { REDUCER_TYPES } from "../constants";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Note from "./Note";
import CreateNote from "./CreateNote";
// import { NOTES_COLOR_NAMES } from "../constants";

export default function Sidebar() {
  const { NAV_MONTH_LAST, NAV_MONTH_NEXT } = REDUCER_TYPES;
  const {
    all_data: {
      quick_access: { curr_month, all_notes, last_day_selected },
    },
    set_all_data,
  } = useContext(Data);
  const [is_creating_note, set_is_creating_note] = useState(true);

  const handle_arrow_left_click = () => {
    set_all_data({ type: NAV_MONTH_LAST });
  };
  const handle_arrow_right_click = () => {
    set_all_data({ type: NAV_MONTH_NEXT });
  };

  const notes = last_day_selected.notes || all_notes;
  const note_list = notes.map((note, i) => <Note key={i} note={note} />);

  return (
    <div className="w-[250px] h-screen border-2 border-border px-4">
      <div className="flex justify-between h-12 items-center">
        <div className="flex items-center w-3/4 justify-between">
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
      {is_creating_note ? (
        <CreateNote />
      ) : (
        <div>
          <h2>Upcoming events</h2>
          <div className="flex flex-col">{note_list}</div>
        </div>
      )}
    </div>
  );
}
