import styles from './styles.module.sass'

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ButtonDefault } from '../ButtonDefault/ButtonDefault';
export const Login = () => {

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
          <h2 className={styles.title}>Авторизация</h2>
  
          <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.lable}>
              Электронная почта
            </label>
            <input
   
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
  
         

          <ButtonDefault lable='Авторизоваться'/>
  
        </form>
        
      </section>
    )
}