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

  return after_action(state_copy);
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

  return after_action(state_copy);
}

function curr_month_nav_right(state_copy) {
  let curr_month_ind = state_copy.quick_access.curr_month.arr_ind;
  state_copy.quick_access.curr_month =
    curr_month_ind < state_copy.all.length - 1
      ? state_copy.all[curr_month_ind + 1]
      : state_copy.quick_access.curr_month;

  return after_action(state_copy);
}

function on_create_note(state_copy, payload) {
  console.log({ payload });

  const notes = state_copy.quick_access.curr_month.days.find(
    ({ day_number }) => day_number === payload.day.day_number
  )?.notes;
  notes.push(payload);

  return after_action(state_copy);
}

function on_change_note_is_done(state_copy, payload) {
  const day = state_copy.quick_access.last_day_selected;
  const note = day.notes.find(({ title }) => title === payload.title);
  note.is_done = !note.is_done;

  return after_action(state_copy);
}

function on_delete_note(state_copy, payload) {
  let day = state_copy.quick_access.last_day_selected;
  day.notes = day.notes.filter(({ id }) => id !== payload);

  return after_action(state_copy);
}

function on_edit_note(state_copy, payload) {
  let day = state_copy.quick_access.last_day_selected;
  const newNotes = day.notes.map((note) =>
    note.id === payload.id ? payload : note
  );

  day.notes = newNotes;

  return after_action(state_copy);
}

function data_handler(state, action) {
  const {
    CHANGE_SEL,
    NAV_MONTH_LAST,
    NAV_MONTH_NEXT,
    CREATE_NOTE,
    CHANGE_NOTE_IS_DONE,
    DELETE_NOTE,
    EDIT_NOTE,
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
    case CHANGE_NOTE_IS_DONE:
      return on_change_note_is_done(state_copy, payload);
    case DELETE_NOTE:
      return on_delete_note(state_copy, payload);
    case EDIT_NOTE:
      return on_edit_note(state_copy, payload);
  }
}

export default function DataProvider({ children }) {
  const [all_data, set_all_data] = useReducer(data_handler, init_data_obj());

  return (
    <Data.Provider value={{ all_data, set_all_data }}>{children}</Data.Provider>
  );
}
