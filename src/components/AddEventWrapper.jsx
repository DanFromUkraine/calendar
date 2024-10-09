import { useContext } from "react";
import { Data } from "../context";
import { SidebarUtils } from "../context";
import classNames from "classnames";

export default function AddEventWrapper({ className = "", children }) {
  const { quick_access } = useContext(Data).all_data;
  const { create_note } = useContext(SidebarUtils);

  const curr_day = quick_access.last_day_selected;
  const disabled = !curr_day ? true : false;

  const onClick = !disabled ? create_note : null;

  const classes = classNames(className, { "opacity-50": disabled });
  return (
    <span onClick={onClick} className={classes}>
      {children}
    </span>
  );
}
