import { render } from "@testing-library/react";
import React from "react";
import { Comments } from "../Comments/Comments";
import { Form } from "../Form/Form";
import { Video } from "../video/video";

export const Main = (props) => {
  console.log(props.videos.image);
  return (
    <div>
      <Comments />
      <Video image={props.videos.image} />
      <Form />
    </div>
  );
};
