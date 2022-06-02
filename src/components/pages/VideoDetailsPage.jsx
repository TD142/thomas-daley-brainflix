import { Main } from "../main/Main";
import { API_URL } from "../../data/Api";
import { API_KEY } from "../../data/Api";
import axios from "axios";
import React from "react";
import { defaultVideoID } from "../../data/Api";
import "./VideoDetailsPage.scss";

class VideoDetailsPage extends React.Component {
  state = {
    selectedVideo: null,
    videosGroup: [],
  };

  //**  two functions for retrieving API data. First one sets the homepage video + aside videos.

  getSelectedVideo = (videoID) => axios.get(`${API_URL}${videoID}${API_KEY}`);
  getAllVideos = () => axios.get(`${API_URL}${API_KEY}`);

  async populateHomeState() {
    const allVideos = await this.getAllVideos();
    const singleVideo = await this.getSelectedVideo(allVideos.data[0].id);
    const videosGroup = allVideos.data;
    const selectedVideo = singleVideo.data;

    this.setState({
      selectedVideo: selectedVideo,
      videosGroup: videosGroup,
    });
  }

  // this function sets paramater selected videos.

  async populateIdState() {
    const videoId = this.props.match.params.videoId;

    const allVideos = await this.getAllVideos();
    const singleVideo = await this.getSelectedVideo(videoId);
    const videosGroup = allVideos.data;
    const selectedVideo = singleVideo.data;

    this.setState({
      selectedVideo: selectedVideo,
      videosGroup: videosGroup,
    });
  }

  componentDidMount() {
    if (this.props.match.path === "/") {
      this.populateHomeState();
    } else {
      this.populateIdState();
    }
  }

  componentDidUpdate(prevProps) {
    // sets default page to always be home video when clicking brainflix logo.

    if (this.props.match.path == "/" && prevProps.match.path !== "/") {
      this.getSelectedVideo(defaultVideoID).then((response) =>
        this.setState({ selectedVideo: response.data })
      );
      window.scrollTo(0, 0);
    }

    // compares previous video param to current selected one, changing state to selected video.

    const videoId = this.props.match.params.videoId;

    if (prevProps.match.params.videoId !== videoId) {
      this.getSelectedVideo(videoId).then((response) =>
        this.setState({ selectedVideo: response.data })
      );
      window.scrollTo(0, 0);
    }

    console.log("component updated");
  }

  // ** form submit event adding comment to api.

  onSubmitHandler = (event) => {
    event.preventDefault();

    const clearComment = document.getElementById("addComment");

    const submitComment = {
      name: "User",
      comment: event.target.addComment.value,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const videoId = this.props.match.params.videoId;

    axios
      .post(`${API_URL}${videoId}/comments/${API_KEY}`, submitComment, config)
      .then((response) => {
        this.populateIdState();
      });

    clearComment.value = "";
  };

  render() {
    if (!this.state.selectedVideo) {
      return <p className="loading">Page Loading...</p>;
    }
    return (
      <div className="App">
        <Main
          onSubmitHandler={this.onSubmitHandler}
          selectedVideo={this.state.selectedVideo}
          videosGroup={this.state.videosGroup}
          videoId={this.state.selectedVideo.id}
        />
      </div>
    );
  }
}

export default VideoDetailsPage;
