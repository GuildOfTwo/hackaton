import styles from "./styles.module.sass";

import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ButtonDefault } from "../ButtonDefault/ButtonDefault";
import { Map, Placemark } from "@pbe/react-yandex-maps";
import icon from "../../assets/icons/marker.svg";
import { ImagesUpload } from "./ImagesUpload";
import { useSelector } from "react-redux";

export const ObjectForm = ({ lable = "", edit = false }) => {
  const initialState = {
    title: "",
    center: [55.755864, 37.617698],
    zoom: 12,
  };

  const [cardData, setCardData] = useState();
  const data = useSelector((state) => state.cards.state);

  console.log(cardData);
  const { id } = useParams();

  useEffect(() => {
    if (edit == true) {
      if (data.length) {
        let itemData = data.find((el) => el.id == id);
        setCardData(itemData);
      }
    }
  }, [data]);
  const [files, setFiles] = useState([]);
  const [mapConstructor, setMapConstructor] = useState(null);
  const [state, setState] = useState({ ...initialState });
  const searchRef = useRef(null);
console.log(files)
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

  useEffect(() => {
    if (mapConstructor) {
      new mapConstructor.SuggestView(searchRef.current).events.add(
        "select",
        function (e) {
          const selectedName = e.get("item").value;
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
          ref={searchRef}
        />
        {errors.adress && (
          <p role="alert" className={styles.inputError}>
            {errors.adress.message}
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
