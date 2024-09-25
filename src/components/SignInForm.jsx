import GenFormInput from "./GenFormInput";

export default function SignInForm({setHasAccount}) {
  return (
    <>
        <GenFormInput />

        <span onClick={setHasAccount.bind(null, false)} className="text-base flex justify-center gap-1 mt-2">
          <span>Are you a Newbie?</span> <b className="border-b-[1px]">GET STARTED</b>
        </span>
    </>   
  )
}
