import { SomeLogo, LoginPattern } from "../assets";
import { useState } from "react";
import { SignInForm, SignUpForm } from "../components";


export default function Login() {
  const [hasAccount, setHasAccount] = useState(false);

  return (
    <main className="flex justify-evenly gothic">
      <div className="flex flex-col py-9">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <img src={SomeLogo} alt="Логотип" />
            <span className="text-4xl">Calendar</span>
          </div>
        </div>
        <div className="w-[360px] flex flex-col">
          {hasAccount ? <SignInForm setHasAccount={setHasAccount}/> : <SignUpForm setHasAccount={setHasAccount}/>}
        </div>
      </div>
      <div className="w-fit max-md:hidden">
        <img src={LoginPattern} alt="" className="w-auto h-screen max-md_l:fixed max-md_l:-right-[203px] max-md_l:w-[406px]"/>
      </div>
    </main>
  );
}
