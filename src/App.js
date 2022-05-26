import { Header } from "./components/header/Header";

import data from "./data/video-details.json";
import videos from "./data/videos.json";
import { Main } from "./components/main/Main";
import React from "react";

console.log(data);
const videosOnLoad = videos.slice(1, 9);

console.log(data[0].image);
class App extends React.Component {
  state = {
    videos: data[0],
    videosGroup: videosOnLoad,
  };

  changeVideo = (id) => {
    // console.log(id);
    // if (id === this.state.videos.id) {
    const selectedVideo = data.filter((data) => {
      return data.id === id;
    });

    const removedVideo = videos.filter((video) => {
      return video.id !== id;
    });

    console.log(removedVideo);

    // console.log(selectedVideo[0]);
    this.setState({ videos: selectedVideo[0], videosGroup: removedVideo });
  };

  render() {
    return (
      <div className="App">
        <Header />

        <Main
          changeVideo={this.changeVideo}
          videos={this.state.videos}
          videosGroup={this.state.videosGroup}
        />
      </div>
    );
  }
}

export default App;
