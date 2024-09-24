import { useState, useRef } from "react";

const GenFormInput = () => {
  const form_ref = useRef();
  const [is_shown, set_is_shown] = useState(false);
  const handle_is_shown = () => set_is_shown((prev) => !prev);

  const on_submit = (e) => {
    e.preventDefault();
    const form_data = new FormData(form_ref.current);
    form_data.entries().forEach(([key, value]) => {
        console.log({key, value});
    });
    
  };

  return (
    <form ref={form_ref} onSubmit={on_submit} className="">
      <div>
        <span>EMAIL</span>
        <input type="text" name="email" placeholder="example@gmai.com" />
      </div>
      <div>
        <div>
          <span>PASSWORD</span>
          <input type={is_shown ? "password" : "text"} name="password" />
        </div>
        <svg onChange={handle_is_shown} />
      </div>
      <button type="submit">
        <span>
          <span>Continue</span>
          <svg />
        </span>
      </button>
    </form>
  );
};

export default GenFormInput;
