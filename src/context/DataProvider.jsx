import { Data } from ".";
import { init_data_obj } from "../date";
import { useReducer } from "react";
import { REDUCER_TYPES } from "../constants";

function on_change_selected(state_copy, payload) {
  const day_selected = state_copy.quick_access.curr_month.days.find(
    ({ day_number }) => day_number === payload
  );

  day_selected.is_selected = true;
  state_copy.quick_access.last_day_selected.is_selected = false;
  state_copy.quick_access.last_day_selected = day_selected;

  return state_copy;
}

// function on_create_quick_link(state_copy, payload) {
//   state_copy.quick_access.curr_months_days = payload || [
//     { error: "something bad happened" },
//   ];
//   return state_copy;
// }

function curr_month_nav_left(state_copy) {
  let curr_month_ind = state_copy.quick_access.curr_month.arr_ind;
  state_copy.quick_access.curr_month =
    curr_month_ind > 0
      ? state_copy.all[curr_month_ind - 1]
      : state_copy.quick_access.curr_month;

  return state_copy;
}

function curr_month_nav_right(state_copy) {
  let curr_month_ind = state_copy.quick_access.curr_month.arr_ind;
  state_copy.quick_access.curr_month =
    curr_month_ind < state_copy.all.length - 1
      ? state_copy.all[curr_month_ind + 1]
      : state_copy.quick_access.curr_month;

  return state_copy;
}

function data_handler(state, action) {
  const { CHANGE_SEL, NAV_MONTH_LAST, NAV_MONTH_NEXT } =
    REDUCER_TYPES;
  const { type, payload } = action;
  const state_copy = structuredClone(state);

  switch (type) {
    case CHANGE_SEL:
      return on_change_selected(state_copy, payload);
    // case CREATE_QL:
    //   return on_create_quick_link(state_copy, payload);
    case NAV_MONTH_LAST:
      return curr_month_nav_left(state_copy);
    case NAV_MONTH_NEXT:
      return curr_month_nav_right(state_copy);
  }
}

export default function DataProvider({ children }) {
  const [all_data, set_all_data] = useReducer(data_handler, init_data_obj());

  return (
    <Data.Provider value={{ all_data, set_all_data }}>{children}</Data.Provider>
  );
}
