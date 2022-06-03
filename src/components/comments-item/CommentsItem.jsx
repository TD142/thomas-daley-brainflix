import "./CommentsItem.scss";

export const CommentsItem = ({ time, name, commentEntry, deleteHandler }) => {
  const timeStamp = new Date(time).toLocaleString().split(",")[0];

  return (
    <article className="comments__container">
      <div className="comments__image"></div>
      <div className="comments__outer-wrapper">
        <div className="comments__wrapper">
          <p className="comments__text">{name}</p>
          <p className="comments__item">{timeStamp}</p>
        </div>
        <div className="comments__inner-wrapper">
          <p className="comments__secondary-text">{commentEntry}</p>
          <button onClick={deleteHandler} className="comments__button">
            delete comment
          </button>
        </div>
      </div>
    </article>
  );
};
