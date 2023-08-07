import { useEffect } from "react";
import { Form } from "./components/Form";
import { ChooseSection } from "./components/ChooseSection";
import { CityList } from "./components/CityList";
import { requestCity } from "./components/methodsJs/requestCity";
import { ELEMENT } from "./components/methodsJs/elements";
import { timeConverter } from "./components/methodsJs/converterTime";
import {
  setLocalStorageItem,
  getLocalStorageItem,
} from "./components/methodsJs/LocalSet";
import { nanoid } from "nanoid";
import "./App.css";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (getLocalStorageItem("currentCity")) {
      dispatch({
        type: "addAllCitiesFromLocalStorage",
        payload: getLocalStorageItem(ELEMENT.selectedCities) || [],
      });
      getCity(getLocalStorageItem("currentCity")?.cityName);
    } else {
      getCity(ELEMENT.defaultValue);
    }
  }, []);

  const AddCurrentCity = (value) => {
    dispatch({ type: "addCurrentCity", payload: value });
    setLocalStorageItem("currentCity", value);
  };

  const getCity = (value) => {
    const gg = requestCity(value);
    gg.then((data) => {
      AddCurrentCity({
        cityName: data.name,
        cityTemp: data.main.temp,
        weatherIcon: data.weather[0].icon,
        tempFeelsLike: data.main.feels_like,
        weathetMain: data.weather[0].main,
        sunrise: timeConverter(data.sys.sunrise),
        sunset: timeConverter(data.sys.sunset),
        id: nanoid(),
      });
    }).catch((e) => console.log("Город не найден"));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="weather">
          <Form getCity={getCity} />
          <div className="weather_wrapper">
            <div className="weather_widgets">
              <Outlet />
              <ChooseSection />
            </div>
            <CityList getCity={getCity} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
