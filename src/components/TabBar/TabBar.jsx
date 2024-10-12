import React, { memo, useContext, useEffect, useState } from "react";
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
import StoreContext from "../../context/StoreContext";

const TabBar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("Home");
  const {cartItem} = useContext(StoreContext);
  const tabs = [
    { icon: faHome, label: "Home", tabLink: "/" },
    { icon: faLayerGroup, label: "Category", tabLink: "/category" },
    { icon: faCartShopping, label: "Cart", tabLink: "/cart" },
    { icon: faBagShopping, label: "Orders", tabLink: "/orders" },
    { icon: faHandHoldingHand, label: "Help", tabLink: "/help" },
  ];

  // function to check if there are any item in the array
  const hasItemsInCart = ()=>{
    return Object.values(cartItem).some(item => item > 0);
  }
  // function for to count items in cart 
  const quantityInCart = () =>{
    let sum = 0;
    for(const key in cartItem){
      sum += cartItem[key];
    }
    return sum;
  }

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
              <FontAwesomeIcon icon={tab.icon} id={tab.id} />
              {(tab.label == "Cart" && hasItemsInCart() ) && (
                <span className="cart-notification" >{quantityInCart()}</span>
              )}
              <p>{tab.label}</p>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default memo(TabBar);
