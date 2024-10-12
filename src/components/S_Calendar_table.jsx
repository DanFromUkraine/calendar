import Cell from "./Cell";
import { Data } from "../context";
import { useContext } from "react";
import { day_names } from "../constants";

export default function S_Calendar_table() {
  const { all_data } = useContext(Data);
  const { days_to_show } = all_data.quick_access;

  return (
    <div className="grid grid-cols-7">
      {day_names.map((day, i) => (
        <Cell key={i} text_color="mid_gray">
          {day}
        </Cell>
      ))}

      {Array.isArray(days_to_show) &&
        days_to_show.map(({ day_number, is_selected, is_disabled }, i) => {
          return (
            <Cell key={i} day={day_number} is_selected={is_selected} is_disabled={is_disabled}>
              {day_number}
            </Cell>
          );
        })}
    </div>
  );
}
