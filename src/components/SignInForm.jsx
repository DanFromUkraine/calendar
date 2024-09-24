import GenFormInput from "./GenFormInput";

export default function SignInForm({setHasAccount}) {
  return (
    <div>SignInForm
        <GenFormInput />

        <span onClick={setHasAccount.bind(null, false)}>
          Are you a Newbie? <b>GET STARTED</b>
        </span>
    </div>   
  )
}
