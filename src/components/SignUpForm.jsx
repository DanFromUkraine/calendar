
export default function SignUpForm({setHasAccount}) {
  return (
    <div>SignUpForm
      <span onClick={setHasAccount.bind(null, true)}>
        Already a member? <span>LOG IN</span>
      </span>
    </div>
  )
}
