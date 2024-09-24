import { SomeLogo } from "../assets";
import { useState } from "react";
import { SignInForm, SignUpForm } from "../components";

export default function Login() {
  const [hasAccount, setHasAccount] = useState(false);

  return (
    <main>
      <div className="flex">
        <div>
          <div className="flex">
            <img src={SomeLogo} alt="Логотип" />
            <span>Calendar</span>
          </div>
        </div>
        <div className="">
          {hasAccount ? <SignInForm setHasAccount={setHasAccount}/> : <SignUpForm setHasAccount={setHasAccount}/>}
        </div>
      </div>
    </main>
  );
}
