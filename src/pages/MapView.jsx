import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import L from "leaflet";
import icon from "./../assets/plane-i.png";
// eslint-disable-next-line react/prop-types
const MapView = ({ openModal }) => {
  const store = useSelector((store) => store);
  //console.log(store.flights);

  const planeIcon = L.icon({
    iconUrl: icon,
    iconSize: [20, 20],
  });

  return (
    <div className="leaflet-container">
      <MapContainer
        center={[11.232647420165126, 77.98472645385641]}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        console.log(store)
        {store.flights.map((flight) => (
          <Marker
            icon={planeIcon}
            key={flight.id}
            position={[flight.lat, flight.lng]}
          >
            <Popup>
              <div className="popup">
                <span>Code: {flight.code}</span>
                <button
                  onClick={() => {
                    //   console.log('mapid',flight.id)
                    openModal(flight.id);
                  }}
                >
                  Details
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
