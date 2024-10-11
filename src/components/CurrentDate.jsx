import { format } from "date-fns";
import { useContext } from "react";
import { Data } from "../context";
import { switch_to_curr_date } from "../utils";

export default function CurrentDate() {
  const { set_all_data } = useContext(Data);

  const now = new Date();

  const day = format(now, "dd");
  const month = format(now, "MMMM");
  const year = format(now, "y");

  const short_date = format(now, "P");

  const on_click = switch_to_curr_date(set_all_data);

  return (
    <>
      <div className="max-md:hidden flex gap-2 text-3xl" onClick={on_click}>
        <span>today:</span>
        <span className="font-medium">{day}</span>
        <span className="font-medium">{month}</span>
        <span>{year}</span>
      </div>
      <span className="md:hidden text-lg font-semibold flex items-center" onClick={on_click}>
        td:
        {short_date}
      </span>
    </>
  );
}
