import React, { useEffect, useState } from "react";
import "./UpComingSeries.css";
import { API_REQUEST_OPTIONS } from "../../Api";
import { FaArrowDown } from "react-icons/fa";
import { TailSpin } from "react-loader-spinner";
import ShowMovieDetails from "../ShowUpcomingDetails/ShowUpcomingDetails";
import { IoArrowBack } from "react-icons/io5";

export default function UpComingSeries() {
  const [moviesData, setMoviesData] = useState(null);
  const [dataToPass, setDataToPass] = useState(null);
  const [showMovieDetails, setShowMovieDetails] = useState(false);

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
    moviesData.list.forEach((movies) => {
      if (date === movies.date) {
        movies.list.forEach((movie, index) => {
          if (key === index) {
            setDataToPass({
              movieImage: movie.image,
              movieTitle: movie.title,
              movieGenres: movie.categories,
              movieStars: movie.staring,
              movieIMBD: movie.link,
            });
          }
        });
      }
    });

    setShowMovieDetails(true);
  };

  return (
    <>
      {showMovieDetails ? (
        <>
          <div className="closeButtonDiv">
            <button
              className="closeButton"
              onClick={() => setShowMovieDetails(false)}
            >
              <IoArrowBack />
            </button>
            Up Comming Series
          </div>
          <ShowMovieDetails data={dataToPass} />
        </>
      ) : (
        <>
          <div className="upCommingMoviesContainer">
            <h1 className="upCommingMoviesHeading">
              Up Comming Series <br />
              <FaArrowDown />
            </h1>
            {moviesData && moviesData.list ? (
              <>
                {moviesData.list.map((movies, index) => (
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
