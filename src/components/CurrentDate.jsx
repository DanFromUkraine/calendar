import { useContext } from "react";
import { Data } from "../context";
import {format} from "date-fns";

export default function CurrentDate() {
  const { quick_access } = useContext(Data).all_data;

  const day = format(quick_access.curr_month.date, "dd");
  const month = quick_access.curr_month.name;
  const year = format(quick_access.curr_month.date, "y");

  const short_date = format(quick_access.curr_month.date, "P");
  return (
    <>
      <div className="max-md:hidden flex gap-2 text-3xl">
        <span className="font-medium">{day}</span>
        <span className="font-medium">{month}</span>
        <span>{year}</span>
      </div>
      <span className="md:hidden text-lg font-semibold flex items-center">
        {short_date}
      </span>
    </>
  );
}
