import { ButtonDefault } from "../ButtonDefault/ButtonDefault";
import styles from "./styles.module.sass";
import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import gregorian_ru_lowercase from "./locale"

export const Filters = () => {
  const [value, setValue] = useState([new Date()]);
  const [price, setPrice] = useState(1000)

  return (
    <section className={styles.section}>
      <form action="" className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className="form-group__lable">
            Тип площадки
          </label>
          <select name="select">
            <option value="Лофт">Лофт</option>
            <option value="Мастерская">
            Мастерская
            </option>
            <option value="Арт пространство">Арт пространство</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="date" className="form-group__lable">
            Дата
          </label>
        
          <DatePicker value={value} onChange={setValue} locale={gregorian_ru_lowercase} />
          {/* <input
            className="input"
            name="date"
            id="date"
            type="date"
          /> */}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price" className="form-group__lable">{`
Цена до: ${price}`
          }&#8381;
            
          </label>
          <input
            className="input"
            name="price"
            id="price"
            type="range"
            min="0" max="1000" step="100"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <ButtonDefault lable="Найти" />
      </form>
    </section>
  );
};
