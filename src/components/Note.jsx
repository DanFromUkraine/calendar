import classNames from "classnames";
import CheckIcon from "@mui/icons-material/Check";
import { Data } from "../context";
import { useContext } from "react";
// import { REDUCER_TYPES } from "../constants";
import { handle_note_click } from "../utils";

export default function Note({ note }) {
  const { title, selected_color, date, is_done } = note;
  const { set_all_data } = useContext(Data);

  const dot = classNames("w-2 h-2 rounded-full", `bg-${selected_color}-dot`);
  const span = classNames(`text-${selected_color}-text`, {
    "text-slate-600": is_done,
  });
  const cont = classNames(
    "flex justify-between items-center text-md font-semibold z-10",
    { "line-through": is_done }
  );

  const onClick = handle_note_click(set_all_data, note);

  return (
    <div className={cont}>
      <span className="flex gap-0.5 items-center " onClick={onClick}>
        {is_done ? (
          <span className="">
            <CheckIcon style={{ width: "16px", height: "16px" }} />
          </span>
        ) : (
          <span className={dot}></span>
        )}
        <span className={span}>{title}</span>
      </span>
      <span className="text-mid_gray">{date}</span>
    </div>
  );
}
