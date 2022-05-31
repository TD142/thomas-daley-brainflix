import { Main } from "../main/Main";
import { API_URL } from "../../data/Api";
import { API_KEY } from "../../data/Api";
import axios from "axios";
import React from "react";

class VideoDetailsPage extends React.Component {
  state = {
    selectedVideo: null,
    videosGroup: [],
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
  catch(e) {
    console.log("populate state", e);
  }

  componentDidMount() {
    this.populateState();
    // console.log(this.state.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    const videoId = this.props.match.params.videoId;

    if (prevProps.match.params.videoId !== videoId) {
      this.getSelectedVideo(videoId).then((response) =>
        this.setState({ selectedVideo: response.data })
      );
    }

    if (videoId !== undefined) {
      this.getAllVideos().then((response) => {
        const videosData = response.data;
        console.log(videosData);
        const filteredVideos = videosData.filter((videos) => {
          return videos.id !== videoId;
        });
        console.log(filteredVideos);

        this.setState({ videosGroup: filteredVideos });
      });
    }
  }

  render() {
    if (!this.state.selectedVideo) {
      return <p>Page Loading...</p>;
    }
    return (
      <div className="App">
        <Main
          changeVideo={this.changeVideo}
          selectedVideo={this.state.selectedVideo}
          videosGroup={this.state.videosGroup}
        />
      </div>
    );
  }
}

export default VideoDetailsPage;
