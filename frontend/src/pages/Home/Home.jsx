import { Filters } from '../../components/Filters/Filters'
import { Hero } from '../../components/Hero/Hero'
import { YandexMap } from '../../components/Ymap/YandexMap'
import {CardsList} from '../../components/Cards/CardsList'
import { useState } from 'react'
import { useSelector } from 'react-redux'


export const HomePage = () => {
    const items = useSelector(state => state.cards.state)
    const [data, setData] = useState()


    return (
        <>
        <Hero />
        <Filters />
        <YandexMap />
        <CardsList />
      
        </>
    )
}