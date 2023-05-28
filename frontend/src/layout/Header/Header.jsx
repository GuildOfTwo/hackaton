import styles from "./styles.module.sass";
import logo from "../../assets/images/headerLogo.svg";
import { ButtonDefault } from "../../components/ButtonDefault/ButtonDefault";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { apiAuth } from "../../utils/api/apiAuth";
import { setLoggedOut, deleteToken } from "../../store/authSlice";

export const Header = () => {
  const navigate = useNavigate();
  const logedIn = useSelector((state) => state.auth.loggedIn);

  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const handleLogout = () => {
    // apiAuth
    //   .logout(token)
    //   .then((res) => {
    dispatch(setLoggedOut(true));
    dispatch(deleteToken(token));
    localStorage.clear();
    // console.log(res);
    navigate("/");
    apiAuth.logout(token);
    //   })
    //   .catch((err) => console.log(err));
  };
  const location = useLocation();
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img src={logo} />
        <h1 className={styles.title} onClick={() => navigate("/")}>
          Креативные площадки Москвы
        </h1>
        {logedIn ? (
          <div className={styles.btnWrapper}>
            {location.pathname !== "/lk" && (
              <ButtonDefault
                lable="Личный кабинет"
                action={() => navigate("/lk")}
              />
            )}

            <ButtonDefault lable="Выйти" action={() => handleLogout()} />
          </div>
        ) : (
          <ButtonDefault lable="Войти" action={() => navigate("/auth")} />
        )}
      </div>
    </header>
  );
};
