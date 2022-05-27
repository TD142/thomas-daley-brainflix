import "./VideoPlayer.scss";

export const VideoPlayer = (props) => {
  const commentsLength = props.video.comments;
  // console.log(commentsLength.length);
  console.log(props.video.image);
  return (
    <section className="video-player">
      <div className="video-player__outer-wrapper">
        <div className="video-player__outer-container">
          <video
            // width="50%"
            // height="400"
            controls
            className="video-player__image"
            poster={props.video.image}
            src=""
          ></video>
        </div>
      </div>
    </section>
  );
};
