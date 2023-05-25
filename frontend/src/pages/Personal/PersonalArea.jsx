
import { PersonalPage } from '../../components/Personal/PersonalPage'

import styles from './styles.module.sass'


export const PersonalAreaPage = ({tenant, landlord}) => {

    return (
        <section className={styles.section}>
            <PersonalPage tenant={tenant} landlord={landlord}/>
        </section>
    )
}