// import { set } from "date-fns/fp";
import { REDUCER_TYPES } from "../constants";

function handle_day_click(set_all_data, day) {
    return () => set_all_data({ type: REDUCER_TYPES.CHANGE_SEL, payload: day })

}

function handle_note_click(set_all_data, note) {
    return () => set_all_data({ type: REDUCER_TYPES.CHANGE_NOTE_IS_DONE, payload: note })
}

function nav_last_month(set_all_data) {
    return () => set_all_data({ type: REDUCER_TYPES.NAV_MONTH_LAST });
}
function nav_next_month(set_all_data) {
    return () => set_all_data({ type: REDUCER_TYPES.NAV_MONTH_NEXT });
}



function handle_long_click(callback) {
    
    return ({target}) => {
        let timer;

        timer = setTimeout(() => callback(), 200);

        const cancel = () => {
            clearTimeout(timer);
            timer = null;
        };

        target.addEventListener("mouseup", cancel);
        target.addEventListener("mouseout", cancel);
    }
}

export { handle_day_click, handle_note_click, nav_last_month, nav_next_month, handle_long_click };