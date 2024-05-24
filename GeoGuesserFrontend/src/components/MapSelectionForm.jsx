import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import LocationFinder from "./LocationFinder";
import "../styles/MapSelectionForm.css";

const MapSelectionForm = ({ setGuess, gameData }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [rerenderKey, setRerenderKey] = useState(0);
  const bounds = [
    [-90, -180],
    [90, 180],
  ];

  const handleClick = (event) => {
    setSelectedLocation({
      lat: event.latlng.lat,
      lng: event.latlng.lng,
    });
  };

  useEffect(() => {
    setRerenderKey((prevKey) => prevKey + 1);
    setSelectedLocation(null);
  }, [gameData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setGuess(selectedLocation);
  };

  return (
    <form onSubmit={handleSubmit} className="mapForm">
      <div key={rerenderKey} id="map" className="selectionMap">
        <MapContainer
          style={{ height: "100%", width: "100%" }}
          center={[10, 0]}
          zoom={1}
          scrollWheelZoom={true}
          maxBounds={bounds}
          maxBoundsViscosity={1.0}
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />
          <LocationFinder handleClick={handleClick} />
          {selectedLocation && (
            <Marker position={[selectedLocation.lat, selectedLocation.lng]} />
          )}
        </MapContainer>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MapSelectionForm;
