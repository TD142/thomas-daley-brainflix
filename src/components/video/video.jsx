import "./video.scss";
import Views from "../../assets/images/Icons/views.svg";
import Likes from "../../assets/images/Icons/likes.svg";

export const Video = (props) => {
  console.log(props.video);
  const commentsLength = props.video.comments;
  // console.log(commentsLength.length);
  return (
    <section className="video">
      <img className="video__image" src={props.video.image} />
      <h1 className="video__title">{props.video.title}</h1>
      <div className="video__container">
        <div>
          <p className="video__subtitle">By {props.video.channel}</p>
          <p className="video__copy">{props.video.timestamp}</p>
        </div>
        <div>
          <div className="video__inner-container">
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
        <p className="video__subtitle">{commentsLength.length} Comments</p>
      </article>
    </section>
  );
};
