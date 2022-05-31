import videoOnLoad from "../../data/video-details.json";
import videos from "../../data/videos.json";
import { Main } from "../main/Main";
import { API_URL } from "../../data/Api";
import { API_KEY } from "../../data/Api";
import axios from "axios";
import React from "react";
// console.log(`${API_URL}${API_KEY}`);

// on page load the first entry in the videos array is removed so it doesn't appear in the aside.
const videosOnLoad = videos.slice(1, 9);

class VideoDetailsPage extends React.Component {
  // state = {
  //   video: videoOnLoad[0],
  //   videosGroup: videosOnLoad,
  // };

  // ** on click event - filters through video array, returns video if it matches the id of the clicked video, then removes video from videos group array by filtering through and only returns videos if value !== selected element id. State is then updated with filtered objects.

  // changeVideo = (id) => {
  //   const selectedVideo = videoOnLoad.filter((videos) => {
  //     return videos.id === id;
  //   });

  //   const removedVideo = videos.filter((videos) => {
  //     return videos.id !== id;
  //   });

  //   this.setState({ video: selectedVideo[0], videosGroup: removedVideo });
  // };

  state = {
    // selected: null,
    video: videoOnLoad[0],
    videosGroup: [],
  };

  // 84e96018-4022-434e-80bf-000ce4cd12b8/

  getSelectedVideo = (videoID) => axios.get(`${API_URL}${videoID}${API_KEY}`);

  getAllVideos = () => axios.get(`${API_URL}${API_KEY}`);

  async populateState() {
    const video1 = await this.getAllVideos();
    const video2 = await this.getSelectedVideo(video1.data[0].id);
    console.log(video1);
    console.log(video2);
    this.setState({
      video: video2.data,
      videosGroup: video1.data,
    });
  }
  catch(e) {
    console.log("populate state", e);
  }

  componentDidMount() {
    this.populateState();

    // axios
    //   .get(`${API_URL}84e96018-4022-434e-80bf-000ce4cd12b8/${API_KEY}`)
    //   .then((response) => {
    //     console.log(response.data);
    //     const videoOnLoadAPI = response.data;
    //     console.log(videoOnLoadAPI);
    //     // this.setState({ video: response.data});
    //   });

    // axios.get(`${API_URL}${API_KEY}`).then((response) => {
    //   console.log(response.data);
    //   const videosOnLoad = response.data.slice(1, 9);
    //   this.setState({ videosGroup: videosOnLoad });
    // });
  }

  render() {
    // console.log(this.props);

    return (
      <div className="App">
        <Main
          changeVideo={this.changeVideo}
          videos={this.state.video}
          videosGroup={this.state.videosGroup}
        />
      </div>
    );
  }
}

export default VideoDetailsPage;
