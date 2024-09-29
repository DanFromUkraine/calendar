import { useState, useRef, useContext, useReducer } from "react";
import { GoogleIcon, Eye, ArrowRight } from "../assets";
import { redirect_login } from "../firebase";
import { createUserWithPassword } from "../firebase";
import { Logined } from "../context";
import { all_errs } from "../constants/index";

function errors_handler(state, action) {
  const { type, errorCode } = action;
  if (type === "none") {
    return new Error(`wtf?? ${errorCode}`);
  }
  if (type === "email_err") {
    return {
      ...state,
      email_err: all_errs.errorCode || errorCode,
    };
  }
  if (type === "password_err") {
    return {
      ...state,
      password_err: all_errs.errorCode || errorCode,
    };
  }
}

const GenFormInput = () => {
  const { login } = useContext(Logined);

  const form_ref = useRef();
  const [is_shown, set_is_shown] = useState(true);
  const handle_is_shown = () => set_is_shown((prev) => !prev);

  const [errs, set_errs] = useReducer(errors_handler, {});

  console.log({ errs });

  const on_submit_success = () => {
    login();
  };
  const on_submit_fail = (error_obj) => {
    set_errs(error_obj);
  };

  const on_submit = (e) => {
    e.preventDefault();
    const form_data = new FormData(form_ref.current);
    const user_data = {};
    form_data.entries().forEach(([key, value]) => {
      user_data[key] = value;
    });
    createUserWithPassword(user_data, on_submit_success, on_submit_fail);
  };

  return (
    <form ref={form_ref} onSubmit={on_submit} className="flex flex-col gap-y-4">
      <button
        className="flex justify-center gap-4 bg-light_blue rounded-[48px] w-full p-4"
        onClick={redirect_login}
      >
        <img src={GoogleIcon} alt="" />
        <span> Sign with Google</span>
      </button>
      <div className="h-0.5 w-full bg-gray flex justify-center items-center my-5">
        <p className="h-5 bg-white w-fit px-1 relative -top-1">Or use email</p>
      </div>
      <div className="gen_input">
        <span>EMAIL</span>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          autoComplete="username"
          required
        />
      </div>
      <div className="">
        <div className="gen_input">
          <span>PASSWORD</span>
          <div className="flex justify-between items-center">
            <input
              type={is_shown ? "password" : "text"}
              name="password"
              autoComplete="current-password"
              placeholder="12345"
              required
            />
            <span
              className={`${!is_shown && " w-4 bg-dark_gray h-1 "}`}
              onClick={handle_is_shown}
            >
              <img
                src={Eye}
                alt="show"
                className={`w-4 h-4 ${!is_shown && "hidden"}`}
              />
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
    </form>
  );
};

export default GenFormInput;
