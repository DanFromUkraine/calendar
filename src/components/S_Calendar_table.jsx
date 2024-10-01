import Cell from "./Cell";
import { Data } from "../context";
import { useContext } from "react";
import { day_names } from "../constants";
import { REDUCER_TYPES } from "../constants";

export default function S_Calendar_table() {
  const {CHANGE_SEL} = REDUCER_TYPES;
  const { all_data, set_all_data } = useContext(Data);
  const { curr_month } = all_data.quick_access;

  const start_at = curr_month.days[0].day_of_week - 1;

  const handle_click = (day) => {
    set_all_data({ type: CHANGE_SEL, payload: day });
  };


  return (
    <div className="grid grid-cols-7">
      {day_names.map((day, i) => (
        <Cell key={i} text_color="mid_gray">
          {day}
        </Cell>
      ))}
      {start_at >= 1 && (
        <div className={`grid grid-cols-subgrid col-span-${start_at}`}></div>
      )}
      {Array.isArray(curr_month.days) &&
        curr_month.days.map(({ day_number, is_selected }) => {
          console.log(is_selected);

          return (
            <Cell
              key={day_number}
              onClick={handle_click}
              day={day_number}
              is_selected={is_selected}
            >
              {day_number}
            </Cell>
          );
        })}
    </div>
  );
}
