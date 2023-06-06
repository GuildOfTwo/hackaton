import { useEffect, useState } from "react";
import { CardItem } from "./CardItem";
import styles from "./styles.module.sass";
// import { data } from "../../TEMP_DATA/DATA";
import { useSelector } from "react-redux";

export const CardsList = () => {
  const data = useSelector((state) => state.cards.objects);
  const [state, setState] = useState({ size: 3 });

  const handleScroll = () => {
    document.addEventListener("scroll", () => {
      let scrollTop = document.documentElement.scrollTop,
        windowHeight = window.innerHeight,
        height = document.body.scrollHeight - windowHeight,
        scrollPercentage = scrollTop / height;
      if (scrollPercentage > 0.9) {
        let newSize = state.size + 3;
        setState(newSize);
      }
    });
  };

  useEffect(() => {
    handleScroll();
  }, []);

  let disp;
  const items = data.length && data?.slice(0, state.size);
  if (items) {
    disp = items.map((el, index) => {
      return <CardItem data={el} key={index} />;
    });
  }

  return (
    <section className={styles.cardsList}>
      <h2 className={styles.cardsListTitle}> Все площадки</h2>

      <ul className={styles.listWrapper}>
        {disp}
        {/* {data.length &&
          data?.map((el, index) => <CardItem data={el} key={index} />)} */}
      </ul>
    </section>
  );
};
