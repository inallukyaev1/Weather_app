import closeTask from '../assets/close.svg';
import { ELEMENT } from './methodsJs/elements';
import { setLocalStorageItem } from './methodsJs/LocalSet';
import { useDispatch, useSelector } from 'react-redux';

export function CityList({ addRequest }) {
  const dispatch = useDispatch();
  const allCitiesFavorite = useSelector((state) => state.allCities);
  const deleteCity = (listCity, name) => {
    const filterCitie = listCity.filter((item) => item.cityName !== name);
    dispatch({ type: 'deleteCitiesInFavorite', payload: filterCitie });
    setLocalStorageItem(ELEMENT.selectedCities, filterCitie);
  };
  return (
    <div className="weather_locations">
      <div className="added_locations">
        <button>
          <a href="/Help">Help</a>{' '}
        </button>
        <div className="locations_text">Added Locations:</div>

        <ul className="location-list">
          {!allCitiesFavorite
            ? []
            : allCitiesFavorite.map((item) => {
                return (
                  <li key={item.id}>
                    <span onClick={() => addRequest(item.cityName)}>
                      {item.cityName}
                    </span>
                    <img
                      src={closeTask}
                      alt=""
                      className="close-city"
                      onClick={() =>
                        deleteCity(allCitiesFavorite, item.cityName)
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
