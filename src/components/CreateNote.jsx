import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import CreateIcon from "@mui/icons-material/Create";
import Inputmask from "inputmask";

import { NOTES_COLOR_NAMES } from "../constants";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

const Color_option = ({ color, onClick }) => {
  return (
    <span
      onClick={onClick?.bind(null, color)}
      className={`bg-${color} !w-4 h-4 rounded-md border-2 border-gray_v6`}
    ></span>
  );
};

const Date_input = ({ ...props }) => {
  const [field] = useField(props);

  useEffect(() => {
    Inputmask({regex: "[0-2][0-9]:[0-5][0-9]"}).mask(document.getElementById("date_inp"));
  });
  return (
    <input
      type="text"
      id="date_inp"
      placeholder="12:59"
      {...props}
      {...field}
    />
  );
};

export default function CreateNote({ on_cancel, on_submit }) {
  const [selected_color, set_selected_color] = useState(
    NOTES_COLOR_NAMES.green + "-dot"
  );
  const [opened, set_opened] = useState(false);

  // const date_inp = useRef();

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

  const colors_list_classes = classNames(
    "grid-cols-2 gap-1",
    { "hidden ": !opened },
    { grid: opened }
  );

  return (
    <Formik
      initialValues={{ title: "", description: "", date: "" }}
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
              <ErrorMessage type="text" name="title" />
            </span>
          </div>
          <div className="w-full">
            <textarea
              type="text"
              name="decription"
              placeholder="Description (optional)"
              onInput={handle_textarea_size}
              className="focus:outline-none w-full resize-none overflow-hidden "
            ></textarea>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex gap-1">
              <span>Color:</span>
              <span className="flex items-center">
                <Color_option color={selected_color} />
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
                    onClick={handle_color_click}
                  />
                )
              )}
            </div>
          </div>
          <div className="w-full flex items-center gap-4">
            <span>{"Date (optional):"}</span>
            <div className="">
              <Date_input name="date" className="text-center w-12" />
            </div>
          </div>
          <div className="flex justify-between text-base font-semibold">
            <button type="submit" className="text-gray_v6 ">
              Submit
            </button>
            <button className="text-rose-700" onClick={on_cancel}>
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
