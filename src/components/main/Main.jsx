import React from "react";
import { Comments } from "../Comments/Comments";
import { Form } from "../Form/Form";
import { Video } from "../video/video";
import { Aside } from "../aside/Aside";
import { VideoPlayer } from "../video-player/VideoPlayer";
import "./Main.scss";

export const Main = ({
  onSubmitHandler,
  selectedVideo,
  videosGroup,
  deleteHandler,
  videoId,
  handleCommentInputChange,
  formValues,
}) => {
  return (
    <div>
      <VideoPlayer video={selectedVideo} />

      <main className="main">
        <div className="main__wrapper">
          <Video video={selectedVideo} />
          <Form
            onSubmitHandler={onSubmitHandler}
            handleCommentInputChange={handleCommentInputChange}
            formValues={formValues}
          />

          <Comments
            deleteHandler={deleteHandler}
            comments={selectedVideo.comments}
          />
        </div>
        <aside className="aside">
          <h3 className="aside__title">NEXT VIDEOS</h3>
          <Aside videoId={videoId} videosGroup={videosGroup} />
        </aside>
      </main>
    </div>
  );
};
