import styles from './styles.module.sass'


export const PersonalTenant = () => {

    const [isDisabled, setIsDisabled] = useState(true);
    const {
      handleSubmit,
      register,
      watch,
      formState: { errors },
    } = useForm({
      mode: "onChange",
    });
  
    const setDisabledStatus = (e) => {
      e.preventDefault();
      setIsDisabled(false);
    };
  
    return (
      <div className={styles.element}>
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
                lable="Save profile"
                disabled={
                  true
                }

                action={() => alert('хер тебе, а не сохранение')}
              />
              <ButtonDefault
                lable="Cancel"
    
                action={() => setIsDisabled(true)}
              />
            </>
          ) : (
            <ButtonDefault
              lable="Edit profile"
 
              action={() => setIsDisabled(false)}
            />
          )}
        </div>
      </form>
        <section className={styles.section}>
          Список отправленных заявок
        </section>
      </div>
    );
}