import styles from "./styles.module.sass";

import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ButtonDefault } from "../ButtonDefault/ButtonDefault";
import { Map, Placemark } from "@pbe/react-yandex-maps";
import icon from "../../assets/icons/marker.svg";
import { ImagesUpload } from "./ImagesUpload";
import { useSelector } from "react-redux";
import { apiData } from "../../utils/api/dataApi";

export const ObjectForm = ({ lable = "", edit = false }) => {


  const [cardData, setCardData] = useState();
  const data = useSelector((state) => state.cards.objects);
  const user = useSelector((state) => state.user.user);
  const initialState = {
    title: "",
    center: [cardData ? cardData.coordinates : 55.755864, 37.617698],
    zoom: 12,
  };

  useEffect(() => {
    if (edit) {
      if (data.length) {
        let itemData = data.find((el) => el.owner === user.id);

        if (itemData) {
          setCardData(itemData);
        }
      }
    }
  }, [data]);
  const [files, setFiles] = useState(cardData ? cardData.building_images : []);
  const [mapConstructor, setMapConstructor] = useState(null);
  const [state, setState] = useState({ ...initialState });
  const searchRef = useRef(null);
  const [address, setAddress] = useState("");

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(edit);

  const handleEdit = () => {};

  const handleCreate = () => {};

  // Обработчик сабмита формы
  const onSubmit = (data) => {
    // Для передачи файлов
    let formData = new FormData();
    if (files) {
      console.log(files)
      formData.append("images", files);
    }

    // Формируем новый объект
    const newData = {
      ...data,
      owner: user.id,
      coordinates: state.center.toString(),
      rating: 0,
      // building_images: formData,
      building_images: [{images: 'https://kartinkof.club/uploads/posts/2022-05/1653010381_5-kartinkof-club-p-kartinka-zastavka-schaste-5.jpg'}],
      address: address,
    };

    console.log(newData)
    apiData
      .createBuilding(newData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (mapConstructor) {
      new mapConstructor.SuggestView(searchRef.current).events.add(
        "select",
        function (e) {
          const selectedName = e.get("item").value;
          setAddress(selectedName);
          mapConstructor.geocode(selectedName).then((result) => {
            const newCoords = result.geoObjects
              .get(0)
              .geometry.getCoordinates();
            setState((prevState) => ({ ...prevState, center: newCoords }));
          });
        }
      );
    }
  }, [mapConstructor]);

  const mapOptions = {
    modules: ["geocode", "SuggestView"],
    // defaultOptions: { suppressMapOpenBlock: true },
    width: 600,
    height: 400,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
          value={cardData ? cardData.title : ""}
          onChange={(e) => setCardData({ ...cardData, title: e.target.value })}
        />
        {errors.title && (
          <p role="alert" className={styles.inputError}>
            {errors.title.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <lable htmlFor="specialization" className={styles.lable}>
          Специализация
        </lable>
        <input
          {...register("specialization", {
            required: "Обязательное поле",
            minLength: {
              value: 2,
              message: "This input must exceed 2 characters",
            },
            maxLength: {
              value: 200,
              message: "This input mustn't exceed 200 characters",
            },
          })}
          className={styles.input}
          name="specialization"
          id="specialization"
          type="text"
          placeholder="Специализация"
          autoComplete="off"
          disabled={isDisabled}
          value={cardData ? cardData.specialization : ""}
          onChange={(e) => setCardData({ ...cardData, specialization: e.target.value })}
        />
        {errors.specialization && (
          <p role="alert" className={styles.inputError}>
            {errors.specialization.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <lable htmlFor="operating_hours" className={styles.lable}>
          Режим работы
        </lable>
        <input
          {...register("operating_hours", {
            required: false,
            minLength: {
              value: 2,
              message: "This input must exceed 2 characters",
            },
            maxLength: {
              value: 50,
              message: "This input mustn't exceed 50 characters",
            },
          })}
          className={styles.input}
          name="operating_hours"
          id="operating_hours"
          type="text"
          placeholder="Режим работы"
          autoComplete="off"
          disabled={isDisabled}
          value={cardData ? cardData.operating_hours : ""}
          onChange={(e) => setCardData({ ...cardData, operating_hours: e.target.value })}
        />
        {errors.operating_hours && (
          <p role="alert" className={styles.inputError}>
            {errors.operating_hours.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <lable htmlFor="site" className={styles.lable}>
          Сайт
        </lable>
        <input
          {...register("site", {
            required: false,
            minLength: {
              value: 2,
              message: "This input must exceed 2 characters",
            },
            maxLength: {
              value: 50,
              message: "This input mustn't exceed 50 characters",
            },
          })}
          className={styles.input}
          name="site"
          id="site"
          type="text"
          placeholder="Введите сайт объекта"
          autoComplete="off"
          disabled={isDisabled}
          value={cardData ? cardData.site : ""}
          onChange={(e) => setCardData({ ...cardData, site: e.target.value })}
        />
        {errors.site && (
          <p role="alert" className={styles.inputError}>
            {errors.site.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <lable htmlFor="area_sum" className={styles.lable}>
          Общая площадь (кв. м)
        </lable>
        <input
          {...register("area_sum", {
            required: "Обязательное поле",
            minLength: {
              value: 2,
              message: "This input must exceed 2 characters",
            },
            maxLength: {
              value: 50,
              message: "This input mustn't exceed 50 characters",
            },
          })}
          className={styles.input}
          name="area_sum"
          id="area_sum"
          type="number"
          placeholder="Введите общую площадь имущественного комплекса (кв. м)"
          autoComplete="off"
          disabled={isDisabled}
          value={cardData ? cardData.area_sum : ""}
          onChange={(e) => setCardData({ ...cardData, area_sum: e.target.value })}
        />
        {errors.area_sum && (
          <p role="alert" className={styles.inputError}>
            {errors.area_sum.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <lable htmlFor="area_rent" className={styles.lable}>
          Свободная площадь (кв. м)
        </lable>
        <input
          {...register("area_rent", {
            required: "Обязательное поле",
            minLength: {
              value: 2,
              message: "This input must exceed 2 characters",
            },
            maxLength: {
              value: 50,
              message: "This input mustn't exceed 50 characters",
            },
          })}
          className={styles.input}
          name="area_rent"
          id="area_rent"
          type="number"
          placeholder="Введите свободную арендопригодную площадь (кв. м)"
          autoComplete="off"
          disabled={isDisabled}
          value={cardData ? cardData.area_rent : ""}
          onChange={(e) => setCardData({ ...cardData, area_rent: e.target.value })}
        />
        {errors.area_rent && (
          <p role="alert" className={styles.inputError}>
            {errors.area_rent.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <lable htmlFor="features" className={styles.lable}>
          Особенности
        </lable>
        <textarea
          {...register("features", {
            required: false,
            minLength: {
              value: 2,
              message: "This input must exceed 2 characters",
            },
            maxLength: {
              value: 500,
              message: "This input mustn't exceed 500 characters",
            },
          })}
          className={styles.input}
          name="features"
          id="features"
          type="text"
          placeholder="Напишите объекты коллективного пользования, спец. оборудование объектов и т.д."
          autoComplete="off"
          disabled={isDisabled}
          value={cardData ? cardData.features : ""}
          onChange={(e) => setCardData({ ...cardData, features: e.target.value })}
        />
        {errors.features && (
          <p role="alert" className={styles.inputError}>
            {errors.features.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <lable htmlFor="additional_information" className={styles.lable}>
          Дополнительная информация
        </lable>
        <textarea
          {...register("additional_information", {
            required: false,
            minLength: {
              value: 2,
              message: "This input must exceed 2 characters",
            },
            maxLength: {
              value: 500,
              message: "This input mustn't exceed 500 characters",
            },
          })}
          className={styles.input}
          name="additional_information"
          id="additional_information"
          type="text"
          placeholder="Введите важную по вашему мнению дополнительную информацию"
          autoComplete="off"
          disabled={isDisabled}
          value={cardData ? cardData.additional_information : ""}
          onChange={(e) => setCardData({ ...cardData, additional_information: e.target.value })}
        />
        {errors.additional_information && (
          <p role="alert" className={styles.inputError}>
            {errors.additional_information.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <lable htmlFor="capacity" className={styles.lable}>
          Вместимость, чел.
        </lable>
        <input
          {...register("capacity", {
            required: "Обязательное поле",
            minLength: {
              value: 2,
              message: "This input must exceed 2 characters",
            },
            maxLength: {
              value: 50,
              message: "This input mustn't exceed 50 characters",
            },
          })}
          className={styles.input}
          name="capacity"
          id="capacity"
          type="number"
          placeholder="Введите вместимость, чел."
          autoComplete="off"
          disabled={isDisabled}
          value={cardData ? cardData.capacity : ""}
          onChange={(e) => setCardData({ ...cardData, capacity: e.target.value })}
        />
        {errors.capacity && (
          <p role="alert" className={styles.inputError}>
            {errors.capacity.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <lable htmlFor="cost" className={styles.lable}>
          Стоимость
        </lable>
        <input
          {...register("cost", {
            required: "Обязательное поле",
            minLength: {
              value: 2,
              message: "This input must exceed 2 characters",
            },
            maxLength: {
              value: 50,
              message: "This input mustn't exceed 50 characters",
            },
          })}
          className={styles.input}
          name="cost"
          id="cost"
          type="number"
          placeholder="Введите стоимость аренды за сутки"
          autoComplete="off"
          disabled={isDisabled}
          value={cardData ? cardData.cost : ""}
          onChange={(e) => setCardData({ ...cardData, cost: e.target.value })}
        />
        {errors.cost && (
          <p role="alert" className={styles.inputError}>
            {errors.cost.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <lable htmlFor="booking" className={styles.lable}>
          Даты бронирования
        </lable>
        <input
          {...register("booking", {
            required: false,
            minLength: {
              value: 2,
              message: "This input must exceed 2 characters",
            },
            maxLength: {
              value: 50,
              message: "This input mustn't exceed 50 characters",
            },
          })}
          className={styles.input}
          name="booking"
          id="booking"
          type="text"
          placeholder="Даты в которые объект занят"
          autoComplete="off"
          disabled={isDisabled}
          value={cardData ? cardData.booking : ""}
          onChange={(e) => setCardData({ ...cardData, booking: e.target.value })}
        />
        {errors.booking && (
          <p role="alert" className={styles.inputError}>
            {errors.booking.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <lable htmlFor="entity" className={styles.lable}>
          Юр. название
        </lable>
        <input
          {...register("entity", {
            required: "Обязательное поле",
            minLength: {
              value: 2,
              message: "This input must exceed 2 characters",
            },
            maxLength: {
              value: 500,
              message: "This input mustn't exceed 500 characters",
            },
          })}
          className={styles.input}
          name="entity"
          id="entity"
          type="text"
          placeholder="Введите юридическое название"
          autoComplete="off"
          disabled={isDisabled}
          value={cardData ? cardData.entity : ""}
          onChange={(e) => setCardData({ ...cardData, entity: e.target.value })}
        />
        {errors.entity && (
          <p role="alert" className={styles.inputError}>
            {errors.entity.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <lable htmlFor="phone" className={styles.lable}>
          Контактный телефон
        </lable>
        <input
          {...register("phone", {
            required: "Обязательное поле",
            minLength: {
              value: 2,
              message: "This input must exceed 2 characters",
            },
            maxLength: {
              value: 30,
              message: "This input mustn't exceed 30 characters",
            },
          })}
          className={styles.input}
          name="phone"
          id="phone"
          type="number"
          placeholder="Введите телефон"
          autoComplete="off"
          disabled={isDisabled}
          value={cardData ? cardData.phone : ""}
          onChange={(e) => setCardData({ ...cardData, phone: e.target.value })}
        />
        {errors.phone && (
          <p role="alert" className={styles.inputError}>
            {errors.phone.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <lable htmlFor="email" className={styles.lable}>
          Адрес электронной почты
        </lable>
        <input
          {...register("email", {
            required: "Обязательное поле",
            minLength: {
              value: 2,
              message: "This input must exceed 2 characters",
            },
            maxLength: {
              value: 30,
              message: "This input mustn't exceed 30 characters",
            },
          })}
          className={styles.input}
          name="email"
          id="email"
          type="email"
          placeholder="Введите почту"
          autoComplete="off"
          disabled={isDisabled}
          value={cardData ? cardData.email : ""}
          onChange={(e) => setCardData({ ...cardData, email: e.target.value })}
        />
        {errors.email && (
          <p role="alert" className={styles.inputError}>
            {errors.email.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <lable htmlFor="inn" className={styles.lable}>
          ИНН
        </lable>
        <input
          {...register("inn", {
            required: "Обязательное поле",
            minLength: {
              value: 12,
              message: "This input must exceed 12 characters",
            },
            maxLength: {
              value: 12,
              message: "This input mustn't exceed 12 characters",
            },
          })}
          className={styles.input}
          name="inn"
          id="inn"
          type="number"
          placeholder="Введите ИНН"
          autoComplete="off"
          disabled={isDisabled}
          value={cardData ? cardData.inn : ""}
          onChange={(e) => setCardData({ ...cardData, inn: e.target.value })}
        />
        {errors.inn && (
          <p role="alert" className={styles.inputError}>
            {errors.inn.message}
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
          value={cardData ? cardData.desc : ""}
          onChange={(e) => setCardData({ ...cardData, desc: e.target.value })}
        />
        {errors.description && (
          <p role="alert" className={styles.inputError}>
            {errors.description.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="address" className={styles.lable}>
          Адрес
        </label>
        <input
          {...register("address", {
            // required: "Обязательное поле",
            minLength: {
              value: 2,
              message: "This input must exceed 2 characters",
            },
          })}
          className={styles.input}
          name="address"
          id="address"
          type="text"
          placeholder="Адрес"
          autoComplete="off"
          disabled={isDisabled}
          ref={searchRef}
          // value={cardData ? cardData.address : ""}
          onChange={(e) => setCardData({ ...cardData, address: e.target.value })}
        />
        {errors.address && (
          <p role="alert" className={styles.inputError}>
            {errors.address.message}
          </p>
        )}
      </div>
      <ImagesUpload files={files} setFiles={setFiles} />
      <div className={styles.mapWrapper}>
        <Map {...mapOptions} state={state} onLoad={setMapConstructor}>
          <Placemark
            geometry={state.center}
            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            options={{
              iconLayout: "default#imageWithContent",
              iconImageHref: icon,
              iconImageSize: [20, 60],
              iconImageOffset: [-20, -40],
              iconCaptionMaxWidth: 500,
            }}
          />
        </Map>
      </div>

      <div className={styles.buttons}>
        {!isDisabled ? (
          <>
            <ButtonDefault
              lable={edit ? "Сохранить изменения" : "Отправить на проверку"}
              disabled={false}
              // action={() => alert("хер тебе, а не сохранение")}
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
