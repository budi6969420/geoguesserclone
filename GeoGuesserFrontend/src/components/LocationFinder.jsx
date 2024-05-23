import { useMapEvents } from "react-leaflet";

const LocationFinder = ({ handleClick }) => {
  const map = useMapEvents({
    click(e) {
      handleClick(e);
    },
  });
  return null;
};
export default LocationFinder;
