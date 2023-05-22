import { useParams } from "react-router-dom"
import { data } from "../../TEMP_DATA/DATA"
import styles from './styles.module.sass'

import { SwiperSlider } from "../../components/Swiper/Swiper"

export const SpacePage = () => {

    const {id} = useParams()

    const itemData = data.find(el => el.id = id)


    return(

        <section className={styles.section}>
            <h2 className={styles.title}>{itemData.name}</h2>
            <div className={styles.wrapper}>

                <p className={styles.description}>{itemData.description}</p>
        <SwiperSlider data={itemData}/>

            </div>

        </section>
    )
}