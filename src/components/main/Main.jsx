import { render } from "@testing-library/react";
import React from "react";
import { Comments } from "../Comments/Comments";
import { Form } from "../Form/Form";
import { Video } from "../video/video";
import { Aside } from "../aside/Aside";
import { VideoPlayer } from "../videoPlayer/VideoPlayer";
import "./Main.scss";

export const Main = (props) => {
  return (
    <div>
      <hero>
        <VideoPlayer video={props.videos} />
      </hero>
      <main className="main">
        <div>
          <Video video={props.videos} />
          <Form />
          <Comments video={props.videos.comments} />
        </div>
        <aside>
          <h3 className="aside__title">NEXT VIDEO</h3>
          <Aside changeVideo={props.changeVideo} videos={props.videosGroup} />
        </aside>
      </main>
    </div>
  );
};
