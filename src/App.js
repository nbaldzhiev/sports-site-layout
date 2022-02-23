import React, { useState, useEffect } from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import NewsStories from "./NewsStories.js";
import SelectedNewsStory from "./SelectedNewsStory.js";
import './App.css';
import burgerIcon from "./menu.png";

function App() {

  const defaultPhotosTopic = 'dogs';

  const [isLoaded, setIsLoaded] = useState(false);
  const [topic, setTopic] = useState(defaultPhotosTopic);
  const [photos, setPhotos] = useState([]);
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);

  const authToken = '563492ad6f917000010000014065df06dbb24fc08d9c3df9dcd9e597';
  const baseUrl = 'https://api.pexels.com/v1/';
  const searchEndpoint = 'search';
  const numberOfNewsStories = 14;


  function updateTopic(topicSelected, targetElement) {
    if (topicSelected !== topic) {
      if (targetElement.getAttribute('class').includes('collapsible-item')) {
        document.querySelector('.collapsible-item.selected').classList.remove('selected');
      } else {
        document.querySelector('.subheader-item.selected').classList.remove('selected');
      }
      targetElement.classList.add('selected');
      setTopic(topicSelected);
    }
    setIsHeaderExpanded(false);
  }

  useEffect(() => {
    async function getPhotos() {
      const response = await fetch(
        `${baseUrl}${searchEndpoint}?query=${topic}&per_page=${numberOfNewsStories}`,
        {
          method: 'GET',
          headers: {'Authorization': authToken}
        }
      );
      const data = await response.json();
      setPhotos(data.photos);
      return data.photos;
    }

    setIsLoaded(false);
    getPhotos().then((data) => {
      data.length === 14 ? setIsLoaded(true) : setIsLoaded(false);
    })
  }, [topic])

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
          <Link to="/" className="header-title" onClick={() => updateTopic(defaultPhotosTopic)}>SPORT</Link>
          <div className="burger-menu-container">
            <img className="burger-menu-icon" src={burgerIcon} alt="burger icon" width="24" height="24" onClick={(event) => {
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
            <Link to="/" className="subheader-item home-item selected" onClick={(event) => updateTopic(defaultPhotosTopic, event.target)}>Home</Link>
            <Link to="/football" className="subheader-item" onClick={(event) => updateTopic('football', event.target)}>Football</Link>
            <Link to="/cricket" className="subheader-item" onClick={(event) => updateTopic('cricket', event.target)} >Cricket</Link>
            <Link to="/formula" className="subheader-item" onClick={(event) => updateTopic('formula', event.target)}>Formula 1</Link>
            <Link to="/rugby" className="subheader-item" onClick={(event) => updateTopic('rugby', event.target)}>Rugby</Link>
            <Link to="/tennis" className="subheader-item" onClick={(event) => updateTopic('tennis', event.target)}>Tennis</Link>
            <Link to="/golf" className="subheader-item" onClick={(event) => updateTopic('golf', event.target)}>Golf</Link>
            <Link to="/athletics" className="subheader-item" onClick={(event) => updateTopic('athletics', event.target)}>Athletics</Link>
            <Link to="/cycling" className="subheader-item last-subheader-item" onClick={(event) => updateTopic('cycling', event.target)}>Cycling</Link>
          </div>
        </div>
        <div className="collapsible-menu">
          <div className="all-collapsible-items">
            <div className="collapsible-items">
              <Link to="/" className="collapsible-item home-item on-small-screens selected" onClick={(event) => updateTopic(defaultPhotosTopic, event.target)}>Home</Link>
              <Link to="/football" className="collapsible-item" onClick={(event) => updateTopic('football', event.target)} >Football</Link>
              <Link to="/cricket" className="collapsible-item" onClick={(event) => updateTopic('cricket', event.target)}>Cricket</Link>
              <Link to="/formula" className="collapsible-item" onClick={(event) => updateTopic('formula', event.target)}>Formula 1</Link>
              <Link to="/rugby" className="collapsible-item" onClick={(event) => updateTopic('rugby', event.target)}>Rugby U</Link>
              <Link to="/tennis" className="collapsible-item" onClick={(event) => updateTopic('tennis', event.target)}>Tennis</Link>
              <Link to="/golf" className="collapsible-item on-small-screens" onClick={(event) => updateTopic('golf', event.target)}>Golf</Link>
              <Link to="/athletics" className="collapsible-item on-small-screens" onClick={(event) => updateTopic('athletics', event.target)}>Athletics</Link>
              <Link to="/cycling" className="collapsible-item last-collapsible-item on-small-screens" onClick={(event) => updateTopic('cycling', event.target)}>Cycling</Link>
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

        <Routes>
          <Route path="/" element={<NewsStories isLoaded={isLoaded} photos={photos} />} />
          <Route path="/football" element={<NewsStories isLoaded={isLoaded} photos={photos} />}>
            <Route path=":articleId" element={<SelectedNewsStory />} />
          </Route>
          <Route path="/cricket" element={<NewsStories isLoaded={isLoaded} photos={photos} />} />
          <Route path="/formula" element={<NewsStories isLoaded={isLoaded} photos={photos} />} />
          <Route path="/rugby" element={<NewsStories isLoaded={isLoaded} photos={photos} />} />
          <Route path="/tennis" element={<NewsStories isLoaded={isLoaded} photos={photos} />} />
          <Route path="/golf" element={<NewsStories isLoaded={isLoaded} photos={photos} />} />
          <Route path="/athletics" element={<NewsStories isLoaded={isLoaded} photos={photos} />} />
          <Route path="/cycling" element={<NewsStories isLoaded={isLoaded} photos={photos} />} />
          <Route path="*" element={<NewsStories isLoaded={isLoaded} photos={photos} />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
