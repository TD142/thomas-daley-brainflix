import { Header } from "./components/header/Header";
import uniqid from "uniqid";
import videoOnLoad from "./data/video-details.json";
import videos from "./data/videos.json";
import { Main } from "./components/main/Main";
import React from "react";

// on page load the first entry in the videos array is removed so it doesn't appear in the aside.
const videosOnLoad = videos.slice(1, 9);

class App extends React.Component {
  state = {
    video: videoOnLoad[0],
    videosGroup: videosOnLoad,
  };

  // ** on click event - filters through video array, returns video if it matches the id of the clicked video, then removes video from videos group array by filtering through and only returns videos if value !== selected element id. State is then updated with filtered objects.

  changeVideo = (id) => {
    const selectedVideo = videoOnLoad.filter((videos) => {
      return videos.id === id;
    });

    const removedVideo = videos.filter((videos) => {
      return videos.id !== id;
    });

    this.setState({ video: selectedVideo[0], videosGroup: removedVideo });
  };

  render() {
    return (
      <div className="App">
        <Header />

        <Main
          changeVideo={this.changeVideo}
          videos={this.state.video}
          videosGroup={this.state.videosGroup}
        />
      </div>
    );
  }
}

export default App;
