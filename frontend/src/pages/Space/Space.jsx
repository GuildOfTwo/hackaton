import { useParams } from "react-router-dom";
import { data } from "../../TEMP_DATA/DATA";
import styles from "./styles.module.sass";
import { useEffect, useState } from "react";

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
import { useSelector } from "react-redux";

export const SpacePage = () => {
  const { id } = useParams();
  const [card, setCard] = useState([]);
  const [rating, setRating] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const data = useSelector((state) => state.cards.state);

  useEffect(() => {
    if (data.length) {
      let itemData = data.find((el) => el.id == id);
      setCard(itemData);
      setRating(itemData.rating)
    }
  }, [data]);

  // const averageRating = useMemo(() => {
  //   const sum = rating?.reduce((acc, item) => acc + parseInt(item.rating), 0);
  //   return Math.round(sum / rating.length);
  // }, [rating]);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{card.name}</h2>
      <div className={styles.infobar}>
     

        <div className={styles.iconWrapper}>
          <img src={adress} alt="" className={styles.iconImg} />
          <p className={styles.iconText}>{card.adress}</p>
        </div>

        <div className={styles.iconWrapper}>
          <img src={people} alt="" className={styles.iconImg} />
          <p className={styles.iconText}>{card.capacity}</p>
        </div>

        <div className={styles.iconWrapper}>
          <img src={square} alt="" className={styles.iconImg} />
          <p className={styles.iconText}>{card.square}</p>
        </div>

        <div className={styles.iconWrapper}>
          <img src={ratingIcon} alt="" className={styles.iconImg} />
          <p className={styles.iconText}>999</p>
        </div>

        <div className={styles.iconWrapper}>
          <img src={phone} alt="" className={styles.iconImg} />
          <a className={styles.iconText} href={`tel:${card.tel}`}>
            {card.tel}
          </a>
        </div>

        <div className={styles.iconWrapper}>
          <img src={email} alt="" className={styles.iconImg} />
          <a className={styles.iconText} href={`mailto:${card.email}`}>
            {card.email}
          </a>
        </div>

        <div className={styles.iconWrapper}>
          <img src={site} alt="" className={styles.iconImg} />
          <a className={styles.iconText} href={card.site} target="_blank">
            Сайт
          </a>
        </div>

        <div className={styles.iconWrapper}>
          <img src={ruble} alt="" className={styles.iconImg} />
          <p className={styles.iconText}>
            Целый день: {card?.price?.day}&#8381;
          </p>

        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <p className={styles.description}>{card.description}</p>
          <div className={styles.calendarWrapper}>
            <p className={styles.cta}>Выбирите дату и оставьте заявку</p>
            {card.coordinates &&  <Calendar
              data={card?.bookedDates}
              currentMonth={currentMonth}
              onChangeMonth={setCurrentMonth}
            />}
           
          </div>
        </div>
        <div className={styles.grid}>
          
         {card.coordinates && <YandexMapSpace data={card.coordinates} />} 
          {card.images?.map((el, index) => (
            <div className={styles.imgWrapper} key={index}>
              <img src={el} alt="" className={styles.img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
