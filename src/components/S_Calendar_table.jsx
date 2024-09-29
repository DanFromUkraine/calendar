import Cell from "./Cell";
import { Data } from "../context";
import { useContext } from "react";
import { Get_month } from "../date";
import { day_names } from "../constants";

export default function S_Calendar_table() {
  const {
    all_data: { quick_access },
    set_all_data,
  } = useContext(Data);
  const { selected_month } = quick_access;

  const curr_months_days = Get_month(selected_month).days;

  console.log({curr_months_days});
  

  const start_at = curr_months_days[0].day_of_week - 1;

  const handle_click = (day) => {
    set_all_data({ type: "change_selected", key_arr: [selected_month, day] });
  };

  console.log("render");

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
      {Array.isArray(curr_months_days) &&
        curr_months_days.map(({ day_number, is_selected }) => {
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
