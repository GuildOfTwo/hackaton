import { CardItem } from "./CardItem";
import styles from "./styles.module.sass";
// import { data } from "../../TEMP_DATA/DATA";
import { useSelector } from "react-redux";

export const CardsList = () => {

  const data = useSelector(state => state.cards.objects)
  return (
    <section className={styles.cardsList}>
      <h2 className={styles.cardsListTitle}> Все площадки</h2>

      <ul className={styles.listWrapper}>
        {data.length && data?.map((el, index) => (
            <CardItem data={el} key={index}/>
        ))}
        
       
      </ul>
    </section>
  );
};
