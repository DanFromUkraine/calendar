import { Formik, Form, Field, ErrorMessage } from "formik";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import CreateIcon from "@mui/icons-material/Create";

import { useState } from "react";
import classNames from "classnames";

import { NOTES_COLOR_NAMES } from "../constants";
import { Color_option } from "./Color_option";
import Formik_date_input from "./Formik_date_input";
import { CREATE_NOTE_SCHEMA } from "../constants";
import ErrorWrapper from "./ErrorWrapper";

import { v4 } from "uuid";

export default function CreateNote({
  on_cancel,
  on_submit,
  initial_state,
  day_selected,
}) {
  const [date_inp_completed, set_date_inp_completed] = useState(false);

  return (
    <Formik
      initialValues={
        initial_state || {
          title: "",
          date: "",
          is_done: false,
          day: day_selected,
          id: v4(),
        }
      }
      validationSchema={CREATE_NOTE_SCHEMA}
      onSubmit={on_submit}
    >
      {() => (
        <Form className="w-full max-w-[250px] py-4 flex flex-col gap-y-4">
          <div className="w-full flex border-t-4 rounded-t-md pt-1 border-gray_v6 relative -left-1">
            <NoteAddIcon />
            <span className="">
              <Field
                type="text"
                name="title"
                placeholder="Note name (input)"
                className="focus:outline-none"
              />
              <ErrorWrapper>
                <ErrorMessage type="text" name="title" />
              </ErrorWrapper>
            </span>
          </div>

          <div className="w-full flex items-center gap-4">
            <span>{"Date (optional):"}</span>
            <div className="">
              <Formik_date_input
                name="date"
                set_date_inp_completed={set_date_inp_completed}
                className={`!w-14 focus:outline-none p-1 ${
                  date_inp_completed && "bg-lime-500 rounded-md"
                }`}
              />
            </div>
          </div>
          <div className="flex justify-between text-base font-semibold">
            <button type="submit" className="text-gray_v6 ">
              Submit
            </button>
            <button className="text-rose-700" onClick={on_cancel} type="button">
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
