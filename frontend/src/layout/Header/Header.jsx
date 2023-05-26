import styles from "./styles.module.sass";
import logo from "../../assets/images/headerLogo.svg";
import { ButtonDefault } from "../../components/ButtonDefault/ButtonDefault";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { apiAuth } from "../../utils/apiAuth";
import {

    setLoggedOut,
    deleteToken,
  } from "../../store/authSlice";

export const Header = () => {
  const navigate = useNavigate();
  const logedIn = useSelector((state) => state.auth.loggedIn);

  const token = localStorage.getItem('token')
  const dispatch = useDispatch()

  console.log(token)

 const handleLogout = () => {
    // apiAuth.logout(token)
    // .then((res) =>{
        dispatch(setLoggedOut(true));
        dispatch(deleteToken(token));
        localStorage.clear()
    // })
    // .catch(err => console.log(err))
 }
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img src={logo} />
        <h1 className={styles.title} onClick={() => navigate("/")}>
          Креативные площадки Москвы
        </h1>
        {logedIn ? (
            <>
          <ButtonDefault
            lable="В личный кабинет"
            action={() => navigate("/lk")}
          />
          <ButtonDefault
          lable="Выйти"
          action={() => handleLogout()}
        />
        </>
        ) : (
          <ButtonDefault lable="Войти" action={() => navigate("/auth")} />
        )}
      </div>
    </header>
  );
};
