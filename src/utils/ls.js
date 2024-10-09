import { stringify, parse } from "flatted";


function write_data_in_ls(data) {
    localStorage.setItem("data", stringify(data))
}

function get_data_from_ls() {
    const ls_res = localStorage.getItem("data");

    return ls_res ? parse(ls_res) : false;
}

function set_sidebar_is_shown(value) {
    localStorage.setItem("show_sidebar", JSON.stringify(value));

}
function get_sidebar_is_shown() {
    return JSON.parse(localStorage.getItem("show_sidebar"))
}

export { write_data_in_ls, get_data_from_ls, set_sidebar_is_shown, get_sidebar_is_shown }


