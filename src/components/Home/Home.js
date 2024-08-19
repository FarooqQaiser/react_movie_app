import React from "react";
import "./Home.css";
import Movies from "../Movies/Movies";
import UpCommingMovies from "../UpCommingMovies/UpCommingMovies";
import UpComingSeries from "../UpComingSeries/UpComingSeries";
import Trending from "../Trending/Trending";

export default function Home({ activeComponent }) {
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "Movies":
        return <Movies />;
      case "UpCommingMovies":
        return <UpCommingMovies />;
      case "UpComingSeries":
        return <UpComingSeries />;
      case "Trending":
        return <Trending />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="homeContainer">
        <div className="home">
          <div className="homeHeadingContainer">
            <h3 className="homeHeading">Watch Movies & TV Shows</h3>
          </div>
          <div className="descriptionContainer">
            <h3 className="description">
              Your favorite Movies & TV Series Online in HD for FREE
            </h3>
          </div>
        </div>
      </div>
      {renderActiveComponent()}
    </>
  );
}
