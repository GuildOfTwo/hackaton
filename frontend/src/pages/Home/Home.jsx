import { Filters } from '../../components/Filters/Filters'
import { Hero } from '../../components/Hero/Hero'
import { YandexMap } from '../../components/Ymap/YandexMap'
import {CardsList} from '../../components/Cards/CardsList'


export const HomePage = () => {


    return (
        <>
        <Hero />
        <Filters />
        <YandexMap />
        <CardsList />
      
        </>
    )
}