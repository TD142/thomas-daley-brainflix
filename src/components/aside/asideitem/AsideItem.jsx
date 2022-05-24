import "./AsideItem.scss";

export const AsideItem = (props) => {
  console.log(props);
  return (
    <aside>
      <div className="aside__container">
        <img className="aside__image" src={props.image} alt="" />
        <div>
          <p className="comments__text">{props.title}</p>
          <p className="comments__secondary-text">{props.channel}</p>
        </div>
      </div>
    </aside>
  );
};
