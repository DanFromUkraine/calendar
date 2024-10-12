import classNames from "classnames";
import RenderNotes from "./RenderNotes";
import { handle_day_click, handle_long_click } from "../utils";
import { useContext } from "react";
import { Data } from "../context";
import { SidebarUtils } from "../context";

export default function BigDayCell(props) {
  const { notes, day_number, is_selected, is_disabled } = props;

  const notes_to_show = notes.slice(0, 2);
  const hidden_notes_countity = notes.slice(2).length;

  const cell_classes = classNames("p-1.5 w-full custom_border flex flex-col", {
    "bg-border": is_selected,
  },
  {
    "bg-light_gray": is_disabled
  }
);
  const notes_classes = classNames(
    "!w-full flex flex-col items-start max-sm:h-36 sm:h-44 overflow-hidden justify-end"
  );

  const { set_all_data } = useContext(Data);
  const { show_sidebar } = useContext(SidebarUtils);

  const onMouseDown = (event) => {
    handle_day_click(set_all_data, day_number)();
    handle_long_click(() => show_sidebar())(event);
  };

  return (
    <div className={cell_classes} onMouseDown={!is_disabled && onMouseDown}>
      <span>{day_number}</span>

      <div className={notes_classes}>
        <RenderNotes notes_list={notes_to_show} is_disabled />
        {hidden_notes_countity > 0 && (
          <span>{`+ ${hidden_notes_countity} More`}</span>
        )}
      </div>
    </div>
  );
}
