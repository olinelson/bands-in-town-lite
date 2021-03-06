import React from "react";

import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";

const MapComponent = props => {
  const position = [parseFloat(props.latitude), parseFloat(props.longitude)];

  return (
    <div className="map-fullscreen-container">
      <div className="map-inner-container">
        <button onClick={props.hideMap}>exit</button>
        <LeafletMap
          scrollWheelZoom={false}
          id={"leaflet-map"}
          center={position}
          zoom={12}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </LeafletMap>
      </div>
    </div>
  );
};

export default MapComponent;
