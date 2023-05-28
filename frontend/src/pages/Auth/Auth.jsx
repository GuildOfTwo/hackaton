import { useState } from "react";
import { Login, Register } from "../../components/Auth";
import styles from './styles.module.sass'

export const AuthPage = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <section className={styles.section}>
      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() => setToggle(false)}
        >
          Регистрация
        </button>
        <div onClick={handleClick} className={styles.toggle}>
          <div className={toggle ? styles.knobActive : styles.knob} />
        </div>
        <button
          className={styles.button}
          onClick={() => setToggle(true)}
        >
          Авторизация
        </button>
      </div>

      {toggle ? <Login /> : <Register />}
      
    </section>
  );
};
