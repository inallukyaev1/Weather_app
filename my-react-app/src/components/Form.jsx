import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import searchImg from '../assets/search.svg';

export function Form({ addRequest }) {
  const dispatch = useDispatch();
  const cityName = useSelector((state) => state.inputValue);
  const resetForm = (e) => {
    e.preventDefault();
  };

  const getCityNameHandler = (e) => {
    dispatch({ type: 'addInputValue', payload: e.target.value });
  };

  return (
    <form onSubmit={resetForm}>
      <input
        type="text"
        className="input_User"
        onChange={getCityNameHandler}
        value={cityName}
      />
      <button
        className="search-btn"
        type="submit"
        onClick={() => addRequest(cityName)}
      >
        <img src={searchImg} alt="" />
      </button>
    </form>
  );
}
