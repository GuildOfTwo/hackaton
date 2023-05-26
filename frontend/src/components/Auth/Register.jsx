import styles from "./styles.module.sass";

const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ButtonDefault } from "../ButtonDefault/ButtonDefault";
import { apiAuth } from '../../utils/apiAuth';

export const Register = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  // const [register] = useRegisterMutation()
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  // console.log(useRegisterMutation())




  const onSubmit =  (data, e) => {
    const authData = {
      "email": data.email,
      "password": data.password,
      "role": role
    };
    e.preventDefault();
    apiAuth.register(authData) 
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  };

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const [role, setRole] = useState('RENTER');


  return (
    <section className={styles.auth}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.title}>Регистрация</h2>

        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.lable}>
            Электронная почта
          </label>
          <input
            {...register("email", {
              required: "Обязательное поле",
              pattern: {
                value: regex,
                message: "Введите корректный почтовый адрес",
              },
            })}
            className={styles.input}
            name="email"
            id="email"
            type="text"
            placeholder="email"
            autoComplete="off"
          />
          {errors.email && (
            <p role="alert" className={styles.inputError}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.lable}>
            Пароль
          </label>

          <input
            {...register("password", {
              required: "Обязательное поле",
              minLength: {
                value: 6,
                message: "Не менее 6 символов",
              },
            })}
            className={styles.input}
            name="password"
            id="password"
            type={showPass ? "text" : "password"}
            placeholder="******"
            autoComplete="off"
          />
          {errors.password && (
            <p role="alert" className={styles.inputError}>
              {errors.password.message}
            </p>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.lable}>
            Подтвердите пароль
          </label>

          <input
            {...register("passwordCheck", {
              required: "Обязательное поле",
              validate: (val) => {
                if (watch("password") != val) {
                  return "Введенный пароль не совпадает";
                }
              },
            })}
            className={styles.input}
            // name="passwordCheck"
            id="passwordCheck"
            type={showPass ? "text" : "password"}
            placeholder="******"
            autoComplete="off"
          />
          {errors.passwordCheck && (
            <p role="alert" className={styles.inputError}>
              {errors.passwordCheck.message}
            </p>
          )}
        </div>
        <div className={styles.inputGroupRadio}>
          <label className={styles.lable}>Вы регистрируетесь как..</label>

          <div className={styles.buttons}>
        <button
          className={role == 'RENTER' ? styles.buttonActive : styles.button}
          onClick={() => setRole('RENTER')}
        >
          Арендатор
        </button>
     
        <button
          className={role == 'LANDLORD' ? styles.buttonActive : styles.button}
          onClick={() => setRole('LANDLORD')}
        >
          Арендодатель
        </button>
      </div>
        </div>

        <ButtonDefault type="submit" lable="Зарегистрироваться" />
        <Link to="/agreement" className={styles.link}>
          Регистрируясь вы принимаете условия пользовательского соглашения
        </Link>
      </form>
    </section>
  );
};
