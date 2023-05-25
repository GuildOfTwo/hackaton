import styles from "./styles.module.sass";
import { data } from "../../TEMP_DATA/DATA";
import { useMemo, useState } from "react";
import { css } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ButtonDefault } from "../ButtonDefault/ButtonDefault";
import { ObjectItem } from "./ObjectItem";

export const ObjectsList = ({ id }) => {
  let tempId = 1;

  const objects = data?.filter((el) => el.ownerId == tempId);

  return (
    <>
      {objects.length >= 1 ? (
        objects.map((el, index) => <ObjectItem el={el} key={index} />)
      ) : (
        <div className={styles.emptyObjects}>Нет добавленных объектов</div>
      )}
    </>
  );
};
