import { useEffect } from "react";
import { Header } from "./layout/Header/Header";
import { Main } from "./layout/Main/Main";
import { useDispatch } from "react-redux";
import { setData } from "./store/dataSlice";
import { data } from "./TEMP_DATA/DATA";
import {
  setLoggedIn,
  setToken,
  setLoggedOut,
  deleteToken,
} from "./store/authSlice";
import { apiAuth } from "./utils/apiAuth";
import { setUserData } from "./store/userSlice";
import { apiObjects } from "./utils/objectsApi";

function App() {
  const dispatch = useDispatch();

  let isLoggedIn = localStorage.getItem("logIn") && true;
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (isLoggedIn) {
      dispatch(setLoggedIn(true));
      dispatch(setToken(token));
      apiAuth
        .getUserData(token)
        .then((res) => {
          dispatch(setUserData(res));
          localStorage.setItem("role", res.role);
        })
        .catch((err) => console.log(err));
   
    }
  }, [isLoggedIn]);

  useEffect(() => {
    apiObjects
    .getObjectsList()
    .then((res) => {
      console.log(res)
      dispatch(setData(res));
    })
    .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
