import { Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import icon from "../../assets/icons/marker.svg";
import "./yandexMap.sass";
// import { data } from "../../TEMP_DATA/DATA";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const YandexMap = () => {
  const [newData, setNewData] = useState([]);
  const mapState = {
    center: [55.76, 37.64],
    zoom: 11,
    behaviors: ["default", "scrollZoom"],
  };

  const data = useSelector(state => state.cards.objects)
  useEffect(() => {
if(data.length >= 1) {
    let array = data.map((el) => ({
      ...el, coordinates: el.coordinates.split(",").map(Number),
      body: `<div class='container'>
      <div className="wrapper">
  <h2 class='bodyTitle'>${el.title}</h2>
  <p class="description">${el.desc}</p>
  <div class="contacts">
  <p class="adress">${el.address}</p>
  <a href="tel:${el.phone}" class="tel">${el.phone}</a>
  </div>
  </div>
  <a class="button" href='../space/${el.id}' target="_blank">Открыть в новом окне</a>
  </div>`,
    }));
    setNewData(array);
  }
  }, [data]);

  return (
    <section className="section">
      <Map
        defaultState={mapState}
        width={"100%"}
        height={600}
        options={{
          balloonPanelMaxMapArea: Infinity,
        }}
      >
        {newData &&
          newData.map((item) => (
            <Placemark
              defaultGeometry={item.coordinates}
              key={item.id}
              modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
              options={{
                iconLayout: "default#imageWithContent",
                iconImageHref: icon,
                iconImageSize: [20, 60],
                iconImageOffset: [-20, -40],
                iconCaptionMaxWidth: 500,
              }}
              properties={{
                balloonContentBody: item.body,
                // iconCaption: item.name ? item.name : null,
                hintContent: item.name,
              }}
            />
          ))}
        {/* <ZoomControl
          options={{
            float: "left",
            position: { right: 30, bottom: 300 },
            size: "small",
          }}
        /> */}
      </Map>
    </section>
  );
};
