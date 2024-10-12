import { useContext } from "react";
import { Logined } from "../context";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { logined } = useContext(Logined);


  if (!logined) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
