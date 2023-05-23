import { useParams } from "react-router-dom";
import { data } from "../../TEMP_DATA/DATA";
import styles from "./styles.module.sass";

// import { SwiperSlider } from "../../components/Swiper/Swiper";
import { ButtonDefault } from "../../components/ButtonDefault/ButtonDefault";
import adress from "../../assets/icons/adress.png";
import people from "../../assets/icons/people.png";
import email from "../../assets/icons/email.png";
import ruble from "../../assets/icons/ruble.png";
import phone from "../../assets/icons/phone.png";
import site from "../../assets/icons/site.png";
import ratingIcon from "../../assets/icons/rating.png";
import square from "../../assets/icons/square.png";
import { Calendar } from "../../components/Calendar/Calendar";
import { useMemo } from "react";
import { YandexMapSpace } from "../../components/Ymap/YandexMapSpace";

export const SpacePage = () => {
  const { id } = useParams();

  const itemData = data.find((el) => el.id == id);

  const rating = itemData.rating;
  const averageRating = useMemo(() => {
    const sum = rating?.reduce((acc, item) => acc + parseInt(item.rating), 0);
    return Math.round(sum / rating.length);
  }, [rating]);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{itemData.name}</h2>
      <div className={styles.infobar}>
        {/* <ButtonDefault
          lable="Оставить заявку"
          action={() => allert("отправка заявки")}
        /> */}

        <div className={styles.iconWrapper}>
          <img src={adress} alt="" className={styles.iconImg} />
          <p className={styles.iconText}>{itemData.adress}</p>
        </div>

        <div className={styles.iconWrapper}>
          <img src={people} alt="" className={styles.iconImg} />
          <p className={styles.iconText}>{itemData.capacity}</p>
        </div>

        <div className={styles.iconWrapper}>
          <img src={square} alt="" className={styles.iconImg} />
          <p className={styles.iconText}>{itemData.square}</p>
        </div>

        <div className={styles.iconWrapper}>
          <img src={ratingIcon} alt="" className={styles.iconImg} />
          <p className={styles.iconText}>{averageRating}</p>
        </div>

        <div className={styles.iconWrapper}>
          <img src={phone} alt="" className={styles.iconImg} />
          <a className={styles.iconText} href={`tel:${itemData.tel}`}>
            {itemData.tel}
          </a>
        </div>

        <div className={styles.iconWrapper}>
          <img src={email} alt="" className={styles.iconImg} />
          <a className={styles.iconText} href={`mailto:${itemData.email}`}>
            {itemData.email}
          </a>
        </div>

        <div className={styles.iconWrapper}>
          <img src={site} alt="" className={styles.iconImg} />
          <a className={styles.iconText} href={itemData.site} target="_blank">
            Сайт
          </a>
        </div>

        <div className={styles.iconWrapper}>
          <img src={ruble} alt="" className={styles.iconImg} />
          <p className={styles.iconText}>Целый день: {itemData.price.day}&#8381;</p>
          {/* <p className={styles.iconText}>Час: {itemData.price.hour}&#8381;</p> */}
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <p className={styles.description}>{itemData.description}</p>
          <div className={styles.calendarWrapper}>
          <p className={styles.cta}>Выбирите дату и оставьте заявку</p>
            <Calendar data={itemData.bookedDates} />
          </div>
        </div>
        {/* <SwiperSlider data={itemData}/> */}
        <div className={styles.grid}>
        <YandexMapSpace data={itemData.coordinates} />
          {itemData.images?.map((el, index) => (
            <div className={styles.imgWrapper} key={index}>
              <img src={el} alt="" className={styles.img} />
            </div>
          ))}
          
          
        </div>
      </div>
    </section>
  );
};
