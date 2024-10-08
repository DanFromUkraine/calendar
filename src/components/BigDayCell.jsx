import classNames from "classnames";
import RenderNotes from "./RenderNotes";
import { handle_day_click } from "../utils";
import { useContext } from "react";
import { Data } from "../context";

export default function BigDayCell(props) {
  const { notes, day_number, is_selected } = props;

  const notes_to_show = notes.slice(0, 2);
  const hidden_notes_countity = notes.slice(2).length;

  const cell_classes = classNames("p-1.5 w-full custom_border flex flex-col ", {
    "bg-light_gray": is_selected,
  });

  const {set_all_data} = useContext(Data);

  const onClick = handle_day_click(set_all_data, day_number)

  return (
    <div className={cell_classes} onClick={onClick}>
      <span>{day_number}</span>

      <div className="w-full flex flex-col items-end max-sm:h-36 sm:h-44">
        <RenderNotes notes_list={notes_to_show} />
        {hidden_notes_countity > 0 && (
          <span>{`+ ${hidden_notes_countity} More`}</span>
        )}
      </div>
    </div>
  );
}
