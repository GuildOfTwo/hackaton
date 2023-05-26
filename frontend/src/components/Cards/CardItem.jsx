import { useNavigate } from 'react-router-dom'
import { ButtonDefault } from '../ButtonDefault/ButtonDefault'
import styles from './styles.module.sass'

export const CardItem = ({data}) => {

    const {title, desc, id} = data

    const navigate = useNavigate()

    return (
        <li className={styles.cardItem}>
            <h2 className={styles.cardItem__title}>{title}</h2>
            <p className={styles.description}>{desc}</p>
            <ButtonDefault lable='Подробнее' action={() => navigate(`space/${id}`)}/>
        </li>
    )
}