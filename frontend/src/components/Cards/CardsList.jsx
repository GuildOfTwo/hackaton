import { CardItem } from './CardItem'
import styles from './styles.module.sass'

export const CardsList = () => {

    return (
        <section className={styles.cardsList}>

            <h2 className={styles.cardsListTitle}> Все площадки</h2>

            <ul className={styles.listWrapper}>

            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            </ul>
        </section>
    )
}