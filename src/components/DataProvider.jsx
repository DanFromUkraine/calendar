import { Data } from "../context";
import { init_data_obj } from "../date";
import { useReducer } from "react";

function data_handler(state, action) {
  const { type, payload, key_arr } = action;
  const state_copy = { ...state };

  if (type === "change_selected") {
    const [month, day] = key_arr;
    const day_copy = state_copy.all
      .find(({ name }) => name === month)
      .days.find(({ day_number }) => day_number === day);

    day_copy.is_selected = true
    console.log({ day_copy });

  
    return {
      ...state_copy,
    };
  }
}

export default function DataProvider({ children }) {
  const [all_data, set_all_data] = useReducer(data_handler, init_data_obj());

  console.log({ all_data });

  return (
    <Data.Provider value={{ all_data, set_all_data }}>{children}</Data.Provider>
  );
}
