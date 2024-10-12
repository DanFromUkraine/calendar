import { useState } from "react";
import { GoogleIcon, Eye, ClosedEye, ArrowRight } from "../assets";
import {} from "../firebase";
import { USER_SCHEMA } from "../constants/index";
import ErrorWrapper from "./ErrorWrapper";
// import { error_str } from "../firebase";

import { Formik, Form, Field, ErrorMessage } from "formik";

const initial_values = {
  email: "",
  password: "",
};

export default function GenFormInput({ onSubmit, error_str }) {
  const [is_shown, set_is_shown] = useState(false);
  const handle_is_shown = () => set_is_shown((prev) => !prev);

  const on_submit = (values, utils) => {
    onSubmit(values);
    utils.resetForm();
  };

  return (
    <Formik
      initialValues={initial_values}
      onSubmit={on_submit}
      validationSchema={USER_SCHEMA}
    >
      {() => (
        <Form className="flex flex-col gap-y-4">
          <button
            className="flex justify-center gap-4 bg-light_blue rounded-[48px] w-full p-4 opacity-40"
            // onClick={google_login_click}
            type="button"
          >
            <img src={GoogleIcon} alt="" />
            <span> Sign with Google</span>
          </button>
          <div className="h-0.5 w-full bg-gray flex justify-center items-center my-5">
            <p className="h-5 bg-white w-fit px-1 relative -top-1">
              Or use email
            </p>
          </div>
          <div className="gen_input">
            <span>EMAIL</span>
            <Field
              type="text"
              name="email"
              placeholder="some.email@gmail.com"
            />
            <ErrorWrapper>
              <ErrorMessage name="email" className="" />
            </ErrorWrapper>
          </div>
          <div className="">
            <div className="gen_input">
              <span>PASSWORD</span>
              <div className="flex justify-between items-center">
                <Field
                  type={is_shown ? "password" : "text"}
                  name="password"
                  placeholder="12345"
                />
                <ErrorWrapper>
                  <ErrorMessage name="password" className="" />
                </ErrorWrapper>
                <span onClick={handle_is_shown}>
                  {is_shown ? (
                    <img src={Eye} alt="show" className="w-4 h-4" />
                  ) : (
                    <img src={ClosedEye} alt="hide" className="w-4 h-auto" />
                  )}
                </span>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="flex w-full py-4 justify-center items-center bg-darker_gray rounded-xl"
          >
            <span className="flex gap-4 text-white">
              <span>Continue</span>
              <img src={ArrowRight} alt="" />
            </span>
          </button>
          <ErrorWrapper>{error_str}</ErrorWrapper>
        </Form>
      )}
    </Formik>
  );
}
