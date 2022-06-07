import { Main } from "../main/Main";
import { API_URL } from "../../data/Api";
import { API_KEY } from "../../data/Api";
import axios from "axios";

import React, { useState, useEffect } from "react";

import { defaultVideoId } from "../../data/Api";
import "./VideoDetailsPage.scss";

const VideoDetailsPage = (props) => {
  // state = {
  //   selectedVideo: null,
  //   videosGroup: null,
  // };

  const [selectedVideo, setselectedVideo] = useState(null);
  const [videosGroup, setvideosGroup] = useState(null);

  //**  two functions for retrieving API data. First one sets the homepage video + aside videos.

  const getSelectedVideo = (videoID) =>
    axios.get(`${API_URL}${videoID}${API_KEY}`);
  const getAllVideos = () => axios.get(`${API_URL}${API_KEY}`);

  const populateHomeState = async () => {
    const allVideos = await getAllVideos();
    const singleVideo = await getSelectedVideo(allVideos.data[0].id);
    const videosGroup = allVideos.data;
    const selectedVideo = singleVideo.data;

    // this.setState({
    //   selectedVideo: selectedVideo,
    //   videosGroup: videosGroup,
    // });

    setselectedVideo(selectedVideo);
    setvideosGroup(videosGroup);
  };

  // this function sets paramater selected videos.

  const populateIdState = async () => {
    const videoId = props.match.params.videoId;

    const allVideos = await getAllVideos();
    const singleVideo = await getSelectedVideo(videoId);
    const videosGroup = allVideos.data;
    const selectedVideo = singleVideo.data;

    // this.setState({
    //   selectedVideo: selectedVideo,
    //   videosGroup: videosGroup,
    // });

    setselectedVideo(selectedVideo);
    setvideosGroup(videosGroup);
  };

  // componentDidMount() {
  //   if (this.props.match.path === "/") {
  //     populateHomeState();
  //   } else {
  //     populateIdState();
  //   }
  // }

  // useEffect(() => {
  //   if (props.match.path === "/") {
  //     populateHomeState();
  //   } else {
  //     populateIdState();
  //   }
  // }, []);

  useEffect(() => {
    if (props.match.path == "/") {
      populateHomeState();
      window.scrollTo(0, 0);
      return;
    }

    populateIdState();
    window.scrollTo(0, 0);
  }, [props.match.params.videoId, props.match.path]);

  // componentDidUpdate(prevProps) {
  //   // sets default page to always be home video when clicking brainflix logo.

  //   if (this.props.match.path == "/" && prevProps.match.path !== "/") {
  //     this.populateHomeState();

  //     window.scrollTo(0, 0);
  //   }

  //   // compares previous video param to current selected one, changing state to selected video.

  //   const videoId = this.props.match.params.videoId;

  //   if (prevProps.match.params.videoId !== videoId) {
  //     this.populateIdState();

  //     window.scrollTo(0, 0);
  //   }
  // }

  // ** form submit event adding comment to api.

  const onSubmitHandler = (event) => {
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

    const videoId = props.match.params.videoId;

    if (props.match.path == "/") {
      axios
        .post(
          `${API_URL}${defaultVideoId}/comments/${API_KEY}`,
          submitComment,
          config
        )
        .then((response) => {
          populateHomeState();
        });
      clearComment.value = "";
    } else {
      axios
        .post(`${API_URL}${videoId}/comments/${API_KEY}`, submitComment, config)
        .then((response) => {
          populateIdState();
        });

      clearComment.value = "";
    }
  };

  // ** onclick event passes up video comment id and pairs this with match paramater to target video for deletion.

  const deleteHandler = (commentId) => {
    const videoId = props.match.params.videoId;

    if (props.match.path == "/") {
      axios
        .delete(`${API_URL}${defaultVideoId}/comments/${commentId}${API_KEY}`)
        .then((response) => {
          populateHomeState();
        });
    } else {
      axios
        .delete(`${API_URL}${videoId}/comments/${commentId}${API_KEY}`)
        .then((response) => {
          populateIdState();
        });
    }
  };

  if (!selectedVideo) {
    return <p className="loading">Loading...</p>;
  }
  return (
    <div className="App">
      <Main
        onSubmitHandler={onSubmitHandler}
        selectedVideo={selectedVideo}
        videosGroup={videosGroup}
        videoId={selectedVideo.id}
        deleteHandler={deleteHandler}
      />
    </div>
  );
};

export default VideoDetailsPage;
