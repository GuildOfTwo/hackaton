import { Filters } from '../../components/Filters/Filters'
import { Hero } from '../../components/Hero/Hero'
import { YandexMap } from '../../components/Ymap/YandexMap'
import styles from './styles.module.sass'


export const HomePage = () => {


    return (
        <>
        <Hero />
        <Filters />
        <YandexMap />
      
        </>
    )
}