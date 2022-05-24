import "./video.scss";

export const Video = (props) => {
  console.log(props.image);

  return (
    <section className="video">
      <img className="video__image" src={props.image} />;
    </section>
  );
};
