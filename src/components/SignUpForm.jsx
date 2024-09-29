import GenFormInput from "./GenFormInput"

export default function SignUpForm({setHasAccount}) {
  console.log("Sign UP");

  return (
    <>
      <h2 className="font-bold text-4xl py-4">Sign Up</h2>
      <GenFormInput />
      <span onClick={setHasAccount.bind(null, true)} className="text-base flex justify-center gap-1 mt-2">
        <span>Already a member?</span> <b className="border-b-[1px]">LOG IN</b>
      </span>
    </>
  )
}
