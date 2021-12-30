import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main id="main-container">
        <button id="generate-new-images">Generate New Images</button>
        <div className="top-stories-container">
          <div className="top-story-row topmost-row">
            <div className="top-story-item main-story"></div>
            <div className="top-story-item"></div>
          </div>
          <div className="top-story-row">
            <div className="top-story-item"></div>
            <div className="top-story-item"></div>
            <div className="top-story-item"></div>
            <div className="top-story-item"></div>
          </div>
          <div className="top-story-row">
            <div className="top-story-item"></div>
            <div className="top-story-item"></div>
            <div className="top-story-item"></div>
            <div className="top-story-item"></div>
          </div>
          <div className="top-story-row">
            <div className="top-story-item"></div>
            <div className="top-story-item"></div>
            <div className="top-story-item"></div>
            <div className="top-story-item"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
