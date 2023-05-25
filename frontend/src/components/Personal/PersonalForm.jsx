import { useState } from "react";
import styles from "./styles.module.sass";
import { useForm } from "react-hook-form";
import { ButtonDefault } from "../ButtonDefault/ButtonDefault";


export const PersonalForm = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const {
      handleSubmit,
      register,
      watch,
      formState: { errors },
    } = useForm({
      mode: "onChange",
    });

    return(
        <form action="" className={styles.form}>
        <h2 className={styles.title}>Изменение данных профиля</h2>

        <div className={styles.inputGroup}>
          <label htmlFor="lastName" className={styles.lable}>
            Фамилия
          </label>
          <input
            {...register("lastName", {
              required: "Обязательное поле",
              minLength: {
                value: 2,
                message: "This input must exceed 2 characters",
              },
            })}
            className={styles.input}
            name="lastName"
            id="lastName"
            type="text"
            placeholder="Фамилия"
            autoComplete="off"
            disabled={isDisabled}
          />
          {errors.name && (
            <p role="alert" className={styles.inputError}>
              {errors.name.message}
            </p>
          )}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="firstName" className={styles.lable}>
            Имя
          </label>
          <input
            {...register("firstName", {
              required: "Обязательное поле",
              minLength: {
                value: 2,
                message: "This input must exceed 2 characters",
              },
            })}
            className={styles.input}
            name="firstName"
            id="firstName"
            type="text"
            placeholder="Имя"
            autoComplete="off"
            disabled={isDisabled}
          />
          {errors.name && (
            <p role="alert" className={styles.inputError}>
              {errors.name.message}
            </p>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="fatherName" className={styles.lable}>
            Отчество
          </label>
          <input
            {...register("fatherName", {
              required: false,
              minLength: {
                value: 2,
                message: "This input must exceed 2 characters",
              },
            })}
            className={styles.input}
            name="fatherName"
            id="fatherName"
            type="text"
            placeholder="Отчество"
            autoComplete="off"
            disabled={isDisabled}
          />
          {errors.name && (
            <p role="alert" className={styles.inputError}>
              {errors.name.message}
            </p>
          )}
        </div>

        <div className={styles.buttons}>
          {!isDisabled ? (
            <>
              <ButtonDefault
                lable="Сохранить изменения"
                disabled={
                  true
                }

                action={() => alert('хер тебе, а не сохранение')}
              />
              <ButtonDefault
                lable="Отмена"
    
                action={() => setIsDisabled(true)}
              />
            </>
          ) : (
            <ButtonDefault
              lable="Редактировать"
 
              action={() => setIsDisabled(false)}
            />
          )}
        </div>
      </form>
    )
}