import { format, add, sub, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";
import { get_data_from_ls } from "../utils/ls";

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
        days.add({
            day,
            day_number: format(day, "dd"),
            day_of_week: format(day, "i"),
            isStartOfMonth: i === 0,
            notes: [],
            is_selected: false
        })
    })

    return [...days]
}

function get_days_in_month(month) {
    const start = startOfMonth(month),
        end = endOfMonth(month);
    const days_array = eachDayOfInterval({ start, end });
    return days_array;
}

// function get_days_to_show(data, quick_access) {

//     const days_to_show = [...quick_access.curr_month.days];
//     const day_of_week = quick_access.curr_month.days[0].day_of_week - 1;
//     const days_of_last_month = data.all[quick_access.curr_month.arr_ind - 1].days.slice(-day_of_week);

//     if (day_of_week !== "0") {
//         days_to_show.unshift(...days_of_last_month);

//         const days_of_next_month = data.all[quick_access.curr_month.arr_ind + 1].days.slice(0, 34 - days_to_show.length);

//         days_to_show.push(...days_of_next_month);
//     }

//     return days_to_show;
// }



export function init_data_obj() {
    // const ls_data = get_data_from_ls();
    const ls_data = false;

    const data = ls_data || {
        all: [],
        quick_access: {}
    }


    if (!ls_data) {
        const months = get_months(),
            curr_month = format(new Date(), "MMMM");


        months.forEach((month, i) => {
            const month_data = get_month_data(month, i);
            data.all.push(month_data);
        })

        const quick_access = {
            curr_month: data.all.find(({ name }) => name === curr_month),
            last_day_selected: null,
            days_to_show: [],
            all_notes: [],
        };

        // quick_access.days_to_show = get_days_to_show(data, quick_access);


        // console.log("days to show ", quick_access.days_to_show)

        data.quick_access = quick_access;
    }

    return data;
}



