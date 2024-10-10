import React, {memo} from "react";
import SearchBar from "../SearchBar/SearchBar";
//import  font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLocationDot } from "@fortawesome/free-solid-svg-icons";

//css
import "./header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="inner-header-top">
          <SearchBar />
          <div className="header-user">
          <FontAwesomeIcon icon={faUser} aria-hidden="true" className="fa-solid fa-user" />
          </div>
        </div>
        <div className="inner-header-bottom">
          <p>Delivery available at pincode 306401</p>
          <FontAwesomeIcon icon={faLocationDot} className="location"/>
          <p>
            Housing Board, Pali
          </p>
        </div>
      </header>
    </>
  );
};

export default memo(Header);
