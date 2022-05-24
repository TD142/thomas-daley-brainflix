import "./Commentsitem.scss";

export const CommentsItem = (props) => {
  console.log(props);
  return (
    <article className="comments__container">
      <div className="comments__image"></div>
      <div className="comments__outer-wrapper">
        <div className="comments__wrapper">
          <p className="comments__text">{props.name}</p>
          <p className="comments__item">{props.time}</p>
        </div>
        <p className="comments__secondary-text">{props.commentEntry}</p>
      </div>
    </article>
  );
};
