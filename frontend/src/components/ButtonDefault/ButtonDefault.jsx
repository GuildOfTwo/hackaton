import styles from './styles.module.sass'


export const ButtonDefault = ({lable = 'text'}) => {


    return (
        <button className={styles.button}>{lable}</button>
    )
}