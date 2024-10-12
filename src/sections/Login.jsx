import { SomeLogo, LoginPattern } from "../assets";
import { useContext, useState } from "react";
import { SignInForm, SignUpForm } from "../components";
import { Logined } from "../context";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [hasAccount, setHasAccount] = useState(false);
  const {logined, login} = useContext(Logined)

  if (logined) {    
    return <Navigate to="/" />;
  }

  return (
    <main className="flex justify-evenly gothic">
      <div className="flex flex-col py-9">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <img src={SomeLogo} alt="Логотип" />
            <span className="text-4xl">Calendar</span>
          </div>
        </div>
        <div className="w-[360px] max-phone:w-full flex flex-col">
          {hasAccount ? <SignInForm setHasAccount={setHasAccount}/> : <SignUpForm setHasAccount={setHasAccount}/>}
        </div>

        <div onClick={() => login()} className="w-full flex justify-center opacity-70">
          <p>Go in as incognito</p>
        </div>
      </div>
      <div className="w-fit max-md:hidden">
        <img src={LoginPattern} alt="" className="w-auto h-screen max-md_l:fixed max-md_l:-right-[203px] max-md_l:w-[406px]"/>
      </div>
    </main>
  );
}
