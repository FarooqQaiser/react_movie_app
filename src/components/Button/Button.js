import React, { useState } from "react";
import "./Button.css";

export default function Button(props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleOnClick = () => {
    setIsClicked(true);
    props.handleButton(isClicked);
  };

  return (
    <>
      <button style={props.style} onClick={handleOnClick}>
        {props.name}
      </button>
    </>
  );
}
