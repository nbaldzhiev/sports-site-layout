import React from "react";
import './SelectedNewsStory.css';
import { useParams } from "react-router-dom";

function SelectedNewsStory(props) {
    const { articleId } = useParams();
    const photo = props.photos[articleId];
    console.log(photo)
    const photoImage = photo.src.landscape;
    const photoDescription = photo.alt;
    const photoAuthor = photo.photographer;
    const photoAuthorId = photo.photographer_id;

    let elapsedTime = photoAuthorId.toString()[0];
    Number(elapsedTime) % 2 === 0 ? elapsedTime += ' hours' : elapsedTime += ' minutes';

    return (
        <div className="selected-story-container">
            <p className="selected-story-title">{photoDescription}</p>
            <div className="selected-story-author-source-container">
                <p className="selected-story-author">By {photoAuthor}</p>
                <p className="selected-story-source">NSB Sport</p>
            </div>
            <div className="selected-story-elapsed-time-container">
                <span className="elapsed-time"> 🕒 {elapsedTime} ago</span>
                <span className="author-name">{photoAuthor}</span>
            </div>
            <img className="news-story-thumbnail" src={photoImage} placeholder="news-story-thumbnail" alt="news story thumbnail" />
        </div>
    )
}

export default SelectedNewsStory;