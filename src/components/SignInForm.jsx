import GenFormInput from "./GenFormInput";

export default function SignInForm({ setHasAccount }) {
  console.log("Sign In");
  
  return (
    <>
      <h2 className="font-bold text-4xl py-4">Sign In</h2>

      <GenFormInput />

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
