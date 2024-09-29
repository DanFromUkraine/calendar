import classNames from "classnames";
import { Data } from "../context";
import { useContext } from "react";

export default function Cell({ text_color, is_selected, children, onClick, day }) {
  const div_classes = classNames("w-8 h-8 flex justify-center items-center", {
    text_color: text_color,
  });

  const {all_data} = useContext(Data);
//   console.log({all_data});
  


  return (
    <div className={div_classes} onClick={onClick?.bind(null, day)}>
      <div className={`rounded-full ${is_selected && "bg-blue text-white p-1"}`}>{children}</div>
    </div>
  );
}
