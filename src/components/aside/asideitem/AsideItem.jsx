import "./AsideItem.scss";

export const AsideItem = (props) => {
  return (
    <article>
      <div onClick={props.clickFunction} className="aside__container">
        <img className="aside__image" src={props.image} alt="" />
        <div className="aside__inner-container">
          <p className="aside__text">{props.title}</p>
          <p className="aside__secondary-text">{props.channel}</p>
        </div>
      </div>
    </article>
  );
};
