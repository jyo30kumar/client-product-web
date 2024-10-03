import React from "react";
import "./searchBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <>
    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      <input
        type="text"
        name="search-form"
        id="search-form"
        placeholder="Search Product"
        className="search-input"
        aria-label="Search through site content"
        />
    </>
  );
};

export default SearchBar;
