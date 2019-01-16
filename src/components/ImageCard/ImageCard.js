import React from "react";
import "./ImageCard.css";

function handleClick(props) {
	props.reArrangeCards();
	props.clickedCharacter(props.id);
}

function ImageCard(props) {
  return (
    <div className="card img-container" onClick={() => handleClick(props)}>
        <img className="img-thumbnail" alt={props.name} src={props.image} />
    </div>
  );
}

export default ImageCard;