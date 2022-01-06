import React, { useState, useEffect } from "react";
import './NewsStory.css';

function NewsStory(props) {

  const [photoSrc, setPhotoSrc] = useState(props.photoSrc);
  const [photoUrl, setPhotoUrl] = useState(props.photoUrl);

  let imgElement = '';
  if (props.storyIndex == 0) {
    imgElement = <img className="story-thumbnail" src={photoSrc} width="587px" height="460px"></img>
  } else if (props.storyIndex == 1) {
    imgElement = <img className="story-thumbnail" src={photoSrc} width="100%" height="250px"></img>
  } else if (props.storyIndex > 1) {
    imgElement = <img className="story-thumbnail" src={photoSrc} width="100%" height="150px"></img>
  }

  return (
    <div className="story-item">
      <a href={photoUrl} target="_blank">{imgElement}</a>
    </div>
  );
}

export default NewsStory;
