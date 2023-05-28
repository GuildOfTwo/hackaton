import styles from "./styles.module.sass";

import img from "../../assets/images/img.png";

import arrow from "../../assets/images/arrow.png";
import arrow2 from "../../assets/images/arrow2.gif";


export const Hero = ({prop}) => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          Добро пожаловать в мир креативных пространств Москвы! Наша
          интерактивная карта поможет вам найти идеальное место для вашего
          проекта. Нажмите на кнопку ниже, чтобы начать свой поиск уже сегодня!
        </p>
        <img src={img} alt="" className={styles.img} />
      </div>
      {/* <button className={styles.btn} onClick={(e) => prop.current.scrollIntoView()  }><img src={arrow} className={styles.arrow}/></button> */}
    </section>
  );
};
