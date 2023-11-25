import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

const Private = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-spinner text-warning"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace/>;
};

export default Private;
