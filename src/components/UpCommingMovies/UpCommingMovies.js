import React, { useEffect, useState } from "react";
import "./UpCommingMovies.css";
import { API_REQUEST_OPTIONS } from "../../Api";
import { FaArrowDown } from "react-icons/fa";
import { TailSpin } from "react-loader-spinner";
import ShowMovieDetails from "../ShowUpcomingDetails/ShowUpcomingDetails";
import { IoArrowBack } from "react-icons/io5";
import Button from "../Button/Button";

export default function UpCommingMovies() {
  const [moviesData, setMoviesData] = useState(null);
  const [dataToPass, setDataToPass] = useState(null);
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [currentItems, setCurrentItems] = useState(10);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const response = await fetch(
          "https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/upcoming-tv-shows",
          API_REQUEST_OPTIONS
        );

        const result = await response.json();
        setMoviesData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMoviesData();
  }, []);
  console.log(moviesData);

  const handleMovieOnClick = (date, key) => {
    let movieImage = null;
    let movieTitle = null;
    let movieGenres = null;
    let movieStars = null;
    let movieIMBD = null;

    moviesData.list.forEach((movies) => {
      if (date === movies.date) {
        movies.list.forEach((movie, index) => {
          if (key === index) {
            movieImage = movie.image;
            movieTitle = movie.title;
            movieGenres = movie.categories;
            movieStars = movie.staring;
            movieIMBD = movie.link;
          }
        });
      }
    });

    setDataToPass({
      movieImage: movieImage,
      movieTitle: movieTitle,
      movieGenres: movieGenres,
      movieStars: movieStars,
      movieIMBD: movieIMBD,
    });

    setShowMovieDetails(true);
  };

  const handleCloseButton = () => {
    setShowMovieDetails(false);
  };

  const handleShowMore = () => {
    setCurrentItems(currentItems + 2);
  };

  return (
    <>
      {showMovieDetails ? (
        <>
          <div className="closeButtonDiv">
            <button className="closeButton" onClick={handleCloseButton}>
              <IoArrowBack />
            </button>
            Up Comming Movies
          </div>
          <ShowMovieDetails data={dataToPass} />
        </>
      ) : (
        <>
          <div className="upCommingMoviesContainer">
            <h1 className="upCommingMoviesHeading">
              Up Comming Movies <br />
              <FaArrowDown />
            </h1>
            {moviesData && moviesData.list ? (
              <>
                {moviesData.list.slice(0, currentItems).map((movies, index) => (
                  <div className="moviesContainer" key={index}>
                    {movies.list.length > 1 ? (
                      <>
                        <div
                          className="movies"
                          style={{
                            scrollBehaviour: "smooth",
                            overflowX: "scroll",
                          }}
                        >
                          <h3 className="moviesReleaseDate">{movies.date}</h3>
                          <div className="moviesGrid">
                            {movies.list.map((movie, index) => (
                              <div className="movie" key={index}>
                                <div className="movieImgDiv">
                                  <img
                                    src={movie.image}
                                    alt={movie.title}
                                    className="moviePic"
                                    onClick={() =>
                                      handleMovieOnClick(movies.date, index)
                                    }
                                  />
                                </div>
                                <div className="movieDescription">
                                  <h4 className="movieTitle">{movie.title}</h4>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="movies">
                          <h3 className="moviesReleaseDate">{movies.date}</h3>
                          <div className="moviesGrid">
                            {movies.list.map((movie, index) => (
                              <div
                                className="movie"
                                key={index}
                                onClick={() =>
                                  handleMovieOnClick(movies.date, index)
                                }
                              >
                                <div className="movieImgDiv">
                                  <img
                                    src={movie.image}
                                    alt={movie.title}
                                    className="moviePic"
                                  />
                                </div>
                                <div className="movieDescription">
                                  <h4 className="movieTitle">{movie.title}</h4>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
                <Button name="Show More" handleButton={handleShowMore} />
              </>
            ) : (
              <>
                <TailSpin
                  height="80"
                  width="80"
                  color="white"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
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
