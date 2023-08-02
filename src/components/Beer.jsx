import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

const Beer = (props) => {
  const { name, image, tagline, description } = props;

  const [showImage, setImage] = useState(true);
  const [liked, setLiked] = useState(false);

  const handleLikeClick = (event) => {
    event.stopPropagation();
    setLiked(!liked);
  };

  return (
    <li
      className="beer"
      key={props.id}
      onClick={() => {
        showImage ? setImage(false) : setImage(true);
      }}
    >
      {showImage ? (
        <>
          <h2>{name}</h2>
          <img className="beer__image" src={image} alt={name} />
          <FontAwesomeIcon
            icon={liked ? solidHeart : regularHeart}
            className={`heart-solid ${liked ? "clicked" : ""}`}
            onClick={handleLikeClick}
          />
        </>
      ) : (
        <>
          <h2>{name}</h2>
          <p className="tagline">"{tagline}"</p>
          <p>{description}</p>
        </>
      )}
    </li>
  );
};

export default Beer;

//in the middle of adding the heart icon through font awesome
