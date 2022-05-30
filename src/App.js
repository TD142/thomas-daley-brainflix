import VideoDetailsPage from "./components/pages/VideoDetailsPage";
import { Header } from "./components/header/Header";
import videoOnLoad from "./data/video-details.json";
import videos from "./data/videos.json";
import { Main } from "./components/main/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <VideoDetailsPage />
      </div>
    );
  }
}

export default App;
