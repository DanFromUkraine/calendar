import { useState } from "react";
import { SidebarUtils } from ".";

export default function ShowSidebarProvider({ children }) {
  const value = window.innerWidth > 768 ? true : false;

  const [is_shown, set_is_shown] = useState(value);

  const show_sidebar = () => set_is_shown(true);
  const hide_sidebar = () => set_is_shown(false)

  return <SidebarUtils.Provider value={{is_shown, show_sidebar, hide_sidebar}}>{children}</SidebarUtils.Provider>;
}

