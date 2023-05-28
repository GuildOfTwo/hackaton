import { useEffect } from "react";
import { Header } from "./layout/Header/Header";
import { Main } from "./layout/Main/Main";
import { useDispatch } from "react-redux";
import { setObjects, setComments } from "./store/dataSlice";
// import { data } from "./TEMP_DATA/DATA";
import {
  setLoggedIn,
  setToken,
  setLoggedOut,
  deleteToken,
} from "./store/authSlice";
import { apiAuth } from "./utils/api/apiAuth";
import { setAllUsers, setUserData } from "./store/userSlice";
import { apiObjects } from "./utils/api/objectsApi";
import { apiComments } from "./utils/api/commentsApi";

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
          console.log(res, 'user DATA')
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
        console.log(res, "объекты");
        dispatch(setObjects(res));
      })
      .catch((err) => console.log(err));
    apiComments
      .getCommentsList()
      .then((res) => {
        console.log(res, "комментарии");
        dispatch(setComments(res));
      })
      .catch((err) => console.log(err));
    apiObjects
      .getAllUsers()
      .then((res) => {
        console.log(res, "пользователи");
        dispatch(setAllUsers(res));
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
