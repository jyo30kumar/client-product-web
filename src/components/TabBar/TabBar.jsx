import React, { memo, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// import css
import "./tabBar.css";

// import icon from font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCartShopping,
  faHandHoldingHand,
  faHome,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

const TabBar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("Home");
  const tabs = [
    { icon: faHome, label: "Home", tabLink: "/" },
    { icon: faLayerGroup, label: "Category", tabLink: "/category" },
    { icon: faCartShopping, label: "Cart", tabLink: "/cart" },
    { icon: faBagShopping, label: "Orders", tabLink: "/orders" },
    { icon: faHandHoldingHand, label: "Help", tabLink: "/help" },
  ];

  useEffect(() => {
    const locationPath = location.pathname;
    const matchingTab = tabs.find((tab) => tab.tabLink == locationPath);
    matchingTab && setActiveTab(matchingTab.label);
  }, [location]);

  return (
    <>
      <div className="tab-bar">
        <ul role="tab-button">
          {tabs.map((tab) => (
            <Link
              key={tab.label}
              to={tab.tabLink}
              className={`tab-link ${activeTab === tab.label ? "active" : ""}`}
              onClick={() => setActiveTab(tab.label)}
            >
              <FontAwesomeIcon icon={tab.icon} />
              <p>{tab.label}</p>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default memo(TabBar);
