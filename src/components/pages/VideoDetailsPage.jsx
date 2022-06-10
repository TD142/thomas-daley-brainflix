import { Main } from "../main/Main";
import { API_URL } from "../../data/Api";
import axios from "axios";

import React, { useState, useEffect } from "react";

import { defaultVideoId } from "../../data/Api";
import "./VideoDetailsPage.scss";

const VideoDetailsPage = (props) => {
  const [selectedVideo, setselectedVideo] = useState(null);
  const [videosGroup, setvideosGroup] = useState(null);

  //**  two functions for retrieving API data. First one sets the homepage video + aside videos.

  const getSelectedVideo = (videoID) => axios.get(`${API_URL}${videoID}`);
  const getAllVideos = () => axios.get(`${API_URL}`);

  const populateHomeState = async () => {
    const allVideos = await getAllVideos();
    const singleVideo = await getSelectedVideo(allVideos.data[0].id);
    const videosGroup = allVideos.data;
    const selectedVideo = singleVideo.data;

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

    setselectedVideo(selectedVideo);
    setvideosGroup(videosGroup);
  };

  useEffect(() => {
    if (props.match.path == "/") {
      populateHomeState();
      window.scrollTo(0, 0);
      return;
    }

    populateIdState();
    window.scrollTo(0, 0);
  }, [props.match.params.videoId, props.match.path]);

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
        .post(`${API_URL}${defaultVideoId}/comments`, submitComment, config)
        .then((response) => {
          populateHomeState();
        });
      clearComment.value = "";
    } else {
      axios
        .post(`${API_URL}${videoId}/comments`, submitComment, config)
        .then((response) => {
          populateIdState();
        });

      clearComment.value = "";
    }
  };

  // ** onclick event passes up video comment id and pairs this with match paramater to target video for deletion.

  const deleteHandler = (commentId) => {
    console.log(commentId);
    const videoId = props.match.params.videoId;

    if (props.match.path == "/") {
      axios
        .delete(`${API_URL}${defaultVideoId}/comments/${commentId}`)
        .then((response) => {
          populateHomeState();
        });
    } else {
      axios
        .delete(`${API_URL}${videoId}/comments/${commentId}`)
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
