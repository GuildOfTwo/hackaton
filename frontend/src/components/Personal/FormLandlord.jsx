import { useEffect, useState } from "react";
import styles from "./styles.module.sass";
import { useForm } from "react-hook-form";
import { ButtonDefault } from "../ButtonDefault/ButtonDefault";
import { useSelector } from "react-redux";
import { apiProfiles } from "../../utils/api/profileApi";

export const FormLandlord = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [landlordData, setLandlordData] = useState({
    inn: "",
    first_name: "",
    last_name: "",
    middle_name: "",
    phone_number: "",
    contact_email: "",
    organization_name: "",
    adress: "",
  });
  const data = useSelector((state) => state.user.state);
  const {
    handleSubmit,
    register,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (user.id) {
      apiProfiles
        .getProfileDataLandlord(user.id)
        .then((res) => setLandlordData(res))
        .catch((err) => console.log(err));
    }
  }, [user]);

  const onSubmit = (landlordData) => {

    console.log(landlordData)
    // // Формируем новый объект
    // const newData = {
    //   ...data,
    //   owner: user.id,
    //   coordinates: state.center.toString(),
    //   rating: 0,
    //   // building_images: formData,
    //   building_images: [{images: 'https://kartinkof.club/uploads/posts/2022-05/1653010381_5-kartinkof-club-p-kartinka-zastavka-schaste-5.jpg'}],
    //   address: address,
    // };
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2 className={styles.title}>Изменение данных профиля арендодателя</h2>

      <div className={styles.inputGroup}>
        <label htmlFor="lastName" className={styles.lable}>
          Фамилия
        </label>
        <input
          {...register("last_name", {
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
          value={landlordData.last_name}
          onChange={(e) =>
            setLandlordData({ ...landlordData, last_name: e.target.value })
          }
        />
        {errors.last_name && (
          <p role="alert" className={styles.inputError}>
            {errors.last_name.message}
          </p>
        )}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="first_name" className={styles.lable}>
          Имя
        </label>
        <input
          className={styles.input}
          name="first_name"
          id="first_name"
          type="text"
          placeholder="Имя"
          autoComplete="off"
          disabled={isDisabled}
          value={landlordData.first_name}
          onChange={(e) =>
            setLandlordData({ ...landlordData, first_name: e.target.value })
          }
        />
        {errors.first_name && (
          <p role="alert" className={styles.inputError}>
            {errors.first_name.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="middle_name" className={styles.lable}>
          Отчество
        </label>
        <input
          {...register("middle_name", {
            required: false,
            minLength: {
              value: 2,
              message: "This input must exceed 2 characters",
            },
          })}
          className={styles.input}
          name="middle_name"
          id="middle_name"
          type="text"
          placeholder="Отчество"
          autoComplete="off"
          disabled={isDisabled}
          value={landlordData.middle_name}
          onChange={(e) =>
            setLandlordData({ ...landlordData, middle_name: e.target.value })
          }
        />
        {errors.middle_name && (
          <p role="alert" className={styles.inputError}>
            {errors.middle_name.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="contact_email" className={styles.lable}>
          Email
        </label>
        <input
          {...register("contact_email", {
            required: false,
            minLength: {
              value: 2,
              message: "This input must exceed 5 characters",
            },
          })}
          className={styles.input}
          name="contact_email"
          id="contact_email"
          type="email"
          placeholder="email"
          autoComplete="off"
          disabled={isDisabled}
          value={landlordData.contact_email}
          onChange={(e) =>
            setLandlordData({ ...landlordData, contact_email: e.target.value })
          }
        />
        {errors.contact_email && (
          <p role="alert" className={styles.inputError}>
            {errors.contact_email.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="phone_number" className={styles.lable}>
          Телефон
        </label>
        <input
          {...register("phone_number", {
            required: false,
            minLength: {
              value: 2,
              message: "This input must exceed 8 characters",
            },
          })}
          className={styles.input}
          name="phone_number"
          id="phone_number"
          type="text"
          placeholder="Телефон"
          autoComplete="off"
          disabled={isDisabled}
          value={landlordData.phone_number}
          onChange={(e) =>
            setLandlordData({ ...landlordData, phone_number: e.target.value })
          }
        />
        {errors.phone_number && (
          <p role="alert" className={styles.inputError}>
            {errors.phone_number.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="adress" className={styles.lable}>
          Адрес
        </label>
        <input
          {...register("adress", {
            required: false,
            minLength: {
              value: 2,
              message: "This input must exceed 8 characters",
            },
          })}
          className={styles.input}
          name="adress"
          id="adress"
          type="text"
          placeholder="Адресс"
          autoComplete="off"
          disabled={isDisabled}
          value={landlordData.adress}
          onChange={(e) =>
            setLandlordData({ ...landlordData, adress: e.target.value })
          }
        />
        {errors.adress && (
          <p role="alert" className={styles.inputError}>
            {errors.adress.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="organization_name" className={styles.lable}>
          Название
        </label>
        <input
          {...register("organization_name", {
            required: false,
            minLength: {
              value: 2,
              message: "This input must exceed 8 characters",
            },
          })}
          className={styles.input}
          name="organization_name"
          id="organization_name"
          type="text"
          placeholder="Название организации"
          autoComplete="off"
          disabled={isDisabled}
          value={landlordData.organization_name}
          onChange={(e) =>
            setLandlordData({
              ...landlordData,
              organization_name: e.target.value,
            })
          }
        />
        {errors.organization_name && (
          <p role="alert" className={styles.inputError}>
            {errors.organization_name.message}
          </p>
        )}
      </div>

      <div className={styles.buttons}>
        {!isDisabled ? (
          <>
            <ButtonDefault
              lable="Сохранить изменения"
              // action={() => alert("хер тебе, а не сохранение")}
            />
            <ButtonDefault
              lable="Отмена"
              action={() => {
                setIsDisabled(true);
              }}
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
  );
};
