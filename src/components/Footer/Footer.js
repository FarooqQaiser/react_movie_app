import React from "react";
import "./Footer.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer({ setActiveComponent }) {
  return (
    <>
      <div className="footerContainer">
        <div className="content">
          <div className="websiteAbout container">
            <h3 className="heading">React Movie App</h3>
            <em className="websiteAbout">
              Watch your favorite Movies & TV Series in HD Online free streaming
              with english subtitles at www.europixhd.site
            </em>
          </div>
          <div className="main container">
            <h3 className="heading">Main</h3>
            <div className="mainContentContainer">
              <ul className="mainContent">
                <li>
                  <Link className="mainItem" to={"/"}>
                    <FaArrowRight /> Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="mainItem"
                    to={"/"}
                    onClick={() => setActiveComponent("Movies")}
                  >
                    <FaArrowRight /> Movies
                  </Link>
                </li>
                <li>
                  <Link
                    className="mainItem"
                    to={"/"}
                    onClick={() => setActiveComponent("UpCommingMovies")}
                  >
                    <FaArrowRight /> Up Coming Movie
                  </Link>
                </li>
                <li>
                  <Link
                    className="mainItem"
                    to={"/"}
                    onClick={() => setActiveComponent("UpComingSeries")}
                  >
                    <FaArrowRight /> Up Coming Series
                  </Link>
                </li>
                <li>
                  <Link
                    className="mainItem"
                    to={"/"}
                    onClick={() => setActiveComponent("Trending")}
                  >
                    <FaArrowRight /> Trending
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact container">
            <h3 className="heading">Contact</h3>
          </div>
          <div className="links container">
            <h3 className="heading">Links</h3>
          </div>
        </div>
      </div>
    </>
  );
}
