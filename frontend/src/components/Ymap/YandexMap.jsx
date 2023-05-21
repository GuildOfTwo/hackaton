import { Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import icon from "../../assets/icons/marker.svg";
import "./yandexMap.sass";

export const YandexMap = () => {
  const defaultState = {
    center: [55.76, 37.64],
    zoom: 11,
    controls: []
  };

  return (
    <section className="section">
      <Map
        defaultState={defaultState}
        width={"100%"}
        height={600}
      >
        <Placemark
          geometry={[55.76, 37.64]}
          options={{
            iconLayout: "default#image",
            iconImageSize: [40, 40],
            iconImageHref: icon,
            iconColor: "#FFFFFF",
          }}
        />
        <ZoomControl options={{ float: "left", position: { right: 10, bottom: 300 }, size: 'small' }} />
      </Map>
    </section>
  );
};
