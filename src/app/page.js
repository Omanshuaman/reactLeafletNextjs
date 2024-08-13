"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState } from "react";
import RecenterAutomatically from "./RecenterAutomatically";

export default function Home() {
  // Define the initial map center and zoom
  const initialPosition = [20.5937, 78.9629]; // Geographic center of India
  const initialZoom = 5;

  // State to handle the dynamic map center
  const [mapCenter, setMapCenter] = useState(initialPosition);

  // Array of marker positions and information
  const markers = [
    { position: [28.6139, 77.209], label: "New Delhi" },
    { position: [19.076, 72.8777], label: "Mumbai" },
    { position: [13.0827, 80.2707], label: "Chennai" },
    { position: [22.5726, 88.3639], label: "Kolkata" },
    { position: [12.9716, 77.5946], label: "Bangalore" },
  ];

  return (
    <MapContainer
      center={mapCenter}
      zoom={initialZoom}
      scrollWheelZoom={true}
      style={{ height: "100vh", width: "100vw" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          eventHandlers={{
            click: () => {
              setMapCenter(marker.position);
            },
          }}>
          <Popup>{marker.label}</Popup>
        </Marker>
      ))}
      <RecenterAutomatically lat={mapCenter[0]} lng={mapCenter[1]} />
    </MapContainer>
  );
}
