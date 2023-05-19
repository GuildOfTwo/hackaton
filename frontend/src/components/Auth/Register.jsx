import styles from './styles.module.sass'

const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
        <section className="auth">
        <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="auth__title">Регистрация</h2>
  
          <div className="form-group">
            <label htmlFor="name" className="form-group__lable">
              Имя
            </label>
            <input
              {...register("name", {
                required: "Обязательное поле",
                minLength: {
                  value: 2,
                  message: "This input must exceed 2 characters",
                },
              })}
              className="input"
              name="name"
              id="name"
              type="text"
              placeholder="ФИО"
              autoComplete="off"
            />
            {errors.name && (
              <p role="alert" className="formError">
                {errors.name.message}
              </p>
            )}
          </div>
  
          <div className="form-group">
            <label htmlFor="email" className="form-group__lable">
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
              className="input"
              name="email"
              id="email"
              type="text"
              placeholder="email"
              autoComplete="off"
            />
            {errors.email && (
              <p role="alert" className="formError">
                {errors.email.message}
              </p>
            )}
          </div>
  
          <div className="form-group">
            <label htmlFor="password" className="form-group__lable">
              Пароль
            </label>
            <div className="form__passwordField">
              <input
                {...register("password", {
                  required: "Обязательное поле",
                  minLength: {
                    value: 6,
                    message: "This input must exceed 6 characters",
                  },
                })}
                className="input"
                name="password"
                id="password"
                type={showPass ? "text" : "password"}
                placeholder="******"
                autoComplete="off"
              />
              {errors.password && (
                <p role="alert" className="formError">
                  {errors.password.message}
                </p>
              )}
              <button
                type="button"
                className="showPassword"
                onClick={handleShowPass}
              ></button>
            </div>
          </div>
  
          <div className="form-group">
            <label htmlFor="password" className="form-group__lable">
              Подтвердите пароль
            </label>
            <div className="form__passwordField">
              <input
                {...register("passwordCheck", {
                  required: "Обязательное поле",
                  validate: (val) => {
                    if (watch("password") != val) {
                      return "Your passwords do no match";
                    }
                  },
                })}
                className="input"
                // name="passwordCheck"
                id="passwordCheck"
                type={showPass ? "text" : "password"}
                placeholder="******"
                autoComplete="off"
              />
              {errors.passwordCheck && (
                <p role="alert" className="formError">
                  {errors.passwordCheck.message}
                </p>
              )}
              <button
                type="button"
                className="showPassword"
                onClick={handleShowPass}
              ></button>
            </div>
          </div>
  
          <button className="formSubmit">Зарегистрироваться</button>
        </form>
        <button
          className="navigateTo"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            navigate("/signin");
          }}
        >
          Уже зарегистрированы?
        </button>
      </section>
    )
}