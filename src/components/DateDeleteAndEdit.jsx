import { useContext } from "react";
import { Data } from "../context";
import DeleteIcon from "@mui/icons-material/Delete";
import classNames from "classnames";

export default function DateDeleteAndEdit({ date, is_disabled }) {
  const { set_all_data } = useContext(Data);

  const delete_icon_classes = classNames(
    "hidden group-hover:flex",
    { flex: date.length === 0 },
    { "!hidden": is_disabled }
  );

  const date_span_classes = classNames("group-hover:hidden text-mid_gray", {
    "!flex": is_disabled,
  });

  return (
    <div className="group">
      <span className={date_span_classes}>{date}</span>

      <span className={delete_icon_classes}>
        <DeleteIcon />
      </span>
    </div>
  );
}
