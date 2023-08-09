import { useSelector } from "react-redux";
import "./details.css";

export function Details() {
  const cityCurrent = useSelector((state) => state.currentCity);
  return (
    <div className="weather_block">
      <div className="name_current_city">{cityCurrent?.cityName}</div>
      <ul className="city-properties">
        <li className="city-properties_item">
          Temperature: {Math.round(cityCurrent?.cityTemp)}&deg;
        </li>
        <li className="city-properties_item">
          Feels like: {Math.round(cityCurrent?.tempFeelsLike)}&deg;
        </li>
        <li className="city-properties_item">
          Weather: {cityCurrent?.weathetMain}
        </li>
        <li className="city-properties_item">
          Sunrise: {cityCurrent?.sunrise}
        </li>
        <li className="city-properties_item ">Sunset: {cityCurrent?.sunset}</li>
      </ul>
    </div>
  );
}
