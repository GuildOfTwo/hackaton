import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import icon from '../../assets/icons/marker.svg'
import './yandexMap.sass'

export const YandexMap = () => {



  const defaultState = {
    center: [55.76, 37.64],
    zoom: 9
  };

  return (
    <section className='section'>
    <YMaps>
      <Map defaultState={defaultState}
      width={'100%'}
      height={600}>
        <Placemark geometry={[55.684758, 37.738521]} 
        />
      </Map>
    </YMaps>
    </section>
  );
};
