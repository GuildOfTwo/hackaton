import styles from './styles.module.sass'


export const ButtonDefault = ({lable = 'text', action}) => {


    return (
        <button className={styles.button} onClick={action} >{lable}</button>
    )
}