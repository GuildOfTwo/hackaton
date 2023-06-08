import { Filters } from "../../components/Filters/Filters";
import { Hero } from "../../components/Hero/Hero";
import { YandexMap } from "../../components/Ymap/YandexMap";
import { CardsList } from "../../components/Cards/CardsList";
import { useRef } from "react";
import { ToTop } from "../../components/ToTop/ToTop";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { apiAuth } from "../../utils/api/apiAuth";
import { setUserData } from "../../store/userSlice";
import { setLoggedIn, setToken } from "../../store/authSlice";
export const HomePage = () => {
  const myRef = useRef(null);
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
          console.log(res, "user DATA");
          dispatch(setUserData(res));
          localStorage.setItem("role", res.role);
          localStorage.setItem("id", res.id);
        })
        .catch((err) => console.log(err));
    }
  }, [isLoggedIn]);
  return (
    <>
      <Hero prop={myRef} />
      <Filters />
      <YandexMap prop={myRef} />
      <CardsList />
      <ToTop />
    </>
  );
};
