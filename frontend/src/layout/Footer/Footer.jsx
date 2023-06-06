import { Link } from "react-router-dom";
import styles from "./styles.module.sass";

export const Footer = () => {


    return (
        <footer className={styles.footer}>
            <Link to="/agreement" className={styles.link}> Пользовательское соглашение</Link>
            <div>Copyright &copy; {(new Date().getFullYear())}</div>
            <a href="mailto:mail@mail.ru">mail@mail.ru</a>
        </footer>
    )
}