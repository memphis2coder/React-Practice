import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav>
        <h1 className="logo">logo</h1>
        <ul className="menu">
          <li className="menu-link">
            <a href="/">Link</a>
          </li>
          <li className="menu-link">
            <a href="/">Link</a>
          </li>
          <li className="menu-link">
            <a href="/">Link</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
