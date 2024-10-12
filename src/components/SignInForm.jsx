import GenFormInput from "./GenFormInput";
import { useContext, useState } from "react";
import { Logined } from "../context";
import { signInWithPassword } from "../firebase";

export default function SignInForm({ setHasAccount }) {
  
  const {login} = useContext(Logined);

  const [error_str, set_error_str] = useState("");

  const on_success = () => login();

  const onSubmit = (values) => {
    signInWithPassword(values, on_success, set_error_str);
  }

  return (
    <>
      <h2 className="font-bold text-4xl py-4">Sign In</h2>

      <GenFormInput onSubmit={onSubmit} error_str={error_str}/>

      <span
        onClick={setHasAccount.bind(null, false)}
        className="text-base flex justify-center gap-1 mt-2"
      >
        <span>Are you a Newbie?</span>{" "}
        <b className="border-b-[1px]">GET STARTED</b>
      </span>
    </>
  );
}
