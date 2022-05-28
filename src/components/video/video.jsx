import "./video.scss";
import Views from "../../assets/images/Icons/views.svg";
import Likes from "../../assets/images/Icons/likes.svg";

export const Video = (props) => {
  const commentsLength = props.video.comments;
  // console.log(commentsLength.length);
  const time = props.video.timestamp;

  const timeStamp = new Date(time).toLocaleString().split(",")[0];

  console.log(props.video.image);
  return (
    <section className="video">
      <h1 className="video__title">{props.video.title}</h1>
      <div className="video__container">
        <div className="video__wrapper">
          <p className="video__subtitle">By {props.video.channel}</p>
          <p className="video__copy">{timeStamp}</p>
        </div>
        <div className="video__wrapper">
          <div className="video__inner-container video__inner-container--margin">
            <img
              className="video__secondary-image"
              src={Views}
              alt="views image"
            />
            <p className="video__copy">{props.video.views}</p>
          </div>
          <div className="video__inner-container">
            <img
              className="video__secondary-image video__secondary-image--margin"
              src={Likes}
              alt="likes image"
            />
            <p className="video__copy video__copy--margin">
              {props.video.likes}
            </p>
          </div>
        </div>
      </div>
      <article className="video__article">
        <p className="video__text">{props.video.description}</p>
        <p className="video__subtitle video__subtitle--margin">
          {commentsLength.length} Comments
        </p>
      </article>
    </section>
  );
};
