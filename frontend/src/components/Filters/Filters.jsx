import { ButtonDefault } from "../ButtonDefault/ButtonDefault";
import styles from "./styles.module.sass";

export const Filters = () => {
  // square: '800',
  // capacity: '80',
  // price: {day: '1000', hour: '100'},
  // type: 'Лофт',

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
          <input
            className="input"
            name="date"
            id="date"
            type="date"
            autoComplete="off"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price" className="form-group__lable">
            Имя
          </label>
          <input
            className="input"
            name="price"
            id="price"
            type="range"
            placeholder="ФИО"
            autoComplete="off"
          />
        </div>

        <ButtonDefault lable="Найти" />
      </form>
    </section>
  );
};
