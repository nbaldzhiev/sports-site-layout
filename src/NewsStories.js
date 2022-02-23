import React from "react";
import NewsStory from "./NewsStory.js";
import loader from "./loader.svg";
import { Outlet, useLocation } from "react-router-dom";

function NewsStories(props) {
    const isLoaded = props.isLoaded;
    const photos = props.photos;
    const { pathname } = useLocation();

    const storyRowElements = document.querySelectorAll('.top-story-row');
    if (parseInt(pathname.slice(-1)) >= 0) {
        for (const element of storyRowElements) {
            element.classList.remove('displayed');
            element.classList.add('hidden');
        }
    } else {
        for (const element of storyRowElements) {
            element.classList.remove('hidden');
            element.classList.add('displayed');
        }
    }

    return (
        <div className="top-stories-container">
          <div className="top-story-row topmost-row">
            <div className="top-story-container main-story">
              {
                isLoaded ? <NewsStory storyIndex="0" photoSrc={photos[0].src.medium} photoUrl={photos[0].url} descr={photos[0].alt} author={photos[0].photographer} authorUrl={photos[0].photographer_url} authorId={photos[0].photographer_id} /> : <img className="loader" src={loader} alt="loader-spinning-gif" ></img>
              }
            </div>
            <div className="top-story-container secondary-story">
              {
                isLoaded ? <NewsStory storyIndex="1" photoSrc={photos[1].src.medium} photoUrl={photos[1].url} descr={photos[1].alt} author={photos[1].photographer} authorUrl={photos[1].photographer_url} authorId={photos[1].photographer_id} /> : <img className="loader" src={loader} alt="loader-spinning-gif"></img>
              }
            </div>
          </div>
          <div className="top-story-row">
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="2" photoSrc={photos[2].src.medium} photoUrl={photos[2].url} descr={photos[1].alt} author={photos[2].photographer} authorUrl={photos[2].photographer_url} authorId={photos[2].photographer_id} /> : <img className="loader" src={loader} alt="loader-spinning-gif"></img>
              }
            </div>
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="3" photoSrc={photos[3].src.medium} photoUrl={photos[3].url} descr={photos[3].alt} author={photos[3].photographer} authorUrl={photos[3].photographer_url} authorId={photos[3].photographer_id} /> : <img className="loader" src={loader} alt="loader-spinning-gif"></img>
              }
            </div>
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="4" photoSrc={photos[4].src.medium} photoUrl={photos[4].url} descr={photos[4].alt} author={photos[4].photographer} authorUrl={photos[4].photographer_url} authorId={photos[4].photographer_id} /> : <img className="loader" src={loader} alt="loader-spinning-gif"></img>
              }
            </div>
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="5" photoSrc={photos[5].src.medium} photoUrl={photos[5].url} descr={photos[5].alt} author={photos[5].photographer} authorUrl={photos[5].photographer_url} authorId={photos[5].photographer_id} /> : <img className="loader" src={loader} alt="loader-spinning-gif"></img>
              }
            </div>
          </div>
          <div className="top-story-row">
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="6" photoSrc={photos[6].src.medium} photoUrl={photos[6].url} descr={photos[6].alt} author={photos[6].photographer} authorUrl={photos[6].photographer_url} authorId={photos[6].photographer_id} /> : <img className="loader" src={loader} alt="loader-spinning-gif"></img>
              }
            </div>
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="7" photoSrc={photos[7].src.medium} photoUrl={photos[7].url} descr={photos[7].alt} author={photos[7].photographer} authorUrl={photos[7].photographer_url} authorId={photos[7].photographer_id} /> : <img className="loader" src={loader} alt="loader-spinning-gif"></img>
              }
            </div>
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="8" photoSrc={photos[8].src.medium} photoUrl={photos[8].url} descr={photos[8].alt} author={photos[8].photographer} authorUrl={photos[8].photographer_url} authorId={photos[8].photographer_id} /> : <img className="loader" src={loader} alt="loader-spinning-gif"></img>
              }
            </div>
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="9" photoSrc={photos[9].src.medium} photoUrl={photos[9].url} descr={photos[9].alt} author={photos[9].photographer} authorUrl={photos[9].photographer_url} authorId={photos[9].photographer_id} /> : <img className="loader" src={loader} alt="loader-spinning-gif"></img>
              }
            </div>
          </div>
          <div className="top-story-row">
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="10" photoSrc={photos[10].src.medium} photoUrl={photos[10].url} descr={photos[10].alt} author={photos[10].photographer} authorUrl={photos[10].photographer_url} authorId={photos[10].photographer_id} /> : <img className="loader" src={loader} alt="loader-spinning-gif"></img>
              }
            </div>
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="11" photoSrc={photos[11].src.medium} photoUrl={photos[11].url} descr={photos[11].alt} author={photos[11].photographer} authorUrl={photos[11].photographer_url} authorId={photos[11].photographer_id} /> : <img className="loader" src={loader} alt="loader-spinning-gif"></img>
              }
            </div>
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="12" photoSrc={photos[12].src.medium} photoUrl={photos[12].url} descr={photos[12].alt} author={photos[12].photographer} authorUrl={photos[12].photographer_url} authorId={photos[12].photographer_id} /> : <img className="loader" src={loader} alt="loader-spinning-gif"></img>
              }
            </div>
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="13" photoSrc={photos[13].src.medium} photoUrl={photos[13].url} descr={photos[13].alt} author={photos[13].photographer} authorUrl={photos[13].photographer_url} authorId={photos[13].photographer_id} /> : <img className="loader" src={loader} alt="loader-spinning-gif"></img>
              }
            </div>
          </div>
          <Outlet />
        </div>
    )
}

export default NewsStories;