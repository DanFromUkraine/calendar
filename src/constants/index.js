import * as yup from "yup";

export const all_errs = {
    "auth/email-already-in-use": "email з такою назвою вже існує"
}

export const REDUCER_TYPES = {
    CHANGE_SEL: "change if day is selected",
    CREATE_QL: "create quick link(reference)",
    NAV_MONTH_LAST: "navigate_to_last_month",
    NAV_MONTH_NEXT: "navigate_to_next_month",
    CREATE_NOTE: "create_note",
    CHANGE_NOTE_IS_DONE: ""
}

export const day_names = ["m", "t", "w", "t", "f", "s", "s"];


export const USER_SCHEMA = yup.object({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(4, "password is too short").required()
})

export const CREATE_NOTE_SCHEMA = yup.object({
    title: yup.string().required("Required"),
    date: yup.string().min(1, (arg) => {
        console.log(arg);
        
    })
});


export const NOTES_COLOR_NAMES = {
    green: "green",
    red: "red",
    yellow: "yellow",
    green_v2: "green_v2",
    blue_v2: "blue_v2",
    purple: "purple"
}

