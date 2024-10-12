import { useContext } from "react";
import { BIG_CALENDAR_DAYS } from "../constants";
import { Data } from "../context";
import BigDayCell from "./BigDayCell";

export default function BigCalendar() {
  const {
    quick_access: {  days_to_show },
  } = useContext(Data).all_data;

  
  return (
    <div className="grid grid-cols-7 custom_border border-x-0">
      {BIG_CALENDAR_DAYS.map(({ img, name }, i) => (
        <span key={i} className="flex gap-2.5 justify-center items-center ">
          <img src={img} className="w-4 h-4 max-sm:hidden" />
          <span>{name}</span>
        </span>
      ))}

      {
        days_to_show.map((day, i) => <BigDayCell key={i} {...day} />)}
    </div>
  );
}
