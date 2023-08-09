import closeTask from "../../assets/close.svg";
import { ELEMENT } from "../methodsJs/elements";
import { setLocalStorageItem } from "../methodsJs/LocalSet";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./favorite-cities.css";

export const deleteCity = (listCity, name) => {
  const filterCitie = listCity.filter((item) => item.cityName !== name);
  return filterCitie;
};

export function FavoriteCities({ getCity }) {
  const dispatch = useDispatch();
  const allCitiesFavorite = useSelector((state) => state.allCities);

  const removeFromFavoritesHandler = (listCity, name) => {
    const removedCity = deleteCity(listCity, name);
    dispatch({ type: "removeCityFromFavorites", payload: removedCity });
    setLocalStorageItem(ELEMENT.selectedCities, removedCity);
  };

  return (
    <div className="weather_locations">
      <div className="added_locations">
        <button>
          <Link to="/help">info</Link>{" "}
        </button>
        <div className="locations_text">Added Locations:</div>

        <ul className="location-list">
          {!allCitiesFavorite
            ? []
            : allCitiesFavorite.map((item) => {
                return (
                  <li key={item.id}>
                    <span onClick={() => getCity(item.cityName)}>
                      {item.cityName}
                    </span>
                    <img
                      src={closeTask}
                      alt=""
                      className="delete-city"
                      onClick={() =>
                        removeFromFavoritesHandler(
                          allCitiesFavorite,
                          item.cityName
                        )
                      }
                    />
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
}
