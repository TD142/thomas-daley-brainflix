import "../../components/video/video.scss";
// import Views from "../../assets/images/Icons/views.svg";
// import Likes from "../../assets/images/Icons/likes.svg";

export const VideoPlayer = (props) => {
  const commentsLength = props.video.comments;
  // console.log(commentsLength.length);
  console.log(props.video.image);
  return (
    <section className="video">
      <div className="video__outer-wrapper">
        <div className="video__outer-container">
          <video
            // width="50%"
            // height="400"
            controls
            className="video__player"
            poster={props.video.image}
            src=""
          ></video>
        </div>
      </div>
    </section>
  );
};
