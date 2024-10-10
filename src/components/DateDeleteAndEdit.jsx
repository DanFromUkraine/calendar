import { useContext } from "react";
import { Data, SidebarUtils } from "../context";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import classNames from "classnames";
import { delete_note } from "../utils";

export default function DateDeleteAndEdit({ note }) {
  const { is_disabled, date } = note;

  const { set_all_data } = useContext(Data);
  const { create_note, set_change_note_info } = useContext(SidebarUtils);

  const func_btn_classes = classNames(
    "hidden group-hover:flex",
    { "!flex": date.length === 0 && !is_disabled },
    { hidden: is_disabled }
  );

  const date_span_classes = classNames("group-hover:hidden text-mid_gray", {
    "!flex": is_disabled,
  });

  const on_delete_btn = delete_note(set_all_data, note.id);
  const on_edit_btn = () => {
    create_note();
    set_change_note_info(note);
  };

  return (
    <div className="group">
      <span className={date_span_classes}>{date}</span>

      <div className={func_btn_classes}>
        <span>
          <EditIcon onClick={on_edit_btn} />
        </span>
        <span onClick={on_delete_btn}>
          <DeleteIcon />
        </span>
      </div>
    </div>
  );
}
