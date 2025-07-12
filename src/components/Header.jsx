import React from "react";
import './header.css'

const Header = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 mx-0 px-0">
        <a className="navbar-brand ms-5 fw-bold" href="#">
          Media player
          <i className="fa-solid fa-music ms-2"></i>
        </a>
        <button
          className="navbar-toggler d-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
};

export default Header;
