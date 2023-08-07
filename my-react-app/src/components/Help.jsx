import React from "react";
import { Link } from "react-router-dom";

export function Help() {
  return (
    <div>
      <span>
        Это тестовая программа погоды. Вводи название города и нажми на
        поисковую лупу . Город будет высвечен в течение нескольких секунд
      </span>
      <div>
        <button>
          <Link to="/">Скрыть </Link>
        </button>
      </div>
    </div>
  );
}
