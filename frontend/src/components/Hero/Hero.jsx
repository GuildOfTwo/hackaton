import styles from "./styles.module.sass";

import img from "../../assets/images/img.png";

export const Hero = () => {
  return (
    <section className={styles.section}>
      <p className={styles.text}>
        Добро пожаловать в мир креативных пространств Москвы! Наша интерактивная
        карта поможет вам найти идеальное место для вашего проекта. Нажмите на
        кнопку ниже, чтобы начать свой поиск уже сегодня!
      </p>
      <img src={img} alt="" className={styles.img} />
    </section>
  );
};
