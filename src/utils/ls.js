import { stringify, parse } from "flatted";


export function write_data_in_ls(data) {
    localStorage.setItem("data", stringify(data))
}

export function get_data_from_ls() {
    const ls_res = localStorage.getItem("data");

    return ls_res ? parse(ls_res) : false;
}


