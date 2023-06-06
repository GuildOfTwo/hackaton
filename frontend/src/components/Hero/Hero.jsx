import styles from "./styles.module.sass";
import { TypeAnimation } from 'react-type-animation';

import img from "../../assets/images/img.png";

import arrow from "../../assets/images/arrow.png";
import arrow2 from "../../assets/images/arrow2.gif";


export const Hero = ({prop}) => {
  return (
    <section className={styles.section}>
      <TypeAnimation
      sequence={[
        'Добро пожаловать в мир креативных пространств Москвы! Наша интерактивная карта поможет вам найти идеальное место для вашего проекта. Нажмите на кнопку ниже, чтобы начать свой поиск уже сегодня!', // Types 'One'
        1000, // Waits 1s
      ]}
      wrapper="p"
      cursor={true}
      repeat={false}
      className={styles.text}
      // style={{ fontSize: '2em', display: 'inline-block' }}
    />
      {/* <p className={styles.text}>
        Добро пожаловать в мир креативных пространств Москвы! Наша интерактивная
        карта поможет вам найти идеальное место для вашего проекта. Нажмите на
        кнопку ниже, чтобы начать свой поиск уже сегодня!
      </p> */}
      <img src={img} alt="" className={styles.img} />
    </section>
  );
};
