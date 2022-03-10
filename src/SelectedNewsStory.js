import { React, useEffect, useState } from "react";
import './SelectedNewsStory.css';
import { useParams } from "react-router-dom";

function SelectedNewsStory(props) {
    const loremAPIEndpoint = 'https://baconipsum.com/api/?type=meat-and-filler&paras=6'
    const [storyText, setStoryText] = useState([]);

    const { articleId } = useParams();
    const photo = props.photos[articleId];
    const photoImage = photo.src.landscape;
    const photoDescription = photo.alt;
    const photoAuthor = photo.photographer;
    const photoAuthorId = photo.photographer_id;

    let elapsedTime = photoAuthorId.toString()[0];
    Number(elapsedTime) % 2 === 0 ? elapsedTime += ' hours' : elapsedTime += ' minutes';

    async function getStoryText() {
        const response = await fetch(loremAPIEndpoint);
        const data = await response.json();
        setStoryText(data);
    }

    useEffect(() => {
        getStoryText();
    }, [])

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
            <div className="thumbnail-section">
                <img className="news-story-thumbnail" src={photoImage} placeholder="news-story-thumbnail" alt="news story thumbnail" />
                <p className="thumbnail-info">{photoDescription}</p>
            </div>
            <div className="story-text">
                {storyText.length ? <p className="story-text-paragraph main-paragraph">{storyText[0].slice(0, 120)}</p> : <p className="story-text-paragraph main-paragraph">Loading...</p>}
                {storyText.length ? storyText.map(item => <p className="story-text-paragraph" key={storyText.indexOf(item)}>{item}</p>) : <p className="story-text-paragraph">Loading...</p>}
            </div>
        </div>
    )
}

export default SelectedNewsStory;