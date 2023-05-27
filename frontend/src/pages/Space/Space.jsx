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
import { Feedback } from '../../components/Feedbacks/Feedback/Feedback';

export const SpacePage = () => {
  const { id } = useParams();
  const [card, setCard] = useState([]);
  const [rating, setRating] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const data = useSelector((state) => state.cards.objects);

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

  let locationArray = card.coordinates ? card.coordinates.split(',').map(Number) : [];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{card.title}</h2>
      <div className={styles.infobar}>
     

        <div className={styles.iconWrapper}>
          <img src={adress} alt="" className={styles.iconImg} />
          <p className={styles.iconText}>{card.address}</p>
        </div>

        <div className={styles.iconWrapper}>
          <img src={people} alt="" className={styles.iconImg} />
          <p className={styles.iconText}>{card.capacity}</p>
        </div>

        <div className={styles.iconWrapper}>
          <img src={square} alt="" className={styles.iconImg} />
          <p className={styles.iconText}>{card.area_rent}</p>
        </div>

        <div className={styles.iconWrapper}>
          <img src={ratingIcon} alt="" className={styles.iconImg} />
          <p className={styles.iconText}>{card.rating}</p>
        </div>

        <div className={styles.iconWrapper}>
          <img src={phone} alt="" className={styles.iconImg} />
          <a className={styles.iconText} href={`tel:${card.phone}`}>
            {card.phone}
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
            Целый день: {card?.cost}&#8381;
          </p>

        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <p className={styles.description}>{card.desc}</p>
          <div className={styles.calendarWrapper}>
            <p className={styles.cta}>Выбирите дату и оставьте заявку</p>
            {card.coordinates &&  <Calendar
              data={card?.booking}
              currentMonth={currentMonth}
              onChangeMonth={setCurrentMonth}
            />}
           
          </div>
          <Feedback  text="Клевое место" score={10} author="Vasia Pupkin" date={new Date()}/>
        </div>
        
        <div className={styles.grid}>
          
         {locationArray.length && <YandexMapSpace data={locationArray} />} 
          {card.building_images?.map((el, index) => (
            <div className={styles.imgWrapper} key={index}>
              <img src={el.image} alt="" className={styles.img} />
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};
