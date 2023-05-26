import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export const Protected = ({children}) => {

  const logedIn = useSelector((state) => state.auth.loggedIn);
  if (!logedIn) {
    return <Navigate to="/auth" replace />;
  }
  return children;
};
