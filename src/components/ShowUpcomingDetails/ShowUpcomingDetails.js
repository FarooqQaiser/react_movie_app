import React from "react";
import "./ShowUpcomingDetails.css";
import Button from "../Button/Button";

export default function ShowMovieDetails({ data }) {
  console.log(data);

  const handleButton = (value) => {
    console.log(value);
  };

  return (
    <>
      {data && (
        <>
          <div className="showUpcomingDetailsContainer">
            <div className="showUpcomingDetails">
              <div className="upcomingPictureDiv">
                <img
                  src={data.movieImage}
                  alt={data.movieTitle}
                  className="upcomingImage"
                />
              </div>
              <div className="upcomingDetails">
                <div className="upcomingTitleDiv">
                  <h3 className="upcomingTitle">
                    <strong>Title:</strong> <span>{data.movieTitle}</span>
                  </h3>
                </div>
                <div className="info">
                  <div className="upcomingGenres">
                    <h3 className="genreHeading">Genres</h3>
                    <div className="genresDiv">
                      {data.movieGenres.map((genre, index) => (
                        <p className="genre" key={index}>
                          {genre}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="upcomingStars">
                    <h3 className="starsHeading">Actors</h3>
                    <div className="starsDiv">
                      {data.movieStars.map((star, index) => (
                        <a
                          className="star"
                          href={`https://www.google.com/search?q=${star}&rlz=1C1CHBF_enPK1122PK1122&oq=${star}&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyDQgBEC4YgwEYsQMYgAQyDQgCEAAYgwEYsQMYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEC4YgAQyBwgHEC4YgAQyBwgIEAAYgAQyBwgJEAAYjwLSAQgxMDcxajBqN6gCALACAA&sourceid=chrome&ie=UTF-8`}
                          target="blank"
                          key={index}
                        >
                          {star}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="upcomingIMBD">
                    <a href={data.movieIMBD} target="blank">
                      <Button
                        name="Check IMBD"
                        handleButton={handleButton}
                        style={{
                          width: "200px",
                          height: "50px",
                          fontSize: "larger",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
