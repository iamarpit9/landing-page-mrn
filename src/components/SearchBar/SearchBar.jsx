import React from "react";
import "./SearchBar.css";

const SearchBar = () => (
  <div className="search-cont">
    <h1 className="search-head">Find your Destination</h1>
    <div className="input-cont">
      <input type="text" placeholder="Search" className="search-input"/>
      <button type="submit" className="search-btn">🔍</button>
    </div>
  </div>
);

export default SearchBar;
