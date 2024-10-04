import React, { useState, useEffect, useContext} from "react";
import "./slider.css";
import CountDown from "../CountDown/CountDown";
import StoreContext from "../../context/StoreContext";

const Slider = () => {  

  return (
    <>
      <div className="slider">
        <div className="slider-1">
          <p>Special Offer</p>
          <CountDown />
        </div>
      </div>
    </>
  );
};

export default Slider;
