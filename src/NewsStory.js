import React, { useState, useEffect } from "react";
import './NewsStory.css';

function NewsStory(props) {

  const [photoSrc, setPhotoSrc] = useState(props.photoSrc);
  const [photoUrl, setPhotoUrl] = useState(props.photoUrl);
  const [photoDescr, setPhotoDescr] = useState(props.descr);
  const [photoAuthor, setPhotoAuthor] = useState(props.author);
  const [photoAuthorUrl, setPhotoAuthorUrl] = useState(props.authorUrl);
  const [photoAuthorId, setPhotoAuthorId] = useState(props.authorId);

  let imgElement = '';
  if (props.storyIndex == 0) {
    imgElement = <img className="story-thumbnail" src={photoSrc} width="587px" height="460px"></img>
  } else if (props.storyIndex == 1) {
    imgElement = <img className="story-thumbnail" src={photoSrc} width="100%" height="250px"></img>
  } else if (props.storyIndex > 1) {
    imgElement = <img className="story-thumbnail" src={photoSrc} width="100%" height="130px"></img>
  }

  let elapsedTime = photoAuthorId.toString()[0];
  Number(elapsedTime) % 2 == 0 ? elapsedTime += 'h' : elapsedTime += 'm';

  return (
    <div className="story-item">
      <a className="photo-url" href={photoUrl} target="_blank">{imgElement}</a>
      <div className="story-info-container">
        <p className="story-title">{photoDescr}</p>
        {
          props.storyIndex == 0 ? <p className="story-description"> Click <a className="author-url" href={photoAuthorUrl} target="_blank">here</a> for the author URL of this amazingly beautiful peace of photographic masterpiece is! Please go and visit and show love! And a few more completely useless words which waste precious space, but I need to fill this paragraph tag. </p> : null
        }
        <div className="story-info-footer">
          {props.storyIndex > 0 ? <span className="elapsed-icon">🕒</span> : null}
          {props.storyIndex > 0 ? <span className="elapsed-value">{elapsedTime}</span> : null}
          <p className="author-name">{photoAuthor}</p>
          {props.storyIndex > 0 ? <span className="comments-icon">🗒️</span> : null}
          {props.storyIndex > 0 ? <span className="comments-amount">{photoAuthorId}</span> : null}
        </div>
      </div>
    </div>
  );
}

export default NewsStory;
