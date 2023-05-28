import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export const Protected = ({children}) => {

  let isLoggedIn = localStorage.getItem("logIn") && true;
  if (!isLoggedIn) {
    return <Navigate to="/auth" replace />;
  }
  return children;
};
