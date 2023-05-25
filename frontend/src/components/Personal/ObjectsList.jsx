import styles from "./styles.module.sass";
// import { data } from "../../TEMP_DATA/DATA";
import { useEffect, useState } from "react";
import { ObjectItem } from "./ObjectItem";
import { useSelector } from "react-redux";

export const ObjectsList = ({ id }) => {
  let tempId = 1;
  const [cards, setCards] = useState([]);
  const data = useSelector((state) => state.cards.state);

  useEffect(() => {
    let objects;
    if (data.length) {
      objects = data?.filter((el) => el.ownerId == tempId);
    }

    setCards(objects);
  }, [data.length]);

  return (
    <>
      {cards.length >= 1 ? (
        cards.map((el, index) => <ObjectItem el={el} key={index} />)
      ) : (
        <div className={styles.emptyObjects}>Нет добавленных объектов</div>
      )}
    </>
  );
};
