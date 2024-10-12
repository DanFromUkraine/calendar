import { useState } from "react";
import { SidebarUtils } from ".";
import { get_sidebar_is_shown, set_sidebar_is_shown } from "../utils/ls";

export default function ShowSidebarProvider({ children }) {
  const [is_shown, set_is_shown] = useState(get_sidebar_is_shown());
  const [is_creating_note, set_is_creating_note] = useState(false);
  const [change_note_info, set_change_note_info] = useState(false);
  set_sidebar_is_shown(is_shown);

  const show_sidebar = () => set_is_shown(true);
  const hide_sidebar = () => set_is_shown(false);
  const clear_change_note_info = () => set_change_note_info(false);

  const create_note = () => {
    show_sidebar();
    set_is_creating_note(true);
  };

  const cancel_create_note = () => set_is_creating_note(false);

  return (
    <SidebarUtils.Provider
      value={{
        is_shown,
        show_sidebar,
        hide_sidebar,
        create_note,
        cancel_create_note,
        is_creating_note,
        change_note_info,
        set_change_note_info,
        clear_change_note_info,
      }}
    >
      {children}
    </SidebarUtils.Provider>
  );
}
