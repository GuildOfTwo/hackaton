import styles from "./styles.module.sass";
import { useState } from "react";
import { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ButtonDefault } from "../ButtonDefault/ButtonDefault";

export const ObjectItem = ({ data }) => {
  const [isHovering, setIsHovering] = useState(false);

  const {images, building_status, title, id} = data

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
        src={images[0]}
        className={styles.img}
        style={
          building_status[0].reject_text.length >= 1 ? { filter: css`grayscale(1)` } : {}
        }
      />
      <p className={styles.infobar}>
        {building_status[0].reject_text.length >= 1
          ? building_status[0].reject_text
          : building_status.stat}
      </p>
      <p className={styles.cardTitle}>{title}</p>
      {isHovering  &&
        (
          <div className={styles.hoverWrapper}>
            {building_status[0].reject_text.length <= 0 &&   <ButtonDefault
              lable="К карточке"
              action={() => navigate(`/space/${id}`)}
            /> }
          
            <ButtonDefault
              lable="Внести изменения"
              action={() => navigate(`/edit/${id}`)}
            />

          </div>
        )}
    </div>
  );
};
