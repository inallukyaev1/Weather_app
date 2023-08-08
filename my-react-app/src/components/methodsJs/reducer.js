import { createStore } from "redux";
import { defaultState } from "./elements";

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "addCurrentCity":
      return { ...state, currentCity: action.payload };
    case "addInputValue":
      return { ...state, inputValue: action.payload };
    case "addCityToFavorites":
      return { ...state, allCities: [...state.allCities, ...action.payload] };
    case "addCityToFavoritesFromLocalStorage":
      return { ...state, allCities: [...action.payload] };
    case "removeCityFromFavorites":
      return { ...state, allCities: action.payload };
    default:
      return state;
  }
};

export const store = createStore(reducer);
