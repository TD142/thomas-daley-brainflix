import "./VideoPlayer.scss";

export const VideoPlayer = ({ video }) => {
  return (
    <section className="video-player">
      <div className="video-player__outer-wrapper">
        <div className="video-player__outer-container">
          <video
            controls
            className="video-player__image"
            poster={video.image}
            src=""
          ></video>
        </div>
      </div>
    </section>
  );
};
