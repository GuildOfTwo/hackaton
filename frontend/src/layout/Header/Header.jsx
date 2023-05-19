import styles from './styles.module.sass'
import logo from '../../assets/images/headerLogo.svg'
import { ButtonDefault } from '../../components/ButtonDefault/ButtonDefault'
import { useNavigate } from 'react-router-dom'



export const Header = () => {
    const navigate = useNavigate()

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <img src={logo} />
                <h1 className={styles.title} onClick={() => navigate('/')}>Креативные площадки Москвы</h1>
                <ButtonDefault lable='Войти' action={() => navigate('/auth')}/>
            </div>
        </header>
    )
}