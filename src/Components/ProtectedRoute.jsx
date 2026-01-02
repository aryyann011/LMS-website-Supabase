import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/Authcontext";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return null; // or loader

  if (!user) return <Navigate to="/" replace />;

  const role = user.user_metadata?.role;

  if (role === "teacher") {
    return <Navigate to="/teacher/dashboard" replace />;
  }

  if (role === "student") {
    return <Navigate to="/student" replace />;
  }

  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
