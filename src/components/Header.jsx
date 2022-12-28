import React from "react";
import profilePic from "../assets/profile-pic.png";
import "../assets/Header.css";

const Header = () => {

    return (
        <header>
        <img
          src={profilePic}
          className="profile-pic"
          alt="A picture of Jon Sundin"
        />
        <ul className="header-list">
          <li className="header-list__item">
            <h1>Jon Sundin</h1>
          </li>
          <li className="header-list__item">
            <h2>Software Engineer</h2>
          </li>
        </ul>
      </header>
    );
};

export default Header;