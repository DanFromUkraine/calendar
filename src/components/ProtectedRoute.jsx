import { useContext } from "react";
import { Logined } from "../context/context";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isLogined } = useContext(Logined);
  if (!isLogined) {
    return <Navigate to="/login" />;
  }

  return typeof children === 'function' ? children() : children;
}

