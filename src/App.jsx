// import { Home, Login } from "./sections";
import { AuthProvider, ProtectedRoute } from "./components";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("./sections/Home"));
const Login = lazy(() => import("./sections/Login"));

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}
