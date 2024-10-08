import { useContext, useState } from "react";

import { Data } from "../context";
import S_Calendar_table from "./S_Calendar_table";
import { REDUCER_TYPES } from "../constants";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import CreateNote from "./CreateNote";
import { SidebarUtils } from "../context";

import RenderNotes from "./RenderNotes";
import classNames from "classnames";

export default function Sidebar() {
  const { NAV_MONTH_LAST, NAV_MONTH_NEXT, CREATE_NOTE } = REDUCER_TYPES;

  const {
    all_data: {
      quick_access: { curr_month, all_notes, last_day_selected },
    },
    set_all_data,
  } = useContext(Data);

  const { is_shown, hide_sidebar } = useContext(SidebarUtils);
  const [is_creating_note, set_is_creating_note] = useState(false);

  const handle_arrow_left_click = () => {
    set_all_data({ type: NAV_MONTH_LAST });
  };
  const handle_arrow_right_click = () => {
    set_all_data({ type: NAV_MONTH_NEXT });
  };

  let notes_list = [];

  if (last_day_selected !== null) {
    notes_list = curr_month.days.find(
      ({ day_number }) => day_number === last_day_selected.day_number
    )?.notes;

    console.log("!!!!  ", { notes_list });
  } else {
    notes_list = all_notes;
  }

  const handle_create_note_submit = (values, utils) => {
    set_is_creating_note(false);
    set_all_data({ type: CREATE_NOTE, payload: values });
    utils.resetForm();

    // console.log({ values, utils });
  };

  const handle_create_note_cancel = () => {
    set_is_creating_note(false);
  };

  const on_create_note_click = () => {
    last_day_selected.notes && set_is_creating_note(true);
  };

  const main_classes = classNames(
    "!w-sidebar h-screen custom_border px-4 relative max-md:fixed max-md:left-0 md:top-0 z-10 bg-white min-w-[250px]",
    {
      hidden: !is_shown,
    }
  );

  return (
    <div className={main_classes}>
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
          on_cancel={handle_create_note_cancel}
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
