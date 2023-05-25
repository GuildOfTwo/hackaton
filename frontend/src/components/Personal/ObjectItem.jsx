import styles from "./styles.module.sass";
import { useState } from "react";
import { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ButtonDefault } from "../ButtonDefault/ButtonDefault";

export const ObjectItem = ({ el }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const navigate = useNavigate();

  return (
    <div
      className={styles.objectWrapper}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img
        src={el.images[0]}
        className={styles.img}
        style={
          el.status.rejectText.length >= 1 ? { filter: css`grayscale(1)` } : {}
        }
      />
      <p className={styles.infobar}>
        {el.status.rejectText.length >= 1
          ? el.status.rejectText
          : el.status.status}
      </p>
      <p className={styles.cardTitle}>{el.name}</p>
      {isHovering  &&
        (
          <div className={styles.hoverWrapper}>
            {el.status.rejectText.length <= 0 &&   <ButtonDefault
              lable="К карточке"
              action={() => navigate(`/space/${el.id}`)}
            /> }
          
            <ButtonDefault
              lable="Внести изменения"
              action={() => navigate(`/edit/${el.id}`)}
            />

          </div>
        )}
    </div>
  );
};
