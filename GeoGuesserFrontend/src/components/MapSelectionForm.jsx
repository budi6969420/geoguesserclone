import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationFinder from "./LocationFinder";
import "../styles/MapSelectionForm.css";

const MapSelectionForm = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleClick = (event) => {
    setSelectedLocation({
      lat: event.latlng.lat,
      lng: event.latlng.lng,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedLocation) {
      console.log("Submitted Latitude:", selectedLocation.lat);
      console.log("Submitted Longitude:", selectedLocation.lng);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          height: "25vh",
          width: "20vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          id="map"
          style={{
            height: "100%",
            width: "100%",
            border: "0.05em solid black",
          }}
        >
          <MapContainer
            style={{ height: "100%", width: "100%" }}
            center={[0, 0]}
            zoom={4}
            scrollWheelZoom={true}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LocationFinder handleClick={handleClick} />
            {selectedLocation && (
              <Marker
                position={[selectedLocation.lat, selectedLocation.lng]}
              ></Marker>
            )}
          </MapContainer>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MapSelectionForm;
