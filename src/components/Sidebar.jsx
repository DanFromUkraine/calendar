import { useContext } from "react";

import { Data } from "../context";
import S_Calendar_table from "./S_Calendar_table";
import { REDUCER_TYPES } from "../constants";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import NavLastMonth from "./NavLastMonth";
import NavNextMonth from "./NavNextMonth";
import CreateNote from "./CreateNote";
import { SidebarUtils } from "../context";

import RenderNotes from "./RenderNotes";
import classNames from "classnames";

export default function Sidebar() {
  const { CREATE_NOTE } = REDUCER_TYPES;

  const {
    all_data: {
      quick_access: { curr_month, all_notes, last_day_selected },
    },
    set_all_data,
  } = useContext(Data);

  const {
    is_shown,
    hide_sidebar,
    create_note,
    cancel_create_note,
    is_creating_note,
  } = useContext(SidebarUtils);

  let notes_list = [];

  // console.log("sidebar", {is_shown});
  

  if (last_day_selected !== null) {
    notes_list = curr_month.days.find(
      ({ day_number }) => day_number === last_day_selected.day_number
    )?.notes;

    // console.log("!!!!  ", { notes_list });
  } else {
    notes_list = all_notes;
  }

  const handle_create_note_submit = (values, utils) => {
    set_all_data({ type: CREATE_NOTE, payload: values });
    utils.resetForm();
  };


  const on_create_note_click = () => {
    last_day_selected.notes && create_note();
  };

  console.log({is_shown});
  

  const main_classes = classNames(
    "!w-sidebar h-screen custom_border top-0 left-0 px-4 relative max-md:fixed min-w-[250px] bg-white sticky",
    {
      "hidden": !is_shown,
    }
  );

  return (
    <div className={main_classes}>
      <div className="flex justify-between h-12 items-center">
        <div className="flex items-center w-3/4 justify-between">
          <NavLastMonth />
          <h2>{curr_month.name}</h2>
          <NavNextMonth />
        </div>

        <span onClick={() => hide_sidebar()}>
          <MenuOpenIcon />
        </span>
      </div>
      <div>
        <S_Calendar_table />
      </div>
      {is_creating_note ? (
        <CreateNote
          on_submit={handle_create_note_submit}
          on_cancel={() => cancel_create_note}
          day_selected={last_day_selected}
        />
      ) : (
        <>
          <RenderNotes notes_list={notes_list} />

          <div
            className={`absolute bottom-4 right-4 ${
              !last_day_selected?.notes && "opacity-40"
            }`}
            onClick={on_create_note_click}
          >
            <AddCircleIcon />
          </div>
        </>
      )}
    </div>
  );
}
