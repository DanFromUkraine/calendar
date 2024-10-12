import { useContext, useEffect } from "react";

import { Data, Logined } from "../context";
import S_Calendar_table from "./S_Calendar_table";
import { REDUCER_TYPES } from "../constants";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LogoutIcon from "@mui/icons-material/Logout";

import NavLastMonth from "./NavLastMonth";
import NavNextMonth from "./NavNextMonth";
import CreateNote from "./CreateNote";
import { SidebarUtils } from "../context";

import RenderNotes from "./RenderNotes";
import classNames from "classnames";
import AddEventWrapper from "./AddEventWrapper";

export default function Sidebar() {
  const {
    all_data: {
      quick_access: { curr_month, all_notes, last_day_selected },
    },
    set_all_data,
  } = useContext(Data);

  const {logout} = useContext(Logined);

  useEffect(() => {
    set_all_data({ type: REDUCER_TYPES.INIT_DAYS_TO_SHOW });
  }, []);

  const {
    is_shown,
    hide_sidebar,
    cancel_create_note,
    is_creating_note,
    change_note_info,
    clear_change_note_info,
  } = useContext(SidebarUtils);

  let notes_list = [];

  if (last_day_selected !== null) {
    notes_list = curr_month.days.find(
      ({ day_number }) => day_number === last_day_selected.day_number
    )?.notes;
  } else {
    notes_list = all_notes;
  }

  const handle_create_note_submit = (values, utils) => {
    if (change_note_info) {
      set_all_data({ type: REDUCER_TYPES.EDIT_NOTE, payload: values });
      clear_change_note_info();
    } else {
      set_all_data({ type: REDUCER_TYPES.CREATE_NOTE, payload: values });
    }

    cancel_create_note();
    utils.resetForm();
  };

  const main_classes = classNames(
    "!w-sidebar h-screen custom_border top-0 left-0 px-4 relative max-md:fixed min-w-[250px] bg-white sticky",
    {
      hidden: !is_shown,
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
          on_cancel={cancel_create_note}
          day_selected={last_day_selected}
          initial_state={change_note_info}
        />
      ) : (
        <>
          <RenderNotes notes_list={notes_list} />

          <div className="relative flex justify-between -bottom-96 p-4 w-full">
            <span onClick={() => logout()}>
              <LogoutIcon />
            </span>
            <AddEventWrapper>
              <AddCircleIcon />
            </AddEventWrapper>
          </div>
        </>
      )}
    </div>
  );
}
