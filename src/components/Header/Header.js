import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ setActiveComponent }) {
  return (
    <>
      <div className="headerContainer">
        <div className="websiteNameContainer">
          <h2 className="websiteName">React Movie App</h2>
        </div>
        <div className="navbarContainer">
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/" className="navbarItem">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="navbarItem"
                  onClick={() => setActiveComponent("Movies")}
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="navbarItem"
                  onClick={() => setActiveComponent("UpCommingMovies")}
                >
                  Up Coming Movies
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="navbarItem"
                  onClick={() => setActiveComponent("UpComingSeries")}
                >
                  Up Coming Series
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="navbarItem"
                  onClick={() => setActiveComponent("Trending")}
                >
                  Trending
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
