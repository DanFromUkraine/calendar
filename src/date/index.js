import { format, add, sub, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";



function get_months() {
    const now = new Date();
    const months_arr = [now];

    for (let i = 1; i <= 6; i++) {
        months_arr.unshift(sub(now, { months: i }))
        months_arr.push(add(now, { months: i }))
    }

    return months_arr;
}

function get_month_data(month) {
    const month_data = {};
    month_data.name = format(month, "MMMM");
    month_data.days = get_days(month);

    return month_data;
}

function get_days(month) {
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


export function init_data_obj() {
    const months = get_months(),
        all_notes = [],
            curr_month = format(new Date(), "MMMM");

    const data = {
        all: [],
        quick_access: {
            curr_month,
            curr_months_days: get_days(new Date()),
            marked_notes: [],
            all_notes,
            sidebar_events: all_notes,
            selected_month: curr_month
        }
    }

    for (const month of months) {
        const month_data = get_month_data(month);
        data.all.push(month_data);
    }

    return data;
}

