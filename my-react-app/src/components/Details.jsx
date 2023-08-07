import { useDispatch, useSelector } from "react-redux";

export function Details() {
  const cityCurrent = useSelector((state) => state.currentCity);

  return (
    <div id="tab_2" className="weather_block">
      <div className="name__current_city">{cityCurrent?.cityName}</div>
      <ul className="city-properties">
        <li className="city-properties_item temperature_block">
          Temperature: {Math.round(cityCurrent?.cityTemp)}&deg;
        </li>
        <li className="city-properties_item feels_like">
          Feels like: {Math.round(cityCurrent?.tempFeelsLike)}&deg;
        </li>
        <li className="city-properties_item weather_blockTabTwo">
          Weather: {cityCurrent?.weathetMain}
        </li>
        <li className="city-properties_item sunrise_block">
          Sunrise: {cityCurrent?.sunrise}
        </li>
        <li className="city-properties_item sunset_block">
          Sunset: {cityCurrent?.sunset}
        </li>
      </ul>
    </div>
  );
}
