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

export default function CreateNote({ on_cancel, on_submit, initial_state, day_selected }) {
  const [selected_color, set_selected_color] = useState(
    NOTES_COLOR_NAMES.green
  );
  const [opened, set_opened] = useState(false);

  const handle_textarea_size = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handle_edit_click = () => {
    set_opened((prev) => !prev);
  };

  const handle_color_click = (color) => {
    set_selected_color(color);
    set_opened(false);
  };

  const [date_inp_completed, set_date_inp_completed] = useState(false);

  const colors_list_classes = classNames(
    "grid-cols-2 gap-1",
    { "hidden ": !opened },
    { "grid": opened }
  );

  return (
    <Formik
      initialValues={
        initial_state || {
          title: "",
          description: "",
          date: "",
          selected_color: selected_color,
          is_done: false,
          day: day_selected
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
          <div className="w-full">
            {/* <textarea></textarea> */}

            <Field
              type="text"
              name="description"
              placeholder="Description (optional)"
              onInput={handle_textarea_size}
              className="focus:outline-none w-full resize-none overflow-hidden "
              as="textarea"
            />
          </div>

          <div className="flex items-start gap-4">
            <div className="flex gap-1">
              <span>Color:</span>
              <span className="flex items-center">
                <Color_option color={selected_color + "-dot"} />
              </span>
            </div>

            <span onClick={handle_edit_click}>
              <CreateIcon />
            </span>

            <div className={colors_list_classes}>
              {Object.entries(NOTES_COLOR_NAMES).map(
                // eslint-disable-next-line no-unused-vars
                ([classkey, classval], i) => (
                  <Color_option
                    key={i}
                    color={`${classval}-dot`}
                    clear_color={classval}
                    onClick={handle_color_click}
                  />
                )
              )}
            </div>
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
