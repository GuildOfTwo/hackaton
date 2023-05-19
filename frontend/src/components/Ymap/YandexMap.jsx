import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import icon from '../../assets/icons/marker.svg'
import styles from './styles.module.sass'

export const YandexMap = () => {



  const defaultState = {
    center: [55.76, 37.64],
    zoom: 9,
    width: "500px"
  };

  return (
    <section className={styles.section}>
    <YMaps>
      <Map defaultState={defaultState}
      width={1000}
      height={600}>
        <Placemark geometry={[55.684758, 37.738521]} 
        />
      </Map>
    </YMaps>
    </section>
  );
};
