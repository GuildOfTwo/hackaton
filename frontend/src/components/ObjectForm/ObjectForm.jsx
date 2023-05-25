import styles from "./styles.module.sass";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ButtonDefault } from "../ButtonDefault/ButtonDefault";

export const ObjectForm = ({ lable = "", edit = false }) => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(edit);

  const handleEdit = () => {};

  const handleCreate = () => {};

  return (
    <form action="" className={styles.form}>
      <h2 className={styles.title}>{lable}</h2>

      <div className={styles.inputGroup}>
        <label htmlFor="title" className={styles.lable}>
          Название
        </label>
        <input
          {...register("title", {
            required: "Обязательное поле",
            minLength: {
              value: 2,
              message: "This input must exceed 2 characters",
            },
          })}
          className={styles.input}
          name="title"
          id="title"
          type="text"
          placeholder="Название"
          autoComplete="off"
          disabled={isDisabled}
        />
        {errors.title && (
          <p role="alert" className={styles.inputError}>
            {errors.title.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="description" className={styles.lable}>
          Описание
        </label>
        <textarea
          {...register("description", {
            required: "Обязательное поле",
            minLength: {
              value: 2,
              message: "This input must exceed 2 characters",
            },
          })}
          className={styles.input}
          name="description"
          id="description"
          type="text"
          placeholder="Описание"
          autoComplete="off"
          disabled={isDisabled}
        />
        {errors.description && (
          <p role="alert" className={styles.inputError}>
            {errors.description.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="adress" className={styles.lable}>
          Адрес
        </label>
        <input
          {...register("adress", {
            required: "Обязательное поле",
            minLength: {
              value: 2,
              message: "This input must exceed 2 characters",
            },
          })}
          className={styles.input}
          name="adress"
          id="adress"
          type="text"
          placeholder="Адрес"
          autoComplete="off"
          disabled={isDisabled}
        />
        {errors.adress && (
          <p role="alert" className={styles.inputError}>
            {errors.adress.message}
          </p>
        )}
      </div>

      

    
 

      <div className={styles.buttons}>
        {!isDisabled ? (
          <>
            <ButtonDefault
              lable={edit ? "Сохранить изменения" : "Отправить на проверку"}
              disabled={true}
              action={() => alert("хер тебе, а не сохранение")}
            />
            <ButtonDefault lable="Отмена" action={() => setIsDisabled(true)} />
          </>
        ) : (
          <ButtonDefault
            lable="Редактировать"
            action={() => setIsDisabled(false)}
          />
        )}
      </div>
    </form>
  );
};
