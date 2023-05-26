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

function App() {
  const dispatch = useDispatch();

  let isLoggedIn = localStorage.getItem("logIn") && true;
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (isLoggedIn) {
      dispatch(setLoggedIn(true));
      dispatch(setToken(token));
    }
  }, [isLoggedIn]);
console.log(isLoggedIn)
  useEffect(() => {
    dispatch(setData(data));
  }, []);
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
