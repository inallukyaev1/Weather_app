import React from "react";
import { useDispatch, useSelector } from "react-redux";
import searchImg from "../../assets/search.svg";
import "./search-form.css";

export function SearchForm({ getCity }) {
  const dispatch = useDispatch();
  const nameOfCity = useSelector((state) => state.inputValue);
  const resetForm = (e) => {
    e.preventDefault();
  };

  const getCityNameHandler = (e) => {
    dispatch({ type: "addInputValue", payload: e.target.value });
  };

  return (
    <form onSubmit={resetForm}>
      <input
        type="text"
        className="input-name-City"
        onChange={getCityNameHandler}
        value={nameOfCity}
      />
      <button
        className="search-btn"
        type="submit"
        onClick={() => getCity(nameOfCity)}
      >
        <img src={searchImg} alt="" />
      </button>
    </form>
  );
}
