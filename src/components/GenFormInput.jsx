import { useState, useRef } from "react";
import { GoogleIcon, Eye, ArrowRight } from "../assets";

const GenFormInput = () => {
  const form_ref = useRef();
  const [is_shown, set_is_shown] = useState(true);
  const handle_is_shown = () => set_is_shown((prev) => !prev);

  const on_submit = (e) => {
    e.preventDefault();
    const form_data = new FormData(form_ref.current);
    form_data.entries().forEach(([key, value]) => {
      console.log({ key, value });
    });
  };

  return (
    <form ref={form_ref} onSubmit={on_submit} className="flex flex-col gap-y-4">
      <button className="flex justify-center gap-4 bg-light_blue rounded-[48px] w-full p-4">
        <img src={GoogleIcon} alt="" />
        <span> Sign with Google</span>
      </button>
      <div className="h-0.5 w-full bg-gray flex justify-center items-center my-5">
        <p className="h-5 bg-white w-fit px-1 relative -top-1">Or use email</p>
      </div>
      <div className="gen_input">
        <span>EMAIL</span>
        <input type="text" name="email" placeholder="example@gmail.com" />
      </div>
      <div className="">
        <div className="gen_input">
          <span>PASSWORD</span>
          <div className="flex justify-between items-center">
            <input
              type={is_shown ? "password" : "text"}
              name="password"
              placeholder="12345"
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
      <button type="submit" className="flex w-full py-4 justify-center items-center bg-darker_gray rounded-xl">
        <span className="flex gap-4 text-white">
          <span>Continue</span>
          <img src={ArrowRight} alt="" />
        </span>
      </button>
    </form>
  );
};

export default GenFormInput;
