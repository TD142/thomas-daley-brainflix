import { Main } from "../main/Main";
import { API_URL } from "../../data/Api";
import { API_KEY } from "../../data/Api";
import axios from "axios";
import React from "react";
import { defaultVideoID } from "../../data/Api";

class VideoDetailsPage extends React.Component {
  state = {
    selectedVideo: null,
    videosGroup: [],
  };

  onSubmitHandler = (event) => {
    event.preventDefault();

    alert("hello!");
  };

  getSelectedVideo = (videoID) => axios.get(`${API_URL}${videoID}${API_KEY}`);
  getAllVideos = () => axios.get(`${API_URL}${API_KEY}`);

  async populateState() {
    const allVideos = await this.getAllVideos();
    const singleVideo = await this.getSelectedVideo(allVideos.data[0].id);
    const videosGroup = allVideos.data.slice(1, 9);
    const selectedVideo = singleVideo.data;

    this.setState({
      selectedVideo: selectedVideo,
      videosGroup: videosGroup,
    });
  }

  componentDidMount() {
    this.populateState();
    console.log("component mounted");
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.path === "/") {
      this.getSelectedVideo(defaultVideoID).then((response) =>
        this.setState({ selectedVideo: response.data })
      );
    }
    const videoId = this.props.match.params.videoId;

    if (prevProps.match.params.videoId !== videoId) {
      this.getSelectedVideo(videoId).then((response) =>
        this.setState({ selectedVideo: response.data })
      );
    }

    // // if (videoId !== undefined) {
    // this.getAllVideos().then((response) => {
    //   const videosData = response.data;

    //   const filteredVideos = videosData.filter((videos) => {
    //     return videos.id !== videoId;
    //   });

    //   this.setState({ videosGroup: filteredVideos });
    // });
    // // }
    console.log("component updated");
  }

  render() {
    if (!this.state.selectedVideo) {
      return <p>Page Loading...</p>;
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
