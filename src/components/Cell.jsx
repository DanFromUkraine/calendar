import classNames from "classnames";
import { Data } from "../context";
import { useContext } from "react";
import { handle_day_click } from "../utils";

export default function Cell({
  text_color,
  is_selected,
  children,
  day,
  is_disabled,
}) {
  const div_classes = classNames(
      "w-8 h-8 flex justify-center items-center",
      {
        text_color: text_color,
      },
      {
        "opacity-40": is_disabled,
      }
    ),
    text_wrapper_classes = classNames({
      [`rounded-full ${is_selected && "bg-blue text-white p-1"}`]: is_selected,
    });

  const { set_all_data } = useContext(Data);
  const onClick = day ? handle_day_click(set_all_data, day) : null;

  return (
    <div className={div_classes} onClick={is_disabled ? null : onClick}>
      <div className={text_wrapper_classes}>{children}</div>
    </div>
  );
}
