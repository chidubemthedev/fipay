import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: any }) => {
  const authenticated = true;

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
