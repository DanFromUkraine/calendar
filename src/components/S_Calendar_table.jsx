import Cell from "./Cell";
import { Data } from "../context";
import { useContext } from "react";
import { day_names } from "../constants";

export default function S_Calendar_table() {
  const { all_data } = useContext(Data);
  const { curr_month } = all_data.quick_access;

  const start_at = curr_month.days[0].day_of_week - 1;

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
          return (
            <Cell key={day_number} day={day_number} is_selected={is_selected}>
              {day_number}
            </Cell>
          );
        })}
    </div>
  );
}
