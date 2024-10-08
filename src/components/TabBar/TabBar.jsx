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

const TabBar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const tabs = [
    { icon: faHome, label: "Home" },
    { icon: faLayerGroup, label: "Category" },
    { icon: faCartShopping, label: "Cart" },
    { icon: faBagShopping, label: "Orders" },
    { icon: faHandHoldingHand, label: "Help" },
  ];

  return (
    <>
      <div className="tab-bar">
        <ul role="tab-button">
          {tabs.map((tab) => (
            <li
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={activeTab === tab.label ? "active" : ""}
            >
              <FontAwesomeIcon icon={tab.icon} />
              <p>{tab.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TabBar;
