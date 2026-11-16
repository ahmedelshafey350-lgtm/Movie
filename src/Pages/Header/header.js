import React, { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="n">
      <Link className="navbar-brand" to="/">
        T M B D MOVIE
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarTogglerDemo01"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        id="navbarTogglerDemo01"
      >
        <ul className="head navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <span className="move">Home</span>
            <div className="Type">
              <Link to="/">Home</Link>
              <Link to="/#about">About</Link>
              <Link to="/#contact">Contact</Link>
            </div>
          </li>

          <li className="nav-item">
            <span className="move">Movies</span>
            <div className="Type">
              <Link to="/movies">Popular</Link>
              <Link to="/upcoming">UPcoming</Link>
              <Link to="/toprated">TopRating</Link>
              <Link to="/nowplaying">Now Playing</Link>
            </div>
          </li>
          <li className="nav-item">
            <span className="move">TV Shows</span>
            <div className="Type">
              <Link to="/Tvpopular">Popular</Link>
              <Link to="/AiringToday">AiringTodey</Link>
              <Link to="/OnTv">On Tv</Link>
              <Link to="/TVtop">Top Rated</Link>
            </div>
          </li>
          <li className="nav-item">
            <span className="move">Pepoel</span>
            <div className="Type">
              <Link to="/PepoleList">Popular</Link>
            </div>
          </li>
        </ul>
        <div className="Inside">
          <ul>
            <li>
              <Link to="/Login_Sign">Login</Link>
            </li>
            <li>
              <Link to="/Signin">Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
