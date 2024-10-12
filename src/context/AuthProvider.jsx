import { useState } from "react";
import { Logined } from ".";
// import { Navigate } from "react-router-dom";

export default function AuthProvider({ children }) {
  const logined_json = sessionStorage.getItem("logined");
  const logined_ss = JSON.parse(logined_json);

  console.log(logined_ss);

  const [logined, setLogined] = useState(logined_ss);
  const login = () => setLogined(true);
  const logout = () => setLogined(false);

  sessionStorage.setItem("logined", JSON.stringify(logined));

  return (
    <Logined.Provider value={{ logined, login, logout }}>
      {children}
    </Logined.Provider>
  );
}
