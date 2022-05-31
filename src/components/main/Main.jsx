import React from "react";
import { Comments } from "../Comments/Comments";
import { Form } from "../Form/Form";
import { Video } from "../video/video";
import { Aside } from "../aside/Aside";
import { VideoPlayer } from "../video-player/VideoPlayer";
import "./Main.scss";

export const Main = ({ selectedVideo, videosGroup, changeVideo }) => {
  // console.log(selectedVideo);
  return (
    <div>
      <VideoPlayer video={selectedVideo} />

      <main className="main">
        <div className="main__wrapper">
          <Video video={selectedVideo} />
          <Form />

          <Comments video={selectedVideo.comments} />
        </div>
        <aside className="aside">
          <h3 className="aside__title">NEXT VIDEOS</h3>
          <Aside changeVideo={changeVideo} videosGroup={videosGroup} />
        </aside>
      </main>
    </div>
  );
};
