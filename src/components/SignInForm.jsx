import GenFormInput from "./GenFormInput";
import { useContext } from "react";
import { Logined } from "../context";
import { signInWithPassword } from "../firebase";

export default function SignInForm({ setHasAccount }) {
  
  const {login} = useContext(Logined);

  const on_success = () => login();

  const onSubmit = (values) => {
    signInWithPassword(values, on_success);
  }

  return (
    <>
      <h2 className="font-bold text-4xl py-4">Sign In</h2>

      <GenFormInput onSubmit={onSubmit}/>

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
