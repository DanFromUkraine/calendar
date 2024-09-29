import { useState } from "react";
import { Logined } from "../context";

export default function AuthProvider({ children }) {
  const [logined, setLogined] = useState(true);
  const login = () => setLogined(true);
  const logout = () => setLogined(false);

  return (
    <Logined.Provider value={{ logined, login, logout }}>
      {children}
    </Logined.Provider>
  );
}
