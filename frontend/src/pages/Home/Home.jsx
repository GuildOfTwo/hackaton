import { Filters } from '../../components/Filters/Filters'
import { Hero } from '../../components/Hero/Hero'
import { YandexMap } from '../../components/Ymap/YandexMap'
import {CardsList} from '../../components/Cards/CardsList'
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'


export const HomePage = ({ref}) => {
    const items = useSelector(state => state.cards.state)
    const [data, setData] = useState()

const myRef = useRef(null);
    return (
        <>
        <Hero prop={myRef}/>
        <Filters />
        <YandexMap prop={myRef}/>
        <CardsList />
      
        </>
    )
}