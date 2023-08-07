import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const items = [
  { path: "", title: "Now" },
  { path: "Details", title: "Details" },
];
export function ChooseSection() {
  const [active, setActive] = useState();
  const ChangeColorTabs = (e) => {
    setActive(+e.target.dataset.index);
  };

  const currentPathname = useLocation();
  const slugCurrent = currentPathname.pathname.split("/")[1];

  return (
    <nav className="tabs__items" onClick={ChangeColorTabs}>
      {items.map((item, i) => {
        return (
          <Link
            key={i}
            to={`${item.path}`}
            data-index={i}
            className={`tab-item ${slugCurrent === item.path ? "active" : ""}`}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
