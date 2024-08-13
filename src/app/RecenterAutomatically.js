import { useEffect } from "react";
import { useMap } from "react-leaflet";

const RecenterAutomatically = ({ lat, lng }) => {
  const map = useMap();

  useEffect(() => {
    if (lat && lng) {
      map.setView([lat, lng]);
    }
  }, [lat, lng, map]);

  return null;
};

export default RecenterAutomatically;
