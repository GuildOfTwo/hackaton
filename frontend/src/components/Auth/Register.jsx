import styles from './styles.module.sass'

const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ButtonDefault } from '../ButtonDefault/ButtonDefault';

export const Register = () => {

    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
      } = useForm({
        mode: "onChange",
      });
      const [showPass, setShowPass] = useState(false);
      const navigate = useNavigate();
    
      const onSubmit = async (data) => {
        mainApi
          .register(data)
          .then((res) => {
            dispatch(setToken(res.token));
            dispatch(setLoggedIn(true));
            localStorage.setItem("logIn", true);
            localStorage.setItem("token", res.token);
          })
          .finally(() => navigate("/"))
          .catch((err) => {
            console.warn(err);
          });
      };
    
      const handleShowPass = () => {
        setShowPass(!showPass);
      };


    return (
        <section className={styles.auth}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={styles.title}>Регистрация</h2>
  
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.lable}>
              ФИО
            </label>
            <input
              {...register("name", {
                required: "Обязательное поле",
                minLength: {
                  value: 2,
                  message: "This input must exceed 2 characters",
                },
              })}
              className={styles.input}
              name="name"
              id="name"
              type="text"
              placeholder="ФИО"
              autoComplete="off"
            />
            {errors.name && (
              <p role="alert" className={styles.inputError}>
                {errors.name.message}
              </p>
            )}
          </div>
  
          <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.lable}>
              Электронная почта
            </label>
            <input
              {...register("email", {
                required: "Обязательное поле",
                pattern: {
                  value: regex,
                  message: "This input must exceed correct email adress",
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
            <div className={styles.inputPass}>
              <input
                {...register("password", {
                  required: "Обязательное поле",
                  minLength: {
                    value: 6,
                    message: "This input must exceed 6 characters",
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
              <button
                type="button"
                className={styles.showPass}
                onClick={handleShowPass}
              ></button>
            </div>
          </div>
  
          <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.lable}>
              Подтвердите пароль
            </label>
            <div className={styles.inputPass}>
              <input
                {...register("passwordCheck", {
                  required: "Обязательное поле",
                  validate: (val) => {
                    if (watch("password") != val) {
                      return "Your passwords do no match";
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
              <button
                type="button"
                className={styles.showPass}
                onClick={handleShowPass}
              ></button>
            </div>
          </div>

          <ButtonDefault lable='Зарегистрироваться'/>
  
        </form>
        
      </section>
    )
}