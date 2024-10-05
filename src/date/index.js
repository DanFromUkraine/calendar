import { format, add, sub, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";
import { Data } from "../context";
import { useContext } from "react";

function get_months() {
    const now = new Date();
    const months_arr = [now];

    for (let i = 1; i <= 6; i++) {
        months_arr.unshift(sub(now, { months: i }))
        months_arr.push(add(now, { months: i }))
    }

    return months_arr;
}

function get_month_data(month, i) {
    const month_data = {};
    month_data.name = format(month, "MMMM");
    month_data.days = get_days_data(month);
    month_data.date = month;
    month_data.arr_ind = i;

    return month_data;
}

function get_days_data(month) {
    const days = new Set();
    const days_in_month = get_days_in_month(month);
    days_in_month.forEach((day, i) => {
        const day_obj = {
            day,
            day_number: format(day, "dd"),
            day_of_week: format(day, "i"),
            isStartOfMonth: i === 0,
            notes: [],
            is_selected: false
        }
        day_obj.day_obj = day_obj;
        days.add(day_obj)
    })

    return [...days]
}

function get_days_in_month(month) {
    const start = startOfMonth(month),
        end = endOfMonth(month);
    const days_array = eachDayOfInterval({ start, end });
    return days_array;
}

export function Get_month(month) {
    const { all_data } = useContext(Data);
    return all_data.all.find(({ name }) => month === name);
}

export function Create_link_days(month) {
    const { all_data, set_all_data } = useContext(Data);
    const days = all_data.all.find((it) => it.name === month).days;

    set_all_data({ type: "create_quick_link", payload: days })
}



export function init_data_obj() {

    const data = {
        all: [],
        quick_access: {}
    }

    const months = get_months(),
        curr_month = format(new Date(), "MMMM");

    months.forEach((month, i) => {
        const month_data = get_month_data(month, i);
        data.all.push(month_data);
    })

    const quick_access = {
        curr_month: data.all.find(({ name }) => name === curr_month),
        last_day_selected: {},
        all_notes: []
    };
    data.quick_access = quick_access;


    return data;
}

