import React, { useState } from "react";
import "./tabBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCartShopping,
  faHandHoldingHand,
  faHome,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TabBar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const tabs = [
    { icon: faHome, label: "Home", tabLink:"/" },
    { icon: faLayerGroup, label: "Category",  tabLink:"/category" },
    { icon: faCartShopping, label: "Cart",  tabLink:"/cart" },
    { icon: faBagShopping, label: "Orders",  tabLink:"/orders" },
    { icon: faHandHoldingHand, label: "Help",  tabLink:"/help" },
  ];

  return (
    <>
      <div className="tab-bar">
        <ul role="tab-button">
          {tabs.map((tab) => (
            <Link to={tab.tabLink} className="tab-link" >
            <li
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={activeTab === tab.label ? "active" : ""}
            >
              <FontAwesomeIcon icon={tab.icon} />
              <p>{tab.label}</p>
            </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TabBar;
