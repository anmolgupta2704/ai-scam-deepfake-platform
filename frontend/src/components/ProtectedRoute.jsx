import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const isAuth = true; // backend se token check karoge baad me
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
