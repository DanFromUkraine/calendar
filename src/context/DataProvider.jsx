import { Data } from ".";
import { init_data_obj } from "../date";
import { useReducer } from "react";
import { REDUCER_TYPES } from "../constants";
import { write_data_in_ls } from "../utils/ls";

function on_change_selected(state_copy, payload) {
  const q_access = state_copy.quick_access;
  const day = q_access.curr_month.days.find(
    ({ day_number }) => day_number === payload
  );

  if (q_access.last_day_selected === day) {
    q_access.last_day_selected.is_selected = false;
    q_access.last_day_selected = null;
  } else {
    if (q_access.last_day_selected) {
      q_access.last_day_selected.is_selected = false;
    }
    day.is_selected = true;
    q_access.last_day_selected = day;
  }

  return state_copy;
}

function after_action(state_copy) {
  write_data_in_ls(state_copy);

  return state_copy;
}

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

function on_create_note(state_copy, payload) {
  const notes = state_copy.quick_access.curr_month.days.find(
    ({ day_number }) => day_number === payload.day.day_number
  ).notes;

  notes.push(payload);

  console.log(notes);

  return after_action(state_copy);
}

function on_clear_last_day_selected(state_copy) {
  state_copy.quick_access.last_day_selected.is_selected = false;
  state_copy.quick_access.last_day_selected = null;
  return state_copy;
}

function data_handler(state, action) {
  const {
    CHANGE_SEL,
    NAV_MONTH_LAST,
    NAV_MONTH_NEXT,
    CREATE_NOTE,
    CLEAR_LAST_DAY_SELECTED,
  } = REDUCER_TYPES;
  const { type, payload } = action;
  const state_copy = structuredClone(state);

  switch (type) {
    case CHANGE_SEL:
      return on_change_selected(state_copy, payload);
    case NAV_MONTH_LAST:
      return curr_month_nav_left(state_copy);
    case NAV_MONTH_NEXT:
      return curr_month_nav_right(state_copy);
    case CREATE_NOTE:
      return on_create_note(state_copy, payload);
    case CLEAR_LAST_DAY_SELECTED:
      return on_clear_last_day_selected(state_copy);
  }
}

export default function DataProvider({ children }) {
  const [all_data, set_all_data] = useReducer(data_handler, init_data_obj());

  console.log({all_data});
  

  return (
    <Data.Provider value={{ all_data, set_all_data }}>{children}</Data.Provider>
  );
}
