import React from "react";
import "./Header.css";
import img from "../../assets/header.png";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => (
  <header className="header-cont">
    <div className="right-side">
      <div className="logo">Logo</div>
      <div>

      <SearchBar />
      </div>
    </div>

    <div className="left-side">
          <div className="about-link">About Gateway</div>
        <img src={img} alt="img" className="header-img" />
      </div>
  </header>
);

export default Header;
