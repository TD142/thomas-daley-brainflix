import "./AsideItem.scss";

export const AsideItem = ({ clickFunction, image, title, channel }) => {
  return (
    <article>
      <div onClick={clickFunction} className="aside__container">
        <div>
          <img className="aside__image" src={image} alt="" />
        </div>
        <div className="aside__inner-container">
          <p className="aside__text">{title}</p>
          <p className="aside__secondary-text">{channel}</p>
        </div>
      </div>
    </article>
  );
};
