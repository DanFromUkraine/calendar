import classNames from "classnames";
import CheckIcon from "@mui/icons-material/Check";
import { Data } from "../context";
import { useContext } from "react";
import { REDUCER_TYPES } from "../constants";

export default function Note({ note }) {
  const { text, color, timestamp, is_completed } = note;
  const { set_all_data } = useContext(Data);

  const dot = classNames("w-2 h-2 rounded-full", `bg-${color}-dot`);
  const span = classNames(`text-${color}-text`, {
    "text-slate-600": is_completed,
  });
  const cont = classNames(
    "flex justify-between items-center text-sm font-semibold",
    { "line-through": is_completed }
  );

  const handle_click = () => {
    set_all_data({ type: REDUCER_TYPES.CHANGE_NOTE_IS_DONE, payload: note });
  };
  return (
    <div className={cont} onClick={handle_click}>
      <span className="flex gap-0.5 items-center ">
        {is_completed ? (
          <span className="">
            <CheckIcon style={{ width: "16px", height: "16px" }} />
          </span>
        ) : (
          <span className={dot}></span>
        )}
        <span className={span}>{text}</span>
      </span>
      <span className="text-mid_gray">{timestamp}</span>
    </div>
  );
}
