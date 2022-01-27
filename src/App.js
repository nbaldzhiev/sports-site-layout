import React, { useState, useEffect } from "react";
import './App.css';
import NewsStory from "./NewsStory.js";
import loader from "./loader.svg";
import burgerIcon from "./menu.png";

function App() {

  const defaultPhotosTopic = 'dogs';

  const [isLoaded, setIsLoaded] = useState(false);
  const [topic, setTopic] = useState(defaultPhotosTopic);
  const [submittedTopic, setSubmittedTopic] = useState(defaultPhotosTopic);
  const [photos, setPhotos] = useState([]);
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);

  const authToken = '563492ad6f917000010000014065df06dbb24fc08d9c3df9dcd9e597';
  const baseUrl = 'https://api.pexels.com/v1/';
  const searchEndpoint = 'search';
  const numberOfNewsStories = 14;

  async function getPhotos() {
    const response = await fetch(
      `${baseUrl}${searchEndpoint}?query=${submittedTopic}&per_page=${numberOfNewsStories}`,
      {
        method: 'GET',
        headers: {'Authorization': authToken}
      }
    );
    const data = await response.json();
    setPhotos(data.photos);
    return data.photos;
  }

  useEffect(() => {
    setIsLoaded(false);
    getPhotos().then((data) => {
      data.length == 14 ? setIsLoaded(true) : setIsLoaded(false);
    })
  }, [submittedTopic])

  useEffect(() => {
    if (isHeaderExpanded) {
      document.querySelector('.collapsible-menu').style.display = 'block';
    } else {
      document.querySelector('.collapsible-menu').style.display = 'none';
    }
  }, [isHeaderExpanded])

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-title-container">
          <a className="header-title" href="#" target="_blank" onClick={(event) => {
            event.preventDefault();
            setSubmittedTopic(defaultPhotosTopic);
          }}>SPORT</a>
          <div className="burger-menu-container">
            <img className="burger-menu-icon" src={burgerIcon} width="24" height="24" onClick={(event) => {
              event.preventDefault();
              if (isHeaderExpanded) {
                setIsHeaderExpanded(false);
              } else {
                setIsHeaderExpanded(true);
              }
            }}></img>
          </div>
        </div>
        <div className="subheader-container">
          <div className="subheader-items">
            <p className="subheader-item home-item">Home</p>
            <p className="subheader-item">Football</p>
            <p className="subheader-item">Cricket</p>
            <p className="subheader-item">Formula 1</p>
            <p className="subheader-item">Rugby U</p>
            <p className="subheader-item">Tennis</p>
            <p className="subheader-item">Golf</p>
            <p className="subheader-item">Athletics</p>
            <p className="subheader-item last-subheader-item">Cycling</p>
          </div>
        </div>
        <div className="collapsible-menu">
          <div className="all-collapsible-items">
            <div className="collapsible-items">
              <p className="collapsible-item home-item on-small-screens">Home</p>
              <p className="collapsible-item">Football</p>
              <p className="collapsible-item">Cricket</p>
              <p className="collapsible-item">Formula 1</p>
              <p className="collapsible-item">Rugby U</p>
              <p className="collapsible-item">Tennis</p>
              <p className="collapsible-item on-small-screens">Golf</p>
              <p className="collapsible-item on-small-screens">Athletics</p>
              <p className="collapsible-item last-collapsible-item on-small-screens">Cycling</p>
            </div>
            <div className="collapsible-menu-second-column">
              <p className="collapsible-item">Darts</p>
              <p className="collapsible-item">Disability Sport</p>
              <p className="collapsible-item">Gaelic Games</p>
              <p className="collapsible-item">Get Inspired</p>
              <p className="collapsible-item">Swimming</p>
            </div>
            <div className="collapsible-menu-third-column">
              <p className="collapsible-item">Gymnastics</p>
              <p className="collapsible-item">Horse Racing</p>
              <p className="collapsible-item">Mixed Martial Arts</p>
              <p className="collapsible-item">Motorsport</p>
              <p className="collapsible-item">Winter Sports</p>
            </div>
            <div className="collapsible-menu-fourth-column">
              <p className="collapsible-item">American Football</p>
              <p className="collapsible-item">Boxing</p>
              <p className="collapsible-item">Basketball</p>
              <p className="collapsible-item">Table Tennis</p>
              <p className="collapsible-item">Snooker</p>
            </div>
            <div className="collapsible-menu-fifth-column">
              <p className="collapsible-item">Slalom</p>
              <p className="collapsible-item">Weightlifting</p>
              <p className="collapsible-item">Kayak</p>
              <p className="collapsible-item">Triathlon</p>
              <p className="collapsible-item">Water Polo</p>
            </div>
            <div className="collapsible-menu-sixth-column">
              <p className="collapsible-item">Full Sports A-Z</p>
            </div>
          </div>
          <div className="collapsible-menu-bottom-row">
            <div className="collapsible-menu-more-from-sport-row">
              <p className="collapsible-item more-from-sport">More from Sport</p>
            </div>
            <div className="collapsible-menu-bottom-row-items">
              <p className="collapsible-item first-item">England</p>
              <p className="collapsible-item">Scotland</p>
              <p className="collapsible-item">Wales</p>
              <p className="collapsible-item">Northern Ireland</p>
              <p className="collapsible-item">News Feeds</p>
              <p className="collapsible-item">Help & FAQs</p>
            </div>
          </div>
        </div>
      </header>
      <main id="main-container">
        <div className="topic-input-container">
          <form onSubmit={(event) => {
            event.preventDefault();
            setSubmittedTopic(topic);
          }}>
            <input type="text" id="topic-input" placeholder={"Enter a topic, such as " + defaultPhotosTopic} size="8" onChange={(event) => setTopic(event.target.value)} value={topic} />
            <input id="topic-submit" type="submit" value="Submit" />
          </form>
        </div>
        <div className="top-stories-container">
          <div className="top-story-row topmost-row">
            <div className="top-story-container main-story">
              {
                isLoaded ? <NewsStory storyIndex="0" photoSrc={photos[0].src.medium} photoUrl={photos[0].url} descr={photos[0].alt} author={photos[0].photographer} authorUrl={photos[0].photographer_url} authorId={photos[0].photographer_id} /> : <img className="loader" src={loader}></img>
              }
            </div>
            <div className="top-story-container secondary-story">
              {
                isLoaded ? <NewsStory storyIndex="1" photoSrc={photos[1].src.medium} photoUrl={photos[1].url} descr={photos[1].alt} author={photos[1].photographer} authorUrl={photos[1].photographer_url} authorId={photos[1].photographer_id} /> : <img className="loader" src={loader}></img>
              }
            </div>
          </div>
          <div className="top-story-row">
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="2" photoSrc={photos[2].src.medium} photoUrl={photos[2].url} descr={photos[1].alt} author={photos[2].photographer} authorUrl={photos[2].photographer_url} authorId={photos[2].photographer_id} /> : <img className="loader" src={loader}></img>

              }
            </div>
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="3" photoSrc={photos[3].src.medium} photoUrl={photos[3].url} descr={photos[3].alt} author={photos[3].photographer} authorUrl={photos[3].photographer_url} authorId={photos[3].photographer_id} /> : <img className="loader" src={loader}></img>
              }
            </div>
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="4" photoSrc={photos[4].src.medium} photoUrl={photos[4].url} descr={photos[4].alt} author={photos[4].photographer} authorUrl={photos[4].photographer_url} authorId={photos[4].photographer_id} /> : <img className="loader" src={loader}></img>
              }
            </div>
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="5" photoSrc={photos[5].src.medium} photoUrl={photos[5].url} descr={photos[5].alt} author={photos[5].photographer} authorUrl={photos[5].photographer_url} authorId={photos[5].photographer_id} /> : <img className="loader" src={loader}></img>
              }
            </div>
          </div>
          <div className="top-story-row">
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="6" photoSrc={photos[6].src.medium} photoUrl={photos[6].url} descr={photos[6].alt} author={photos[6].photographer} authorUrl={photos[6].photographer_url} authorId={photos[6].photographer_id} /> : <img className="loader" src={loader}></img>
              }
            </div>
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="7" photoSrc={photos[7].src.medium} photoUrl={photos[7].url} descr={photos[7].alt} author={photos[7].photographer} authorUrl={photos[7].photographer_url} authorId={photos[7].photographer_id} /> : <img className="loader" src={loader}></img>
              }
            </div>
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="8" photoSrc={photos[8].src.medium} photoUrl={photos[8].url} descr={photos[8].alt} author={photos[8].photographer} authorUrl={photos[8].photographer_url} authorId={photos[8].photographer_id} /> : <img className="loader" src={loader}></img>
              }
            </div>
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="9" photoSrc={photos[9].src.medium} photoUrl={photos[9].url} descr={photos[9].alt} author={photos[9].photographer} authorUrl={photos[9].photographer_url} authorId={photos[9].photographer_id} /> : <img className="loader" src={loader}></img>
              }
            </div>
          </div>
          <div className="top-story-row">
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="10" photoSrc={photos[10].src.medium} photoUrl={photos[10].url} descr={photos[10].alt} author={photos[10].photographer} authorUrl={photos[10].photographer_url} authorId={photos[10].photographer_id} /> : <img className="loader" src={loader}></img>
              }
            </div>
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="11" photoSrc={photos[11].src.medium} photoUrl={photos[11].url} descr={photos[11].alt} author={photos[11].photographer} authorUrl={photos[11].photographer_url} authorId={photos[11].photographer_id} /> : <img className="loader" src={loader}></img>
              }
            </div>
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="12" photoSrc={photos[12].src.medium} photoUrl={photos[12].url} descr={photos[12].alt} author={photos[12].photographer} authorUrl={photos[12].photographer_url} authorId={photos[12].photographer_id} /> : <img className="loader" src={loader}></img>
              }
            </div>
            <div className="top-story-container">
              {
                isLoaded ? <NewsStory storyIndex="13" photoSrc={photos[13].src.medium} photoUrl={photos[13].url} descr={photos[13].alt} author={photos[13].photographer} authorUrl={photos[13].photographer_url} authorId={photos[13].photographer_id} /> : <img className="loader" src={loader}></img>
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
