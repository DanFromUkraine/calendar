// import { set } from "date-fns/fp";
import { REDUCER_TYPES } from "../constants";

function handle_day_click(set_all_data, day) {
    if (typeof set_all_data === "function") {
        return () => set_all_data({ type: REDUCER_TYPES.CHANGE_SEL, payload: day })
    } else {
        throw new Error("set_all_data is not a function", set_all_data);
    }
}

function handle_note_click(set_all_data, note) {
    if (typeof set_all_data === "function") {
        return () => set_all_data({ type: REDUCER_TYPES.CHANGE_NOTE_IS_DONE, payload: note })
    } else {
        throw new Error("set_all_data is not a function", set_all_data);
    }
}

export { handle_day_click, handle_note_click };