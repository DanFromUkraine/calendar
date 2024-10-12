import { useContext, useState } from "react";
import GenFormInput from "./GenFormInput";
import { Logined } from "../context";
import { createUserWithPassword } from "../firebase";


export default function SignUpForm({ setHasAccount }) {
  const { login } = useContext(Logined);
  const [error_str, set_error_str] = useState("");


  const on_success = () => login();

  const onSubmit = (values) => {
    createUserWithPassword(values, on_success, set_error_str);
  };

  return (
    <>
      <h2 className="font-bold text-4xl py-4">Sign Up</h2>
      <GenFormInput onSubmit={onSubmit} error_str={error_str}/>
      <span
        onClick={setHasAccount.bind(null, true)}
        className="text-base flex justify-center gap-1 mt-2"
      >
        <span>Already a member?</span> <b className="border-b-[1px]">LOG IN</b>
      </span>
    </>
  );
}
