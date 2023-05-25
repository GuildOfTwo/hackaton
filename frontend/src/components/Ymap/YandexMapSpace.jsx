import { Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import icon from "../../assets/icons/marker.svg";
import "./yandexMap.sass";

// import { data } from "../../TEMP_DATA/DATA";
import { useEffect, useState } from "react";

export const YandexMapSpace = ({ data= [] }) => {
  const mapState = {
    center: data,
    zoom: 15,
    behaviors: ["default", "scrollZoom"],
  };

  return (
    <section className="section">
      <Map
        defaultState={mapState}
        width={"100%"}
        height={400}
        options={{
          balloonPanelMaxMapArea: 0,
        }}
      >
        {data &&
          
            <Placemark
              defaultGeometry={data}

              modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
              options={{
                iconLayout: "default#imageWithContent",
                iconImageHref: icon,
                iconImageSize: [20, 60],
                iconImageOffset: [-20, -40],
                iconCaptionMaxWidth: 500,
              }}
            />
            }
      </Map>
    </section>
  );
};
