import React from "react";
import { Link } from "react-router-dom";

export function Help() {
  return (
    <div className="Help-block">
      <span>
        Hi there! In this weather app you can check: weather forecast for now
        and all day
      </span>
      <div>
        <button className="help_btn">
          <Link to="/">Hide</Link>
        </button>
      </div>
    </div>
  );
}
