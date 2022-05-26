import { render } from "@testing-library/react";
import React from "react";
import { Comments } from "../Comments/Comments";
import { Form } from "../Form/Form";
import { Video } from "../video/video";
import { Aside } from "../aside/Aside";

export const Main = (props) => {
  return (
    <div>
      <Video video={props.videos} />
      <Form />
      <Comments video={props.videos.comments} />
      <Aside changeVideo={props.changeVideo} videos={props.videosGroup} />
    </div>
  );
};
