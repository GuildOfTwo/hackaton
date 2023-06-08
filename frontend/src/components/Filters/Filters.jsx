import { ButtonDefault } from "../ButtonDefault/ButtonDefault";
import styles from "./styles.module.sass";
import { useState } from "react";
// import DatePicker from "react-multi-date-picker";
// import gregorian_ru_lowercase from "./locale";
import resetIcon from "../../assets/icons/reset.png";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../store/filterSlice";
import { Dropdown } from "./Dropdown";

export const Filters = () => {
  // let today = new Date
  // const [value, setValue] = useState([today]);
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("Лофт");
  const [capacity, setCapacity] = useState(0);
  const [areaSum, setAreaSum] = useState(0);
  const [areaRent, setAreaRent] = useState(0);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cards.objects);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    const filteredData = data.filter((item) => {
      return (
        (type ? item.specialization === type : true) &&
        (price ? item.cost > 0 && item.cost <= price : true) &&
        (capacity ? item.capacity > 0 && item.capacity <= capacity : true) &&
        (areaSum ? item.area_sum > 0 && item.area_sum <= areaSum : true) &&
        (areaRent ? item.area_rent > 0 && item.area_rent <= areaRent : true)
      );
    });
    if (filteredData) {
      dispatch(setFilters(filteredData));
      console.log(filteredData);
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
        <Dropdown lable="Вместимость">
          <div className={styles.formGroup}>
            <input
              className="input"
              name="price"
              id="price"
              type="range"
              min="100"
              max="1000"
              step="50"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />
            <label htmlFor="price" className="form-group__lable">
              {capacity} человек
            </label>
          </div>
        </Dropdown>
        <Dropdown lable="Аренднопригодная площадь">
          <div className={styles.formGroup}>
            <input
              className="input"
              name="price"
              id="price"
              type="range"
              min="50"
              max="1000"
              step="50"
              value={areaRent}
              onChange={(e) => setAreaRent(e.target.value)}
            />
            <label htmlFor="price" className="form-group__lable">
              {areaRent} м2
            </label>
          </div>
        </Dropdown>
        <Dropdown lable="Общая площадь">
          <div className={styles.formGroup}>
            <input
              className="input"
              name="price"
              id="price"
              type="range"
              min="200"
              max="5000"
              step="200"
              value={areaSum}
              onChange={(e) => setAreaSum(e.target.value)}
            />
            <label htmlFor="price" className="form-group__lable">
              {areaSum} м2
            </label>
          </div>
        </Dropdown>
        <Dropdown lable="Тип площадки">
          <div className={styles.formGroup}>
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
        </Dropdown>

        <Dropdown lable="Цена до..">
          <div className={styles.formGroup}>
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
            <label htmlFor="price" className="form-group__lable">
              {`${price}`}
              &#8381;
            </label>
          </div>
        </Dropdown>
        <ButtonDefault lable="Найти" action={(e) => handleSubmit(e)} />
        <button className={styles.reset} onClick={(e) => handleReset(e)}>
          <img
            src={resetIcon}
            alt="сбросить фильтр"
            className={styles.findIcon}
          />
        </button>
      </form>
    </section>
  );
};
