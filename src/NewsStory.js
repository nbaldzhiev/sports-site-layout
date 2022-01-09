import React, { useState, useEffect } from "react";
import './NewsStory.css';
import liveGif from "./fcnantes-nantes.gif";

function NewsStory(props) {

  const [photoSrc, setPhotoSrc] = useState(props.photoSrc);
  const [photoUrl, setPhotoUrl] = useState(props.photoUrl);
  const [photoDescr, setPhotoDescr] = useState(props.descr);
  const [photoAuthor, setPhotoAuthor] = useState(props.author);
  const [photoAuthorUrl, setPhotoAuthorUrl] = useState(props.authorUrl);
  const [photoAuthorId, setPhotoAuthorId] = useState(props.authorId);

  let imgElement = '';
  if (props.storyIndex == 0) {
    imgElement = <img className="main-story story-thumbnail" src={photoSrc} width="587px" height="460px"></img>
  } else if (props.storyIndex == 1) {
    imgElement = <img className="secondary-story story-thumbnail" src={photoSrc} width="100%" height="250px"></img>
  } else if (props.storyIndex > 1) {
    imgElement = <img className="story-thumbnail" src={photoSrc} width="100%" height="130px"></img>
  }

  let elapsedTime = photoAuthorId.toString()[0];
  Number(elapsedTime) % 2 == 0 ? elapsedTime += 'h' : elapsedTime += 'm';

  let titleElement = null;
  if (props.storyIndex == 0) {
    titleElement = <div className="main-story-title-container">
      <img className="live-icon" src={liveGif}></img>
      <a className="story-title" href={photoUrl} target="_blank">{photoDescr}</a>
    </div>
  } else {
    titleElement = <a className="story-title" href={photoUrl} target="_blank">{photoDescr}</a>
  }

  return (
    <div className="story-item">
      <div className="thumbnail-container">
        <a className="photo-url" href={photoUrl} target="_blank">{imgElement}</a>
      </div>
      <div className="story-info-container">
        {titleElement}
        {
          props.storyIndex == 0 ? <p className="story-description"> Click <a className="author-url" href={photoAuthorUrl} target="_blank">here</a> for the author URL of this amazingly beautiful peace of photographic masterpiece is! Please go and visit and show love! And a few more completely useless words which waste precious space, but I need to fill this paragraph tag. </p> : null
        }
        <div className="story-info-footer">
          {props.storyIndex > 0 ? <span className="elapsed-icon"> 🕒 </span> : null}
          {props.storyIndex > 0 ? <span className="elapsed-value">{elapsedTime}</span> : null}
          <a className="author-name" href={photoAuthorUrl} target="_blank">{photoAuthor}</a>
          {props.storyIndex > 0 ? <span className="comments-icon"> 🗒️ </span> : null}
          {props.storyIndex > 0 ? <span className="comments-amount">{photoAuthorId}</span> : null}
        </div>
      </div>
    </div>
  );
}

export default NewsStory;
