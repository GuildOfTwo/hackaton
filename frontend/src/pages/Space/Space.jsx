import { useParams } from "react-router-dom";
import { data } from "../../TEMP_DATA/DATA";
import styles from "./styles.module.sass";

// import { SwiperSlider } from "../../components/Swiper/Swiper";
import { ButtonDefault } from "../../components/ButtonDefault/ButtonDefault";
import adress from '../../assets/icons/adress.png'
import people from '../../assets/icons/people.png'
import email from '../../assets/icons/email.png'
import ruble from '../../assets/icons/ruble.png'
import phone from '../../assets/icons/phone.png'
import site from '../../assets/icons/site.png'

export const SpacePage = () => {
  const { id } = useParams();

  const itemData = data.find((el) => el.id == id);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{itemData.name}</h2>
      <div className={styles.infobar}>
        <ButtonDefault lable="Оставить заявку" action={() =>allert('отправка заявки')}/>

        <div className={styles.iconWrapper}>
            <img src={adress} alt="" className={styles.iconImg}/>
            <p className={styles.iconText}>{itemData.adress}</p>
        </div>

        <div className={styles.iconWrapper}>
            <img src={people} alt="" className={styles.iconImg}/>
            <p className={styles.iconText}>{itemData.capacity}</p>
        </div>

        <div className={styles.iconWrapper}>
            <img src={phone} alt="" className={styles.iconImg}/>
            <a className={styles.iconText} href={`tel:${itemData.tel}`}>{itemData.tel}</a>
        </div>

        <div className={styles.iconWrapper}>
            <img src={email} alt="" className={styles.iconImg}/>
            <a className={styles.iconText} href={`mailto:${itemData.email}`}>{itemData.email}</a>
        </div>

        <div className={styles.iconWrapper}>
            <img src={site} alt="" className={styles.iconImg}/>
            <a className={styles.iconText} href={itemData.site} target="_blank">Сайт</a>
        </div>

        <div className={styles.iconWrapper}>
            <img src={ruble} alt="" className={styles.iconImg}/>
            <p className={styles.iconText}>Целый день: {itemData.price.day}</p>
            <p className={styles.iconText}>Час: {itemData.price.hour}</p>
        </div>


      </div>
      <div className={styles.wrapper}>
        <p className={styles.description}>{itemData.description}</p>
        {/* <SwiperSlider data={itemData}/> */}
        <div className={styles.grid}>
          {itemData.images?.map((el) => (
            <div className={styles.imgWrapper}>
              <img src={el} alt="" className={styles.img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
