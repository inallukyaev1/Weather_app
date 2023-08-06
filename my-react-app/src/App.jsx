import { useEffect } from 'react';
import { Form } from './components/Form';
import { Widgets } from './components/Widgets';
import { ChooseSection } from './components/ChooseSection';
import { Details } from './components/Details';
import { CityList } from './components/CityList';
import { Forecast } from './components/Forecast';
import { requestCity } from './components/methodsJs/requestCity';
import { ELEMENT } from './components/methodsJs/elements';
import { convertTime } from './components/methodsJs/converterTime';
import {
  setLocalStorageItem,
  getLocalStorageItem,
} from './components/methodsJs/LocalSet';
import { nanoid } from 'nanoid';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const cityCurrent = useSelector((state) => state.currentCity);
  const cityFav = useSelector((state) => state.allCities);

  useEffect(() => {
    if (getLocalStorageItem('currentCity')) {
      dispatch({
        type: 'addAllCitiesFromLocalStorage',
        payload: getLocalStorageItem(ELEMENT.selectedCities),
      });
      addRequest(getLocalStorageItem('currentCity')?.cityName);
    } else {
      addRequest(cityCurrent);
    }
  }, []);

  const AddCityHandler = (value) => {
    dispatch({ type: 'addCurrentCity', payload: value });
    setLocalStorageItem('currentCity', value);
  };

  const addCityFavorite = () => {
    const index = cityFav.findIndex(
      (item) => item.cityName === cityCurrent.cityName
    );
    if (index === -1) {
      setLocalStorageItem(ELEMENT.selectedCities, [...cityFav, cityCurrent]);
      dispatch({ type: 'addAllCities', payload: [cityCurrent] });
    } else {
    }
  };

  const addRequest = (value) => {
    const gg = requestCity(value);
    gg.then((data) => {
      AddCityHandler({
        cityName: data.name,
        cityTemp: data.main.temp,
        weatherIcon: data.weather[0].icon,
        tempFeelsLike: data.main.feels_like,
        weathetMain: data.weather[0].main,
        sunrise: convertTime(data.sys.sunrise),
        sunset: convertTime(data.sys.sunset),
        id: nanoid(),
      });
    }).catch((e) => console.log('Город не найден'));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="weather">
          <Outlet />
          <Form addRequest={addRequest} />
          <div className="weather_wrapper">
            <div className="weather_widgets">
              <Widgets
                cityName={cityCurrent?.cityName}
                cityTemp={cityCurrent?.cityTemp}
                weatherIcon={cityCurrent?.weatherIcon}
                addCityFavorite={addCityFavorite}
              />
              <Details
                cityName={cityCurrent?.cityName}
                tempFeelsLike={cityCurrent?.tempFeelsLike}
                cityTemp={cityCurrent?.cityTemp}
                weathetMain={cityCurrent?.weathetMain}
                sunset={cityCurrent?.sunset}
                sunrise={cityCurrent?.sunrise}
              />
              <Forecast />
              <ChooseSection />
            </div>
            <CityList addRequest={addRequest} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
