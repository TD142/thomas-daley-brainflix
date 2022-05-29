import "./CommentsItem.scss";

export const CommentsItem = ({ time, name, commentEntry }) => {
  const timeStamp = new Date(time).toLocaleString().split(",")[0];

  return (
    <article className="comments__container">
      <div className="comments__image"></div>
      <div className="comments__outer-wrapper">
        <div className="comments__wrapper">
          <p className="comments__text">{name}</p>
          <p className="comments__item">{timeStamp}</p>
        </div>
        <p className="comments__secondary-text">{commentEntry}</p>
      </div>
    </article>
  );
};
