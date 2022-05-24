import "./video.scss";
import Views from "../../assets/images/Icons/views.svg";
import Likes from "../../assets/images/Icons/likes.svg";

export const Video = (props) => {
  console.log(props.video.image);

  return (
    <section className="video">
      <img className="video__image" src={props.video.image} />;
      <h1 className="video__title">{props.video.title}</h1>
      <div className="video__container">
        <div>
          <p>By {props.video.channel}</p>
          <p>{props.video.timestamp}</p>
        </div>
        <div>
          <img src={Views} alt="views image" />
          <p>{props.video.views}</p>
          <img src={Likes} alt="likes image" />
          <p>{props.video.likes}</p>
        </div>
      </div>
    </section>
  );
};
