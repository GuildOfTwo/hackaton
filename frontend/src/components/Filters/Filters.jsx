import { ButtonDefault } from "../ButtonDefault/ButtonDefault";
import styles from "./styles.module.sass";
import React, { useState } from "react";
// import DatePicker from "react-multi-date-picker";
// import gregorian_ru_lowercase from "./locale";
import resetIcon from "../../assets/icons/reset.png";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../store/filterSlice";

export const Filters = () => {
  // let today = new Date
  // const [value, setValue] = useState([today]);
  const [price, setPrice] = useState(20000);
  const [type, setType] = useState("Лофт");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.cards.objects);
  // const filteredData = useSelector(state => state.filtered.filtered)
  // console.log(filteredData)

  // const getDate = () => {
  //   let array = [];
  //   for (let i = 0; i < value.length; i++) {
  //     array.push(new Date(value[i]));
  //   }
  //   return array;
  // };
  console.log(data)
  function handleSubmit(e) {
    e.preventDefault();
    console.log(data)
    const filteredData = data.filter((item) => {
      return (
        (type ? item.specialization === type : true) &&
        (price ? item.cost > 0 && item.cost <= price : true)
      );
    });
    if (filteredData) {
      dispatch(setFilters(filteredData));
      console.log(filteredData)
    }
  }

  const handleReset = (e) => {
    e.preventDefault();
    setType("Лофт");
    setPrice("20000");
  };

  return (
    <section className={styles.section}>
      <form action="" className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className="form-group__lable">
            Тип площадки
          </label>
          <select
            name="select"
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option value="Арт">Лофт</option>
            <option value="ПО и компьютерные игры">
              ПО и компьютерные игры
            </option>
            <option value="Реклама">Реклама</option>
            <option value="Дизайн">Дизайн</option>
            <option value="Мода">Мода</option>
            <option value="Кино и анимация">Кино и анимация</option>
            <option value="Телерадиовещание и новые медиа">
              Телерадиовещание и медиа
            </option>
            <option value="Издательское дело">Издательское дело</option>
            <option value="Архитектура">Архитектура</option>
            <option value="Музыка">Музыка</option>
            <option value="Исполнительские искусства">
              Исполнительские искусства
            </option>
          </select>
        </div>

        {/* <div className={styles.formGroup}>
          <label htmlFor="date" className="form-group__lable">
            Дата
          </label>
          <DatePicker
            multiple
            value={value}
            onChange={setValue}
            locale={gregorian_ru_lowercase}
          />
        </div> */}

        <div className={styles.formGroup}>
          <label htmlFor="price" className="form-group__lable">
            {`
Цена до: ${price}`}
            &#8381;
          </label>
          <input
            className="input"
            name="price"
            id="price"
            type="range"
            min="0"
            max="100000"
            step="1000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <ButtonDefault lable="Найти" action={(e) => handleSubmit(e)} />
        {/* <ButtonDefault
          lable="Найти"
          action={(e) => {
            e.preventDefault(), handleSubmit();
          }}
        /> */}
        <button className={styles.reset} onClick={(e) => handleReset(e)}>
          <img src={resetIcon} alt="сбросить фильтр" />
        </button>
      </form>
    </section>
  );
};
