import classNames from "classnames";
import CheckIcon from "@mui/icons-material/Check";
import { Data } from "../context";
import { useContext } from "react";
import { handle_note_click } from "../utils";
import DateDeleteAndEdit from "./DateDeleteAndEdit";

export default function Note({ note }) {
  const { title, selected_color, is_done, is_disabled } = note;
  const { set_all_data } = useContext(Data);

  const dot = classNames("w-2 h-2 rounded-full", `bg-${selected_color}-dot`);
  const span = classNames(`text-${selected_color}-text`, {
    "text-slate-600": is_done,
  });
  const cont = classNames(
    "flex justify-between items-center text-xs font-semibold w-full",
    { "line-through": is_done }
  );

  const onClick = handle_note_click(set_all_data, note);

  return (
    <div className={cont}>
      <span
        className="flex gap-0.5 items-center "
        onClick={!is_disabled ? onClick : null}
      >
        {is_done ? (
          <span className="">
            <CheckIcon style={{ width: "16px", height: "16px" }} />
          </span>
        ) : (
          <span className={dot}></span>
        )}
        <span className={span}>{title}</span>
      </span>

      <DateDeleteAndEdit note={note}/>
    </div>
  );
}
