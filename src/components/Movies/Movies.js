import React, { useEffect, useState } from "react";
import "./Movies.css";
import { requestOptions } from "./MoviesApi";
import ShowDetails from "../ShowDetails/ShowDetails";
import { IoArrowBack } from "react-icons/io5";
import { TailSpin } from "react-loader-spinner";
import { FaArrowDown } from "react-icons/fa";
import Button from "../Button/Button";

export default function Movies() {
  const [data, setData] = useState(null);
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [dataToPass, setDataToPass] = useState(null);
  const [currentItems, setCurrentItems] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/top-250-movies",
          requestOptions
        );

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  const handleMovieOnClick = (number) => {
    const movie = data.movies[number];
    setDataToPass({
      Image: movie.image,
      IMBDRating: movie.imdbRating,
      IMBDLink: movie.link,
      Timeline: movie.timeline,
      Title: movie.title,
      Year: movie.year,
    });
    setShowMovieDetails(true);
  };

  const handleCloseButton = () => {
    setShowMovieDetails(false);
  };

  const handleShowMore = () => {
    setCurrentItems(currentItems + 4);
  };

  return (
    <>
      {showMovieDetails ? (
        <>
          <div className="closeButtonDiv">
            <button className="closeButton" onClick={handleCloseButton}>
              <IoArrowBack />
            </button>
            Back to Movies
          </div>
          <ShowDetails data={dataToPass} />
        </>
      ) : (
        <>
          <div className="allMoviesContainer">
            <h1 className="moviesHeading">
              Top Movies
              <FaArrowDown />
            </h1>
            {data ? (
              <>
                <div className="mainMoviesContainer">
                  {data.movies.slice(0, currentItems).map((movie, index) => (
                    <div className="movieCard" key={index}>
                      <div className="pictureMovieDiv">
                        <img
                          src={movie.image}
                          alt={movie.title}
                          className="pictureMovie"
                          onClick={() => handleMovieOnClick(index)}
                        />
                      </div>
                      <div className="titleMovieDiv">
                        <h4 className="titleMovie">
                          <strong>Title: </strong>
                          <span>{movie.title}</span>
                        </h4>
                      </div>
                      <div className="yearMovieDiv">
                        <h4 className="yearMovie">
                          <strong>Year: </strong>
                          <span>{movie.year}</span>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
                <Button name="Show More" handleButton={handleShowMore} />
              </>
            ) : (
              <>
                <TailSpin // Type of spinner
                  height="80"
                  width="80"
                  color="white"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}
