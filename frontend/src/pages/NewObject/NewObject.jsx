import { ObjectForm } from '../../components/ObjectForm/ObjectForm'
import styles from './styles.module.sass'

export const NewObjectPage = ({lable = '', edit = false}) => {

    return(
        <section className={styles.section}>
            <ObjectForm edit={edit} lable={lable}/>
        </section>
    )
}