import { PersonalLandlord } from '../../components/Personal/PersonalLandlord'
import { PersonalTenant } from '../../components/Personal/PersonalTenant'
import styles from './styles.module.sass'


export const PersonalAreaPage = () => {

    return (
        <section className={styles.section}>
            <PersonalLandlord />
            {/* <PersonalTenant /> */}
        </section>
    )
}