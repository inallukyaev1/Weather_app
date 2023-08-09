import { HeartIcon } from "../svg-components/heart-icon.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setLocalStorageItem } from "../methodsJs/LocalSet.js";
import { ELEMENT } from "../methodsJs/elements.js";
import { useEffect, useState } from "react";
import { deleteCity } from "../favorite-cities/favorite-cities.jsx";
import "./widgets.css";

export function Widgets() {
  const allCitiesFavorite = useSelector((state) => state.allCities);
  const [isFavorite, setIsFavorite] = useState("none");
  const dispatch = useDispatch();
  const cityCurrent = useSelector((state) => state.currentCity);
  const cityFav = useSelector((state) => state.allCities);
  const addCityFavorite = () => {
    const index = cityFav.findIndex(
      (item) => item.cityName === cityCurrent.cityName
    );
    if (index === -1) {
      setLocalStorageItem(ELEMENT.selectedCities, [...cityFav, cityCurrent]);
      dispatch({ type: "addCityToFavorites", payload: [cityCurrent] });
      setIsFavorite("red");
    } else {
      const removedCity = deleteCity(allCitiesFavorite, cityCurrent.cityName);
      dispatch({ type: "removeCityFromFavorites", payload: removedCity });
      setLocalStorageItem(ELEMENT.selectedCities, removedCity);
      setIsFavorite("none");
    }
  };

  useEffect(() => {
    const validationFavoriteCity = allCitiesFavorite.filter(
      (item) => item.cityName === cityCurrent.cityName
    );
    validationFavoriteCity.length !== 0
      ? setIsFavorite("red")
      : setIsFavorite("none");
  }, [cityCurrent, allCitiesFavorite]);

  return (
    <div className="weather_block">
      <div className="weather_widgets-now">
        <div className="weather_widgets-degrees">
          {`${Math.round(cityCurrent?.cityTemp)}`}&deg;
        </div>
        <div className="weather_widgets-img">
          <img
            src={`https://openweathermap.org/img/wn/${cityCurrent?.weatherIcon}@4x.png`}
            alt=""
            className="images_current_weather"
          />
        </div>
        <div className="city_selected">
          <div className="city-current-block">
            <span className="name__current_city">{cityCurrent?.cityName}</span>
          </div>
          <div className="favorites-block">
            <button className="favorite_btn" onClick={addCityFavorite}>
              <HeartIcon fill={isFavorite}></HeartIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
