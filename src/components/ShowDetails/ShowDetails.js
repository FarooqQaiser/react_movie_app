import React from "react";
import "./ShowDetails.css";
import Button from "../Button/Button";

export default function ShowDetails({ data }) {
  console.log(data);

  const handleButton = (value) => {
    console.log(value);
  };

  return (
    <>
      {data && (
        <>
          <div className="showDetailsContainer">
            <div className="showDetails">
              <div className="Intro">
                <div className="PictureDiv">
                  <img src={data.Image} alt={data.Title} className="Image" />
                </div>
              </div>
              <div className="Details">
                <div className="TitleDiv">
                  <h3 className="Title">
                    <strong>Title:</strong> <span>{data.Title}</span>
                  </h3>
                </div>
                <div className="Info">
                  <div className="IMBDRatingDiv">
                    <h3 className="IMBDRatingHeading">IMBD Rating</h3>
                    <p className="IMBDRating">{data.IMBDRating}</p>
                  </div>
                  <div className="TimelineDiv">
                    <h3 className="TimelineHeading">Duration</h3>
                    <p className="Timeline">{data.Timeline}</p>
                  </div>
                  <div className="YearDiv">
                    <h3 className="YearHeading">Release year</h3>
                    <p className="Year">{data.Year}</p>
                  </div>
                </div>
                <div className="IMBDLink">
                  <a href={data.IMBDLink} target="blank">
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
        </>
      )}
    </>
  );
}
