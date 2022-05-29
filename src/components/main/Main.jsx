import React from "react";
import { Comments } from "../Comments/Comments";
import { Form } from "../Form/Form";
import { Video } from "../video/video";
import { Aside } from "../aside/Aside";
import { VideoPlayer } from "../video-player/VideoPlayer";
import "./Main.scss";

export const Main = ({ videos, videosGroup, changeVideo }) => {
  return (
    <div>
      <VideoPlayer video={videos} />

      <main className="main">
        <div className="main__wrapper">
          <Video video={videos} />
          <Form />

          <Comments video={videos.comments} />
        </div>
        <aside className="aside">
          <h3 className="aside__title">NEXT VIDEOS</h3>
          <Aside changeVideo={changeVideo} videosGroup={videosGroup} />
        </aside>
      </main>
    </div>
  );
};
