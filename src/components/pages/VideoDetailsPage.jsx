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
    console.log(prevProps);
    console.log(this.props);

    if (this.props.match.path == "/" && prevProps.match.path !== "/") {
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

    console.log("component updated");
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    const submitComment = {
      name: "User",
      comment: event.target.addComment.value,
    };
    console.log(event.target.addComment.value);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const videoId = this.props.match.params.videoId;

    axios
      .post(`${API_URL}${videoId}/comments/${API_KEY}`, submitComment, config)
      .then((response) => {});
  };

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
